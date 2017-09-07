package com.gms.web.grade;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/grade")
public class GradeController {
	
	private static final Logger logger = LoggerFactory.getLogger(GradeController.class);
	@RequestMapping("/add")
	public String gradeWrite(Model model) {
		return "public:grade/grade_add.tiles";
	}
	@RequestMapping("/list")
	public String gradeList(Model model) {
		return "public:grade/grade_list.tiles";
	}
	@RequestMapping("/detail")
	public String gradeDetail(Model model) {
		return "public:grade/grade_detail.tiles";
	}
	@RequestMapping("/delete")
	public String gradeDelete(Model model) {
		return "public:grade/grade_delete.tiles";
	}
}
