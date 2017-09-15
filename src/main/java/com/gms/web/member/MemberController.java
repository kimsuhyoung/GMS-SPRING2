package com.gms.web.member;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.tiles.request.Request;
import org.aspectj.internal.lang.annotation.ajcDeclareAnnotation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.command.CommandDTO;
import com.gms.web.complex.PathFactory;
import com.gms.web.grade.MajorDTO;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.proxy.BlockHandler;
import com.gms.web.proxy.PageHandler;
import com.gms.web.proxy.PageProxy;



@Controller
@SessionAttributes("student")
@RequestMapping({"/member","/student"})
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired MemberService service;
	@Autowired CommandDTO cmd;
	@Autowired BlockHandler blockHandler;
	@Autowired PageHandler pageHandler;
	@Autowired PageProxy pxy;
	@Autowired PathFactory path;
	@Autowired MemberDTO member;
	@Autowired MajorDTO major;
	
/*	@RequestMapping(value="/add",method=RequestMethod.POST)
	public String insertStudent(@ModelAttribute MemberDTO member,@RequestParam("subject") List<String> list) {
		logger.info("memberAdd {}","진입");
		logger.info("등록 아이디 : {}",member.getId());
		logger.info("등록 이름 : {}",member.getName());
		logger.info("등록 패스워드 : {}",member.getPassword());
		System.out.println("등록 과목 : {}"+list);
		MajorDTO mj=null;
		List<MajorDTO> paramList=new ArrayList<>();
		Map<String,Object> paramMap=new HashMap<>();
		paramMap.put("member",member);
		for(String m : list) {
		mj=new MajorDTO();
		major.setMajorId(String.valueOf((int)(Math.random()*1000)+1000));
		major.setId(member.getId());
		major.setTitle(m);
		major.setSubjId(m);
		paramList.add(mj);
		};
		System.out.println(paramList);
		paramMap.put("major", mj);
		paramMap.put("list", list);
		System.out.println("major : "+mj);
		System.out.println("member : "+member);
		paramMap.put("list", paramList);
		service.add(paramMap);
	
		return "redirect:/member/list/1";
	}*/
@RequestMapping(value="/add",method=RequestMethod.POST)
	public String insertStudent(@ModelAttribute MemberDTO member,@RequestParam("subject") List<String> list) {
		logger.info("memberAdd {}","진입");
		logger.info("등록 아이디 : {}",member.getId());
		logger.info("등록 이름 : {}",member.getName());
		logger.info("등록 패스워드 : {}",member.getPassword());
		System.out.println("등록 과목 : {}"+list);
		List<MajorDTO> paramList=new ArrayList<>();
		Map<String,Object> map=new HashMap<>();
		map.put("member", member);
		MajorDTO mj=null;
		for(String m : list) {
		mj=new MajorDTO();
		mj.setMajorId(String.valueOf((int)(Math.random()*1000)+1000));
		mj.setTitle(m);
		mj.setId(member.getId());
		mj.setSubjId(m);
		paramList.add(mj);
		};
		map.put("list", paramList);
		System.out.println("@@@@ :"+paramList);
		service.add(map);
		return "redirect:/member/list/1";
	}
	@RequestMapping("/list/{pno}")
	@SuppressWarnings("unchecked")
	public String memberList(Model model,@PathVariable int pno) {
		logger.info("memberList{}","진입");
	      pxy.setPageSize(5);
		  pxy.setBlockSize(5);
	      pxy.setPageNumber(pno);
	      int count = Integer.parseInt(service.count());
	      pxy.setTheNumberOfRows(count);
	      int[] result=new int[6];
	      int theNumberOfPages=0,startPage=0,endPage=0;
	      
	      theNumberOfPages=(pxy.getPageNumber() % pxy.getPageSize()) == 0 ?
	            pxy.getTheNumberOfRows() / pxy.getPageSize() :
	               pxy.getTheNumberOfRows() / pxy.getPageSize() +1 ;
	      startPage = pxy.getPageNumber() -((pxy.getPageNumber()-1) % pxy.getBlockSize());
	      endPage = (startPage + pxy.getBlockSize() -1 <=  theNumberOfPages) ?
	            startPage + pxy.getBlockSize() -1 : theNumberOfPages;
	         
	            result[0]=pxy.getPageNumber();
	            result[1]=theNumberOfPages;
	            result[2]=startPage;
	            result[3]=endPage;
	            result[4]=(startPage-(theNumberOfPages/pxy.getBlockSize())>0)?1:0;
	            result[5]=startPage+pxy.getBlockSize();
	         if(pxy.getPageNumber() <= pxy.getTheNumberOfRows() / pxy.getPageSize() +1) {
	            if(pxy.getPageNumber() == 1) {
	               cmd.setStartRow("1");
	               cmd.setEndRow(String.valueOf(pxy.getPageSize()));
	            }else {
	            cmd.setStartRow(String.valueOf((pxy.getPageNumber() -1) * pxy.getPageSize() +1));              
	            cmd.setEndRow(String.valueOf(pxy.getPageNumber() * pxy.getPageSize()));
	            
	            }
	         }
		System.out.println("PageNumber : "+result[0]+"\n"
							+"theNumberOfPages : "+result[1]+"\n"
							+"startPage : "+result[2]+"\n"
							+"endPage : "+result[3]+"\n"
							+"result 4 :"+result[4]+"\n"
							+"result 5 :"+result[5]);
		List<StudentDTO> list = (List<StudentDTO>) service.list(cmd);
		pxy.execute(model, result, list);
		System.out.println("리스트 결과 : "+list);
		return "auth:member/member_list.tiles";
	}
	
	@RequestMapping("/search/{search}")
	public String search(Model model,@PathVariable String search) {
		System.out.println("search: 진입");
		cmd.setSearch(search);
		List<StudentDTO> searchList = (List<StudentDTO>) service.findByName(cmd);
		model.addAttribute("list",searchList);
		model.addAttribute("count", service.findByName(cmd).size());
		System.out.println("!!!!!!!!!"+searchList);
		return "auth:member/member_list.tiles";
	}
	
	@RequestMapping("/detail/{id}")
	public String detail(@PathVariable String id,Model model) {
		cmd.setId(id);
		model.addAttribute("student", service.findById(cmd));
		System.out.println("넘어온 아이디 : "+id);
		model.addAttribute("id",cmd.getId());
		return "auth:member/member_detail.tiles";
	}
	
	@RequestMapping("/delete/{id}")
	public String mainDelete(Model model,@PathVariable String id) {
		logger.info("delete {}","진입");
		cmd.setId(id);
		System.out.println("삭제할 아이디 : "+id);
		service.remove(cmd);
		model.addAttribute("list", service.list(cmd));
		model.addAttribute("id", cmd.getId());
		return "redirect:/member/list/1";//컨트롤러 상의 경로를 잡아주어야 한다.
	}
	@RequestMapping(value="/update",method=RequestMethod.POST)
	public String update(@ModelAttribute MemberDTO member,Model model) {
		logger.info("member update{}","진입");
		service.modify(member);
		System.out.println("넘어온 이메일 : )"+member.getEmail());
		System.out.println("넘어온 폰번호 : )"+member.getPhone());
		
		return "redirect:/member/detail/"+member.getId();
	}

}
