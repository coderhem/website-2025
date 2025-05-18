package appSoft.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import appSoft.project.utils.MailUtils;

@Controller
public class MailController {
	@Autowired
	private MailUtils mailUtils;
	@PostMapping("/accept")
	public String acceptpostContact(@RequestParam String toEmail,@RequestParam String subject,@RequestParam String message) {
		mailUtils.sendEmail(toEmail, subject, message);
		return "ContactForm";
	}
	@PostMapping("/reject")
	public String rejectpostContact(@RequestParam String toEmail,@RequestParam String subject,@RequestParam String message) {
		mailUtils.sendEmail(toEmail, subject, message);
		return "ContactForm";
	}
}
