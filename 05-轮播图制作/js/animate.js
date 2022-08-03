function animate (obj,target,callback) {
	
	
				clearInterval(obj.time);   //一定要先清除定时器
				
				obj.time = setInterval(function(){
				
					var dinleft = obj.offsetLeft;  //Math.ceil  天花板函数     Math.floor 地板函数
					
				    var step =(target - dinleft) / 10;  
					
					step = step > 0 ? Math.ceil(step) : Math.floor(step);  //速度大于0  是向上取整  速度如果小于0则向下取整
					
					console.log(step)
					
					if(dinleft == target){
						
						clearInterval(obj.time);
						
//						if (callback) {
//							
//							callback();
//							
//						}
						
						callback && callback();
						
					}
					
					obj.style.left = dinleft + step + 'px'
					
				},15)
				
}