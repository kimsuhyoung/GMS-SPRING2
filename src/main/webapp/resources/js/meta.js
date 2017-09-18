var meta=meta || {}

meta.common=(function(){
	var init=function(ctx){
		onCreate();
		meta.session.init(ctx);
		meta.index.init();
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

meta.index=(function(){
	var $image;
	var init=function(){
		onCreate();
		meta.ui.init();
	};
		
	var onCreate=function(){	
		setContentView();
		$('#button').on('click',function(){//펑션을 이벤트핸들러 또는 콜백 함수라고 한다.
			alert('화면이 지워집니다.');
			$wrapper.empty();
			/*meta.auth.init();*/
			meta.ui.navbar();
			meta.ui.arithmetic();
			$('#algo_button').on('click',function(){					
				$('#result').text('결과값 : ' + meta.algo.arithmetic($('#start_num_text').val(),$('#last_num_text').val()));
			});
			$('#arithBtn').on('click',function(){
				alert('등차수열 클릭');
				$('#content').remove();
				meta.ui.arithmetic();
				$('#algo_button').on('click',function(){					
					$('#result').text('결과값 : ' + meta.algo.arithmetic($('#start_num_text').val(),$('#last_num_text').val()));
				});
			});
			$('#switchBtn').on('click',function(){
				alert('스위치수열 클릭');
				$('#content').remove();
				meta.ui.switchSeries();
				$('#switch_btn').on('click',function(){
					$('#result').text('결과값 : ' + meta.algo.switchSeries($('#start_text').val(),$('#last_text').val()))
				});
			});
			$('#geoBtn').on('click',function(){
				alert('등비수열 클릭');
				$('#content').remove();
			});
			$('#facBtn').on('click',function(){
				alert('팩토리얼 클릭');
				$('#content').remove();
			});
			$('#fiboBtn').on('click',function(){
				alert('피보나치수열 클릭');
				$('#content').remove();
			});
			
		});
	};
	
	var setContentView=function(){
		$wrapper=$('#wrapper');
		$ctx=$$('c');
		$img=$$('i');
		$image=$('<img/>',{id: 'loading', src: $img+'/loading.gif'});//제이슨은 키값과 밸류값을 같는다 키값에는 아이디,태그등을 넣어주고//어트리뷰트는 기성품(이미만들어짐) 프로퍼티는 값이 할당되기 전까지는 모른다.
		$image.appendTo($('#wrapper'));//appendTo 는 리턴하는 것이다.
		var $button=$('<input/>',{id: 'button', type:'button', value:'클릭'});
		$button.appendTo($('#wrapper'));
		/*$('#wrapper').empty*/ // empty는 화면을 지우는 메서드
	};
	return {
		init : init
		
	};
})();


meta.algo={
		arithmetic : function(s,e){			
				var start_num=0,last_num=0,sum=0;
				start_num=s*1;
				last_num=e*1;
				for(var i=start_num;i<=last_num;i++){
					sum+=i;
				}
				return sum;			
		},
		switchSeries : function(s,e){
		var start_num=0,last_num=0,j=0*1,sw=0;
		start_num=s*1;
		last_num=e*1;
		do {
			start_num=start_num+1;
			if(sw==0){
				j=j+start_num;
				sw=1;
			}else {
				j=j-start_num;
				sw=0;
			}
		}while(start_num<=last_num)
			return j;
		}
		
};


meta.auth=(function(){
	var $wrapper,$ctx,$css,$img,$js
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){
		$wrapper=$('#wrapper');
		$ctx=$$('x');
		$css=$$('c');
		$img=$$('i');
		$js=$$('j');
		loginView();
	};
	var loginView=function(){
		alert('로그인화면');
		
		var $container=
			'<div id="container" style="margin-top:100px">'
			+'<form id="login_box" name="login_box" > '
			+'<img src="'+$img+'/login.jpg" alt="" /><br />'
			+'<div style="font-size: 15px;width: 200px; height: 20px; margin: 0 auto;color: red;"></div>'
			+'<span id="login_id">ID</span>'
			+'<input type="text" id="input_id" name="id" value="mem1"/> <br />'
			+'<span id="login_pass">PASSWORD</span>'
			+'<input type="text" id="input_pass" name="pass" value="1"/> <br /><br />'
			+'</form>'
			+'</div>';
		$wrapper.append($container);
		$('#login_box').append(meta.component.input({type : 'submit', id : 'login_btn', value : '로그인'}))
	    $('#login_box').append(meta.component.input({type : 'reset', id : 'cancel_btn', value : '취소'}))//돔에다가 돔을 연결할때 쓰는 문법
		//동적 ui를 쓰려면 펑션의 파라미터 값을 제이슨으로 던져서 유동적으로 처리한다.
	};
	return {
		init : init
		
	};
})();

meta.ui=(function(){
	var $wrapper,$ctx,$css,$img,$js
	var init=function(){
		$wrapper=$('#wrapper');$ctx=$$('x');$css=$$('c');$img=$$('i');$js=$$('j');
	};
	var navbar= function(){//dom객체에서 append(dom에 dom을 붙이는것),html(html코딩과 같다) 
		$wrapper.html(		
	'<nav class="navbar navbar-inverse">'
	+'<div class="container-fluid">'
	+'<div class="navbar-header">'
    +'<a class="navbar-brand" href="#">GMS</a>'
    +'</div>'
    +'<ul class="nav navbar-nav">'
    +'<li id="home" class="active"><a><span class="glyphicon glyphicon-home"></span>&nbsp;Home</a></li>'
    +'<li class="dropdown">'
    +'<a href="#" class="dropdown-toggle"' 
    +'data-toggle="dropdown" role="button"' 
    +'aria-haspopup="true"'
    +'aria-expanded="false">회원관리 <span class="caret">'
    +'</span></a>'
    +'<ul id="navbar_ul_stu" class="dropdown-menu">'
    +'<li><a>학생추가</a></li>'
    +'<li><a>학생목록</a></li>'
    +'<li><a>학생조회</a></li>'
    +'<li></li>'
    +'<li><a>학생삭제</a></li>'
    +'</ul>'
    +'</li>'
    +'<li class="dropdown">'
    +'<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">성적관리 <span class="caret"></span></a>'
    +'<ul id="navbar_ul_grade" class="dropdown-menu">'
    +'<li><a>성적추가</a></li>'
    +'<li><a>성적목록</a></li>'
    +'<li><a>성적조회</a></li>'
    +'<li></li>'
    +'<li><a>성적삭제</a></li>'
    +'</ul>'
    +'</li>'
    +'<li class="dropdown">'
    +'<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">게시판관리 <span class="caret"></span></a>'
    +'<ul id="navbar_ul_board" class="dropdown-menu">'
    +'<li><a>게시글추가</a></li>'
    +'<li><a>게시글목록</a></li>'
    +'<li><a>게시글조회</a></li>'
    +'<li></li>'
    +'<li><a>게시글삭제</a></li>'
    +'</ul>'
    +'</li>'
    +'<li class="dropdown">'
    +'<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">수열 <span class="caret"></span></a>'
    +'<ul id="navbar_ul_board" class="dropdown-menu">'
    +'<li><a id="arithBtn">등차수열</a></li>'
    +'<li><a id="switchBtn">스위치수열</a></li>'
    +'<li><a id="geoBtn">등비수열</a></li>'
    +'<li><a id="facBtn">팩토리얼</a></li>'
    +'<li><a id="fiboBtn">피보나치</a></li>'
    +'</ul>'
    +'</li>'
    +'</ul>'
    +'<span class="float-right">${user.name} &nbsp;'
    +'<a id="logout" style="color: white">로그아웃</a></span>'
    +'</div>'
    +'</nav>'		
		);
	}
	var arithmetic=function(){
		/*1부터 100까지 등차수열의 합*/
		var content =
			'<div id="content">'
			+'<h1>등차수열의 합</h1>'
			+'<span id="start_num"> 시작값 </span>'
			+'</br>'
			+'<span id="last_num"> 마지막값 </span>'
			+'</br>'
			+'<div id="aa"/></br>'
			+'<span id="result"> </span>'
			+'</div>';		
		$('#wrapper').append(content)
		$('#start_num').after(meta.component.input({
			type : 'text' , 
			id : 'start_num_text',
			placeholder : '시작값 입력'
		}));
		$('#last_num').after(meta.component.input({
			type : 'text',
			id : 'last_num_text',
			placeholder : '마지막 값 입력'
		}));
		$('#aa').after(meta.component.input({
			type : 'button',
			id : 'algo_button',
			value : '연산하기'
		}));
	};
	var switchSeries=function(){
		var content =
			'<div id="content">'
			+'<h1>스위치수열의 합</h1>'
			+'<span id="start_num"> 시작값 </span>'
			+'</br>'
			+'<span id="last_num"> 마지막값 </span>'
			+'</br>'
			+'<div id="aa"/></br>'
			+'<span id="result"> </span>'
			+'</div>';		
			$('#wrapper').append(content);
			$('#start_num').after(meta.component.input({
				type : 'text',
				id : 'start_text',
				placeholder : '시작값 입력'
			}));
			$('#last_num').after(meta.component.input({
				type : 'text',
				id : 'last_text',
				placeholder : '마지막 값 입력'
			}));
			$('#aa').after(meta.component.input({
				type : 'button',
				id : 'switch_btn',
				value : '연산하기'
			}));
	};
	
	return {
		init : init,
		arithmetic : arithmetic,
		switchSeries : switchSeries,
		navbar : navbar
	};
})();
meta.component=
	{
		input : function(json){
			return $('<input/>',json);
		}
	};



meta.session=
	{
	init : function(ctx){
		sessionStorage.setItem('x',ctx);
		sessionStorage.setItem('j',ctx+'/resources/js');
		sessionStorage.setItem('i',ctx+'/resources/img');
		sessionStorage.setItem('c',ctx+'/resources/css'); 
	},
	
	getPath : function(x){
		return sessionStorage.getItem(x)
	}
	};
	



var $$=function(x){return meta.session.getPath(x);};



