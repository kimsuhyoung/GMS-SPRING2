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
			location.href=app.path.ctx()+"/member/add";
		});
		$('.list-group-item a').eq(1).on('click',function(){
			location.href=app.path.ctx()+"/member/list";
		});
		$('.list-group-item a').eq(2).on('click',function(){
			location.href=app.path.ctx()+"/member/detail";
			/*controller.detailStudent(prompt('조회Id'));*/
		});
		$('.list-group-item a').eq(3).on('click',function(){
			location.href=app.path.ctx()+"/member/delete";
			 /*controller.deleteStudent();*/
		});
		$('.list-group-item a').eq(4).on('click',function(){
			location.href=app.path.ctx()+"/grade/add";
		});
		$('.list-group-item a').eq(5).on('click',function(){
			location.href=app.path.ctx()+"/grade/list";
			/*controller.list('member','member_list','1');*/
		});
		$('.list-group-item a').eq(6).on('click',function(){
			location.href=app.path.ctx()+"/grade/detail";
			/*controller.detailStudent(prompt('조회Id'));*/
		});
		$('.list-group-item a').eq(7).on('click',function(){
			location.href=app.path.ctx()+"/grade/delete";
			 /*controller.deleteStudent();*/
		});
		$('.list-group-item a').eq(8).on('click',function(){
			location.href=app.path.ctx()+"/board/write";
		});
		$('.list-group-item a').eq(9).on('click',function(){
			location.href=app.path.ctx()+"/board/list";
			/*controller.list('member','member_list','1');*/
		});
		$('.list-group-item a').eq(10).on('click',function(){
			location.href=app.path.ctx()+"/board/detail";
			/*controller.detailStudent(prompt('조회Id'));*/
		});
		$('.list-group-item a').eq(11).on('click',function(){
			location.href=app.path.ctx()+"/board/delete";
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
			location.href=app.path.ctx()+"/member/add";
		});
		$('.dropdown-menu a').eq(1).on('click',function(){
			alert('1');
			location.href=app.path.ctx()+"/member/list";
			/*controller.list('member','member_list','1');*/
		});
		$('.dropdown-menu a').eq(2).on('click',function(){
			alert('2');
			location.href=app.path.ctx()+"/member/detail";
			/*controller.moveTo('member','member_detail');*/
		});
		$('.dropdown-menu a').eq(3).on('click',function(){
			alert('3');
			location.href=app.path.ctx()+"/member/delete";
          /*controller.deleteStudent();*/
		});
		$('.dropdown-menu a').eq(4).on('click',function(){
			alert('4');
			location.href=app.path.ctx()+"/grade/add";
		});
		$('.dropdown-menu a').eq(5).on('click',function(){
			alert('5');
			location.href=app.path.ctx()+"/grade/list";
			/*controller.list('member','member_list','1');*/
		});
		$('.dropdown-menu a').eq(6).on('click',function(){
			alert('6');
			location.href=app.path.ctx()+"/grade/detail";
			/*controller.moveTo('member','member_detail');*/
		});
		$('.dropdown-menu a').eq(7).on('click',function(){
			alert('7');
			location.href=app.path.ctx()+"/grade/delete";
          /*controller.deleteStudent();*/
		});
		$('.dropdown-menu a').eq(8).on('click',function(){
			alert('8');
			location.href=app.path.ctx()+"/board/write";
		});
		$('.dropdown-menu a').eq(9).on('click',function(){
			alert('9');
			location.href=app.path.ctx()+"/board/list";
			/*controller.list('member','member_list','1');*/
		});
		$('.dropdown-menu a').eq(10).on('click',function(){
			alert('10');
			location.href=app.path.ctx()+"/board/detail";
		});
		$('.dropdown-menu a').eq(11).on('click',function(){
			alert('11');
			location.href=app.path.ctx()+"/board/delete";
          /*controller.deleteStudent();*/
		});
		
		$('#home a').on('click',function(){
			alert('home');
			location.href=app.path.ctx()+"/auth/main";
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
		$('#updateBtn').on('click',function(){
			sessionStorage.setItem('id',$('#detail_id').text());
			sessionStorage.setItem('phone',$('#detail_phone').text());
			sessionStorage.setItem('email',$('#detail_email').text());	
			sessionStorage.setItem('title',$('#detail_title').text());
			controller.moveTo('member','member_update');
		});
		
	};
	var setContentView=function(){
		alert('member!!!');
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
		location.href=app.path.ctx()+dir+page;
	};
	var logout=function(dir,page){
		location.href =app.ctx()+'/' + dir + ".do?action=logout&page="+page;
	};
	var deleteTarget=function(target){
		prompt(target+'의 ID?');
	};
	var list=function(dir,page,pageNumber){
		location.href=app.ctx()+'/'+dir+".do?action=list&page="+page
					+"&pageNumber="+pageNumber;
	};
	var updateStudent=function(id,email){
		location.href=app.ctx()+"/member.do?action=update&page=member_update&id="+id+"&email="+email;
	};
	var deleteStudent=function(id){
		location.href=app.ctx()+"/member.do?action=delete&page=member_list&id="+id;
	};
	var detailStudent=function (id){
		location.href=app.ctx()+"/member.do?action=detail&page=member_detail&id="+id;
	};
	var searchStudent=function(){
		var search=$('#search').value;
		location.href=app.ctx()+"/member.do?action=search&page=member_list&search="+search;
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
		searchStudent : searchStudent
	};
})();