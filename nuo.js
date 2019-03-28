var ctx=document.getElementById('ctx');
	// 1.点击按钮实现播放暂停并切换图标
	// 2.点击快进或者后退时间+-5s；
	// 2.算出视频的总显示时间’
	// 3.当视频播放时，进度条同步，当前时间同步
	// 4.点击全屏
	var video=document.querySelector("video");
	var playBtn=document.querySelector(".switch");
	var slowBtn=document.querySelector(".slow");
	var fastBtn=document.querySelector(".fast");
	var total_time=document.querySelector('.total-time');
	var cur_time=document.querySelector(".cur-time");
	var extend=document.querySelector(".extend");
	var cur_progress=document.querySelector(".curr-progress");

	playBtn.addEventListener('click',function(){
		if(video.paused){
			video.play();
			this.classList.remove('icon-play');
			this.classList.add('icon-pause');
		}else{
			video.pause();
			this.classList.remove('icon-pause');
			this.classList.add('icon-play');
		}
	})

	slowBtn.addEventListener('click',function(){
		video.currentTime-=5;
	})

	fastBtn.addEventListener('click',function(){
		video.currentTime+=5;
	})

	video.addEventListener('canplay',function(){
		tTime=video.duration;
		var h=Math.floor(tTime/3600);
		var m=Math.floor(tTime%3600/60);
		var s=Math.floor(tTime%60);

		h=h>=10?h:"0"+h;
		m=m>=10?m:"0"+m;
		s=s>=10?s:"0"+s;
		total_time.innerHTML=h+':'+m+':'+s;
	})

	video.addEventListener('timeupdate',function(){
		var cTime=video.currentTime;
		var h=Math.floor(cTime/3600);
		var m=Math.floor(cTime%3600/60);
		var s=Math.floor(cTime%60);

		h=h>=10?h:"0"+h;
		m=m>=10?m:"0"+m;
		s=s>=10?s:"0"+s;
		cur_time.innerHTML=h+":"+m+":"+s;
		cur_progress.style.width=(cTime/tTime)*100+"%";

	})

	extend.addEventListener('click',function(){
		video.webkitRequestFullScreen();
	})