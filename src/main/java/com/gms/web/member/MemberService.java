	package com.gms.web.member;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.gms.web.command.Command;
import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;

@Component
public interface MemberService {
	 /*int add(MemberDTO member)*/
	public int add(Map<?,?> map);
	public List<?> list(Command cmd);
	public List<?> findByName(Command cmd);
	public StudentDTO findById(Command cmd);
	public String count();
	public int modify(MemberDTO bean);
	public int remove(Command cmd);
	public Map<String,Object> login(Command cmd);
}
