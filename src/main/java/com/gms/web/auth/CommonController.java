package com.gms.web.auth;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.gms.web.member.MemberController;

@Controller
@RequestMapping("/common")
public class CommonController {
	private static final Logger logger = LoggerFactory.getLogger(CommonController.class);
	@RequestMapping("/path/{directory}/{page}")
	public String mainAdd(Model model,@PathVariable String page,
			@PathVariable String directory) {
		logger.info("넘어온디렉토리 : "+directory);
		logger.info("넘어온페이지 : "+page);
		return String.format("auth:%s/%s.tiles",directory, page);
	}
	
	
}
