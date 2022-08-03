$(function(){
	
	let time = null;  //防抖
	
	let o = {}; //全局缓存
	//输入框防抖
	
	//拿到输入框内输入我值
	
	function repeatData(kw){
		
		time = setTimeout(function(){
			
			getData(kw);
			
		},500)
		
	}
	
	$('.ipt').on('keyup',function(){
		
		clearTimeout(time);
		
		let value = $(this).val().trim();
		
		// console.log(value)
		if(value.length <= 0){
			
			return $('#suggest-list').empty().hide();
			
		}
		
		if(o[value]){
			
		   return 	readerList(o[value])
		}
		
		repeatData(value);
		
	})
	
	//拿数据
	function getData(value){
		
		$.ajax({
			
			method : 'GET',
			
			url:'https://suggest.taobao.com/sug?q=' + value,
			
			dataType : 'jsonp',
			
			success : function(res){
				
				readerList(res)
				console.log(res)
				
			}
			
		})
		
	}
	
	//渲染模板
	function readerList(res){
		
		if(res.result.length <= 0){
			
			return $('#suggest-list').empty().hide();
			
		}
		
		let tempHtml = template('seachCon',res);
		
		$('#suggest-list').empty().show().append(tempHtml);
		
		//缓存
		
		let k =  $('.ipt').val().trim();  //输入的值做属性
		
		o[k] = res;
		
		// console.log(o)
		
	}
	
	
	//点击除了目标元素以为的地方隐藏下拉搜索
	$('.box').on('click',function(e){
		
		//阻止冒泡
		
		e.stopPropagation();
		
	})
	
	
	$(document).on('click',function(){
		
		$('#suggest-list').empty().hide();
		$('.ipt').val('');
		
	})
	
})