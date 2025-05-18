package appSoft.project.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import appSoft.project.model.Customer;
import appSoft.project.model.User;
import appSoft.project.model.Vehicle;
import appSoft.project.model.service.CustomerService;
import appSoft.project.model.service.VehicleService;
import jakarta.servlet.http.HttpSession;

@Controller
public class BookingListController {
	@Autowired
	private CustomerService customerService;
	@Autowired
	private VehicleService vehicleService;
	
	@GetMapping("/bookingList")
	private String getList( HttpSession session) {
		User u = (User) session.getAttribute("validuser");
		session.setAttribute("cList", customerService.getByEmail(u.getEmail()));
		return "UserBookings";
	}
	@GetMapping("/deleteCustomer")
	private String deleteBooking(@RequestParam int cId) {
		customerService.deleteCustomerById(cId);
		return"redirect:/bookingList";
	}
	@GetMapping("/editBooking")
	private String editVehicle(@RequestParam int cId, Model model) {
		model.addAttribute("vModel",customerService.getCustomerById(cId));
		Customer customer = customerService.getCustomerById(cId);
		model.addAttribute("vList", vehicleService.getAllVehicle() );
		model.addAttribute("vehicle", customer.getVehicle());
		return"EditBooking";
	}
	@PostMapping("/editBooking")
	private String editBooking(@ModelAttribute Customer customer) {
		
customerService.addCustomer(customer);
return"redirect:/bookingList";
	}
	
}
