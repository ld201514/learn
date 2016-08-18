$(function(){
$.ajax({//登录方法接口：
type:'post',
url:'http://192.168.1.237:9003/ggws/pub/login',
data:{'userid':'try','password':'try123456'},
dataType:'json',
cache:false,
success:function(data){
console.log(data)
},
error:function(err1){
console.log(err1);
}
})//进入页面第一步登记

$('.search').bind('click',function(){
	$('.box').html('');
	$.ajax({//读取脑卒中登记数据接口
type:'get',
url:'http://192.168.1.237:9003/ggws/gxy/getgxbdj',
data:{'name':$('#pageB .chaxun').val(),'right': '0111'},
dataType:'json',
cache:false,
success:function(data1){
console.log(data1)
var arr='';
for(var i=0;i<data1.conarray.length;i++){
arr+='<div class="bottom"></div>'+
'<div class="head">'+
'<div class="title">'+
'健康档案号：'+data1.conarray[i].grjkdah+
'</div>'+
'<img src="../images/suifang_record.png"  class="record pagebBack"/>'+
'</div>'+
''+
'<div class="content">'+
'<ul>'+
'<li>'+
'<div class="img"><img src="../images/id_card.png" class="id_card"></div><p class="card">'+data1.conarray[i].sfzh+'</p>'+
'</li>'+
'<li>'+
'<div class="img"><img src="../images/img_info_list_name_left.png" class="img_info_list_name_left"></div><p>'+data1.conarray[i].name+'</p><span class="icon1"></span><p class="timer">'+data1.conarray[i].csrq+'</p>'+
'		</li>'+
'		<li>'+
'		<div class="img"><img src="../images/img_info_list_addr.png" class="img_info_list_addr"></div><p class="dz">'+data1.conarray[i].xzdz+'</p>'+
'		</li>'+
'		<li>'+
'		<div class="img"><img src="../images/img_zdlx.png" class="img_zdlx"></div><p>'+data1.conarray[i].zllx+'</p>'+
'		</li>'+
'	</ul>'+
'	  </div>'};
$('.box').append(arr);//生成脑卒中记录界面；
for(var i=0;i<data1.conarray.length;i++){//判断性别
	if(data1.conarray[i].sex==2){
		$('#pageB .icon1').css('background-image','url(../images/sex_g.png)') 
		sex='女'
		//设置女性性别图标；
		}else{
	sex='男'
	}
}

$('.pagebBack').click(function(){//从脑卒中记录页面跳入脑卒中登记页面；修改页面；
$('.box2').html('');
next('#pageB','#pageD');
var index=$('.pagebBack').index(this);
console.log(index);
var sex=dan(data1.conarray[index].sex,'ZDK_GG_XB')//性别；
var hyzk=dan(data1.conarray[index].hyzk,'ZDK_JKDA_HYZK')//婚姻状态；
var whcd=dan(data1.conarray[index].whcd,'ZDK_WHCD')//文化程度；
var zy=dan(data1.conarray[index].zy,'ZDK_JKDA_ZY')//职业；
var ncz='		<div><span><label>　收缩压：</label><input type="text"class="ssy" name="" value="'+data1.conarray[index].ssy+'"/></span>'+
'		</div>'+
'	'+
'		<div><span class="left"><label>　舒张压：</label><input type="text" class="szy" value="'+data1.conarray[index].szy+'"/></span>'+
'		</div>'+
'		<div><span class="left"><label>规律服药：</label><input type="text" id="select"/>'+
'<span class="icon"></span></span>'+
'		</div>'+
'		<div><span><label>诊断类型：</label><input type="text" class="zllx"value="'+data1.conarray[index].zllx+'" name=""/></span>'+
'		</div>'+
'		<div><span class="left"><label>特殊检查：</label><input type="text"value="'+data1.conarray[index].tsjc+'" class="tsjc"name=""/></span>'+
'		</div>'+
'		<div><span class="left"><label>确诊日期：</label><input type="text" id="date"class="qzrq"name="" value="'+data1.conarray[index].qzrq+'"/><span class="icon"></span></span>'+
'		</div>'+
'		<div><span class="left"><label>报告日期：</label><input id="date1" class="bgrq"value="'+data1.conarray[index].bgrq+'"/><span class="icon"></span></span>'+
'		</div>'+
'		<div><span><label>报告单位：</label><input  class="bgdw"value="'+data1.conarray[index].bgdw+'"/></span>'+
'		</div>'+'<div><span><label>联系电话：</label><input type="text" class="brdh"name="" value="'+data1.conarray[index].brdh+'"/></span>'+
'		</div>'+'<div><span class="left"><label>死亡日期：</label><input type="text" id="date2"class="swrq"name="" value="'+data1.conarray[index].swrq+'"/><span class="icon"></span></span>'+
'		</div>';
var arr1='<nav>'+
'		<div class="name">姓名：'+data1.conarray[index].name+'</div><div class="sex">性别：'+sex+'</div><div class="date">出生日期：'+data1.conarray[index].csrq+'</div></br>'+
'		<div class="name">年龄：'+jsGetAge(data1.conarray[index].csrq)+'</div><div class="date1">婚姻：'+hyzk+'</div><div class="date">文化：'+whcd+'</div></br>'+
'		<div class="date1">健康档案号：'+data1.conarray[index].grjkdah+'</div></br>	'+
'		<div class="signal">地址：'+data1.conarray[index].xzdz+'</div></br>'+
'		<div class="name">职业：'+zy+'</div>'+
'	</nav>'+
'	<div class="bottom"></div>'+
'	<div id="main" class="wrap-page">'+ncz
+
'		</div>';
$('.box2').append(arr1);//生成修改页面的界面；

	jsbsjzd('#select','ZDK_JKTJB_FYYCX');
	var list=data1.conarray[index].glvy.split(',');
	
	console.log($('#select_dummy'))
	console.log('#select')
	scdxsj3('glvy','ZDK_JKTJB_FYYCX','#select_dummy',list)
date('#date');
date('#date1');
date('#date2');


$('#paged').unbind('click').bind('click',function(){//点击修改界面的保存按钮；保存修改信息；
var glvy=$('#select').data('name')||"";
var box='{"grjkdah":"'+data1.conarray[index].grjkdah+'","whcd":"'+data1.conarray[index].whcd+'","sex":"'+data1.conarray[index].sex+'","qzrq":"'+$(".qzrq").val()+'","inputor":"'+data1.conarray[index].inputor+'","jkdaid_1":"'+data1.conarray[index].jkdaid_1+'","sfzh":"'+data1.conarray[index].sfzh+'","glvy":"'+glvy+'","gxbkbh":"'+data1.conarray[index].gxbkbh+'","zy":"'+data1.conarray[index].zy+'","deldate":"'+data1.conarray[index].deldate+'","xzdz":"'+data1.conarray[index].xzdz+'","name":"'+data1.conarray[index].name+'","dwlxdh":"'+data1.conarray[index].dwlxdh+'","brdh":"'+data1.conarray[index].brdh+'","ssy":"'+$(".ssy").val()+'","bgdw":"'+$(".bgdw").val()+'","hyzk":"'+data1.conarray[index].hyzk+'","modifydate":"'+data1.conarray[index].modifydate+'","jkdaid":"'+data1.conarray[index].jkdaid+'","zllx":"'+$(".zllx").val()+'","bgrq":"'+$(".bgrq").val()+'","status":"'+data1.conarray[index].status+'","inputdate":"'+data1.conarray[index].inputdate+'","status_1":"'+data1.conarray[index].status_1+'","swrq":"'+$(".swrq").val()+'","lrjg":"'+data1.conarray[index].lrjg+'","editor":"'+data1.conarray[index].editor+'","szy":"'+$(".szy").val()+'","csrq":"'+data1.conarray[index].csrq+'","tsjc":"'+$(".tsjc").val()+'","delflag":"'+data1.conarray[index].delflag+'","icd10":"'+data1.conarray[index].icd10+'","gxbglid":"'+data1.conarray[index].gxbglid+'"}';//"glvy";
content=encodeURIComponent(box);//转化json格式；
add1('http://192.168.1.237:9003/ggws/gxy/gxbdj_edit',1)

})
})


}
})
})
$('#pageC .search').click(function(){//个人答案选取查询生成界面；
$('.box1').html('');
$.ajax({//读取个人健康档案接口
type:'get',
url:'http://192.168.1.237:9003/ggws/pub/archive',
data:{'name':$('#pageC .chaxun').val(),'right': '0111'},
dataType:'json',
cache:false,
success:function(data3){
console.log(data3)
var arr='';
for(var i=0;i<data3.conarray.length;i++){
arr+='<div class="line"><div class="bottom"></div>'+
'	  <div class="head">'+
'		<div class="title">'+
'			健康档案号：'+data3.conarray[i].grjkdah+
'		</div>'+'<p class="inputdate" data-title="'+i+'">'+data3.conarray[i].inputdate+'</p>'+
'	  </div>'+
'	 '+
'	  <div class="content">'+
'	  <ul>'+
'		<li>'+
'		<div class="img"><img src="../images/id_card.png" class="id_card"></div><p class="card">'+data3.conarray[i].sfzh+'</p>'+
'		</li>'+
'		<li>'+
'		<div class="img"><img src="../images/img_info_list_name_left.png" class="img_info_list_name_left"></div><p>'+data3.conarray[i].name+'</p><p class="timer">'+data3.conarray[i].csrq+'</p>'+
'		</li>'+
'		<li>'+
'		<div class="img"><img src="../images/img_info_list_addr.png" class="img_info_list_addr"></div><p class="dz">'+data3.conarray[0].xzdz+'</p>'+
'	</ul>'+
'	  </div></div>';}	
$('.box1').append(arr);//生成个人档案页面；

$('.line').click(function(){//判断是否登记同时进入增加脑卒中登记数据；


var zid=data3.conarray[$(this).find('.inputdate').data('title')].jkdaid;//获取相应的健康id;
var index=$(this).find('.inputdate').data('title');
$.ajax({//读取冠心病、脑卒中病人是否已登记接口
type:'get',
url:'http://192.168.1.237:9003/ggws/gxy/verifyenter',
data:{'type':'2','zid':zid},//
dataType:'json',
cache:false,
success:function(data2){
console.log(data2);
if(!data2.enter){	
$.ajax({//读取个人健康档案接口
type:'get',
url:'http://192.168.1.237:9003/ggws/pub/archive',
data:{'name':$('#pageC .chaxun').val(),'right': '0111'},
dataType:'json',
cache:false,
success:function(data1){
console.log(data1)
$('.box3').html('');
var sex=dan(data1.conarray[index].sex,'ZDK_GG_XB')//性别；
var hyzk=dan(data1.conarray[index].hyzk,'ZDK_JKDA_HYZK')//婚姻状态；
var whcd=dan(data1.conarray[index].whcd,'ZDK_WHCD')//文化程度；
var zy=dan(data1.conarray[index].zy,'ZDK_JKDA_ZY')//职业；

var ncz='<div><span><label>　收缩压：</label><input type="text" class="ssy" name="" /></span>'+
'		</div>'+
'	'+
'		<div><span class="left"><label>　舒张压：</label><input type="text" class="szy" /></span>'+
'		</div>'+
'		<div><span class="left"><label>规律服药：</label><input type="text"id="select1"/>  '+
' <span class="icon"></span></span>'+
'		</div>'+
'		<div><span><label>诊断类型：</label><input type="text" class="zllx" name=""/></span>'+
'		</div>'+
'		<div><span class="left"><label>特殊检查：</label><input type="text"class="tsjc"name=""/></span>'+
'		</div>'+
'		<div><span><label>确诊日期：</label><input type="text" id="date3"class="qzrq"name="" value="'+CurentTime()+'"/><span class="icon"></span></span>'+
'		</div>'+
'		<div><span class="left"><label>报告日期：</label><input id="date4" class="bgrq"/> <span class="icon"></span></span>'+
'		</div>'+
'		<div><span><label>报告单位：</label><input type="text" class="bgdw"/></span>'+
'		</div>'+'<div><span><label>联系电话：</label><input type="text" class="brdh"name="" /></span>'+
'		</div>'+'<div><span class="left"><label>死亡日期：</label><input type="text" id="date5" class="swrq"name="" /><span class="icon"></span></span>'+
'		</div>';

arr1='<nav>'+
'		<div class="name">姓名：'+data1.conarray[index].name+'</div><div class="sex">性别：'+sex+'</div><div class="date">出生日期：'+data1.conarray[index].csrq+'</div></br>'+
'		<div class="name">年龄：'+jsGetAge(data1.conarray[index].csrq)+'</div><div class="date1">婚姻：'+hyzk+'</div><div class="date">文化：'+whcd+'</div></br>'+
'		<div class="date1">健康档案号：'+data1.conarray[index].grjkdah+'</div></br>	'+
'		<div class="signal">地址：'+data1.conarray[index].xzdz+'</div></br>'+
'		<div class="name">职业：'+zy+'</div>'+
'	</nav>'+
'	<div class="bottom"></div>'+
'	<div id="main" class="wrap-page">'+ncz
+
'		</div>';
$('.box3').append(arr1);//生成个人档案选取页面内的脑卒中登记页面；
jsbsjzd('#select1','ZDK_JKTJB_FYYCX');
date('#date3');
date('#date4');
date('#date5');
next('#pageC','#pageE');

$('#pagee').unbind('click').bind('click',function(){//增加冠心病登记记录；
var glvy=$('#select1').data('name')||data.conarray[index].glvy||"";
var box='{"grjkdah":"'+data1.conarray[index].grjkdah+'","whcd":"'+data1.conarray[index].whcd+'","zllx":"'+$(".zllx").val()+'","modifydate":"'+data1.conarray[index].modifydate+'","jkdaid":"'+data1.conarray[index].jkdaid+'","bgrq":"'+$(".bgrq").val()+'","sex":"'+data1.conarray[index].sex+'","qzrq":"'+$(".qzrq").val()+'","inputor":"'+data1.conarray[index].inputor+'","inputdate":"'+data1.conarray[index].inputdate+'","swrq":"'+$(".swrq").val()+'","glvy":"'+glvy+'","editor":"'+data1.conarray[index].editor+'","zy":"'+data1.conarray[index].zy+'","xzdz":"'+data1.conarray[index].xzdz+'","name":"'+data1.conarray[index].name+'","szy":"'+$(".szy").val()+'","csrq":"'+data1.conarray[index].csrq+'","dwlxdh":"'+$(".brdh").val()+'","tsjc":"'+$(".tsjc").val()+'","bgdw":"'+$(".bgdw").val()+'","ssy":"'+$(".ssy").val()+'","hyzk":"'+data1.conarray[index].hyzk+'"}'
console.log(box);
content=encodeURIComponent(box);
add1('http://192.168.1.237:9003/ggws/gxy/gxbdj_edit',0);	
})
















},
error:function(err){
console.log(err);
}
})
}

},
error:function(err1){
	console.log(err1);
}
})
})

}
})
})
$('#pageDback').click(function(){//从修改界面会退到脑卒中记录界面；
$('.search').click();//刷新数据；
$(".box2").html('');
back('#pageD','#pageB');
})
$('#btnNext2').click(function(){	
next('#pageB','#pageC') 
});
$('#pageeBack').click(function(){
$('.box3').html('');
$('.box1').html('');
$('#pageC .chaxun').val('');
back('#pageE','#pageB')
})
$('#pageBack').click(function(){
$('.box1').html('');
$('#pageC .chaxun').val('');
back('#pageC','#pageB')
});
})