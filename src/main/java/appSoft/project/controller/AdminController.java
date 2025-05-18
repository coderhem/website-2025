package appSoft.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import appSoft.project.model.service.BookingService;
import appSoft.project.model.service.CustomerService;
import appSoft.project.model.service.VehicleService;

@Controller
public class AdminController {
	@Autowired
	private VehicleService vehicleService;
	@Autowired 
	private CustomerService customerService;
	@Autowired
	private BookingService bookingService;
	
	@GetMapping("/admin")
	private String getAdmin(Model model) {
		model.addAttribute("cList", customerService.getAllCustomer() );
		model.addAttribute("vList", vehicleService.getAllVehicle());
		model.addAttribute("bList", bookingService.getAllBooking());
		return "admin-dashboard";
	}
}
