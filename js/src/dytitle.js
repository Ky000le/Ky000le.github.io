<!--崩溃欺骗--> 
var OriginTitile = document.title; 
 var titleTime; 
 document.addEventListener('visibilitychange', function () { 
	 if (document.hidden) { 
	     $('[rel="icon"]').attr('href', "/img/TEP.ico");
		 document.title = ' 页面崩溃啦(╯>д<)╯⁽˙³˙⁾ ~ | cwyaml！'; 
		 clearTimeout(titleTime); 
     } 
	 else { 
	     $('[rel="icon"]').attr('href', "/favicon.ico"); 
		 document.title = ' 噫又好了٩(๑>◡<๑)۶ ~ ' + OriginTitile; 
		 titleTime = setTimeout(function () { 
			 document.title = OriginTitile; 
		 }, 2000);
	 } 
});
