package com.gms.web.board;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/board")

public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	@RequestMapping("/write")
	public String boardWrite(Model model) {
		return "public:board/board_write.tiles";
	}
	@RequestMapping("/list")
	public String boardList(Model model) {
		return "public:board/board_list.tiles";
	}
	@RequestMapping("/detail")
	public String boardDetail(Model model) {
		return "public:board/board_detail.tiles";
	}
	@RequestMapping("/delete")
	public String boardDelete(Model model) {
		return "public:board/board_delete.tiles";
	}
}
