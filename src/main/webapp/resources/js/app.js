/**
 * member javaScript
 */
var app=app || {};

 app.path=(function(){
	var init=function(ctx){
		app.session.init(ctx);
		onCreate(); 
	};
	var onCreate=function(){
		setContentView();
		location.href=ctx()+"/auth/login_view";
	};
	var setContentView=function(){
	};
	var ctx=function(){ 
		return app.session.getPath('ctx');
	};
	var js=function(){
		return app.session.getPath('js');
	};
	var img=function(){
		return app.session.getPath('img');
	};
	var css=function(){
		return app.session.getPath('css');
	};
	return {
		init : init,
		ctx : ctx,
		img : img,
		 js : js,
		css : css   //리턴값 (클로저)에 포함시키지 않으면 외부에서 접근이 불가능하다. 그래서 은닉화 해야할정보는 다른 객체에서 호출해서 사용하면 된다.
	}; 
})();

 app.session=(function(){
	var init=function(ctx){ 
		sessionStorage.setItem('ctx',ctx);
		sessionStorage.setItem('js',ctx+'/resources/js');
		sessionStorage.setItem('img',ctx+'/resources/img');
		sessionStorage.setItem('css',ctx+'/resources/css'); 
	};
	var getPath=function(x){
		return sessionStorage.getItem(x);
		
	};

	return {
		init : init,
		getPath : getPath
		
	}; 
})();

 app.main=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('.list-group-item a').eq(0).on('click',function(){
			app.controller.moveTo('member','member_add');
			/*location.href=app.path.ctx()+"/member/add";*/
		});
		$('.list-group-item a').eq(1).on('click',function(){
			alert('list 들어갈게요')
			app.member.list(1);
			/*location.href=app.path.ctx()+"/member/list";*/
		});
		$('.list-group-item a').eq(2).on('click',function(){
			app.controller.moveTo('member','member_detail');
			/*location.href=app.path.ctx()+"/member/detail";*/
			/*controller.detailStudent(prompt('조회Id'));*/
		});
		$('.list-group-item a').eq(3).on('click',function(){
			app.controller.deleteTarget(prompt('삭제할 ID를 입력하세요'),'member','list');
		});
		$('.list-group-item a').eq(4).on('click',function(){
			app.controller.moveTo('grade','grade_add');
		/*	location.href=app.path.ctx()+"/grade/add";*/
		});
		$('.list-group-item a').eq(5).on('click',function(){
			app.controller.moveTo('grade','grade_list');
			/*location.href=app.path.ctx()+"/grade/list";*/
			/*controller.list('member','member_list','1');*/
		});
		$('.list-group-item a').eq(6).on('click',function(){
			app.controller.moveTo('grade','grade_detail');
			/*location.href=app.path.ctx()+"/grade/detail";*/
			/*controller.detailStudent(prompt('조회Id'));*/
		});
		$('.list-group-item a').eq(7).on('click',function(){
			app.controller.deleteTarget(prompt('삭제할 성적을 가진 ID를 입력하세요'),'grade','grade_list');
			/*location.href=app.path.ctx()+"/grade/delete";*/
			 /*controller.deleteStudent();*/
		});
		$('.list-group-item a').eq(8).on('click',function(){
			app.controller.moveTo('board','board_write');
		/*	location.href=app.path.ctx()+"/board/write";*/
		});
		$('.list-group-item a').eq(9).on('click',function(){
			app.controller.moveTo('board','board_list');
			/*location.href=app.path.ctx()+"/board/list";*/
			/*controller.list('member','member_list','1');*/
		});
		$('.list-group-item a').eq(10).on('click',function(){
			app.controller.moveTo('board','board_detail');
			/*location.href=app.path.ctx()+"/board/detail";*/
			/*controller.detailStudent(prompt('조회Id'));*/
		});
		$('.list-group-item a').eq(11).on('click',function(){
			app.controller.deleteTarget(prompt('삭제할 게시글을 가진 ID를 입력하세요'),'board','board_list');
			 /*controller.deleteStudent();*/
		});
	};
	
	
app.auth=(function(){
	var init=function(){
		$('#loginBtn').on('click',function(){
			alert('로그인 버튼 click');
	    	if($('#input_id').val()===""){
	    		alert('ID 를 입력해 주세요');
	    		return false;
	    	}
	    	if($('#input_pass').val()===""){
	    		alert('PASS 를 입력해 주세요');
	    		return false;
	    	}
	    	$('#login_box').attr('action',app.path.ctx()+"/auth/login");
	    	$('#login_box').attr('method',"post");
	    	return true;
		}); /*function(){} 이 이벤트 핸들러가 된다.*/
	};	
 
	return {
		init : init //생성자는 항상 오픈해야 한다
	};
})();

	var setContentView=function(){
		var $u1=$("#main_ul_stu");
		var $u2=$("#main_ul_grade");
		var $u3=$("#main_ul_board");
		$u1.addClass("list-group");
		$u2.addClass("list-group");
		$u3.addClass("list-group");
		$('.list-group').children().addClass("list-group-item");
	};
	return {
		init : init
	};
})();

 app.navbar=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('.dropdown-menu a').eq(0).on('click',function(){
			alert('0');
			app.controller.moveTo('member','member_add');
			/*location.href=app.path.ctx()+"/member/add";*/
		});
		$('.dropdown-menu a').eq(1).on('click',function(){
			alert('1');
			app.member.list(1);
			/*location.href=app.path.ctx()+"/member/list";*/
			/*controller.list('member','member_list','1');*/
		});
		$('.dropdown-menu a').eq(2).on('click',function(){
			alert('2');
			app.controller.moveTo('member','member_detail');
			/*location.href=app.path.ctx()+"/member/detail";*/
			/*controller.moveTo('member','member_detail');*/
		});
		$('.dropdown-menu a').eq(3).on('click',function(){
			alert('3');
			app.controller.deleteTarget(prompt('삭제할 ID를 입력하세요'),'member','member_list');
			/*location.href=app.path.ctx()+"/member/delete";*/
          /*controller.deleteStudent();*/
		});
		$('.dropdown-menu a').eq(4).on('click',function(){
			alert('4');
			app.controller.moveTo('grade','grade_add');
			/*location.href=app.path.ctx()+"/grade/add";*/
		});
		$('.dropdown-menu a').eq(5).on('click',function(){
			alert('5');
			app.controller.moveTo('grade','grade_list');
			/*location.href=app.path.ctx()+"/grade/list";*/
			/*controller.list('member','member_list','1');*/
		});
		$('.dropdown-menu a').eq(6).on('click',function(){
			alert('6');
			app.controller.moveTo('grade','grade_detail');
			/*location.href=app.path.ctx()+"/grade/detail";*/
			/*controller.moveTo('member','member_detail');*/
		});
		$('.dropdown-menu a').eq(7).on('click',function(){
			alert('7');
			app.controller.deleteTarget(prompt('삭제할 성적을 가진 ID를 입력하세요'),'grade','grade_list');
			/*location.href=app.path.ctx()+"/grade/delete";*/
          /*controller.deleteStudent();*/
		});
		$('.dropdown-menu a').eq(8).on('click',function(){
			alert('8');
			app.controller.moveTo('board','board_write');
			/*location.href=app.path.ctx()+"/board/write";*/
		});
		$('.dropdown-menu a').eq(9).on('click',function(){
			alert('9');
			app.controller.moveTo('board','board_list');
			/*location.href=app.path.ctx()+"/board/list";*/
			/*controller.list('member','member_list','1');*/
		});
		$('.dropdown-menu a').eq(10).on('click',function(){
			alert('10');
			app.controller.moveTo('board','board_detail');
			/*location.href=app.path.ctx()+"/board/detail";*/
		});
		$('.dropdown-menu a').eq(11).on('click',function(){
			alert('11');
			app.controller.deleteTarget(prompt('삭제할 게시글을 가진 ID를 입력하세요'),'board','board_list');
			/*location.href=app.path.ctx()+"/board/delete";*/
          /*controller.deleteStudent();*/
		});
		
		$('#home a').on('click',function(){
			alert('home');
			app.controller.moveTo('common','main');
			/*location.href=app.path.ctx()+"/auth/main";*/
		});
		
		$('#logout').on('click',function(){
			alert('logout');
			app.controller.moveTo('common','login');
			/*location.href=app.path.ctx()+"/auth/main";*/
		});
	};
	var setContentView=function(){
		var $u1=$("#navbar_ul_stu");
		var $u2=$("#navbar_ul_grade");
		var $u3=$("#navbar_ul_board");
		$u1.addClass("dropdown-menu");
		$u2.addClass("dropdown-menu");
		$u3.addClass("dropdown-menu");
		var $home=$('#home');
		var $logout=$('#logout')
	};
	return {
		init : init
	};
})();

 app.member=(function(){

	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		 /*method="post" action="#"*/
		/*	alert('update 버튼 클릭');
			sessionStorage.setItem('id',$('#detail_id').text());
			sessionStorage.setItem('phone',$('#detail_phone').text());
			sessionStorage.setItem('email',$('#detail_email').text());	
			sessionStorage.setItem('title',$('#detail_title').text());
			controller.moveTo('member','member_update');
		});*/
		
	};
	var setContentView=function(){
		alert('member!!!');
	};
	var list=function(pno){
		location.href=app.path.ctx()+'/member/list/'+pno;
	};
	return {
		init : init,
		list : list
	};
})();

 app.student=(function(){
	 var init=function(){
		 onCreate();
	 };
	 var onCreate=function(){
		 setContentView();
		 $('#confirmBtn').on('click',function(){
			 alert('컨트롤러로 갑니다.')
			 $('#update_form').attr('action',app.path.ctx()+"/student/update");
			 $('#update_form').attr('method',"post");
			 return true
		 });
		
	 };
	 var setContentView=function(){
		 
	 };
	 return {
		 init : init
	 };
 })();
 
 
 
 app.board=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){
		
	};
	return {
		init : init
	};
})();

 app.grade=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){
		
	};
	return {
		init : init
	};
})();

 app.controller=(function(){
	var init=function(){
	
	};
	var moveTo=function(dir,page){
		location.href=app.path.ctx()+'/common'+'/path'+'/'+dir+'/'+page;
	};
	var logout=function(dir,page){
		location.href =app.path.ctx()+'/' + dir + ".do?action=logout&page="+page;
	};
	var deleteTarget=function(target){
		alert('삭제할 ID :'+target);
		location.href=app.path.ctx()+'/member/delete/'+target;
	};
	var list=function(dir,page,pageNumber){
		location.href=app.path.ctx()+'/member/list/'+dir+'/'+page+"?pageNumber="+pageNumber;
	};
	var updateStudent=function(){
		alert('수정하기');
		location.href=app.path.ctx()+"/student/update";
	};
	var deleteStudent=function(id){
		location.href=app.ctx()+"/member/delete&page=member_list&id="+id;
	};
	var detailStudent=function (id){
		alert(id+'의 상세정보를 출력합니다.');
		location.href=app.path.ctx()+"/member/detail/"+id;
	};
	var searchStudent=function(){
		alert('검색버튼 클릭');
		var search=$('#search').val();
		location.href=app.path.ctx()+"/member/search/"+search;
	};
	var joinStudent=function(){
		 $('#memberAdd_yes_btn').on('click',function(){
			 alert('컨트롤러로 갑니다.');
			 $('#memberAdd_form').attr('action',app.path.ctx()+"/student/add");
			 $('#memberAdd_form').attr('method',"post");
			 return true;
		 });
	};
	return {
		init : init,
		moveTo : moveTo,
		logout : logout,
		deleteTarget : deleteTarget,
		list : list,
		updateStudent : updateStudent,
		deleteStudent : deleteStudent,
		detailStudent : detailStudent,
		searchStudent : searchStudent,
		joinStudent : joinStudent
	};
})();