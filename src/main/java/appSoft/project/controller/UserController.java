package appSoft.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import appSoft.project.model.User;
import appSoft.project.model.service.UserService;
import appSoft.project.model.service.VehicleService;
import jakarta.servlet.http.HttpSession;

@Controller
public class UserController {
	@Autowired
	private UserService userService;

	@GetMapping("/login")
	private String login() {
		return "login";
	}

	@PostMapping("/login")
	private String postLogin(@ModelAttribute User user, HttpSession session, Model model) {
		User u = userService.loginUser(user.getEmail(), user.getPassword());
		if (user.getEmail().equals("admin@gmail.com") && user.getPassword().equals("iamadmin")) {
			return "redirect:/admin";
		} else if (u != null) {
			session.setAttribute("validuser", u);
			session.setMaxInactiveInterval(10 * 60);
			return "redirect:/home";
		} else {
			model.addAttribute("loginMessage", "*Email and password doesnot match!!!");
			return "login";
		}
	}

	@GetMapping("/register")
	private String register() {
		return "registration";
	}

	@PostMapping("/register")
	private String postRegister(@ModelAttribute User user, Model model) {
		User u = userService.doesUserExist(user.getEmail());
		if (u != null) {
			model.addAttribute("signUpMessage", "*email already exists!!!");
			return "registration";
		} else if (!user.getPassword().equals(user.getConfirmPassword())) {
			model.addAttribute("passwordMismatch", "*password mismatch!!!");
			return "registration";
		} else {
			userService.addUser(user);
			return "login";
		}
	}
}
