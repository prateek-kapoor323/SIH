package com.skill.India.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

	@RequestMapping("/login")
	
	public String login()
	{
		return "Welcome to Login Page of Skill India App.";
	}
	
	//Enter method for login Controller here
}
