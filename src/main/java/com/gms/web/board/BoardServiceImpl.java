package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Service;

import com.gms.web.board.BoardDAO;
import com.gms.web.board.ArticleDTO;

@Service
public class BoardServiceImpl implements BoardService {
public static BoardServiceImpl getInstance(){
	return new BoardServiceImpl();
}
private BoardServiceImpl() {
	// TODO Auto-generated constructor stub
}	
@Override
	public String write(ArticleDTO bean) {
		String result="";
		System.out.println("**"+result);
		return result.equals("1")?"성공":"실패";
	}

	@Override
	public List<ArticleDTO> list() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<ArticleDTO> findById(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ArticleDTO findBySeq(String seq) {
		ArticleDTO result = null;
		System.out.println(result.toString());
		return result;
	}

	@Override
	public String count() {
		return null;
	}

	@Override
	public String modify(ArticleDTO bean) {
		return null;
	}

	@Override
	public String remove(String seq) {
		// TODO Auto-generated method stub
		return null;
	}

}
