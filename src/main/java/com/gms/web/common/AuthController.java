package com.gms.web.common;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/auth")//컨트롤러를 결정
public class AuthController {
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	@RequestMapping("/login_view")//메서드를 결정
	public String goLogin(Model model) {
		logger.info("Welcome Login! The client model is {}.", model);//logger.info는 시스아웃같은 역할을한다.
		return "public:common/login.tiles";
	}

	@RequestMapping("/login")
	public String login() {
		return "public:common/main.tiles";
	}
	@RequestMapping("/main")
	public String home() {
		return "public:common/main.tiles";
	}
	
	
}