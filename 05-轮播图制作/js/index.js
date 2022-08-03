window.addEventListener('load', function() {
   
   var focus = document.querySelector('.focus');
   
   var leftbtn = document.querySelector('.arrow-l');
   
   var rigthbtn = document.querySelector('.arrow-r');
   
   var circle = document.querySelector('.circle');
   
   var ul = focus.querySelector('ul');
   
   var ol = focus.querySelector('.circle');
   
   var fousWidth = focus.offsetWidth;
   
   //鼠标滑入   左右按钮显示
   
   focus.addEventListener('mouseenter',function(){
   	
   		leftbtn.style.display = 'block';
   		
   		rigthbtn.style.display = 'block';
   		
   		clearInterval(time);
   		
   		time = null;
   	
   })
   
   //鼠标滑出  按钮隐藏
   
    focus.addEventListener('mouseleave',function(){
   	
   		leftbtn.style.display = 'none';
   		
   		rigthbtn.style.display = 'none';
   		
   	    time = setInterval(function(){
 		
 		rigthbtn.click();
	 		
	 	},1500)
   		
   		
   	
   })
    
   //下面的小圆圈
 
   
   
   for (var i = 0; i < ul.children.length; i++) {
   	
   		var li = document.createElement('li');
   		
   		li.setAttribute('index',i);  //索引
   		
   		ol.appendChild(li);
   		
		//给每一个圈圈添加点击事件
		
		li.addEventListener('click',function () {
			
		//小圈圈  排他思想
			
			for (var i = 0; i < ol.children.length; i++) {
				
				 ol.children[i].className ='';
				
			}
			
			this.className = 'current';
			
		//点击让图片移动   给每个li添加一个索引   
		//ul移动的距离就  索引 * 图片的宽度	
			
			//获得当然点击圈圈的索引
			
			var index = this.getAttribute('index');
			
			num = index;
			
			circle = index;
			
			animate(ul,-index * fousWidth)
			
			//判断如果到了最后一张  left = 0
			
		})
		
   		
   	
   }
   
    //右移动
  	
   var num = 0;
   
   var circle = 0; //
   
   ol.children[0].className = 'current';  //第一个圈圈白色
   
   //克隆一个li
   
   var lilast = ul.children[0].cloneNode(true);
   
   ul.appendChild(lilast);
   
   var flag = true;
   
   rigthbtn.addEventListener('click',function () {
   	
   		//声明一个变量  num = 0
   		//每点击一次++ ul * num
   		
   		//如果到了最后一张  left = 0 num =0;
   		
   		if(flag){   //关水龙头
   			
   			flag = false;
   			
   			if (num == ul.children.length-1) {
   			
   			ul.style.left = 0;
   			
   			num = 0;
   			
   		}
   		
   		num++;
   		
   		
   		
   		animate(ul,-num * fousWidth,function(){
   			
   			flag = true;
   			
   		})
   		
   		
   		
   		circle++;
   		
   		if (circle == ol.children.length) {
   			
   			circle = 0;
   			
   		}
   		
   		//让小圆圈跟随一起变化
   		for (var i = 0; i < ol.children.length; i++) {
   			
   			ol.children[i].className = '';
   			
   		}
   		
   		ol.children[circle].className = 'current';
   			
   		}
   		
   		
   		
   	
   })
   
   
    leftbtn.addEventListener('click',function () {
   	
   		//声明一个变量  num = 0
   		//每点击一次++ ul * num
   		
   		//如果到了最后一张  left = 0 num =0;
   		
   		if (num == 0) {
   			
   			num = ul.children.length-1;
   			
   			ul.style.left = -num * fousWidth + 'px';
   			
   		}
   		
   		
   		
   		num--;
   		
   		
   		
   		animate(ul,-num * fousWidth)
   		
   		
   		
   		circle--;
   		
// 		console.log(circle)
   		
   		if (circle < 0) {
   			
   			circle = ol.children.length-1;
   			
   		}
   		
   		//让小圆圈跟随一起变化
   		for (var i = 0; i < ol.children.length; i++) {
   			
   			ol.children[i].className = '';
   			
   		}
   		
   		ol.children[circle].className = 'current';
   		
   	
   })
   
   
   //添加定时器自动轮播
 
 	var time = setInterval(function(){
 		
 		rigthbtn.click();
 		
 	},1500)

})