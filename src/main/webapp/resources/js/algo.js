var series={
	arithmetic : (s,e)=>{			
		var i=0,sum=0;
		for(var i=0;i<=100;i++){
			sum+=i;
		}
		return sum;			
},
switchSeries : ()=>{
	var i=0,sum=0,sw=0;
	
	do {
		i++;
		if(sw==0){
			sum+=i;
			sw=1;
		}else {
			sum-=i;
			sw=0;
		}
	}while(i<100)
		return sum;
	},
	seq_of_diff : x=>{
	var i=1,diff=1,sum=0;
	var seq=$('#start_num_text').val();
	for(j=0;j<seq;j++){
		console.log('i : '+i);
		console.log('diff : '+diff);
		console.log('sum : '+sum);
		sum+=i;
		i=i+diff;
		diff=diff+1;
	}
	return sum
	},
	fac : (x)=>{
	var n=0,f=1,s=0;
	/*var seq=$('#start_num_text').val();*/
	var seq=x*1;
	console.log(seq);
	for(var i=0;i<seq;i++){
		n++;
		console.log('n :'+n);
		f=f*n;
		console.log('f : '+f);
		s=s+f;
		console.log('s : '+s);
	}
		return s;
	},
	fibo : (x)=>{
		alert('확인 --> '+x)
		var number1=1,number2=1,sum=number1+number2,newnum=0;
		var num=$('#start_num_text').val();
		for(var i=1;i<num;i++){
			newnum+=sum;
			sum=number1+number2;
			number1=number2;
			number2=sum;
		}
		return newnum;
	}
}
var sort={
	selection : (x)=>{
		alert(x);
		var size=x.length;
		var temp,min,cup;
		
		for(var i=0; i<size-1; i++){ // size-1 : 마지막 요소는 자연스럽게 정렬됨
            min = i;
            for(var j=i+1; j<size; j++){
                if(x[min] > x[j]){
                    min = j;
                }
            }
            temp = x[min];
            x[min] = x[i];
            x[i] = temp;
        }
		return x;
	},
	burble : (x)=>{
		alert(x);
		   var temp = 0; 
	          for(var i = 0; i < x.length - 1; i++){ 
	              for(var j = 0; j < e.length - 1 - i; j++){ 
	                 
	                  if(x[j]*1 > x[j+1]*1){ 
	                      temp = x[j]; 
	                      x[j] = x[j+1]; 
	                      x[j+1] = temp;                                      
	                  } 
	              } 
	          } 
	         return x;
	},
	insertion : ()=>{
		alert(x);
	},
	ranking : ()=>{
		alert(x);
	},
}