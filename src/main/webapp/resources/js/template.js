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
		    +'<li class="dropdown">'
		    +'<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">배열 <span class="caret"></span></a>'
		    +'<ul id="navbar_ul_board" class="dropdown-menu">'
		    +'<li><a id="selBtn">선택정렬</a></li>'
		    +'<li><a id="burbleBtn">버블정렬</a></li>'
		    +'<li><a id="insertBtn">삽입정렬</a></li>'
		    +'<li><a id="rankBtn">석차구하기</a></li>'
		    +'<li><a id="mergeBtn">이분검색</a></li>'
		    +'<li><a id="stackBtn">병합</a></li>'
		    +'<li><a id="stackBtn">스택</a></li>'
		    +'</ul>'
		    +'</li>'
		    +'<li class="dropdown">'
		    +'<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">행렬 <span class="caret"></span></a>'
		    +'<ul id="navbar_ul_board" class="dropdown-menu">'
		    +'<li><a id="selBtn">기본5행5열</a></li>'
		    +'<li><a id="burbleBtn">직각삼각형</a></li>'
		    +'<li><a id="insertBtn">지그재그</a></li>'
		    +'<li><a id="rankBtn">다이아몬드</a></li>'
		    +'<li><a id="mergeBtn">모래시계</a></li>'
		    +'<li><a id="stackBtn">오른쪽 빈삼각형</a></li>'
		    +'<li><a id="stackBtn">이등변삼각형</a></li>'
		    +'<li><a id="stackBtn">90도 회전</a></li>'
		    +'<li><a id="stackBtn">달팽이</a></li>'
		    +'<li><a id="stackBtn">대각선채우기</a></li>'
		    +'<li><a id="stackBtn">마방진</a></li>'
		    +'<li><a id="stackBtn">행렬변환</a></li>'
		    +'</ul>'
		    +'</li>'
		    +'</ul>'
		    +'<span class="float-right">${user.name} &nbsp;'
		    +'<a id="logout" style="color: white">로그아웃</a></span>'
		    +'</div>'
		    +'</nav>'
		},
		loginView : (x)=>{
			return'<div id="container" style="margin-top:100px">'
			+'<form id="login_box" name="login_box" > '
			+'<img src="'+x+'/login.jpg" alt="" /><br />'
			+'<div style="font-size: 15px;width: 200px; height: 20px; margin: 0 auto;color: red;"></div>'
			+'<span id="login_id">ID</span>'
			+'<input type="text" id="input_id" name="id" value="mem1"/> <br />'
			+'<span id="login_pass">PASSWORD</span>'
			+'<input type="text" id="input_pass" name="pass" value="1"/> <br /><br />'
			+'</form>'
			+'</div>';
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
	},
	sort : ()=>{
		return'<div id="content">'
		+'<h1>선택정렬</h1>'
		+'<span id="start_num"> 정렬할 숫자 </span>'
		+'</br>'
		+'<div id="aa"/></br>'
		+'<span id="result"> </span>'
		+'</div>';	
	}
};
var compUI ={
	//div : ()=>{return $();} 람다에서 돔을 리턴할때 (어팬드,에프터 사용 ,div : ()=>{return $();} 람다에서 스트링을 리턴할때 (html 사용),div : ()=>{return '',{};},(스트링,제이슨으로 속성제어)
	br : ()=>{return $('<br/>')},
	div : (x)=>{return $('<div/>',{id : x});},
	h1 : (x) => {return $('<h1/>',{id:x});},
	span : x=>{return $('<span/>',{id:x});},
	input : (json)=>{return $('<input/>',json);},
	iTxt : x=>{return $('<input/>',{id : x , type : "text"})},
	aBtn : x=>{return $('<a>',{href : '#', role: 'button', id : x })},
	iBtn : x=>{return $('<input/>',{id : x , type : 'button'})},
	image : (x,y)=>{return $('<img/>'),{id : x, src : y};},
	table : (json)=>{return $('<table/>',json)},
	tr : (json)=>{return $('<tr/>',json)},
	th : (json)=>{return $('<th/>',json)},
	td : (json)=>{return $('<table/>',json)},
};

var searchUI={
		}

var pagenationUI={
		
}

var boardUI={
	boardList : ()=>{
		var tb1='<div>'
		+'<h4 id="count" style="color : blue">총 개시글 수 &nbsp&nbsp</h4>'
		+'<button id="writeBtn" class="btn btn-default" type="button">글쓰기</button>'
		+'</div>'
		+'<div id="board_list">'
		+'<table border=1 style="border-collapse: collapse; width: 100%;">'
			+'<thead><tr style="height: 25px;">';
		var a=[
			{
				width: '5%', txt :	'NO'
			},
			{
				width: '20%', txt :	'제목'
			},
			{
				width: '36%', txt :	'내 용'
			},
			{
				width: '15%', txt :	'글쓴이'
			},
			{
				width: '15%', txt :	'작성일'
			},
			{
				width: '9%', txt :	'조회수'
			}
			];
			$.each(a,(i,j)=>{
				tb1+='<th style="width : '+j.width+'; text-align: center;">'+j.txt+'</th>'
			});
			tb1+='</tr></thead><tbody id="tbody">';
			tb1+='</tbody></table></div>';
			
		//제이슨 배열 코딩방법
				
				return tb1;
	},
	pagenation : ()=>{
		return '<nav>'
		+'  <ul class="pagination">'
		+'    <li>'
		+'      <a href="#" aria-label="Previous">'
		+'        <span aria-hidden="true">&laquo;</span>'
		+'      </a>'
		+'    </li>'
		+'    <li><a href="#">1</a></li>'
		+'    <li><a href="#">2</a></li>'
		+'    <li><a href="#">3</a></li>'
		+'    <li><a href="#">4</a></li>'
		+'    <li><a href="#">5</a></li>'
		+'    <li>'
		+'      <a href="#" aria-label="Next">'
		+'        <span aria-hidden="true">&raquo;</span>'
		+'      </a>'
		+'    </li>'
		+'  </ul>'
		+'</nav>';
	},
	search : ()=>{
		return '<div class="row">'
		+'  <div class="col-lg-6">'
		+'    <div class="input-group">'
		+'      <div class="input-group-btn">'
		+'        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">검색분류 <span class="caret"></span></button>'
		+'        <ul class="dropdown-menu" role="menu">'
		+'          <li><a href="#">작성자</a></li>'
		+'          <li><a href="#">개시글</a></li>'
		+'          <li class="divider"></li>'
		+'        </ul>'			
		+'      </div><!-- /btn-group -->'
		+'  <span class="input-group-addon" id="basic-addon1">검색</span>'
		+'      <input type="text" class="form-control" aria-label="...">'
		+'    </div><!-- /input-group -->'
		+'  </div><!-- /.col-lg-6 -->'
		+'  <div class="col-lg-6">'
		+'    <div class="input-group">'
		+'			<span class="input-group-btn">'
		+'			<button class="btn btn-default" type="button">search!</button>'
		+'			</span>'
		+'      </div><!-- /btn-group -->'
		+'    </div><!-- /input-group -->'
		+'  </div><!-- /.col-lg-6 -->'
		+'</div><!-- /.row -->';
	},
	detail : ()=>{
		return '<div class="page-header" >'
		+'<h1 style="display:inline; magin-left:100px;">게시판</h1>'
		+'<a style="font-size:large;">목록가기</a>'
		+'</div>'
		+'<div class="container">'
		+'<div class="row">'
		+'<div class="col-md-12">'
		+'<div class="well well-sm">'
		+'<form class="form-horizontal" method="post">'
		+'<fieldset>'
		+'<legend id="header" class="text-center header">게시물 쓰기</legend>'
		+'<label id="regdate"></label>'
		+'<div class="formp-group">'
		+'<span class="col-md-1 col-md-offset-2 text-center">'
		+'<i class="fa fa-user bigicon"></i>'
		+'</span>'
		+'<div class="col-md-12">'
		+'<input id="fname" name="title" type="text" placeholder="제 목" class="form-control">'
		+'</div>'
		+'</div>'
		+'<div class="formp-group">'
		+'<span class="col-md-1 col-md-offset-2 text-center">'
		+'<i class="fa fa-user bigicon"></i>'
		+'</span>'
		+'<div class="col-md-12">'
		+'<input id="lname" name="name" type="text" placeholder="글쓴이" class="form-control">'
		+'</div>'
		+'</div>'
		+'<div class="formp-group">'
		+'<span class="col-md-1 col-md-offset-2 text-center">'
		+'<i class="fa fa-user bigicon"></i>'
		+'</span>'
		+'<div class="col-md-12">'
		+'<textarea class="form-control" id="message" name="message" rows="15">'
		+'</textarea>'
		+'</div>'
		+'</div>'
		+'<div class="formp-group" >'
		+'<span class="col-md-1 col-md-offset-2 text-center" style="width:500px;">'
		+'<button id="confirmBtn" type="submit" style="width:150px" class="btn btn-primary btn-lg">확인</button>'
		+'<button id="cancelBtn" type="reset" style="width:150px" class="btn btn-primary btn-lg">취소</button>'
		+'</span>'
		+'</div>'
		+'</fieldset>'
		+'</form>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'<div class="modal fade alert" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">'
        +'<div class="modal-dialog">'
        +'<div class="modal-content">'
        +'<div class="modal-header">'
        +'<button type="button" class="close" date-dismiss=""modal>'
        +'<span aria-hidden="true">x</span>'
        +'<span class="sr-only">Close</span></button>'
        +'<h3 class="modal-title" id="modalLabel">정말 삭제하시겠습니까?</h3>'
        +'</div>'
        +'<div class="modal-body">'
        +'<form>'
        +'<div class="form-group">'
        +'<label for="inputPass">Password</label>'
        +'<input type="password" class="form-control" id="userPass" placeholder="Enter Password">'
        +'</div>'
        +'<button id="confirmPass" type="submit" style="width:200px;" class="btn btn-primary center-block">확인</button">'
        +'</form>'
        +'</div>'
        +'</div>'
        +'</div>'
        +'</div>';
	},
};