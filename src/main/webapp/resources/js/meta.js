var meta=meta || {}

meta.common=(()=>{
	var init=(ctx)=>{
		onCreate();
		meta.session.init(ctx);
		meta.index.init();
	};
	var onCreate=()=>{
		setContentView();
	};
	var setContentView=()=>{
		
	};
	return {
		init : init
		
	};
})();

meta.index=(()=>{
	var $wrapper,$image,$navbar,$container,ctx,img,js,css,temp,algo;
	var init=()=>{
		$container=$('#container');
		$wrapper=$('#wrapper');
		$navbar=$('#navbar');
		ctx=$$('x');
		css=$$('c');
		img=$$('i');
		js=$$('j');
		temp=js+'/template.js';
		algo=js+'/algo.js';
		onCreate();
		/*meta.ui.init();*/
	};
		
	var onCreate=()=>{	
		$.getScript(temp,(x)=>{
			var $image=$('<img/>',introUI.loading(img))
			$container.append(compUI.div('content')).css({'width':'100%'});
			$('#content').css({'width':'50%','margin':'0 auto'}).append($image);
			/*$image=$('<img/>',{id: 'loading', src: $img+'/loading.gif'});//제이슨은 키값과 밸류값을 같는다 키값에는 아이디,태그등을 넣어주고//어트리뷰트는 기성품(이미만들어짐) 프로퍼티는 값이 할당되기 전까지는 모른다.*/				    			
			/*var $button=$('<input/>',{id: 'button', type:'button', value:'클릭'})		
			$('#wrapper').empty // empty는 화면을 지우는 메서드			
			$image.appendTo($('#wrapper'));//appendTo 는 리턴하는 것이다.
			$button.appendTo($('#container'));*/
			 $('#loading').after(compUI.h1('h-btn'));
	         $('#h-btn').append(compUI.span('btn')).attr('display','inline');
	         $('#btn').html('알고리즘').addClass('label label-default');
	         $('#h-btn').append(compUI.span('btn2')).attr('display','inline');
	         $('#btn2').html('회원관리').addClass('label label-primary').css({'magin-left':'10px'});
	         $('#h-btn').append(compUI.span('btn3')).attr('display','inline');
	         $('#btn3').html('게시판').addClass('label label-success').css({'magin-left':'10px'});
		$('#btn').click(()=>{//펑션을 이벤트핸들러 또는 콜백 함수라고 한다.
			alert('화면이 지워집니다.');
			$container.empty();
			
			/*meta.ui.navbar();*/
			meta.navbar.init();
			$.getScript(temp,()=>{
				$('#container').html(algoUI.series());
				$.getScript(temp,()=>{
					$('#start_num').append(compUI.input({
						type : 'text' , 
						id : 'start_num_text',
						placeholder : '시작값 입력'
					}));
					$('#last_num').append(compUI.input({
						type : 'text',
						id : 'last_num_text',
						placeholder : '마지막 값 입력'
					}));					
					$('#aa').append(compUI.input({
							type : 'button',
							id : 'algo_button',
							value : '연산하기'
					}));		
					$('#start_num_text').val('1');
					$('#last_num_text').val('100');
					$('#algo_button').on('click',()=>{					
						$.getScript(algo,(x1,x2)=>{
						$('#result').text('결과값 : ' + series.arithmetic($('#start_num_text').val(),$('#last_num_text').val()));	
					});									
				});				
			});																
		});
	});
		
				$('#btn2').click(()=>{
					meta.auth.init();
					$.getScript(temp,()=>{
						$('#login_box').append(compUI.input({type : 'button', id : 'login_btn', value : '로그인'}));
						$('#login_box').append(compUI.input({type : 'reset', id : 'cancel_btn', value : '취소'}));
					$('#login_btn').click(()=>{
						
						});				
						});		
				});				
				$('#btn3').click(()=>{					
					alert('게시판 가기');
					/*location.href=ctx+'/get/board/list'//중간에 get은 레스트풀방식 원래는 생략가능*/
					meta.board.list();
					});
});
};
	
	return {
		init : init
		
	};
})();

meta.auth=(()=>{
	var $wrapper,ctx,css,img,js,temp,$container;
	var init=()=>{
		js=$$('j');
		temp=js+'/template.js';
		$container=$('#container');
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
	};
	var setContentView=()=>{
		$wrapper=$('#wrapper');
		ctx=$$('x');
		css=$$('c');
		img=$$('i');
		js=$$('j');
		loginView();
	};
	var loginView=()=>{
		alert('로그인화면');
		
		$.getScript(temp,()=>{
			$container.html(introUI.loginView(img));			
			/*$('#login_box').append(meta.component.input({type : 'submit', id : 'login_btn', value : '로그인'}))
		    $('#login_box').append(meta.component.input({type : 'reset', id : 'cancel_btn', value : '취소'}))*///돔에다가 돔을 연결할때 쓰는 문법
			//동적 ui를 쓰려면 펑션의 파라미터 값을 제이슨으로 던져서 유동적으로 처리한다.
		});

		
		
	};
	return {
		init : init
			
	};
})();

meta.board=(()=>{
	var ctx,js,temp,$container,$navbar;
	var init=()=>{
		ctx=$$('x');
		js=$$('j');
		temp=js+'/template.js';
		$container=$('#container');
		$navbar=$('#navbar');
	};
	var write =()=>{
		init();
		$.getScript(temp,()=>{
			$('#content').empty();
			$('#content').html(boardUI.detail())
			$('#confirmBtn').html('수정').click((e)=>{
				e.preventDefault();//서버로 값을 넘기는걸 막는 역할
				detail();
				});
		});
	};
	var list=x=>{
		init();
		var url=ctx+'/list/articles';
		$.getJSON(url,data=>{//x는 자바에서 던져준 객체다
			$.getScript(temp,()=>{
			var tb1=boardUI.boardList();
		/*		var a=[
					{a : 1,b : '한국인사',c : '안녕',d : '길동',e : '2017-09-10',f : 10},
					{a : 2,b : '미국인사',c : 'hello',d : 'james',e : '2017-09-11',f : 30},
					{a : 3,b : '일본인사',c : '곤니치와',d : '와카베',e : '2017-09-12',f : 40},
					{a : 4,b : '중국인사',c : '니하오',d : '권쯔',e : '2017-09-14',f : 50	},
					{a : 5,b : '프랑스인사',c : '봉주르',d : '하와이',e : '2017-09-15',f : 60}
				];*/
									
				var tr="";
				$.each(data.list,(i,j)=>{
						tr+='<tr style="height: 25px;">'//맵퍼.xml에 적힌 프로퍼티 이름을 가져다 넣어준다.
						+'<td>'+j.articleSeq+'</td>'
						+'<td><a onclick="meta.board.detail('+j.articleSeq+')">'+j.title+'</a></td>'
						+'<td>'+j.content+'</td>'
						+'<td>'+j.id+'</td>'
						+'<td>'+j.regdate+'</td>'
						+'<td>'+j.hitcount+'</td>'
						+'</tr>';
				});
				console.log('tr : '+tr);
				$('#content').empty();
				$('#content').html(boardUI.search());
				$('#content').append(boardUI.boardList());
				$('#count').append(data.count.count+'개');//스트링으로 할땐 카운트 까지만 해도 되는데 respmap으로 타입이 바뀌어서 그안에 카운트 까지 가야한다.
				$('#content').append(boardUI.pagenation());
				$('#tbody').html(tr);
				$('#writeBtn').click((e)=>{
					meta.board.write();
				});
				
			});
			/*$container.empty();
			meta.auth.init();*/
		});
	};
	var detail =x=>{
		init();
		alert('넘어온 시퀀스 : '+x);
		$.getJSON(ctx+'/get/articles/'+x,data=>{
			alert('data 값 : '+data.test)
		$.getScript(temp,(x)=>{
		$container.empty();
		$container.append(compUI.div('content'));
		$('#content').html(boardUI.detail());
		$('#header').html('게시글 보기');
		$('#regdate').text('작성일 : '+data.detail.regdate);
		$('#fname').val(data.detail.title).attr('readonly','true');
		$('#lname').val(data.detail.id).attr('readonly','true');
		$('#message').val(data.detail.content).attr('readonly','true');
			
		$('#confirmBtn').html('수정').click((e)=>{
			e.preventDefault();//서버로 값을 넘기는걸 막는 역할
			$('#fname').removeAttr('readonly');
			$('#message').removeAttr('readonly');
			
			$('#header').html('게시글 수정하기');
			$('#confirmBtn').html('확인').attr('id','updateBtn').click(e=>{
				
				var _seq=data.detail.articleSeq;
				var _title=$('#fname').val();
				var _writer=$('#lname').val();
				var _message=$('#message').val();
				e.preventDefault();
				$.ajax({
					url : ctx+'/put/articles',
					method : 'post',
					dataType : 'json',
					data : JSON.stringify({
						'articleSeq':_seq,
						'title':_title,
						'id' :_writer,
						'content':_message
						
					}),
					contentType : 'application/json',
					success : d=>{
						alert('ajax 통신 성공 메세지 : '+d.msg);
						alert('시퀀스 번호 : '+_seq);
						detail(_seq);
						},
					error : (x,s,m)=>{
						alert('글 수정시 에러발생'+m);
					}
				});
			});
			$('#cancelBtn').html('취소').attr('id','resetBtn').attr('type','reset').removeAttr('data-toggle').removeAttr('data-target').click(e=>{
				alert('취소');
			});
			});
	   $('#cancelBtn')
       .attr('data-toggle','modal')
       .attr('data-target','#modal')
       .addClass('btn btn-primary')
       .html('삭제하기')
       .click(e=>{
    	  $('#confirmPass').click(e=>{
          e.preventDefault();
          var _pass= $('#userPass').val();
          var _seq=data.detail.articleSeq;
          var _id=data.detail.id;
          alert('넘어온 시퀀스와  비번 : '+_seq+','+_pass);   

          $.ajax({
              url : ctx+'/delete/articles/',
              method : 'post',
              dataType: 'json',
              data : JSON.stringify({
                 'articleSeq' : _seq,
                 'regdate' : _pass,
                 'id' : _id
                 //자바 프로퍼티와 일치 시켜줘야함
              }),
              contentType : 'application/json',
              success : d=>{
                 if(d.result==='success'){
                    alert('ajax 통신 성공');
                    list();
                    $('.modal-backdrop fade in').remove();
                    
                 }else{
                    alert('ajax 통신 실패');
                 };
                 
                 
              },
              error : (x,s,m)=>{
					alert('글 수정시 에러발생'+m);
				}       	       	  
          });
    	  });
       });
       });	   
	});
}

	var update =(x)=>{
		alert('update');
		$('#header').html('게시글 수정하기');
		$('#confirmBtn').html('확인').click(e=>{
			e.preventDefault();
			detail(x);
			
		});
		 
	}
	var deleteArticle=(x)=>{
		alert('delete');		
	};

	return {
		detail : detail,
		write : write,
		deleteArticle : deleteArticle,
		update : update,
		list : list
		}
})();

meta.navbar=(()=>{
	var algo,js,temp;
	var init=()=>{
		js=$$('j');
		algo=js+'/algo.js';
		temp=js+'/template.js';
		onCreate();
	};
	var onCreate=()=>{
		$.getScript(temp,()=>{			
			$('#navbar').html(introUI.navbar());		
		var $u1=$("#navbar_ul_stu");
		var $u2=$("#navbar_ul_grade");
		var $u3=$("#navbar_ul_board");
		$u1.addClass("dropdown-menu");
		$u2.addClass("dropdown-menu");
		$u3.addClass("dropdown-menu");
		var $home=$('#home');
		var $logout=$('#logout')
				
		$('.dropdown-menu a').eq(0).click(()=>{
			alert('0');
			/*app.controller.moveTo('member','member_add');*/
			/*location.href=app.path.ctx()+"/member/add";*/
		});
		$('.dropdown-menu a').eq(1).click(()=>{
			alert('1');
			/*app.member.list(1);*/
			/*location.href=app.path.ctx()+"/member/list";*/
			/*controller.list('member','member_list','1');*/
		});
		$('.dropdown-menu a').eq(2).click(()=>{
			alert('2');
			/*app.controller.moveTo('member','member_detail');*/
			/*location.href=app.path.ctx()+"/member/detail";*/
			/*controller.moveTo('member','member_detail');*/
		});
		$('.dropdown-menu a').eq(3).click(()=>{
			alert('3');
			/*app.controller.deleteTarget(prompt('삭제할 ID를 입력하세요'),'member','member_list');*/
			/*location.href=app.path.ctx()+"/member/delete";*/
          /*controller.deleteStudent();*/
		});
		$('.dropdown-menu a').eq(4).click(()=>{
			alert('4');
			/*app.controller.moveTo('grade','grade_add');*/
			/*location.href=app.path.ctx()+"/grade/add";*/
		});
		$('.dropdown-menu a').eq(5).click(()=>{
			alert('5');
			/*app.controller.moveTo('grade','grade_list');*/
			/*location.href=app.path.ctx()+"/grade/list";*/
			/*controller.list('member','member_list','1');*/
		});
		$('.dropdown-menu a').eq(6).click(()=>{
			alert('6');
			/*app.controller.moveTo('grade','grade_detail');*/
			/*location.href=app.path.ctx()+"/grade/detail";*/
			/*controller.moveTo('member','member_detail');*/
		});
		$('.dropdown-menu a').eq(7).click(()=>{
			alert('7');
			/*app.controller.deleteTarget(prompt('삭제할 성적을 가진 ID를 입력하세요'),'grade','grade_list');*/
			/*location.href=app.path.ctx()+"/grade/delete";*/
          /*controller.deleteStudent();*/
		});
		$('.dropdown-menu a').eq(8).click(()=>{
			alert('8');
			/*app.controller.moveTo('board','board_write');*/
			/*location.href=app.path.ctx()+"/board/write";*/
		});
		$('.dropdown-menu a').eq(9).click(()=>{
			alert('9');
			/*app.controller.moveTo('board','board_list');*/
			/*location.href=app.path.ctx()+"/board/list";*/
			/*controller.list('member','member_list','1');*/
		});
		$('.dropdown-menu a').eq(10).click(()=>{
			alert('10');
			/*app.controller.moveTo('board','board_detail');*/
			/*location.href=app.path.ctx()+"/board/detail";*/
		});
		$('.dropdown-menu a').eq(11).click(()=>{
			alert('11');
			/*app.controller.deleteTarget(prompt('삭제할 게시글을 가진 ID를 입력하세요'),'board','board_list');*/
			/*location.href=app.path.ctx()+"/board/delete";*/
          /*controller.deleteStudent();*/
		});
		$('#arithBtn').click(()=>{
			alert('등차수열 클릭');
			$('#content').remove();
			$.getScript(temp,()=>{
				$('#container').html(algoUI.series());
				$.getScript(temp,()=>{
					$('#start_num').append(compUI.input({
						type : 'text' , 
						id : 'start_num_text',
						placeholder : '시작값 입력'
					}));
					$('#last_num').append(compUI.input({
						type : 'text',
						id : 'last_num_text',
						placeholder : '마지막 값 입력'
					}));
					$('#aa').append(compUI.input({
						type : 'button',
						id : 'algo_button',
						value : '연산하기'
					}));	
					/*	$('#start_num_text').val('1');
					$('#last_num_text').val('100');*/
					$('#start_num_text').val('1').attr('readonly','true');
					$('#last_num_text').val('100').attr('readonly','true');
					$('#algo_button').click(()=>{					
						$.getScript(algo,(x1,x2)=>{
							$('#result').text('결과값 : ' + series.arithmetic($('#start_num_text').val(),$('#last_num_text').val()));
						});				
					});
				});			
			});		
		});
		$('#switchBtn').click(()=>{
			alert('스위치수열 클릭');
			$('#container').empty();
			/*$('#content').remove();*/
			$.getScript(temp,()=>{
				$('#container').html(algoUI.series());
				$.getScript(temp,()=>{
					$('#start_num').append(compUI.input({
						type : 'text' , 
						id : 'start_num_text',
						placeholder : '시작값 입력'
					}));
					$('#last_num').append(compUI.input({
						type : 'text',
						id : 'last_num_text',
						placeholder : '마지막 값 입력'
					}));					
					$('#aa').append(compUI.input({
							type : 'button',
							id : 'algo_button',
							value : '연산하기'
					}));		
				/*$('h1').empty();*/
				/*$('h1').text('스위치수열의 합');*/
				$('h1').html('스위치수열의 합');//엠티와,텍스트를 합친 역할을 한다.//여기에 스트링값이 아니라 돔객체가 들어오면 object로만 표시된다.
				/*$('#start_num_text').val('1');*/
			/*	$('#start_num_text').attr('value','1');//위에것과 같다. val()=파라미터 안의 값이 없으면 게터, 값이 있으면 세터의 역할이다.
				$('#last_num_text').val('100');*/
				$('#start_num_text').val('1').attr('readonly','true');//밸류값 수정못하게 하는 역할
				$('#last_num_text').val('100').attr('readonly','true');
				$('#algo_button').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값 : ' + series.switchSeries())
					})				
				});
			/*	$('#algo_button').on('click',function(){
					$('#result').text('결과값 : ' + meta.algo.switchSeries())
				});*/
				});	
			});
		});
		$('#geoBtn').click(()=>{
			alert('등비수열 클릭');
			$('#container').empty();
			$.getScript(temp,()=>{
				$('#container').html(algoUI.series());
				$.getScript(temp,()=>{
					$('#start_num').after(compUI.input({
						type : 'text' , 
						id : 'start_num_text',
						placeholder : '시작값 입력'
					}));
					$('#last_num').after(compUI.input({
						type : 'text',
						id : 'last_num_text',
						placeholder : '마지막 값 입력'
					}));					
					$('#aa').after(compUI.input({
							type : 'button',
							id : 'algo_button',
							value : '연산하기'
					}));		
				$('h1').html('계차수열의 합');
				$('#last_num').remove();
				$('#last_num_text').remove();
				$('#start_num').text('항수');
				$('#algo_button').click(()=>{
					$.getScript(algo,(x)=>{
						$('#result').text('결과값 : ' + series.seq_of_diff($('#start_num_text').val()));	
					});
				});				
			});
		});		
	});
		$('#facBtn').click(()=>{
			alert('팩토리얼 클릭');
			$('#container').empty();
			$.getScript(temp,()=>{
				$('#container').html(algoUI.series());
				$.getScript(temp,()=>{
					$('#start_num').after(compUI.input({
						type : 'text' , 
						id : 'start_num_text',
						placeholder : '시작값 입력'
					}));
					$('#last_num').after(compUI.input({
						type : 'text',
						id : 'last_num_text',
						placeholder : '마지막 값 입력'
					}));					
					$('#aa').after(compUI.input({
							type : 'button',
							id : 'algo_button',
							value : '연산하기'
					}));		
				$('h1').html('팩토리얼의 합');
				$('#last_num').remove();
				$('#last_num_text').remove();
				$('#start_num').text('항수');
				$('#algo_button').click(()=>{
					$.getScript(algo,(x)=>{
						$('#result').text('결과값 : ' + series.fac($('#start_num_text').val()))	
				});
			});				
		});
	});
});
		$('#fiboBtn').click(()=>{
			alert('피보나치수열 클릭');
		$('#container').empty();
		$.getScript(temp,()=>{
			$('#container').html(algoUI.series());
			$.getScript(temp,()=>{
				$('#start_num').after(compUI.input({
					type : 'text' , 
					id : 'start_num_text',
					placeholder : '시작값 입력'
				}));
				$('#last_num').after(compUI.input({
					type : 'text',
					id : 'last_num_text',
					placeholder : '마지막 값 입력'
				}));					
				$('#aa').after(compUI.input({
						type : 'button',
						id : 'algo_button',
						value : '연산하기'
				}));		
			$('h1').html('피보나치수열의 합');
			$('#last_num').remove();
			$('#last_num_text').remove();
			$('#start_num').text('항수');
			$('#algo_button').click(()=>{
				$.getScript(algo,(x)=>{
				$('#result').text('결과값 : ' + series.fibo($('#start_num_text').val()));
				}); //외부의 함수를 호출하는 구문
				/*$('#result').text('결과값 : ' + series.fibo($('#start_num_text').val()));*/
				});
			});
		});		
	});
		$('#selBtn').click(()=>{
			alert('선택정렬 클릭');
			$('#content').remove();
			var index=-1;
			$.getScript(temp,()=>{
				var array=new Array();
				$('#container').html(algoUI.sort());
				$.getScript(temp,()=>{
					$('#start_num').append(compUI.input({
						type : 'text' , 
						id : 'sort_text',
						placeholder : '숫자를 하나씩 입력하세요'
					}));
					$('#aa').append(compUI.input({
						type : 'button',
						id : 'sort_button',
						value : '숫자입력'
					}));	
					$('#sort_button').click(()=>{
						index++;
						array[index]=$('#sort_text').val();
						console.log(array);
						$('#sort_text').val("");
						if(index==4){
							$.getScript(algo,()=>{
								$('#result').text('결과값 : ' + sort.selection(array));
							});			
						}
					
					});
				});			
			});		
		});
		$('#burbleBtn').click(()=>{
			alert('버블정렬 클릭');
			$('#content').remove();
			$.getScript(temp,()=>{
				var index=-1;
				var array=new Array();
				$('#container').html(algoUI.sort());
				$('h1').html('버블정렬');
				$.getScript(temp,()=>{
					$('#start_num').append(compUI.input({
						type : 'text' , 
						id : 'sort_text',
						placeholder : '숫자를 하나씩 입력하세요'
					}));
					$('#aa').append(compUI.input({
						type : 'button',
						id : 'sort_button',
						value : '숫자입력'
					}));	
					
					$('#sort_button').click(()=>{
						index++;
						array[index]=$('#sort_text').val();
						console.log(array);
						$('#sort_text').val("");
						if(index==4){
						$.getScript(algo,()=>{
							$('#result').text('결과값 : ' + sort.burble(array));
						});				
						}
					});
				});			
			});		
		});
		$('#insertBtn').click(()=>{
			alert('삽입정렬 클릭');
			$('#content').remove();
			$.getScript(temp,()=>{
				$('#container').html(algoUI.sort());
				$('h1').html('삽입정렬');
				$.getScript(temp,()=>{
					$('#start_num').append(compUI.input({
						type : 'text' , 
						id : 'sort_text',
						placeholder : '숫자를 하나씩 입력하세요'
					}));
					$('#aa').append(compUI.input({
						type : 'button',
						id : 'sort_button',
						value : '숫자입력'
					}));	
					
					$('#sort_button').click(()=>{					
						$.getScript(algo,()=>{
							$('#result').text('결과값 : ' + sort.insertion());
						});				
					});
				});			
			});		
		});
		$('#rankBtn').click(()=>{
			alert('석차구하기 클릭');
			$('#content').remove();
			$.getScript(temp,()=>{
				$('#container').html(algoUI.sort());
				$('h1').html('석차구하기');
				$.getScript(temp,()=>{
					$('#start_num').append(compUI.input({
						type : 'text' , 
						id : 'sort_text',
						placeholder : '숫자를 하나씩 입력하세요'
					}));
					$('#aa').append(compUI.input({
						type : 'button',
						id : 'sort_button',
						value : '숫자입력'
					}));	
					$('#sort_button').click(()=>{					
						$.getScript(algo,()=>{
							$('#result').text('결과값 : ' + sort.ranking());
						});				
					});
				});			
			});		
		});
		$('#home a').click(()=>{
			alert('home');
			app.controller.moveTo('common','main');
			/*location.href=app.path.ctx()+"/auth/main";*/
		});
		
		$('#logout').click(()=>{
			alert('logout');
			app.controller.moveTo('common','login');
			/*location.href=app.path.ctx()+"/auth/main";*/
		});
	});
	};
	
	return {
		init : init
	};
})();

/*meta.ui=(()=>{
	var $wrapper,$ctx,$css,$img,$js,$container,$navbar;
	var init=()=>{
		$wrapper=$('#wrapper');$ctx=$$('x');$css=$$('c');$img=$$('i');$js=$$('j');$navbar=$('#navbar');$container=$('#container');
	};
	var navbar= ()=>{//dom객체에서 append(dom에 dom을 붙이는것),html(html코딩과 같다) 

	}
	var arithmetic=function(){
		1부터 100까지 등차수열의 합
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
	
	return {
		init : init,
		arithmetic : arithmetic,
		navbar : navbar
	};
})();*/


meta.session=
	{
	init : (ctx)=>{
		sessionStorage.setItem('x',ctx);
		sessionStorage.setItem('j',ctx+'/resources/js');
		sessionStorage.setItem('i',ctx+'/resources/img');
		sessionStorage.setItem('c',ctx+'/resources/css'); 
	},
	
	getPath : (x)=>{
		return sessionStorage.getItem(x)
	}
	};
	


var $$=(x)=>{return meta.session.getPath(x);};



