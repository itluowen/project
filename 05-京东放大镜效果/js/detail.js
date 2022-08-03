window.addEventListener('load', function() {
  
     var preview_img = document.querySelector('.preview_img');
     
     var yellowBox = document.querySelector('.mask');
     
     var bigBox = document.querySelector('.big');
     
     var bigming = document.querySelector('.bigImg');
     
     
     preview_img.addEventListener('mouseover',function(){
     	
     	yellowBox.style.display = 'block';
     	
     	bigBox.style.display = 'block';
     	
     })
     
     
      preview_img.addEventListener('mouseout',function(){
     	
     	yellowBox.style.display = 'none';
     	
     	bigBox.style.display = 'none';
     	
     })
      
      preview_img.addEventListener('mousemove',function(e){
      	
      	//获取鼠标的坐标
      	var x = e.pageX - this.offsetLeft;
      	
      	var y = e.pageY - this.offsetTop;
      	
      	
      	var yellowX = x - yellowBox.offsetWidth / 2;
      	
      	var yellowY = y - yellowBox.offsetHeight / 2;
      	
      	var yellowXmax = preview_img.offsetWidth - yellowBox.offsetWidth;
      	
   	     	
      	
      	
      	
      	if (yellowX <=0 ) {
      		
      		yellowX = 0;
      		
      	} else if(yellowX >= yellowXmax){
      		
      		yellowX = yellowXmax
      		
      	} 
      	
      	
      	if(yellowY <= 0){
      		
      		yellowY = 0;
      		
      	}else if(yellowY >= yellowXmax){
      		
      		yellowY = yellowXmax;
      		
      	}
//    	else if(){}
      	yellowBox.style.left = yellowX + 'px';
      	
      	yellowBox.style.top = yellowY + 'px';
      	
//    	console.log(x,y)

		//大图移动的坐标  
		//遮罩层移动的距离 * 大图最大移动距离 / 遮罩层最大移动距离
		
		//bigBox
		
		var bigboxMax =  bigming.offsetWidth - bigBox.offsetWidth ;
		
		var bigX = yellowX * bigboxMax / yellowXmax;
		
		var bigy = yellowY * bigboxMax / yellowXmax;
		
		
		bigming.style.left = -bigX + 'px';
		
		bigming.style.top = -bigy + 'px';	

      })

})