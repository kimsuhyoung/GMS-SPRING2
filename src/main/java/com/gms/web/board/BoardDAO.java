package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gms.web.board.ArticleDTO;
@Repository
public interface BoardDAO {
	public String insert(ArticleDTO bean);
	public List<ArticleDTO> selectAll();
	public List<ArticleDTO> selectById(String id);
	public ArticleDTO selectBySeq(String seq);
	public String count();
	public String update(ArticleDTO bean);
	public String delete(String seq);
}
