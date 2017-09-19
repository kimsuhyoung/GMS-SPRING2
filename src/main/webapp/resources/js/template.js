var introUI={
		loading : (x)=>{			
			return {
				id: 'loading', 
				src: x+'/loading.gif'
			}
		},
		navbar : ()=>{		
			return'<nav class="navbar navbar-inverse">'
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
		}
};
var algoUI = {
	series : ()=>{
		return'<div id="content">'
		+'<h1>등차수열의 합</h1>'
		+'<span id="start_num"> 시작값 </span>'
		+'</br>'
		+'<span id="last_num"> 마지막값 </span>'
		+'</br>'
		+'<div id="aa"/></br>'
		+'<span id="result"> </span>'
		+'</div>';	
	}	
};
var compUI ={
	input : (json)=>{
		
	return $('<input/>',json);
		
	}	
};