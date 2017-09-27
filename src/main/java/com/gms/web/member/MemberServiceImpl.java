package com.gms.web.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gms.web.auth.HomeController;
import com.gms.web.command.Command;
import com.gms.web.command.CommandDTO;
import com.gms.web.grade.GradeDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.grade.SubjectDTO;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.mapper.MemberMapper;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;

@Service
public class MemberServiceImpl implements MemberService{

	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	
	@Autowired MemberMapper mapper; //임플리먼츠가 없어서 AutoWired밖에 못쓴다.(memberMapper mapper=new Mapper() 과 같다)
	@Autowired MemberDTO member;
	@Autowired GradeMapper grade;
	@Autowired MajorDTO major;
	@Autowired Command cmd;
	
	@Override @Transactional
	public int add(Map<?,?> map) {
		System.out.println("member service 진입");
		int rs=0;
		member=(MemberDTO)map.get("member");
		mapper.insert(member);
		List<?>list=(List<?>)map.get("list");
		grade.insertMajor(list);
		System.out.println("member : "+member);
		System.out.println("list : "+list);
		return rs;
	};
/*		public int add(Map<?,?> map) {
		System.out.println("member service 진입");
		member=(MemberDTO)map.get("member");
		mapper.insert(member);
		System.out.println("넘어온 회원 정보:"+member.toString());
		@SuppressWarnings("unchecked")
		List<MajorDTO>list=(List<MajorDTO>)map.get("list");
		System.out.println("넘어온 아이디: "+member.getId());
		System.out.println("넘어온 수강과목: "+list);
		major=(MajorDTO)map.get("major");
		grade.insertMajor(list);
		
		System.out.println("넘어온 수강과목:"+list);
		
		int rs=0;
		System.out.println("서비스 RS :"+rs);
		return 0;
		}*/
	
	/*public int add(MemberDTO member) {
		System.out.println("member service 진입");
		System.out.println("넘어온 회원 정보:"+member.toString());
		int result =0;
		mapper.insert(member);
		grade.insertMajor(major);
		return result;
	}*/
	@Override
	public List<?> list(Command cmd) {
		return mapper.selectAll(cmd);
	}
	@Override
	public List<?> findByName(Command cmd) {
		System.out.println("findByName("+cmd.getSearch()+")");
		return mapper.selectByName(cmd);
	}

	@Override
	public StudentDTO findById(Command cmd) {
		return mapper.selectById(cmd);
	}

	@Override
	public String count() {
		logger.info("count id {}","entered");
		String count=mapper.count();
		logger.info("count is {}",count);
		return count;
	}

	@Override
	public int modify(MemberDTO bean) {		
		return mapper.update(bean);
	}

	@Override
	public int remove(Command cmd) {
		
		
		return mapper.delete(cmd);
	}
	@Override
	public Map<String,Object> login(Command cmd) {
		System.out.println("memberserviceimple LOGIN 진입!!!!");
		System.out.println("넘겨진 아이디와 비밀번호::"+cmd.getId()+"////"+cmd.getPass());
		Map<String,Object> map=new HashMap<>();
		
	    member = mapper.login(cmd);
	    String result="";
	    String page = "";
	      if(member!=null) {
	          if (cmd.getPass().equals(member.getPassword())) {
	        	  result="success";
	        	  map.put("user", member);
	              page = "auth:common/main.tiles";              
	          }
	          else {
	        	  result = "비밀번호가 틀립니다";
	        	  page = "public:common/login.tiles";
	          }
	       }else {
	    	   	 result = "아이디가 없습니다.";
	             page = "public:common/join.tiles";
	       }
		map.put("result", result);
		map.put("page", page);
		
		return map;
		
	}
}











