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
})//进入页面第一步登记；	
$('.search').bind('click',function(){//点击脑卒中记录页面的登陆按钮；读取登陆数据生成页面；
$('.box').html('');
$.ajax({//读取脑卒中登记数据接口
type:'get',
url:'http://192.168.1.237:9003/ggws/gxy/getnczdj',
data:{'name':$('#chaxun').val(),'right': '0111'},
dataType:'json',
cache:false,
success:function(data1){
console.log(data1)
//console.log(data1)//性别；年龄；婚姻；文化；职业；治疗结果；年龄是计算出来的；
//console.log(data1.conarray[0].name)//李丽
//console.log(data1.conarray[0].csrq)//出生日期
//console.log(data1.conarray[0].grjkdah)//健康档案号
//console.log(data1.conarray[0].xzdz)//地址
//console.log(data1.conarray[0].nczlx)//闹组中类型；
//console.log(data1.conarray[0].qzrq)//确诊日期
//console.log(data1.conarray[0].bgrq)//报告日期；
//console.log(data1.conarray[0].bgdw)//确诊单位；
//console.log(data1.conarray[0].qzys)//确诊医生；
//console.log(data1.conarray[0].brdh)//联系电话；
//console.log(data1.conarray[0].swrq)//死亡日期；
var arr='';
for(var i=0;i<data1.conarray.length;i++){	
arr+='<div class="bottom"></div>'+
'<div class="head">'+
'<div class="title">'+
'健康档案号：'+data1.conarray[i].grjkdah+
'</div>'+
'<img src="../images/suifang_record.png"  data-title="'+i+'" class="record pagebBack"/>'+
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
'		<div class="img"><img src="../images/img_zdlx.png" class="img_zdlx"></div><p>'+data1.conarray[i].nczlx+'</p>'+
'		</li>'+
'	</ul>'+
'	  </div>';}
$('.box').append(arr);//生成脑卒中记录界面；
for(var i=0;i<data1.conarray.length;i++){//判断性别；
	if(data1.conarray[i].sex==2){
		$('#pageB .icon1').css('background-image','url(../images/sex_g.png)') 
		sex='女'
		//设置女性性别图标；
		}else{
	sex='男'
	}
}
$('.pagebBack').click(function(){//从脑卒中记录页面跳入脑卒中登记页面；修改页面；
next('#pageB','#pageD');
var index=$(this).data('title');
console.log(index);
$('.box2').html('');
console.log(data1);
var sex=dan(data1.conarray[index].sex,'ZDK_GG_XB')//性别；
var hyzk=dan(data1.conarray[index].hyzk,'ZDK_JKDA_HYZK')//婚姻状态；
var whcd=dan(data1.conarray[index].whcd,'ZDK_WHCD')//文化程度；
var zy=dan(data1.conarray[index].zy,'ZDK_JKDA_ZY')//职业；	

var  ncz='<div><span><label>脑卒中类型：</label><input type="text" class="nczlx"name="" value="'+data1.conarray[index].nczlx+'"/></span>'+
'		</div>'+
'	'+
'		<div><span class="left"><label>　确诊日期：</label><input id="date" class="qzrq"value="'+data1.conarray[index].qzrq+'"/><span class="icon"></span></span>'+
'		</div>'+
'		<div><span class="left"><label>　报告日期：</label><input value="'+data1.conarray[index].bgrq+'"id="date1" class="bgrq"/><span class="icon"></span></span>'+
'		</div>'+
'		<div><span><label>　确诊单位：</label><input type="text" class="bgdw"value="'+data1.conarray[index].bgdw+'" name=""/></span>'+
'		</div>'+
'		<div><span class="left"><label>　确诊医生：</label><input type="text"value="'+data1.conarray[index].qzys+'" class="qzys"name=""/></span>'+
'		</div>'+
'		<div><span><label>　联系电话：</label><input type="text" class="brdh"name="" value="'+data1.conarray[index].brdh+'"/></span>'+
'		</div>'+
'		<div><span class="left"><label>　治疗效果： <select id="select">'+
' </select><span class="icon"></span></span>'+
'		</div>'+
'		<div><span class="left"><label>　死亡日期：</label><input id="date2" class="swrq"value="'+data1.conarray[index].swrq+'"/><span class="icon"></span></span>'+
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
jsbsjzd('#select','ZDK_ZG_JS');
date('#date');
date('#date1');
date('#date2');
var list=data1.conarray[index].zlqk.split(',');
	scdxsj3('zlqk','ZDK_ZG_JS','#select_dummy',list)
	
$('#paged').unbind('click').bind('click',function(){//点击修改界面的保存按钮；保存修改信息；
var zlqk=$('#select').data('name')||"";
var box='{"delflag":"'+data1.conarray[index].delflag+'","deldate":"'+data1.conarray[index].deldate+'","sex":"'+data1.conarray[index].sex+'","inputdate":"'+data1.conarray[index].inputdate+'","nczlx":"'+$(".nczlx").val()+'","inputor":"'+data1.conarray[index].inputor+'","grjkdah":"'+data1.conarray[index].grjkdah+'","status":"'+data1.conarray[index].status+'","nczglid":"'+data1.conarray[index].nczglid+'","jkdaid_1":"'+data1.conarray[index].jkdaid_1+'","modifydate":"'+data1.conarray[index].modifydate+'","icd10":"'+data1.conarray[index].icd10+'","zy":"'+data1.conarray[index].zy+'","jkdaid":"'+data1.conarray[index].jkdaid+'","editor":"'+data1.conarray[index].editor+'","status_1":"'+data1.conarray[index].status_1+'","zlqk":"'+zlqk+'","xzdz":"'+data1.conarray[index].xzdz+'","whcd":"'+data1.conarray[index].whcd+'","swrq":"'+$(".swrq").val()+'","sfzh":"'+data1.conarray[index].sfzh+'","qzys":"'+$(".qzys").val()+'","qzrq":"'+$(".qzrq").val()+'","name":"'+data1.conarray[index].name+'","lrjg":"'+data1.conarray[index].lrjg+'","dwlxdh":"'+data1.conarray[index].dwlxdh+'","hyzk":"'+data1.conarray[index].hyzk+'","csrq":"'+data1.conarray[index].csrq+'","brdh":"'+data1.conarray[index].brdh+'","bgrq":"'+$(".bgrq").val()+'","bgdw":"'+$(".bgdw").val()+'","nczkbh":"'+data1.conarray[index].nczkbh+'"}'//生成json数据；zlqk
content=encodeURIComponent(box);//转化json格式；
add1('http://192.168.1.237:9003/ggws/gxy/nczdj_edit',1)
})
})
}
})
})


$('.search1').click(function(){//个人答案选取查询生成界面；
$('.box1').html('');
$.ajax({//读取个人健康档案接口
type:'get',
url:'http://192.168.1.237:9003/ggws/pub/archive',
data:{'name':$('#chaxun1').val(),'right': '0111'},
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
data:{'name':$('#chaxun1').val(),'right': '0111'},
dataType:'json',
cache:false,
success:function(data1){
console.log(data1)
$('.box3').html('');
var sex=dan(data1.conarray[index].sex,'ZDK_GG_XB')//性别；
var hyzk=dan(data1.conarray[index].hyzk,'ZDK_JKDA_HYZK')//婚姻状态；
var whcd=dan(data1.conarray[index].whcd,'ZDK_WHCD')//文化程度；
var zy=dan(data1.conarray[index].zy,'ZDK_JKDA_ZY')//职业；
var ncz='		<div><span><label>脑卒中类型：</label><input type="text" class="nczlx"name="" /></span>'+
'		</div>'+
'	'+
'		<div><span class="left"><label>　确诊日期：</label><input class="qzrq" id="date3" /><span class="icon"></span></span>'+
'		</div>'+
'		<div><span class="left"><label>　报告日期：</label><input value="'+CurentTime()+'" id="date4" class="bgrq"/><span class="icon"></span></span>'+
'		</div>'+
'		<div><span><label>　确诊单位：</label><input type="text" class="bgdw" name=""/></span>'+
'		</div>'+
'		<div><span class="left"><label>　确诊医生：</label><input type="text" value="管理员" class="qzys"name=""/></span>'+
'		</div>'+
'		<div><span><label>　联系电话：</label><input type="text"name="" class="brdh"value="'+data1.conarray[index].brdh+'"/></span>'+
'		</div>'+
'		<div><span class="left"><label>　治疗效果：</label> <select id="select1">  '+
' </select><span class="icon"></span></span>'+
'		</div>'+
'		<div><span class="left"><label>　死亡日期：</label><input id="date5" class="swrq"/><span class="icon"></span></span>'+
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
$('#pagee').unbind('click').bind('click',function(){//增加脑卒中登记记录；
var zlqk=$('#select1').data('name')||data.conarray[index].zlqk||"";
var box='{"inputdate":"'+data1.conarray[index].inputdate+'","inputor":"'+data1.conarray[index].inputor+'","jkdaid":"'+data1.conarray[index].jkdaid+'","name":"'+data1.conarray[index].name+'","sex":"'+data1.conarray[index].sex+'","csrq":"'+data1.conarray[index].csrq+'","hyzk":"'+data1.conarray[index].hyzk+'","whcd":"'+data1.conarray[index].whcd+'","grjkdah":"'+data1.conarray[index].grjkdah+'","xzdz":"'+data1.conarray[index].xzdz+'","zy":"'+data1.conarray[index].zy+'","editor":"'+data1.conarray[index].editor+'","modifydate":"'+data1.conarray[index].modifydate+'","nczlx":"'+$(".nczlx").val()+'","bgdw":"'+$(".bgdw").val()+'","qzys":"'+$(".qzys").val()+'","dwlxdh":"'+$(".brdh").val()+'","zlqk":"'+zlqk+'","swrq":"'+$(".swrq").val()+'","bgrq":"'+$(".bgrq").val()+'","qzrq":"'+$(".qzrq").val()+'"}'//生成json数据；
content=encodeURIComponent(box);
add1('http://192.168.1.237:9003/ggws/gxy/nczdj_edit',0)
})


date('#date3');
date('#date4');
date('#date5');
},
error:function(err){
console.log(err);
}})
}else{
alert('已登记')
}
},
error:function(err3){
console.log(err3);
}
})
});
$('#pageeBack').click(function(){
$('.box3').html('');
$('.box1').html('');
$('#chaxun1').val('');
back('#pageE','#pageB')
})
},
error:function(err4){
console.log(err4);
}
})	
})
var btnNext1 = $('#btnNext1');
var btnNext2 = $('#btnNext2');
var pageBack = $('#pageBack');
var pages = $('#pages');
var pageA = $('#pageA');
var pageB = $('#pageB');
var pageC = $('#pageC');
var pageD=$('#pageD');
btnNext1.click(function(){
next('#pageA','#pageB');         
});
$('#btnNext3').click(function(){
next('#pageA','#pageB');
});
btnNext2.click(function(){	
next('#pageB','#pageC') 
});
$('#pageDback').click(function(){//从修改界面会退到脑卒中记录界面；
$('.search').click();//刷新数据；
$(".box2").html('');
back('#pageD','#pageB');
})
pageBack.click(function(){
$('.box1').html('');
$('#chaxun1').val('');
back('#pageC','#pageB')
});
})