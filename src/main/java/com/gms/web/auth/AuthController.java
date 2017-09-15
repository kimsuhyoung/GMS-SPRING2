package com.gms.web.auth;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.apache.coyote.http11.Http11AprProcessor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.MemberService;


@Controller
@SessionAttributes("user")
@RequestMapping("/auth")//컨트롤러를 결정
public class AuthController {
	@Autowired CommandDTO cmd;
	@Autowired MemberService service;
	@Autowired MemberDTO member;
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	@RequestMapping("/login_view")//메서드를 결정
	public String goLogin(Model model) {
		logger.info("Welcome Login! The client model is {}.", model);//logger.info는 시스아웃같은 역할을한다.
		return "public:common/login.tiles";
	}

	@RequestMapping(value="/login",method=RequestMethod.POST)
	public String login(@RequestParam("id") String id,@RequestParam("pass") String pass, Model model) {
		cmd.setId(id);
		cmd.setPass(pass);
		
		Map<String,Object> map=service.login(cmd);
		if(map.get("result").equals("success")) {
			model.addAttribute("user", map.get("user"));
		}
		model.addAttribute("result", map.get("result"));		
		return String.valueOf(map.get("page"));
	}
	@RequestMapping("/main")
	public String home() {
		return "auth:common/main.tiles";
	}
	
	
}