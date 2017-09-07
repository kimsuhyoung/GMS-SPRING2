package com.gms.web.member;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/member")
public class MemberController {
	
	@RequestMapping("/add")
	public String mainadd(Model model) {
		return "public:member/member_add.tiles";
	}
	@RequestMapping("/list")
	public String mainList(Model model) {
		return "public:member/member_list.tiles";
	}
	@RequestMapping("/detail")
	public String mainDetail(Model model) {
		return "public:member/member_detail.tiles";
	}
	@RequestMapping("/delete")
	public String mainDelete(Model model) {
		return "public:member/member_delete.tiles";
	}
}
