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
	var $wrapper;//지역변수를 필드에다가 놔둬서 선언만 해논다.
	var $image;
	var init=function(){
		onCreate();
	};
		
	var onCreate=function(){	
		setContentView();
		$('#button').on('click',function(){//펑션을 이벤트핸들러 또는 콜백 함수라고 한다.
			alert('화면이 지워집니다.');
			$wrapper.empty();
		});
	};
	
	var setContentView=function(){
		$wrapper=$('#wrapper');
		$image=$('<img/>',{id: 'loading', src: img()+'/loading.gif'});//제이슨은 키값과 밸류값을 같는다 키값에는 아이디,태그등을 넣어주고//어트리뷰트는 기성품(이미만들어짐) 프로퍼티는 값이 할당되기 전까지는 모른다.
		$image.appendTo($('#wrapper'));//appendTo 는 리턴하는 것이다.
		var $button=$('<input>',{id: 'button', type:'button', value:'클릭'});
		$button.appendTo($('#wrapper'));
		/*$('#wrapper').empty*/ // empty는 화면을 지우는 메서드
	};
	return {
		init : init
		
	};
})();


meta.session=(function(){
	var init=function(ctx){
		sessionStorage.setItem('ctx',ctx);
		sessionStorage.setItem('js',ctx+'/resources/js');
		sessionStorage.setItem('img',ctx+'/resources/img');
		sessionStorage.setItem('css',ctx+'/resources/css'); 
	};
	var getPath=function(x){
		return sessionStorage.getItem(x)
	};

	return {
		init : init,
		getPath : getPath
	};
})();

var $$=function(){return meta.session.getPath('ctx');};
var css=function(){return meta.session.getPath('css');};
var img=function(){return meta.session.getPath('img');};
var js=function(){return meta.session.getPath('js');};

