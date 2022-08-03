//面向对象轮播图
let that;
// let num = 0;//计数器		
// let count = 0; //小圆圈计数
// let flag = true; //节流阀
class Img {
	
	constructor(id){
		
		that = this;
		
		//获取所需要的元素
		this.main = document.querySelector(id);
		
		// console.log(this.main)
		// console.log(this.main)
		
		this.ol = this.main.querySelector('ol');
		
		this.ul = this.main.querySelector('ul');
		
		this.arrow_l = this.main.querySelector('.arrow-l');
		
		this.arrow_r = this.main.querySelector('.arrow-r');
		
		this.binding()
		
		//初始化第一个小圈圈
		this.ol.children[0].className = 'current';
		
		this.mainWidth = this.main.offsetWidth;
		
		//克隆一个li放在最后面
		let lilast =  this.ul.children[0].cloneNode(true); 
		this.ul.appendChild(lilast);
		
		this.num = 0;//计数器
		this.count = 0;//小圆圈计数
		
		this.flag = true;
		
		
	}
	
	// 绑定事件函数
	binding(){
		this.automatic();
		this.main.onmouseenter = this.show;
		this.main.onmouseleave = this.hide;
		this.arrow_r.onclick = this.rightmove;
		this.arrow_l.onclick = this.letmove;
		// 动态生成小园圈
		for (let i = 0; i < this.ul.children.length; i++) {
			
			let li = document.createElement('li');
			
			li.index = i;  //索引
			
			this.ol.appendChild(li);
			
			//给每一个小圈圈添加点击事件
			
			li.onclick = function(){
				
				that.clearClass();
				
				this.className = 'current'
				
				let index = this.index;
				
				this.num = index;
				
				this.count = index;
				
				animate(that.ul,-index * that.mainWidth);
				
			
				
			}
			
			
			
		}
		
	}
	
	//小圈圈
	
	//清除样式
	clearClass(){
		
		for (let i = 0; i < this.ol.children.length; i++) {
			
			this.ol.children[i].className = '';
			
		}
		
	}
	
	// 鼠标划过显示  离开隐藏
	show(){
		
		that.arrow_l.style.display = 'block';	
		that.arrow_r.style.display = 'block';
		
		//清除定时器
		
		clearInterval(that.time);
		
		that.time = null;
		
	}
	
	hide(){
		
		that.arrow_l.style.display = 'none';
		that.arrow_r.style.display = 'none';
		
		//开启定时器
		that.time = setInterval(function(){
			
			that.arrow_r.click();
			
			// console.log(this)
		},1300)
		
	}
	
	//右按钮
	rightmove(){
		
		if(that.flag){
			
			that.flag = false;
			
			if( that.num == that.ul.children.length-1){
				
				that.ul.style.left = 0;
				
				that.num = 0;
				
			}
			
			
			that.num++;
			
			
			// console.log(num)
			
			animate(that.ul,-that.num * that.mainWidth,function(){
				
				that.flag = true;
				
			})
			
			that.count++;
			
			if(that.count == that.ol.children.length){
				
				that.count = 0;
				
			}
			
			that.clearClass();
			
			that.ol.children[that.count].className = 'current'
			
		}
		
	}
	
	// 左按钮
	letmove(){
		
		if(flag){
			
			that.flag = false;
			
			// alert('13')
			
			if( that.num == 0){
				//that.ul.children.length-1
				
				that.num = that.ul.children.length-1;
				
				that.ul.style.left = -that.num * that.mainWidth + 'px';
				
				
				
			}
			
			
			that.num--;
			
			
			// console.log(num)
			
			animate(that.ul,-that.num * that.mainWidth,function(){
				
				that.flag = true;
				
			})
			
			that.count--;
			
			if(that.count < 0){
				
				that.count = that.ol.children.length-1;
				
			}
			
			that.clearClass();
			
			that.ol.children[that.count].className = 'current'
			
		}
		
	}
	
	//自动轮播
	automatic(){
		
	    this.time = setInterval(function(){
			
			that.arrow_r.click();
			
			// console.log(this)
		},1300)
		// console.log(this)
		// console.log(that)
	}
	
}

new Img('#mainCon');

// var gg = new Img();

// console.log(gg.__poto__)