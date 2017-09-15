	package com.gms.web.member;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;

@Component
public interface MemberService {
	 /*int add(MemberDTO member)*/
	public int add(Map<?,?> map);
	public List<?> list(CommandDTO cmd);
	public List<?> findByName(CommandDTO cmd);
	public StudentDTO findById(CommandDTO cmd);
	public String count();
	public int modify(MemberDTO bean);
	public int remove(CommandDTO cmd);
	public Map<String,Object> login(CommandDTO cmd);
}
