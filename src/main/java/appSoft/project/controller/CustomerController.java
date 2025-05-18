package appSoft.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestParam;

import appSoft.project.model.Booking;
import appSoft.project.model.Customer;
import appSoft.project.model.User;
import appSoft.project.model.Vehicle;
import appSoft.project.model.repository.VehicleRepository;
import appSoft.project.model.service.BookingService;
import appSoft.project.model.service.CustomerService;
import appSoft.project.model.service.VehicleService;
import appSoft.project.utils.MailUtils;
import jakarta.servlet.http.HttpSession;

@Controller
public class CustomerController {
	@Autowired
	private MailUtils mailUtils;
	@Autowired
	private VehicleService vehicleService;
	@Autowired
	private CustomerService customerService;
	@Autowired
	private BookingService bookingService;
	@Autowired
	private VehicleRepository vehicleRepository;

	@GetMapping("/bookingForm")
	private String getBooking(@RequestParam int vId, Model model, HttpSession session) {
		User u = (User) session.getAttribute("validuser");
		if (session.getAttribute("validuser") == null) {
			return "/login";
		} else {
			model.addAttribute("vModel", vehicleService.getVehicleById(vId));
			model.addAttribute("email", u.getEmail());
			return "booking";
		}
	}

	@PostMapping("/bookingForm")
	private String postbooking(@ModelAttribute Customer customer, @RequestParam int id) {
		Vehicle vehicle = vehicleService.getVehicleById(id);
		customer.setVehicle(List.of(vehicle));
		customerService.addCustomer(customer);
		return "redirect:/home";
	}

	@GetMapping("/acceptBooking")
	private String acceptBooking(@RequestParam int vId) {
		Customer customer = customerService.getCustomerById(vId);
		Booking booking = new Booking();
		booking.setStatus("Confirmed");
		booking.setCustomerName(customer.getFirstName() + " " + customer.getLastName());
		booking.setVehicleName(customer.getVehicle().get(0).getName());
		bookingService.addBooking(booking);
		mailUtils.sendEmail(customer.getEmail(), "Hemraj Travels", "Your Booking has been accepted.");
		customerService.deleteCustomerById(vId);
		return "redirect:/admin";
	}

	@GetMapping("/rejectBooking")
	private String rejectBooking(@RequestParam int vId) {
		Customer customer = customerService.getCustomerById(vId);
		mailUtils.sendEmail(customer.getEmail(), "Hemraj Travels", "Sorry! Your booking has been rejected.");
		customerService.deleteCustomerById(vId);
		return "redirect:/admin";
	}

	@GetMapping("/deleteBooking")
	private String deleteBooking(@RequestParam int bId) {
		bookingService.deleteBookingById(bId);
		return "redirect:/admin";
	}

	@PostMapping("/search")
	private String getSearch(Model model, @RequestParam String search) {

		List<Vehicle> vList = vehicleRepository.findAll(search);
		model.addAttribute("searchText", search);

		model.addAttribute("vList", vList);
		if (vList.isEmpty()) {
			model.addAttribute("empty", "Not Found");
			model.addAttribute("notFound", "Available Search Options: Car, Bus, Truck, Bike");
		}
		return "Search";
	}
}
