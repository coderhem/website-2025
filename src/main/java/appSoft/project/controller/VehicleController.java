package appSoft.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import appSoft.project.model.Vehicle;
import appSoft.project.model.service.VehicleService;

@Controller
public class VehicleController {
	@Autowired
	private VehicleService vehicleService;
	@PostMapping("/vehicle")
	private String postVehicle(@ModelAttribute Vehicle vehicle) {
		vehicleService.addVehicle(vehicle);
		return "redirect:/admin";
		}
	@GetMapping("/deleteVehicle")
	private String deleteVehicle(@RequestParam int vId) {
		vehicleService.deleteVehicleById(vId);
		return"redirect:/admin";
	}
	@GetMapping("/editVehicle")
	private String editVehicle(@RequestParam int vId, Model model) {
		model.addAttribute("vModel",vehicleService.getVehicleById(vId));
		return"EditVehicle";
	}
	@PostMapping("/editVehicle")
	private String postEditVehicle(@ModelAttribute Vehicle vehicle) {
		vehicleService.addVehicle(vehicle);
		return "redirect:/admin";
		}
}
