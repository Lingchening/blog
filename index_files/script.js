$(document).ready(function(){
	var a="w";var b=".footer .footer_in  .f_bq  .banquan";
	var d="com";var e="cn";var c="theme";
	$("#post_admin .main_title").click(function(){
		if($(this).next(".nopading").hasClass("opneds")){
			$(this).next(".nopading").removeClass("opneds");
			$(this).next(".nopading").fadeOut(500);
			$(this).children("em").html("点击打开")
		}else{
			$(this).next(".nopading").addClass("opneds");
			$(this).next(".nopading").fadeIn(500);
			$(this).children("em").html("点击关闭")
		}
	});
	$(".sticky_images").hover(function(){
		$(this).children(".sticky_ex").stop(true,true).fadeIn("200")
	},
	function(){
		$(this).children(".sticky_ex").stop(true,true).fadeOut("1000")
	});
	$("#nav_b").click(function(){
		if($(this).hasClass("closed_nav_b")){
			$(this).removeClass("closed_nav_b");
			$(this).next("ul").stop(true,true).fadeOut("200")
		}else{
			$(this).addClass("closed_nav_b");
			$(this).next("ul").stop(true,true).fadeIn("200")
		}
	});
	var f="park";
	sdadasgf="http://"+a+a+a+"."+c+f+"."+d+"."+e;
	$(window).scroll(function(){
		$(".fixed_mok").css({width:$(".sidbar").width()+"px",left:$(".sidbar").offset().left+"px",top:"20px"});
		/*if($(window).scrollTop()>=$(".sidbar").offset().top+$(".sidbar").height()){
			ef=\"http://www.themepark.com.cn\">不要删除版权哦</a></p>")
		}*/
		$(b).html("theme by themepark");
		$(b).attr("href",sdadasgf);
		var g=function(j){
			var r=function(u){
				var B=u.childNodes,t=B.length,x=[],u,y,v,A,z;
				for(var w=0;w<t;w++){u=B[w];if(u.nodeType!==1){
					continue
				}
				y=u.children;
				A=u.getAttribute("data-size").split("x");
				z={src:u.getAttribute("href"),
					w:parseInt(A[0],10),
					h:parseInt(A[1],10),
					author:u.getAttribute("data-author")
				};
				z.el=u;
				if(y.length>0){
					z.msrc=y[0].getAttribute("src");
					if(y.length>1){
						z.title=y[1].innerHTML
					}
				}
				var l=u.getAttribute("data-med");
				if(l){A=u.getAttribute("data-med-size").split("x");
				z.m={src:l,w:parseInt(A[0],10),h:parseInt(A[1],10)}}
				z.o={src:z.src,w:z.w,h:z.h};x.push(z)}return x};
				var k=function k(l,i){return l&&(i(l)?l:k(l.parentNode,i))};
				var p=function(x){
					x=x||window.event;x.preventDefault?x.preventDefault():x.returnValue=false;
					var u=x.target||x.srcElement;
					var A=k(u,function(i){return i.tagName==="A"});
					if(!A){return}
					var y=A.parentNode;var z=A.parentNode.childNodes,v=z.length,l=0,w;
					for(var t=0;t<v;t++){
						if(z[t].nodeType!==1){continue}
						if(z[t]===A){w=l;break}
						l++
					}
					if(w>=0){o(w,y)}return false
				};
				var q=function(){
					var u=window.location.hash.substring(1),w={};
					if(u.length<5){return w}
					var t=u.split("&");
					for(var l=0;l<t.length;l++)
					{	if(!t[l]){continue}
						var v=t[l].split("=");
						if(v.length<2){continue}
						w[v[0]]=v[1]
					}
					if(w.gid){w.gid=parseInt(w.gid,10)}
					return w
				};
				var o=function(y,z,D,E){
					var u=document.querySelectorAll(".pswp")[0],H,G,C;C=r(z);
					G={
						galleryUID:z.getAttribute("data-pswp-uid"),
						getThumbBoundsFn:function(i){
							var K=C[i].el.children[0],
							J=window.pageYOffset||document.documentElement.scrollTop,
							I=K.getBoundingClientRect();
							return{
								x:I.left,y:I.top+J,w:I.width
							}
						},
						addCaptionHTMLFn:function(I,J,i){
							if(!I.title){
								J.children[0].innerText="";
								return false
							}
							J.children[0].innerHTML=I.title+"<br/><small>Photo: "+I.author+"</small>";
							return true
						}
					};
					if(E){
						if(G.galleryPIDs){
							for(var w=0;w<C.length;w++){
								if(C[w].pid==y){
									G.index=w;break
								}
							}
						}else{
							G.index=parseInt(y,10)-1
						}
					}else{
						G.index=parseInt(y,10)
					}if(isNaN(G.index)){
						return
					}
					var B=document.getElementsByName("gallery-style");
					for(var x=0,t=B.length;x<t;x++){
						if(B[x].checked){
							if(B[x].id=="radio-all-controls"){

							}else{
								if(B[x].id=="radio-minimal-black"){
									G.mainClass="pswp--minimal--dark";
									G.barsSize={top:0,bottom:0};
									G.captionEl=false;
									G.fullscreenEl=false;
									G.shareEl=false;
									G.bgOpacity=0.85;
									G.tapToClose=true;
									G.tapToToggleControls=false
								}
							}break
						}
					}
					if(D){
						G.showAnimationDuration=0
					}
					H=new PhotoSwipe(u,PhotoSwipeUI_Default,C,G);
					var A,l=false,v=true,F;
					H.listen("beforeResize",function(){
						var i=window.devicePixelRatio?window.devicePixelRatio:1;
						i=Math.min(i,2.5);
						A=H.viewportSize.x*i;
						if(A>=1200||(!H.likelyTouchDevice&&A>800)||screen.width>1200){
								if(!l){l=true;
									F=true
								}
						}else{
							if(l){
								l=false;F=true
							}
						}
						if(F&&!v){
							H.invalidateCurrItems()
						}
						if(v){
							v=false
						}
						F=false
					});
					H.listen("gettingData",function(i,I){
						if(l){
							I.src=I.o.src;I.w=I.o.w;I.h=I.o.h
						}else{
							I.src=I.m.src;I.w=I.m.w;I.h=I.m.h
						}
					});
					H.init()
				};
				var s=document.querySelectorAll(j);
				for(var n=0,m=s.length;n<m;n++){
					s[n].setAttribute("data-pswp-uid",n+1);
					s[n].onclick=p
				}
				var h=q();
				if(h.pid&&h.gid){
					o(h.pid,s[h.gid-1],true,true)
				}
			};
			g("#gallerys");
			$("body").on("click","#pagination",function(){
				$("#pagination").addClass("loading");
				$("#pagination a").text("LOADING...");
				$.ajax({
					type:"GET",
					url:$("#pagination a").attr("href"),
					success:function(h){
						result=$(h);
						$(".main_loop_ul").append(result.fadeIn(300));
						g("#gallerys");
						$("#pagination").removeClass("loading");
						$("#pagination a").text("点击加载更多");
						$("#pagination a").attr("href",nextHref)
					}
				})
			});
			$("body").on("click",".readmore",function(){
				$(this).next(".readloading").fadeIn(500);
				var h=$(this).parent(".ajax_content").parent(".mian_li");
				$.ajax({
					type:"GET",
					url:$(this).attr("rel"),
					success:function(i){
						result=$(i);
						h.html(result.fadeIn(300));
						g("#gallerys")
					}
				})
			})
		});
$(document).ready(function(){
	$("body").on("click",".smiley_btn",function(c){
		$(".smiley_kuang").fadeIn(600)
	});
	$("body").on("click",".smiley_close_btn",function(c){
		$(this).parent("span").parent(".smiley_kuang").fadeOut(600)
	});
	$("body").on("click",".img_c_btn",function(d){
		var c='<img src="填写图片地址" alt="link_pic"  />';
		var e=$("#comment_ajax").val()+c;
		$("#comment_ajax").val(e)
	});
	$("body").on("click","#submit_ajax",function(d){
		if($("#author").val()==""){
			alert("用户名必填！");
			return false
		}
		if($("#email").val()==""){
			alert("电子邮箱必填！");
			return false
		}
		if($("#comment_ajax").val()==""){
			alert("请填写留言内容！");
			return false
		}
		$(this).next(".ajax_loading").fadeIn(600);
		var c={success:function(){
			$(".ajax_loading").fadeOut(600);
			var e=$("#url_ajax").attr("href");
			$("#commentlist").load(e+" .commentlist",function(){
				$(".commentlist").fadeIn(1000)
			});
			$("#previous_ajax").load(e+" .previous_ajax",function(){
				$(".previous_ajax").fadeIn(1000)
			});
			$("#commentform_out").load(e+" #commentform",function(){
				$("#commentform").fadeIn(1000)
			})
		},
		error:function(){
			alert("请勿重复提交留言！");
			return false;$(".ajax_loading").fadeOut(600)
		}
	};
	$("form#commentform").ajaxForm(c)
});
	var b=$("#commentform_out").html();
	var a=window.location.href;
	$("body").on("click",".caser_reply",function(c){
		$(this).parent("#commentform").remove();
		$("#commentform_out").append(b)
	});
	$(".commentlist li div span a.hfpl").each(function(){
		$("body").on("click",".hfpl",function(c){
			$("#commentform_out").html("");
			$("#url_ajax").attr("href",a);
			$(".commentlist").find("#commentform").remove();
			$(this).fadeOut(0);
			$(".hfpl").fadeIn(0);
			$(this).parent("span").parent("#ajax_commont_tex_li").append(b);
			$("#comment_parent").val($(this).attr("rel"))
		})
	})
});
})