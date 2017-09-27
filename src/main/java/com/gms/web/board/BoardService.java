package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Component;

import com.gms.web.board.Article;

@Component
public interface BoardService {
	public void post(Object o);
	public List<?> list(Object o);//리스트도 오브젝트로 타입을 줄수 있지만 컬렉션과 한개의 개체는 구분해야한다.
	public Object get(Object o);
	public void put(Object o);
	public void delete(Object o);
}
