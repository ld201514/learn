	$(function(){
$('#pageC .mqzz').width(($(document).width()-75-8-62-76-8-10))
$('#pageC .bfzhbz').width(($(document).width()-112-8-30-10))
$('#pageC .bglfyyy').width(($(document).width()-128-8-10))
$('#pageC .fywzlcs').width(($(document).width()-128-8-10))
$('#pageC .ysjy').width(($(document).width()-80-8-10))
$('#pageC #select_dummy').width(($(document).width()-80-8-10))

	
$('#pageC #date').val(CurentTime())



$.ajax({//登录方法接口：获取seesoin;
　　type:'post',
	url:'http://192.168.1.237:9003/ggws/pub/login',
　　data:{'userid':'try','password':'try123456'},
　　dataType:'json',
	async:false,
	cache:false,
　　success:function(data){
		console.log(data)
	},
	error:function(err1){
	console.log(err1);　　
　　}
　　})

$('.search').click(function(){
$('.box').html('');//生成页面之前先清除之前界面；
$.ajax({//读取肿瘤管理专项卡接口：查询出页面；
　　type:'get',
	url:'http://192.168.1.237:9003/ggws/zl/getzljxk',
　　data:{'name':$('#pageA .chaxun').val(),'right':"0111"},
　　dataType:'json',
	cache:false,
　　success:function(data1){
		console.log(data1);
		var arr='';
	for(var i=0;i<data1.conarray.length;i++){
	arr+='<div class="main"><div class="line"></div>'+
'		  <div class="head">'+
'		<div class="title">'+
'			健康档案号：'+data1.conarray[i].grjkdah+
'		</div>'+
'	<div class="time">'+data1.conarray[i].jkrq+'</div>'+
'	  </div>'+
' <div class="content">'+
'  <ul>'+
'		<li>'+
'		<div class="img"><img src="../images/../images/id_card.png" class="id_card"></div><p class="card">'+data1.conarray[i].sfzh+'</p>'+'<img src="../images/iv_public_editor.png" class="editor">'+
'	</li>'+
'	<li>'+
'	<div class="img"><img src="../images/../images/img_info_list_name_left.png" class="img_info_list_name_left"></div><p class="name">'+data1.conarray[i].name+'</p><span class="icon"></span><p class="timer">'+data1.conarray[i].csrq+'</p>'+
'</li>'+
'<li>'+
'<div class="img"><img src="../images/../images/img_info_list_addr.png" class="img_info_list_addr"></div><p class="dz">'+data1.conarray[i].xzdz+'</p>'+
'</li>'+
'</ul>'+
'</div>'+
'<div class="bottom">'+
'	<ul>'+
'		<li class="ckjh">'+
'	查看计划'+
'		</li>'+
'		<li class="xzsf">'+
'		新增随访'+
'		</li>'+
'		<li class="none">'+
'		随访记录'+
'		</li>'+
'	</ul>'+
'</div>'+
'</div>';}
		$('.box').append(arr);//生成肿瘤管理界面；

	
	$('#pageA .editor').click(function(){
		$('.boxi').html('');
	next('#pageA','#pageI');
	
		var index=$('#pageA .editor').index(this);//获取不是同级的class的index;
	$.ajax({//读取肿瘤管理专项卡所有字段接口：
　　type:'get',
	url:'http://192.168.1.237:9003/ggws/zl/getzljxkjl',
　　data:{'id':data1.conarray[index].zlglkid},
　　dataType:'json',
	cache:false,
　　success:function(data){
		console.log(data);
		var arr1='<div class="one">'+
'<span class="left1"><label>家族史:</label><input type="text"class="jzs"  /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left1"><label>肿瘤名称:</label><input type="text"class="zlmc"value="'+data.conarray[0].zlmc+'"   /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left"><label>ICD10代表码:</label><input type="text"class="dbm" value="'+data.conarray[0].icd10+'" /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left"><label>ICD0病理形态学代表码:</label><input type="text"value="'+data.conarray[0].xtxbm+'"class="blxtx"  /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left"><label>形态学名称:</label><input type="text"class="xtxmc" disabled="true" /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left"><label>ICD-0-3编码解剖学:</label><input type="text"value="'+data.conarray[0].jb0bm+'"class="bmjpx"  /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left"><label>编码解剖学:</label><input type="text"class="xtxmc" disabled="true" /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left"><label>组织学等级和分化程度:</label><input type="text"class="blxtx" id="select" /></span>'+
'</div>'+
'	<div class="one">'+
'<span class="left"><label>诊断时间:</label><input type="text"class="zdsj" value="'+data.conarray[0].zdsj+'" id="date"/></span>'+
'<span class="right"><label>病理诊断:</label><input type="text"class="blzd" value="'+data.conarray[0].blzd+'" /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left1"><label>诊断医院:</label><input type="text"class="zdyy" value="'+data.conarray[0].zdyy+'" /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left1"><label>确诊依据:</label><input type="text"class="qzyj"  /></span>'+
'</div>'+
'<div class="line one"></div>'+
'<div class="shxg one">'+
'	生活习惯'+
'	</div>'+
'		<div class="one">'+
'<span class="left"><label>吸烟情况:</label><input type="text"class="xyqk" id="select1" /></span>'+
'<span class="right"><label>饮酒情况:</label><input type="text"class="yjqk" id="select2" /></span>'+
'</div>'+
'	<div class="one">'+
'<span class="left"><label>体育锻炼:</label><input type="text"class="tydl" id="select3" /></span>'+
'</div>'+
'<div class="line one"></div>'+
'<div class="shxg one">'+
'	非药物治疗情况'+
'	</div>'+
'			<div class="one">'+
'<span class="left4"><label>体力活动:每周</label><input type="text"class="hdpl"  value="'+data.conarray[0].hdpl+'"/>次</span>'+
'<span class="right1"><label>每次:</label><input type="text"value="'+data.conarray[0].hdsj+'"class="hdsj"  />分钟</span>'+
'</div>'+
'			<div class="one">'+
'<span class="left4"><label>饮食:每天</label><input type="text"value="'+data.conarray[0].yspl+'"class="yspl"  />餐</span>'+
'<span class="right1"><label>每餐:</label><input type="text"value="'+data.conarray[0].ysl+'"class="ysl"  />倆</span>'+
'</div>'+
'			<div class="one">'+
'<span class="left4"><label>吸烟:每天</label><input type="text"value="'+data.conarray[0].xyzs+'"class="xyzs"  />支</span>'+
'<span class="right2"><label>比上次减少:</label><input type="text"value="'+data.conarray[0].jszs+'"class="jszs"  />支</span>'+
'</div>'+
'<div class="one">'+
'<span class="left4"><label>饮酒:每天</label><input type="text"value="'+data.conarray[0].yjpl+'"class="yjpl"  />餐</span>'+
'<span class="right2"><label>比上次减少:</label><input type="text"value="'+data.conarray[0].jsls+'"class="jsls"  />倆</span>'+
'</div>'+
'<div class="one">'+
'<span class="left4"><label>体重:比上</label>次减少<input type="text"value="'+data.conarray[0].jsjs+'"class="jsjl"  />公斤</span>'+
'</div>'+
'<div class="line one"></div>'+
'<div class="shxg one">'+
'	处方'+
'	</div>'+
'	<div>'+
'<span class="left2"><label>原用药品:1.</label><input type="text"value="'+data.conarray[0].yyyp1+'"class="yyyp1"  /></span>'+
'</div>'+
'<div>'+
'<span class="left2"><label>2.</label><input type="text"class="yyyp2" value="'+data.conarray[0].yyyp2+'" /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left2"><label>3.</label><input type="text"class="yyyp3" value="'+data.conarray[0].yyyp3+'" /></span>'+
'</div>'+
'<div>'+
'<span class="left3"><label>调整后用药:1.</label><input type="text"value="'+data.conarray[0].xyyp1+'"class="tzhyy1"  /></span>'+
'</div>'+
'<div>'+
'<span class="left3"><label>2.</label><input type="text"value="'+data.conarray[0].xyyp2+'"class="tzhyy2"  /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left3"><label>3.</label><input type="text"value="'+data.conarray[0].xyyp3+'"class="tzhyy3"  /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left1"><label>饮食:</label><input type="text"value="'+data.conarray[0].cfys+'"class="ys"  /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left"><label>体力活动:</label><input type="text"value="'+data.conarray[0].cfhd+'"class="tlhd1"  /></span>'+
'</div>'+
'<div class="line"></div>'+
'		<div class="one">'+
'<span class="left"><label>责任医生:</label><input class="zrys" type="text"value="'+data.conarray[0].zrys+'" /></span>'+
'<span class="right"><label>建卡日期:</label><input class="jksj" type="text"value="'+data.conarray[0].jkrq+'" id="date1" /></span>'+
'</div>'+
'<div class="line"></div>';
$('.boxi').append(arr1);//生成肿瘤专项档案修改界面；


//必须要先调用单选函数；让选择器变为#select_dummy的形式；
jsbsjzd('#select','ZDK_ZL_ZZXDJ')//组织学等级和分化程度
jsbsjzd('#select1','ZDK_JKTJB_XYQK')//吸烟情况
jsbsjzd('#select2','ZDK_JKDA_YJQK')//饮酒情况
jsbsjzd('#select3','ZDK_JKTJB_DLPL')//体育锻炼；
/*	
	sjzd('.jzs','ZDK_ZLGLK_JZS',1)//多选调用家族史函数；	
	sjzd('.qzyj','ZDK_ZLGLK_QZYJ',1)//确诊依据；
*/
	$('.jzs').click(function(){
		
		sjzd2('.jzs','ZDK_ZLGLK_JZS',1)//多选调用家族史函数；
	})
	$('.qzyj').click(function(){
		sjzd2('.qzyj','ZDK_ZLGLK_QZYJ',1)//多选确诊依据；
	})
date('#date');//调用日期函数；
date('#date1');//调用建卡日期函数；
//多选,单选数字变文字；
scdxsj1('jzs','ZDK_ZLGLK_JZS','.jzs')//家族史数字变文字；
scdxsj1('qzyj','ZDK_ZLGLK_QZYJ','.qzyj')//确诊依据数字变文字；
scdxsj1('xyqk','ZDK_JKTJB_XYQK','#select1_dummy')//吸烟情况
scdxsj1('yjqk','ZDK_JKDA_YJQK','#select2_dummy')//饮酒情况
scdxsj1('tydl','ZDK_JKTJB_DLPL','#select3_dummy')//体育锻炼；
scdxsj1('fhcd','ZDK_ZL_ZZXDJ','#select_dummy')//组织学等级和分化程度

$('#btnINext').off('click').on('click',function(){//肿瘤专项档案修改；
	console.log(data.conarray[0].jkdaid)
	console.log(data);
var jzs=$('.jzs').data('sjzd')||data.conarray[0].jzs||"";
console.log(jzs);
var qzyj=$('.qzyj').data('sjzd')||data.conarray[0].qzyj||"";
var tydl=$('#select3').data('name')||data.conarray[0].tydl||"";
var yjqk=$('#select2').data('name')||data.conarray[0].yjpl||"";
var fhcd=$('#select').data('name')||data.conarray[0].fhcd||"";
var xyqk=$('#select1').data('name')||data.conarray[0].xyqk||"";
var box='{"delflag":"0","deldate":"","zdyyqt":"","ysl":"'+$(".ysl").val()+'","jzs":"'+jzs+'","inputdate":"2012-03-04","inputor":"jn周家郁","status":"0","zlglkid":"'+data.conarray[0].zlglkid+'","jzszl":"","jb0mc":"","jb0bm":"'+$(".bmjpx").val()+'","yyyp3":"'+$(".yyyp3").val()+'","yyyp2":"'+$(".yyyp2").val()+'","yyyp1":"'+$(".yyyp1").val()+'","modifydate":"'+CurentTime()+'","icd10":"'+$(".dbm").val()+'","xyyp3":"'+$(".tzhyy3").val()+'","xyyp2":"'+$(".tzhyy2").val()+'","xyyp1":"'+$(".tzhyy1").val()+'","xtxmc":"","xtxbm":"'+$(".blxtx").val()+'","zzglrq":"","zg":"","jkdaid":"'+data.conarray[0].jkdaid+'","editor":"管理员","zzly":"","zrys":"'+$(".zrys").val()+'","zlmc":"'+$(".zlmc").val()+'","zgyy":"5","zgrq":"","zdyy":"'+$(".zdyy").val()+'","zdsj":"'+$("#date").val()+'","yspl":"'+$(".yspl").val()+'","yjqk":"'+yjqk+'","yjpl":"'+$(".yjpl").val()+'","xyzs":"'+$(".xyzs").val()+'","xyqk":"'+xyqk+'","tydl":"'+tydl+'","qzyj":"'+qzyj+'","lrjg":"","jszs":"'+$(".jszs").val()+'","jsls":"'+$(".jsls").val()+'","jsjs":"'+$(".jsjl").val()+'","jkrq":"'+$("#date1").val()+'","hdsj":"'+$(".hdsj").val()+'","hdpl":"'+$(".hdpl").val()+'","gdzt":"","gdsj":"","fhcd":"'+fhcd+'","cfys":"'+$(".ys").val()+'","cfyj":"","cfhd":"'+$(".tlhd1").val()+'","bzzd":"","blzd":"'+$(".blzd").val()+'","bllx":""}'
console.log(box);
content=encodeURIComponent(box);
$.ajax({//修改；
　　type:'post',
	url:'http://192.168.1.237:9003/ggws/zl/zljxk_edit',
　　data:{'edit_stat':'1','content':content},//
　　dataType:'json',
	cache:false,
　　success:function(data2){
		console.log(data2);

	},
	error:function(err3){
	　console.log(err3);　
　　}
　　})
	
})

	},
	error:function(err1){
	console.log(err1);　　
　　}
　　})
	})
	

		$('.ckjh').click(function(){//查看计划
		var index=$('.ckjh').index(this);//获取不是同级的class的index;；
		$('.main1').html('');
		next('#pageA','#pageB')
		var arr1='';
		arr1+=' <div class="content">'+
'  <ul>'+
'		<li>'+
'		<p class="card1">姓名:'+data1.conarray[index].name+'</p><p class="xb">性别:男</p><p class="timer">出生日期:'+data1.conarray[index].csrq+'</p>'+
'	</li>'+
'	<li>'+
'	<p class="name">健康档案号:'+data1.conarray[index].grjkdah+'</p>'+
'</li>'+
'<li>'+
'<p>地址:</p><p class="dz">'+data1.conarray[index].xzdz+'</p>'+
'</li>'+
'</ul>'+
'</div>';			
$('.main1').append(arr1);

        });
		
		
$('.xzsf').click(function(){//新增随访；
          next('#pageA','#pageC')
			$('.main3').html('');//也是先清空界面；
			var arr='<div class="head"> '+
'<div class="top"> '+
'<div class="name">姓名:</div>'+
'<div class="ming">'+data1.conarray[0].name+'</div>'+
'</div>'+
'<div class="down"> '+
'<div class="name">健康档案号:</div>'+
'<div class="ming">'+data1.conarray[0].grjkdah+'</div>'+
'</div>'+
'<div class="line"></div>'+
'</div>'+
'<div class="content">'+
'<div class="top"><div class="left"><label>定期复查:</label><input class="qzrq" type="text"  id="select2"/><span class="icon"></span></div>'+
'<div class="left1"><label>目前症状:</label><input class="mqzz"/></div></div>'+
'<div class="left"><label>并发症合并症:</label><input class="bfzhbz"/><span class="icon"></span></div>'+
'<div class="line"></div>'+
'<div class="qk"><div class="yyqk">用药情况：</div><img src="../images/../images/public_add.png" class="btn" /></div>'+
'<div class="qk1"><div class="ywmc">药物名称</div><div class="mrcs">每日次数</div><div class="mcyl">每次药量</div><div class="cz">操作</div></div>'+
'<div class="box2">'+
'<div class="qk">'+
'<input type="text" id="select19"/><input type="text"class="mrcs1"/><input type="text"class="mcyl1"/><img src="../images/../images/delete.png" class="btn1" />'+
'</div>'+
'</div>'+
'<div class="left"><label>不规律服药原因:</label><input class="bglfyyy"/><span class="icon"></span></div>'+
'<div class="left"><label>非药物治疗措施:</label><input class="fywzlcs"/><span class="icon"></span></div>'+
'<div class="left"><label>医生建议:</label><input type="text" class="ysjy"/></div>'+
'<div class="left"><label>状况评估:</label><input type="text" id="select"/></div>'+
'<div class="line"></div>'+
'<div class="left"><label>随访医生:</label><input type="text" value="管理员" class="sfys"/></div>'+
'<div class="left"><label>随访时间:</label><input type="text" id="date" value= "'+CurentTime()+'" class="sfsj"/></div>'+
'<div class="left"><label>下次随访时间:</label><input type="text" id="date1" value= "'+addMoth(CurentTime(),3)+'" class="xcsfsj"/></div>'+
'</div>';
$('.main3').append(arr);//生成新增界面；
jsbsjzd2('#select19','ZDK_ZL_YW')//药物名称;

jsbsjzd('#select','ZDK_JSJBFZ_PGFL')//状况评估；
jsbsjzd('#select2','ZDK_GG_SF')//是否；

date1('#date');//调用日期函数；
date('#date1');//调用日期函数；
var number=20;

$('.btn').off('click').on('click',function(e){
	add(number)
	jsbsjzd2("#select"+number,'ZDK_ZL_YW')

$("#select"+number+"_dummy").css('width','3.09333rem')

number++;
})
$('.main3').off('click').on('click','.btn1',function(e){//点击删除按钮再上opert_y=2;
del(e);
})	
/*
	sjzd('.bfzhbz','ZDK_ZLSFJL_BFZHBZ',1)//多选调用并发症合并症函数；

	sjzd('.bglfyyy','ZDK_ZLSFJL_BGLFYYY',1)//多选读取不规律服药原因数据

	sjzd('.fywzlcs','ZDK_ZLSFJL_FYWZLCS',1)//多选读取不规律服药原因
	*/
$('.bfzhbz').click(function(){
	sjzd2('.bfzhbz','ZDK_ZLSFJL_BFZHBZ',1)//多选调用并发症合并症函数；
})
$('.bglfyyy').click(function(){
	sjzd2('.bglfyyy','ZDK_ZLSFJL_BGLFYYY',1)//多选读取不规律服药原因数据
})
$('.fywzlcs').click(function(){
	sjzd2('.fywzlcs','ZDK_ZLSFJL_FYWZLCS',1)//多选读取不规律服药原因
})
$('#pagee').click(function(){//增加随访记录；	
var pgzk=$('#select').data('name')||"";//状况评估；
var dqfc=$('#select2').data('name')||"";//是否
var yyxq_o=[];
var number=19;
console.log($('.box2').children(':visible').length)
for(var i=0;i<$('.box2').children(':visible').length;i++){
yyxq_o.push({"yl":$('.box2').find('.mcyl1:visible').eq(i).val(),"ywmc":$('#select'+number+'_dummy').val(),"opert_y":1,"yf":$('.box2').find('.mrcs1:visible').eq(i).val()})
number++;
}
console.log(yyxq_o);
var bfzhbz=$('.bfzhbz').data('sjzd')||"";
var fywzlcs=$('.fywzlcs').data('sjzd')||"";
var bglfyyy=$('.bglfyyy').data('sjzd')||"";
var box='{"jkcf":"'+$(".ysjy").val()+'","jkdaid":"'+data1.conarray[0].jkdaid+'","modifydate":"'+CurentTime()+'","dqfc":"'+dqfc+'","sfrq":"'+$("#date").val()+'","bfzhbz":"'+bfzhbz+'","inputdate":"'+CurentTime()+'","inputor":"管理员","fywzlcs":"'+fywzlcs+'","xcsfrq":"'+$(".xcsfsj").val()+'","fyyy":"'+bglfyyy+'","editor":"管理员","zlglkid":"'+data1.conarray[0].zlglkid+'","ysqm":"'+$(".sfys").val()+'","yyxq_o":"","pgzk":"'+pgzk+'","mqzz":"'+$(".mqzz").val()+'"}';
var box1=JSON.parse(box)
box1.yyxq_o=yyxq_o;
var box2=JSON.stringify(box1);
console.log(box2);
var content=encodeURIComponent(box2);//转化json;
$.ajax({//新增肿瘤随访记录
　　type:'post',
	url:'http://192.168.1.237:9003/ggws/zl/zlsfjl_edit',
　　data:{'edit_stat':0,'content':content},//参数待定；
　　dataType:'json',
	cache:false,
　　success:function(data){
	alert('保存成功');
		console.log(data)
	},
	error:function(err1){
	console.log(err1);　　
　　}
　　})
});//新增；下面是修改；

})
$('.none').click(function(){
$('.boxd').html('');
$('.list').html('');
 next('#pageA','#pageD')
		arr1=' <div class="content">'+
'  <ul>'+
'		<li>'+
'		<p class="card1">姓名:'+data1.conarray[0].name+'</p><p class="xb">性别:男</p><p class="timer">出生日期:'+data1.conarray[0].csrq+'</p>'+
'	</li>'+
'	<li>'+
'	<p class="name">健康档案号:'+data1.conarray[0].grjkdah+'</p>'+
'</li>'+
'<li>'+
'<p>地址:</p><p class="dz">'+data1.conarray[0].xzdz+'</p>'+
'</li>'+
'</ul>'+
'</div>'
$('.boxd').append(arr1);

var index=$('.none').index(this);
$.ajax({//读取肿瘤随访记录数据接口：
　　type:'get',
	url:'http://192.168.1.237:9003/ggws/zl/getzlsfjl',
　　data:{'zid':data1.conarray[index].zlglkid},
　　dataType:'json',
	cache:false,
	async:false,
　　success:function(data){
		console.log(data)
		var arr4='';
		for(var i=0;i<data.conarray.length;i++){
		arr4+='<li class="sflb">'+
'<div class="gly1">'+data.conarray[i].ysqm+'</div>'+
'<div class="sfsj1">随访时间:'+data.conarray[i].sfrq+'</div><div class="xcsfrq1">下次随访时间:'+data.conarray[i].xcsfrq+'</div>'+
'</li>';
		}
		$('.list').append(arr4);
$('.sflb').unbind('click').bind('click',function(){

next('#pageD','#pageE')
$('.boxe').html('');
var index=$(this).index();
var yyxq='';
var number=19;
console.log(data.conarray[index].yyxq_o)
if(data.conarray[index].yyxq_o.length==0){
	yyxq='<div class="qk">'+
'<input type="text"id="select'+number+'"value=""/><input type="text"value="" class="mrcs1"/><input type="text"value=""class="mcyl1"/><img src="../images/../images/delete.png" class="btn1"/>'+
'</div>'
}else{
for(var i=0;i<data.conarray[index].yyxq_o.length;i++){
 yyxq+='<div class="qk">'+
'<input type="text"id="select'+number+'"value="'+data.conarray[index].yyxq_o[i].ywmc+'"/><input type="text"value="'+data.conarray[index].yyxq_o[i].yf+'" class="mrcs1"/><input type="text"value="'+data.conarray[index].yyxq_o[i].yl+'"class="mcyl1"/><img src="../images/../images/delete.png" class="btn1"/>'+
'</div>'
number++;
}}
console.log(yyxq);
var arr5='<div class="main2">'+
'<div class="head"> '+
'<div class="top"> '+
'<div class="name">姓名:</div>'+
'<div class="ming">'+data.conarray[index].name+'</div>'+
'</div>'+
'<div class="down"> '+
'<div class="name">健康档案号:</div>'+
'<div class="ming">'+data.conarray[index].grjkdah+'</div>'+
'</div>'+
'<div class="line"></div>'+
'</div>'+
'<div class="content">'+
'<div class="top"><div class="left"><label>定期复查:</label><input type="text" class="qzrq" id="select2"/></span></div>'+
'<div class="left1"><label>目前症状:</label><input type="text"class="mqzz" value="'+data.conarray[index].mqzz+'"/></div></div>'+
'<div class="left"><label>并发症合并症:</label><input type="text"class="bfzhbz"/><span class="icon"></span></div>'+
'<div class="line"></div>'+
'<div class="qk"><div class="yyqk">用药情况：</div><img src="../images/../images/public_add.png" class="btn" /></div>'+
'<div class="qk1"><div class="ywmc">药物名称</div><div class="mrcs">每日次数</div><div class="mcyl">每次药量</div><div class="cz">操作</div></div>'+
'<div class="box2">'+
yyxq+
'</div>'+
'<div class="left"><label>不规律服药原因:</label><input type="text"class="bglfyyy"/><span class="icon"></span></div>'+
'<div class="left"><label>非药物治疗措施:</label><input type="text" class="fywzlcs"/><span class="icon"></span></div>'+
'<div class="left"><label>医生建议:</label><input type="text" value="'+data.conarray[index].jkcf+'"class="ysjy"/></div>'+
'<div class="left"><label>状况评估:</label><input type="text" id="select"/></div>'+
'<div class="line"></div>'+
'<div class="left"><label>随访医生:</label><input type="text" value="'+data.conarray[index].ysqm+'" class="sfys"/></div>'+
'<div class="left"><label>随访时间:</label><input type="text" id="date" value="'+data.conarray[index].sfrq+'" class="sfsj"/></div>'+
'<div class="left"><label>下次随访时间:</label><input type="text" id="date1"class="xcsfsj"value="'+data.conarray[index].xcsfrq+'"/></div>'+
'</div>'+
'</div>';
$('.boxe').append(arr5);
var number=19;
var length1=data.conarray[index].yyxq_o.length;
if(data.conarray[index].yyxq_o.length==0){
jsbsjzd2('#select'+number,'ZDK_ZL_YW')//药物名称;	
	
}else{
for(var i=0;i<data.conarray[index].yyxq_o.length;i++){
jsbsjzd2('#select'+number,'ZDK_ZL_YW')//药物名称;

$('#select'+number+'_dummy').val(data.conarray[index].yyxq_o[i].ywmc);
$("#select"+number+"_dummy").css('width','3.09333rem')
number++;

}}

jsbsjzd('#select2','ZDK_GG_SF')//是否；
jsbsjzd('#select','ZDK_JSJBFZ_PGFL')//状况评估；
date1('#date');//调用日期函数；
date('#date1');//调用日期函数；
var number=100;

$('.btn').off('click').on('click',function(e){
	add(number)
	jsbsjzd2("#select"+number,'ZDK_ZL_YW')

$("#select"+number+"_dummy").css('width','3.09333rem')

number++;
})
$('.box2').off('click').on('click','.btn1',function(e){//点击删除按钮再上opert_y=2;
del(e);
})	
$('.bfzhbz').click(function(){
	sjzd2('.bfzhbz','ZDK_ZLSFJL_BFZHBZ',1)//多选调用并发症合并症函数；
})
$('.bglfyyy').click(function(){
	sjzd2('.bglfyyy','ZDK_ZLSFJL_BGLFYYY',1)//多选读取不规律服药原因数据
})
$('.fywzlcs').click(function(){
	sjzd2('.fywzlcs','ZDK_ZLSFJL_FYWZLCS',1)//多选读取不规律服药原因
})


function scdxsj(id,typename,id1){//多选数字变文字函数；
console.log(index);
console.log(data.conarray[index][id])
var listlist=data.conarray[index][id].split(',');
console.log(listlist);
var str6='';
$.ajax({//读取并发症合并症数据字典接口：
　　type:'get',
	url:'http://192.168.1.237:9003/ggws/pub/getmedicineone',
　　data:{'type':1,'typename':typename},//
　　dataType:'json',
	cache:false,
　　success:function(data2){
		console.log(data2);
		$(id1).val('');
		$.each(listlist,function(i,e1){
$.each(data2.conarray,function(i,e2){
if(e2.id==e1){
str7=e2.name+','+$(id1).val()
$(id1).val(str7);
}
})
})
		},
		error:function(err){
		console.log(err);
		}})
}

scdxsj('dqfc','ZDK_JSJBFZ_PGFL','#select_dummy')//是否；
scdxsj('pgzk','ZDK_GG_SF','#select2_dummy')//状况评估
scdxsj('bfzhbz','ZDK_ZLSFJL_BFZHBZ','.bfzhbz')
//生成并发症合并症数据；
scdxsj('fyyy','ZDK_ZLSFJL_BGLFYYY','.bglfyyy')
//生成不规律服药原因数据；
scdxsj('fywzlcs','ZDK_ZLSFJL_FYWZLCS','.fywzlcs')
//生成非药物治疗措施数据；

//if(str6){$('.bfzhbz').val(str6.replace(',',''))}else{$('.bfzhbz').val('');}




console.log(data.conarray[index].yyxq_o);
$('#btnE').unbind('click').bind('click',function(){//修改数据；
//$('.none').click();//刷新数据；
$.each($('.box2').children(),function(i,e){//添加删除；
console.log(i);
console.log(length1);
if(i+1<=length1){
if($(e).is(':hidden')){
data.conarray[index].yyxq_o[i].opert_y=2
console.log(2)
}else{
console.log(3);
console.log($(e).children().val())
data.conarray[index].yyxq_o[i].opert_y=1;
data.conarray[index].yyxq_o[i].yl=$(e).find('.mcyl1:visible').val();
data.conarray[index].yyxq_o[i].yf=$(e).find('.mrcs1:visible').val();
data.conarray[index].yyxq_o[i].ywmc=$(e).children().val();
}
}else if(i+1>length1){
console.log(i);
console.log($(e));
console.log(1);
if($(e).is(':visible')){
console.log(4)
data.conarray[index].yyxq_o.push({"mcyl":$(e).find('.mcyl1:visible').val(),"ywmc":$(e).children().val(),"opert_y":"1","yycs":$(e).find('.mrcs1:visible').val()})

}
}
})
console.log(data.conarray[index].yyxq_o);
var bfzhbz=$('.bfzhbz').data('sjzd')||"";
var fywzlcs=$('.fywzlcs').data('sjzd')||"";
var bglfyyy=$('.bglfyyy').data('sjzd')||"";

var box4='{"grjkdah":"'+data.conarray[0].grjkdah+'","jkcf":"'+$('.ysjy').val()+'","modifydate":"'+CurentTime()+'","jkdaid":"'+data.conarray[0].jkdaid+'","dqfc":"1","status":"0","zlsfid":"'+data.conarray[index].zlsfid+'","bfzhbz":"'+bfzhbz+'","sfrq":"'+$("#date").val()+'","inputdate":"'+CurentTime()+'","inputor":"管理员","fywzlcs":"'+fywzlcs+'","xcsfrq":"'+$(".xcsfsj").val()+'","lrjg":"","fyyy":"'+bglfyyy+'","editor":"管理员","deldate":"","zlglkid":"'+data.conarray[0].zlglkid+'","ysqm":"'+$(".sfys").val()+'","name":"'+data.conarray[0].name+'","yyxq_o":"","delflag":"0","pgzk":"2","bzzd":"","mqzz":"'+$(".mqzz").val()+'"}';
console.log(box4);
console.log(data.conarray[index].yyxq_o)
var box2=JSON.parse(box4)
box2.yyxq_o=data.conarray[index].yyxq_o;
var box1=JSON.stringify(box2);
console.log(box1);
var content=encodeURIComponent(box1);//转化json;
$.ajax({//修改肿瘤随访记录
　　type:'post',
	url:'http://192.168.1.237:9003/ggws/zl/zlsfjl_edit',
　　data:{'edit_stat':1,'content':content},//参数待定；
　　dataType:'json',
	cache:false,
　　success:function(data){
		console.log(data)
		alert('修改成功')
	},
	error:function(err1){
	console.log(err1);　　
　　}
　　})
})
})	
	},
	error:function(err1){
	console.log(err1);　　
　　}
　　})
})


	},
	error:function(err1){
	console.log(err1);　　
　　}
　　})

})

$('#pageF .search').click(function(){//个人答案选取查询生成界面；
$('.boxf').html('');
$.ajax({//读取个人健康档案接口
type:'get',
url:'http://192.168.1.237:9003/ggws/pub/archive',
data:{'name':$('#pageF .chaxun').val(),'right': '0111'},
dataType:'json',
cache:false,
success:function(data3){
console.log(data3)
var arr='';
for(var i=0;i<data3.conarray.length;i++){
	/*
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
'	  </div></div>';
*/
arr+='<div class="main"><div class="line"></div>'+
'		  <div class="head">'+
'		<div class="title">'+
'			健康档案号：'+data3.conarray[i].grjkdah+
'		</div>'+'<p class="inputdate" data-title="'+i+'">'+data3.conarray[i].inputdate+'</p>'+
'	  </div>'+
' <div class="content">'+
'  <ul>'+
'		<li>'+
'		<div class="img"><img src="../images/../images/id_card.png" class="id_card"></div><p class="card">'+data3.conarray[i].sfzh+'</p>'+
'	</li>'+
'	<li>'+
'	<div class="img"><img src="../images/../images/img_info_list_name_left.png" class="img_info_list_name_left"></div><p class="name">'+data3.conarray[i].name+'</p><span class="icon"></span><p class="timer">'+data3.conarray[i].csrq+'</p>'+
'</li>'+
'<li>'+
'<div class="img"><img src="../images/../images/img_info_list_addr.png" class="img_info_list_addr"></div><p class="dz">'+data3.conarray[i].xzdz+'</p>'+
'</li>'+
'</ul>'+
'</div></div>'
}	
$('.boxf').append(arr);//生成个人档案页面；

$('#pageF .main').click(function(){//判断是否登记同时进入增加脑卒中登记数据；
var zid=data3.conarray[$(this).find('.inputdate').data('title')].jkdaid;//获取相应的健康id;
var index=$(this).find('.inputdate').data('title');
console.log(zid);
console.log(index);
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
url:'http://192.168.1.237:9003/ggws/zl/getzljxk',
data:{'name':$('#pageF .chaxun').val(),'right': '0111'},
dataType:'json',
cache:false,
success:function(data1){
console.log(data1.conarray)
 $('#pageH').css({'display' : 'block'});
        $('#pageF').addClass('animatestart sliderightout');
		 
		 setTimeout(function(){ //动画结束时重置class
              $('#pageF').css('display', 'none');
              $('#pageF').removeClass('animatestart sliderightout');
            }, 350);
		
$('.boxh').html('');
var arr1='<div class="one">'+
'<span class="left1"><label>家族史:</label><input type="text"class="jzs"  /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left1"><label>肿瘤名称:</label><input class="zlmc"  /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left"><label>ICD10代表码:</label><input class="dbm"  /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left"><label>ICD0病理形态学代表码:</label><input class="blxtx"  /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left"><label>形态学名称:</label><input class="xtxmc" disabled="true" /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left"><label>ICD-0-3编码解剖学:</label><input class="bmjpx"  /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left"><label>编码解剖学:</label><input class="xtxmc" disabled="true" /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left"><label>组织学等级和分化程度:</label><input class="blxtx" id="select" /></span>'+
'</div>'+
'	<div class="one">'+
'<span class="left"><label>诊断时间:</label><input class="zdsj"  id="date"/></span>'+
'<span class="right"><label>病理诊断:</label><input class="blzd"  /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left1"><label>诊断医院:</label><input class="zdyy"  /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left1"><label>确诊依据:</label><input class="qzyj"  /></span>'+
'</div>'+
'<div class="line one"></div>'+
'<div class="shxg one">'+
'	生活习惯'+
'	</div>'+
'		<div class="one">'+
'<span class="left"><label>吸烟情况:</label><input class="xyqk" id="select1" /></span>'+
'<span class="right"><label>饮酒情况:</label><input class="yjqk" id="select2" /></span>'+
'</div>'+
'	<div class="one">'+
'<span class="left"><label>体育锻炼:</label><input class="tydl" id="select3" /></span>'+
'</div>'+
'<div class="line one"></div>'+
'<div class="shxg one">'+
'	非药物治疗情况'+
'	</div>'+
'			<div class="one">'+
'<span class="left4"><label>体力活动:每周</label><input class="hdpl"  />次</span>'+
'<span class="right1"><label>每次:</label><input class="hdsj"  />分钟</span>'+
'</div>'+
'			<div class="one">'+
'<span class="left4"><label>饮食:每天</label><input class="yspl"  />餐</span>'+
'<span class="right1"><label>每餐:</label><input class="ysl"  />倆</span>'+
'</div>'+
'			<div class="one">'+
'<span class="left4"><label>吸烟:每天</label><input class="xyzs"  />支</span>'+
'<span class="right2"><label>比上次减少:</label><input class="jszs"  />支</span>'+
'</div>'+
'<div class="one">'+
'<span class="left4"><label>饮酒:每天</label><input class="yjpl"  />餐</span>'+
'<span class="right2"><label>比上次减少:</label><input class="jsls"  />倆</span>'+
'</div>'+
'<div class="one">'+
'<span class="left4"><label>体重:比上</label>次减少<input class="jsjl"  />公斤</span>'+
'</div>'+
'<div class="line one"></div>'+
'<div class="shxg one">'+
'	处方'+
'	</div>'+
'	<div>'+
'<span class="left2"><label>原用药品:1.</label><input class="yyyp1"  /></span>'+
'</div>'+
'<div>'+
'<span class="left2"><label>2.</label><input class="yyyp2"  /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left2"><label>3.</label><input class="yyyp3"  /></span>'+
'</div>'+
'<div>'+
'<span class="left3"><label>调整后用药:1.</label><input class="tzhyy1"  /></span>'+
'</div>'+
'<div>'+
'<span class="left3"><label>2.</label><input class="tzhyy2"  /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left3"><label>3.</label><input class="tzhyy3"  /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left1"><label>饮食:</label><input class="ys"  /></span>'+
'</div>'+
'<div class="one">'+
'<span class="left"><label>体力活动:</label><input class="tlhd1"  /></span>'+
'</div>'+
'<div class="line"></div>'+
'		<div class="one">'+
'<span class="left"><label>责任医生:</label><input class="zrys"  /></span>'+
'<span class="right"><label>建卡日期:</label><input class="jksj" id="date1" /></span>'+
'</div>'+
'<div class="line"></div>';;

$('.boxh').append(arr1);//生成个人档案选取页面内的脑卒中登记页面；


	/*
	sjzd('.jzs','ZDK_ZLGLK_JZS',1)//多选调用家族史函数；
	sjzd('.qzyj','ZDK_ZLGLK_QZYJ',1)//多选确诊依据；
	*/
	$('.jzs').click(function(){
		
		sjzd2('.jzs','ZDK_ZLGLK_JZS',1)//多选调用家族史函数；
	})
	$('.qzyj').click(function(){
		sjzd2('.qzyj','ZDK_ZLGLK_QZYJ',1)//多选确诊依据；
	})

date('#date');//调用日期函数；
date('#date1');//调用建卡日期函数；
jsbsjzd('#select','ZDK_ZL_ZZXDJ')//组织学等级和分化程度
jsbsjzd('#select1','ZDK_JKTJB_XYQK')//吸烟情况
jsbsjzd('#select2','ZDK_JKDA_YJQK')//饮酒情况
jsbsjzd('#select3','ZDK_JKTJB_DLPL')//体育锻炼；


$('#btnHNext').unbind('click').bind('click',function(){//肿瘤专项档案新增；
console.log(data3);
var jzs=$('.jzs').data('sjzd')||"";
var qzyj=$('.qzyj').data('sjzd')||"";
var tydl=$('#select3').data('name')||"";
var yjqk=$('#select2').data('name')||"";
var fhcd=$('#select').data('name')||"";
var xyqk=$('#select1').data('name')||"";
var box='{"jkrq":"'+$("#date1").val()+'","jb0bm":"'+$(".bmjpx").val()+'","inputor":"管理员","xtxbm":"'+$(".blxtx").val()+'","cfys":"'+$(".ys").val()+'","yjpl":"'+$(".yjpl").val()+'","cfhd":"'+$(".tlhd1").val()+'","jszs":"'+$(".jszs").val()+'","blzd":"'+$(".blzd").val()+'","zlmc":"'+$(".zlmc").val()+'","tydl":"'+tydl+'","jzs":"'+jzs+'","zrys":"'+$(".zrys").val()+'","qzyj":"'+qzyj+'","xyzs":"'+$(".xyzs").val()+'","fhcd":"'+fhcd+'","xyyp1":"'+$(".tzhyy1").val()+'","modifydate":"'+CurentTime()+'","jkdaid":"'+data3.conarray[0].jkdaid+'","xyyp2":"'+$(".tzhyy2").val()+'","xyyp3":"'+$(".tzhyy3").val()+'","jsjs":"'+$(".jsjl").val()+'","inputdate":"'+CurentTime()+'","hdpl":"'+$(".hdpl").val()+'","yjqk":"'+yjqk+'","jsls":"'+$(".jsls").val()+'","xyqk":"'+xyqk+'","ysl":"'+$(".ysl").val()+'","zdyy":"'+$(".zdyy").val()+'","editor":"管理员","zdsj":"'+$("#date").val()+'","yspl":"'+$(".yspl").val()+'","hdsj":"'+$(".hdsj").val()+'","yyyp3":"'+$(".yyyp3").val()+'","yyyp1":"'+$(".yyyp1").val()+'","yyyp2":"'+$(".yyyp2").val()+'","icd10":"'+$(".dbm").val()+'"}'
content=encodeURIComponent(box);
$.ajax({//新增；
　　type:'post',
	url:'http://192.168.1.237:9003/ggws/zl/zljxk_edit',
　　data:{'edit_stat':'0','content':content},//
　　dataType:'json',
	cache:false,
　　success:function(data2){
		console.log(data2);

	},
	error:function(err3){
	　console.log(err3);　
　　}
　　})
//转化json格式；增加与修改的json数据不一样； glvy  
})	
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
$('#pageF .chaxun').val('');
$('#pageB').css({'display' : 'block'});
$('#pageE').addClass('animatestart sliderightout');
setTimeout(function(){ //动画结束时重置class
$('#pageE').css('display', 'none');
$('#pageE').removeClass('animatestart sliderightout');
}, 350);
})
},
error:function(err4){
console.log(err4);
}
})	
})	
	
$('#pagefBack').click(function(){
	back('#pageF','#pageA');
})
$('#pageABack').click(function(){
	back('#pageB','#pageA');
})
$('#pageCBack').click(function(){
	$('.main3').html('');
	back('#pageC','#pageA');
})
$('#pageDBack').click(function(){
	back('#pageD','#pageA');
})
$('#pageEBack').click(function(){
	back('#pageE','#pageD');
})
$('#btnNext').click(function(){
	next('#pageA','#pageF');
})
$('#pagegBack').click(function(){
	back('#pageG','#pageF');
})
$('#pageHBack').click(function(){
	back('#pageH','#pageA');
})
$('#pageIBack').click(function(){
	back('#pageI','#pageA');
})

$('#btnfNext').click(function(){
$('#pageG').css({'display' : 'block'});
$('#pageF').addClass('animatestart sliderightout');
setTimeout(function(){ //动画结束时重置class
$('#pageF').css('display', 'none');
$('#pageF').removeClass('animatestart sliderightout');
}, 350);
$('.boxg').html('');
var arr='<div class="header one">'+
'<img src="../images/img_infoxq_photo.png" class="tx"/>'+
'<div class="dah">健康档案号:</div><input type="text"class="da"/>'+
'	</div> '+
'	<div class="jbxx one">'+
'	基本信息'+
'	</div>'+
'	<div class="one">'+
'<span class="left"><label>姓名:</label><input class="xm"  /></span>'+
'<span class="right"><label>性别:</label><input class="xb" id="select" /></span>'+
'</div>'+
'	<div class="one">'+
'<span class="left"><label>出生日期:</label><input class="csrq" id="date" /></span>'+
'<span class="right"><label>联系电话:</label><input class="lxdh"  /></span>'+
'</div>'+
'	<div class="one">'+
'<span class="left1"><label>身份证号:</label><input class="sfzh"  /></span>'+
'</div>'+
'	<div class="one">'+
'<span class="left1"><label>现在住址:</label><input class="sfzh"  /></span>'+
'</div>'+
'	<div class="one">'+
'<span class="left1"><label>户籍地址:</label><input class="sfzh"  /></span>'+
'</div>'+
'	<div class="one">'+
'<span class="left"><label>血型:</label><input class="xx"  id="select1"/></span>'+
'<span class="right"><label>民族:</label><input class="mz"  id="select2"/></span>'+
'</div>'+
'	<div class="one">'+
'<span class="left"><label>文化程度:</label><input class="whcd"  id="select3"/></span>'+
'<span class="right"><label>婚姻状况:</label><input class="hyzk"  id="select4"/></span>'+
'</div>'+
'	<div class="one">'+
'<span class="left"><label>职业:</label><input class="zy"  id="select5"/></span>'+
'<span class="right"><label>HR阴性:</label><input class="hryx"  id="select6"/></span>'+
'</div>'+
'<div class="line one"></div>'+
'	<div class="one">'+
'<span class="left2"><label>医疗费用支付方式:</label><input class="ylfy"  /></span>'+
'</div>'+
'<div class="jbxx one">'+
'	医疗信息'+
'	</div>'+
'	<div class="one">'+
'	<span class="left1"><label>药物过敏:</label><input class="ywgm"  /></span>'+
'</div>'+
'	<div class="one">'+
'<span class="left1"><label>暴露史:</label><input class="bls"  /></span>'+
'</div>'+
'	<div class="one">'+
'<span class="left"><label>遗传病史:</label><input class="ycbs"  /></span>'+
'<span class="right"><label>疾病名称:</label><input class="xb"  /></span>'+
'</div>'+
'	<div class="one">'+
'	<span class="left1"><label>残疾情况:</label><input class="cjqk"  /></span>'+
'</div>'+
'	<div>'+
'<span class="left3"><label>家族史:父亲:</label><input class="jzsfq"  /></span>'+
'<span class="right1"><label>母亲:</label><input class="jzsmq"  /></span>'+
'</div>'+
'	<div class="one">'+
'<span class="left3"><label>兄弟姐妹:</label><input class="jzsjm"  /></span>'+
'<span class="right1"><label>子女:</label><input class="jzszn"  /></span>'+
'</div>'+
'	<div class="jwjb one">'+
'既往疾病:'+
'<ul>'+
'<li class="one">'+
'<img src="../images/a.jpg"/><span class="jwjb1">无</span>'+
'<img src="../images/a.jpg" id="date5"/><span>高血压</span><span class="gxy">(　　　)</span>'+
'</li>'+
'<li class="one">'+
'<img src="../images/a.jpg"id="date6"/><span class="jwjb1">糖尿病</span><span class="tnb">(　　　)</span>'+
'<img src="../images/a.jpg"id="date7"/><span class="jwjb1">冠心病</span><span class="gxb">(　　　)</span>'+
'</li>'+
'<li class="one">'+
'<img src="../images/a.jpg"id="date8"/><span class="jwjb1">慢性阻什么</span><span class="mxz">(　　　)</span>'+
'<img src="../images/a.jpg"id="date9"/><span class="jwjb1">恶性肿瘤</span><span class="exz">(　　　)</span>'+
'</li>'+
'<li class="one">'+
'<img src="../images/a.jpg"id="date10"/><span class="jwjb1">脑卒中</span><span class="nzc">(　　　)</span>'+
'<img src="../images/a.jpg"id="date11"/><span class="jwjb1">重性精神病</span><span class="zxjsb">(　　　)</span>'+
'</li>'+
'<li class="one">'+
'<img src="../images/a.jpg"id="date12"/><span class="jwjb1">结核病</span><span class="jhb">(　　　)</span>'+
'<img src="../images/a.jpg"id="date13"/><span class="jwjb1">肝炎</span><span class="gy">(　　　)</span>'+
'</li>'+
'<li class="one">'+
'<img src="../images/a.jpg"id="date14"/><span class="jwjb1">其他法什么</span><span class="qtf">(　　　)</span>'+
'<img src="../images/a.jpg"id="date15"/><span class="jwjb1">职业病</span><span class="zyb">(　　　)</span>'+
'</li>'+
'<li class="one">'+
'<img src="../images/a.jpg"id="date16"/><span class="jwjb1">其他</span><span class="qt">(　　　)</span>'+
'</li>'+
' </ul>'+
'</div>'+
' <div class="jbxx one">'+
'	生活环境'+
'	</div>'+
'  <div class="one">'+
'	<span class="left1"><label>饮水:</label><input class="ys" id="select7" /></span>'+
'</div>'+
'	<div class="one">'+
'<span class="left"><label>燃料类型:</label><input class="rllx"id="select8"/></span>'+
'<span class="right2"><label>厨房排风设施:</label><input class="cfpf"id="select9"/></span>'+
'</div>'+
'	<div class="one">'+
'<span class="left"><label>厕所:</label><input class="cs" id="select10" /></span>'+
'<span class="right2"><label>禽畜栏:</label><input class="qcl" id="select11" /></span>'+
'</div>';;
$('.boxg').append(arr);
});	


		
})
	
	