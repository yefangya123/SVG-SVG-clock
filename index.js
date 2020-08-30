function showtime(){
	var nowtime = new Date()
	var h = nowtime.getHours();
	var m = nowtime.getMinutes();
	var s = nowtime.getSeconds();
	
	h = checktime(h);
	m = checktime(m);
	s = checktime(s);
	
	return h + ":" + m + ":" + s;
	
}

function checktime(x){
	if(x<10){
		x = "0" + x;
	}
	return x;
}


var divList = document.querySelectorAll("text");//返回指定的选择器text返回所有元素的对象集合

setInterval(()=>{
	timeStr =showtime()
	divList.forEach((item)=>{		
		item.innerHTML = timeStr ;
	})
},1000)
//setInterval函数指定某个任务每隔一段时间就执行一次，也就是无限次的定时执行。这里是每1000毫秒执行一次