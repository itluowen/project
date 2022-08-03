window.addEventListener('load',function(){
	
	//获取需要的元素
	
	var box = document.querySelector('.focus');
	
	var leftbtn = document.querySelector('.arrow-l');
	
	var rigbtn = document.querySelector('.arrow-r');
	
	var ul = box.querySelector('ul');
	
	var ol = box.querySelector('.circle');
	
	var boxWidt = box.offsetWidth;
	
	
	//1.鼠标经过   左右按钮显示
	box.addEventListener('mouseenter',function(){
		
		leftbtn.style.display = 'block';
		
		rigbtn.style.display = 'block';
		
		
		//关闭定时器
		
		clearInterval(time);
		
		time = null;
		
		
	})
	
	//2.鼠标经过   左右按钮隐藏
	
	box.addEventListener('mouseleave',function(){
		
		leftbtn.style.display = 'none';
		
		rigbtn.style.display = 'none';
		
		//开启定时器
		
		time = setInterval(function(){
			
			rigbtn.click();
			
		},1500)
		
		
	})
	
	
	//3.小圆圈部分 
	//--动态生成小圆圈   圆圈的个数 == ul的子元素的长度(也就是图片的个数)
	
	for (var i = 0; i < ul.children.length;i++) {
//		console.log(i)
		var li = document.createElement('li');
		
		li.setAttribute('index',i)
		
		ol.appendChild(li);
		
		
		
		//给每个小li添加点击事件
		//让图片动起来
		//ul移动距离  = li.index * box的宽度boxWidt    index (自定义添加的属性作为li的索引值)
		
		li.addEventListener('click',function(){
			
			//排他
			
			//索引
			
			var index  = this.getAttribute('index');
			
			for (var i = 0; i < ol.children.length; i++) {
				
				ol.children[i].className = '';
				
			};
			
			this.className = 'current';
			
			num = index;
			
			circe = index;
			
			//图片位移
			
//			console.log(index)
			
			animate(ul,-index * boxWidt)
			
		})
		
	}
	
	//--克隆第一张图片放到最后
	
	var li = ul.children[0].cloneNode(true);
	
	ul.appendChild(li);
	
	//第一个圆圈默认白色
	
	ol.children[0].className = 'current';
	
	var num = 0;
	
	var circe = 0;  //两个变量  一个变量 作为可以乘以   * boxWidth   //一个作为小圆圈跟随按钮变化的索引
	
	//4.点击右按钮部分
	
	var flag = true;
	
	rigbtn.addEventListener('click',function(){
		
		//节流阀
		
		if (flag) {
			
			flag = false;
			
			if (num == ul.children.length-1) {  //0 1 2 3 4   // length -1
			
				ul.style.left = 0 ;
				
				num = 0;
				
			}
			
			num++;
			
			animate(ul,-num * boxWidt,function(){
				
				flag = true;
				
			});
			
			
			circe++;
			
	//		console.log(circe)
			
			if (circe == ol.children.length) {   //这里 circe从1开始   1 2 3 4  所以是等于length
				
				circe = 0;
				
				
			}
			
			change();
			
		}
		
		
		
		
	})
	
	
	//5.点击左按钮部分
	
	leftbtn.addEventListener('click',function(){
		
		//节流阀
		
		if (flag) {
			
			flag = false;
			
			if (num == 0) {
				
				num = ul.children.length-1;   // 0 1 2 3 4  length-1
				
				ul.style.left = -num * boxWidt + 'px';
				
				
				
			}
			
			num--;
			
			animate(ul,-num * boxWidt,function(){
				
				flag = true;
				
			});
			
			
			circe--;
			
			if (circe < 0) {  //这里是  circe  -1
				
				circe = ol.children.length-1;   //这里是  circe 所以3是最后一个  0 1 2 3 所以length -1
				
				
			}
			
			change();
			
		}
		
		
		
		
	})
	
	
	//6.自动轮播部分
	
	var time = setInterval(function(){
		
		rigbtn.click();
		
	},1500)
	
	
	//封装函数  小圆圈跟随鼠标变化
	
	function change(){
		
		for (var i = 0; i < ol.children.length; i++) {
				
			ol.children[i].className = '';
			
			
		}
		
		ol.children[circe].className = 'current';
		
	}
	
	
})