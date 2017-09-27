package com.gms.web.board;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.command.Command;
import com.gms.web.command.CommandDTO;
import com.gms.web.command.RespMap;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.mapper.MemberMapper;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;
import com.gms.web.service.IDeleteService;
import com.gms.web.service.IGetService;
import com.gms.web.service.IListService;
import com.gms.web.service.IPostService;
import com.gms.web.service.IPutService;
import com.sun.corba.se.impl.protocol.BootstrapServerRequestDispatcher;

@RestController
public class BoardController {
     @Autowired BoardMapper bmapper;
     @Autowired GradeMapper gmapper;
     @Autowired MemberMapper mmapper;
     @Autowired Command cmd;
     public @ResponseBody Map<?,?> post() {
    	 return null;
     }
     private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
     @RequestMapping("/list/{cate}")
     public @ResponseBody Map<?, ?> list(Model model,@PathVariable String cate) {//리턴은 스트링이 아니다.
           Map<String, Object> map=new HashMap<>();
           System.out.println("board/list 에 들어옴");
           IListService listService=null;
           IGetService countService=null;
           switch (cate) {
           case "articles":
                
              
                listService=(x)->{         
                           return bmapper.selectList(cmd);
                     };              
                countService=(x)->{
                	return bmapper.count(cmd);
                };
                System.out.println("board/article 에 들어옴");
                System.out.println(bmapper.selectList(cmd));
                RespMap r=(RespMap) countService.execute(cmd);
                map.put("count",r);//r.get??이런식으로 던져도 되는데 객체자체를 던지는게 낳다.
                map.put("list", listService.execute(cmd));                       
                map.put("result", "succes");
                System.out.println("sssss"+map.get("list"));
                break;
                
           case "grade":
        
        	   listService=(x)->{
        		 return gmapper.selectSome(cmd);  //디클러레이션만 하는것 디클러레이션 하는도중에 접근을 허용하지 않고 리턴된 값만 공유한다.
        	   };
        	   map.put("list",listService.execute(cmd));
        	   
                break;                
           default:
                break;
           }                                                        
        return map;
     }
     @RequestMapping("/get/{cate}/{id}")//{}안의 객체 이름은 패스베어러블 객체이름이랑 같아야한다.
     public @ResponseBody Map<?,?> get(Model model,@PathVariable String cate,@PathVariable String id) {
    	 Map<String,Object> map=new HashMap<>();
    	 IGetService detailService=null;
    	
    	 System.out.println("넘어온 ID : "+id);
    	 cmd.setSearch(id);
    	 detailService =(x)->{
    		 return bmapper.selectOne(cmd);
    	 };
    	 Article r=(Article) detailService.execute(cmd);
    	 map.put("test", "데이터 넘어감");
    	 map.put("detail",r);
    	 System.out.println("넘어온 디테일 : "+map.get("detail"));
    	 return map;
     }
     @RequestMapping(value="put/articles",method=RequestMethod.POST,consumes="application/json")
     public @ResponseBody Map<?,?> put(@RequestBody Article art) {
    	 System.out.println("업데이트에 들어옴");
    	 Map<String,Object> map=new HashMap<>();
    	 
    	 System.out.println("넘어온 정보 : "+art);
    	 IPutService update=null;
    
    	 System.out.println("asdsa : "+art);
  
    	 cmd.setId(String.valueOf(art.getArticleSeq()));
    	 cmd.setColumn(art.getTitle());
    	 cmd.setAction(art.getContent());

    	 update=(x)->{
    		 bmapper.update(cmd);
    	 };
    	 update.execute(cmd);
    	
    	 map.put("msg", "통신이 성공하였습니다");
    	
    	 return map;
     }
     @RequestMapping(value="/delete/articles/",method=RequestMethod.POST, consumes="application/json")
     public @ResponseBody Map<?,?> delete(@RequestBody Article art){
        System.out.println("딜리트 진입");
        IDeleteService deleteService=null;
        IGetService memberInfo=null;
        Map<String, Object>map = new HashMap<>();
        cmd.setSearch(art.getId());
        
        memberInfo=x->{
         return mmapper.selectById(cmd);
        };
        StudentDTO student=(StudentDTO) memberInfo.execute(cmd);
        System.out.println("뷰에서 넘어온 비번: "+art.getRegdate());
        System.out.println("디비에서 가져온 멤버 비번 : "+student.getPass());
       
        cmd.setSeq(String.valueOf(art.getArticleSeq()));
        String result="";
        if(art.getRegdate().equals(student.getPass())) {
           result="success";
           deleteService=x->{
              bmapper.delete(cmd);
           };
           deleteService.execute(cmd);
           }else{
              result="false";
           };
        map.put("result", result);
        return map;
     }
}
