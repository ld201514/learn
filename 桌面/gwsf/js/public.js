function select1(id,data){
 $(id).mobiscroll().select({//select0单选
    theme: 'android-holo-light', 
	 lang: 'zh',
	 data:data,
    display: 'center',
	buttons: [ 
				'cancel',
				'set'
],
	
		onSet:function(event,inst){
		console.log(event);
		console.log(inst);
		$(id).data('name',inst._tempWheelArray[0])
		
		},
		onCancel:function(event,inst){
			console.log(event);
			console.log(inst);
			
		},
		showScrollArrows: true,
		headerText:function(valueText){
		return '随访方式'
		},
	minWidth: 200 
});	
}
function jsbsjzd(id,typename){
$.ajax({//这个是调用单选函数并且传入数据函数；
type:'get',
	url:'http://192.168.1.237:9003/ggws/pub/getmedicineone',
data:{'type':'1','typename':typename},//
dataType:'json',
	cache:false,
	async:false,
success:function(data2){
		console.log(data2);
		
		for(var k=0;k<data2.conarray.length;k++){
    delete data2.conarray[k]["codekind"];
}
dx4=JSON.parse(JSON.stringify(data2.conarray).replace(/"id"/g, '"value"').replace(/"name"/g, '"text"'))
select1(id,dx4)//select0单选;
	},
	error:function(err3){
	console.log(err3);
}
})
}
function jsbsjzd2(id,typename){
$.ajax({//这个是调用单选用药并且传入数据函数；
type:'get',
	url:'http://192.168.1.237:9003/ggws/pub/getmedicineone',
data:{'type':'2','typename':typename},//
dataType:'json',

	cache:false,
	async:false,
success:function(data2){
		console.log(data2);
		
		for(var k=0;k<data2.conarray.length;k++){
    delete data2.conarray[k]["codekind"];
}
dx6=JSON.parse(JSON.stringify(data2.conarray).replace(/"showindex"/g, '"value"').replace(/"name"/g, '"text"'))
console.log(dx6);
select1(id,dx6)//select0单选;
	},
	error:function(err3){
	console.log(err3);
}
})
}
function select2(id,data){
 var box=$(id).mobiscroll().select({//select0单选
    theme: 'android-holo-light', 
	 lang: 'zh',
	 data:data,
    display: 'center',
	buttons: [ 
				'cancel',
				'set'
],
	
		onSet:function(event,inst){
		console.log(event);
		console.log(inst);
		
		$(id).data('name',inst._tempWheelArray[0])
		if($('#pageH #select1_dummy').val()){
		if($('#pageH #select1_dummy').val()=='不同意参加管理'){
			$('#pageH .qz').attr('disabled',true);
			$('#pageH .qz').val('');
			date2('#date').disable();
		}else{
			$('#pageH .qz').attr('disabled',false);
			date2('#date').enable();
		}
		}
		if($('#pageI #select1_dummy').val()){
		if($('#pageI #select1_dummy').val()=='不同意参加管理'){
			$('#pageI .qz').attr('disabled',true);
			$('#pageI .qz').val('');
			date2('#date').disable();
		}else{
			$('#pageI .qz').attr('disabled',false);
			date2('#date').enable();
		}}
		if($('#select2_dummy').val()=='未治'){
			$('#date2').attr('disabled',true);
			
				$('#date2').val('');
				$('#date').addClass('on');
		}else{
			$('#date2').attr('disabled',false);
		}
		if($('#pageC #select4_dummy').val()){
		if($('#pageC #select4_dummy').val()=='从未住院'){
			$('#pageC #date2').attr('disabled',true);
		$('#pageC #date2').val('');
			date2('#date2').disable();
		}else{
			$('#pageC #date2').attr('disabled',false);
			date2('#date2').enable();			
		}}
		if($('#pageC #select15_dummy').val()=='是'){
			$('#pageC .zzyy').attr('disabled',false)
			$('#pageC .zzjg').attr('disabled',false)				
		}else{
			$('#pageC .zzyy').attr('disabled',true)
			$('#pageC .zzjg').attr('disabled',true)
		}
		if($('#pageE #select4_dummy').val()){
		if($('#pageE #select4_dummy').val()=='从未住院'){
			$('#pageE #date2').attr('disabled',true);
				$('#pageE #date2').val('');
				date2('#date2').disable();
			
		}else{
			console.log(456)
			$('#pageE #date2').attr('disabled',false)	
			date2('#date2').enable();
		}
		}
		if($('#pageE #select15_dummy').val()){
			
		if($('#pageE #select15_dummy').val()=='是'){
			$('#pageE .zzyy').attr('disabled',false)
			$('#pageE .zzjg').attr('disabled',false)				
		}else{
			$('#pageE .zzyy').val('');
			$('#pageE .zzjg').val('');
			$('#pageE .zzyy').attr('disabled',true)
			$('#pageE .zzjg').attr('disabled',true)
		}
		}
		},
		onCancel:function(event,inst){
			console.log(event);
			console.log(inst);
			
		},
		showScrollArrows: true,
		headerText:function(valueText){
		return '随访方式'
		},
	minWidth: 200 
});	
}
  function dan(list,typename){
$.ajax({//这个是调用单选函数并且传入数据函数；
type:'get',
	url:'http://192.168.1.237:9003/ggws/pub/getmedicineone',
data:{'type':'1','typename':typename},//
dataType:'json',
	cache:false,
	async:false,
success:function(data2){
		console.log(data2);
		$.each(data2.conarray,function(i,e){
			if(e.id==list){
				sex=e.name;
			}
		})				
	},
	error:function(err3){
	console.log(err3);
}
})
return sex;
} 
   
function date(id){
		var box=$(id).mobiscroll().date({ //日期函数绑定；
        theme:'android-holo-light', 
        display: 'center',
		endYear:'2104',
		headerText:function(valueText){
		return '日期'
		},//设置表头
		  showScrollArrows: true,//下拉箭头
	buttons: [ 
				'cancel',
				'set'
],//确定与取消互换；

		dateFormat:'yy-mm-dd'
	
    });
	return box;
	}
function date2(id){
	var box1=mobiscroll.date(id, {
	 //theme:'android-holo-light',
theme: 'android-holo-light',	 
        display: 'center',
		endYear:'2104',
		headerText:function(valueText){
		return '日期'
		},//设置表头
		  showScrollArrows: true,//下拉箭头
		//minDate:new Date(2015+2,8,20,12,30),
	buttons: [ 
				'cancel',
				'set'
],//确定与取消互换；

		dateFormat:'yy-mm-dd'
	
});	
return box1;
}
	
function sjzd1(id,typename,type){//调用多选弹出框函数；
console.log(this);
$(id).click(function(){
$(this).removeData('sjzd');	
var that=this;
		$.ajax({//读取并发症合并症数据字典接口：
type:'get',
url:'http://192.168.1.237:9003/ggws/pub/getmedicineone',
data:{'type':type,'typename':typename},//
dataType:'json',
cache:false,
success:function(data2){
		console.log(data2);


var box='<div class="ld-persp"><div class="ld-mask"></div><div class="ld-box">'+
'<header class="ld-header">症状</header>'+
'  <div class="ld-wrap-page">'+
'    <div id="ld-page">'+
'	<ul>'+
'			'+
'		</ul>'+
'    </div>'+
'  </div>'+
'  <footer id="ld-footer"><span class="ld-cancel">取消</span><span class="ld-sure">确定</span></footer>'+
'  </div></div>';
		sjzd='';
$.each(data2.conarray,function(index,i){
sjzd+='<li data-id="'+i.id+'">'+i.name+'</li>';
})
console.log(sjzd)

$('body').append(box);
//$('body').addClass('ld-lock');
 //$('.ld-box').css('overflow','hidden');
 //$('.ld-box').css('overflow','hidden');



console.log($(window).height()+$(document).scrollTop())
//$('.alpha').css('top',$(document).scrollTop());
top1=($(window).height()-340)/2+$(document).scrollTop();
left1=($(window).width()-300)/2;

console.log($(window).height())
console.log($(document).scrollTop())
console.log(top1)
$('.ld-box').css({left:left1+'px',top:top1+'px','display': 'block'})
console.log($('.alpha').height());
	$('#ld-page ul').append(sjzd);	
	$('.ld-sure').unbind('click').bind('click',function(){
$(id).val('');

var str='';
var str3='';
$('#ld-page li.ld-active').each(function(i,e){

str=$(id).val()+','+$(this).html()
$(id).val(str);
});

$('#ld-page li.ld-active').each(function(i,e){

if(!$(that).data("sjzd")){str3=$(this).data('id');}
else{str3=$(that).data('sjzd')+','+$(this).data('id')}
$(that).data("sjzd", str3)
})

console.log($(that).data("sjzd"))

if(str){$(id).val(str.replace(',',''))}else{$(id).val('');}
$('.ld-box').css('visibility','hidden')
$('.ld-persp').remove();


})
$('.ld-persp').height($(document).height());
$('.ld-box').css('visibility','visible')
$('#ld-page li').on('click',function(){
if(!$(this).hasClass('ld-active')){$(this).addClass('ld-active').css({"background-image":"url(../images/b.jpg)"})}else{
$(this).removeClass('ld-active').css({"background-image":"url(../images/a.jpg)"})
}})

$('.ld-cancel').click(function(){
$('.ld-box').css('visibility','hidden')

$('.ld-persp').remove();
})

	},
	error:function(err3){
console.log(err3);
}
})
})
}	

function jsGetAge(strBirthday) {//计算年龄；
var bDay = new Date(strBirthday),
nDay = new Date(),
nbDay = new Date(nDay.getFullYear(),bDay.getMonth(),bDay.getDate()),
age = nDay.getFullYear() - bDay.getFullYear();
if (bDay.getTime()>nDay.getTime()) {return '日期有错'}
//return nbDay.getTime()<=nDay.getTime()?age:--age;
return age;
}
function sjzd2(id,typename,type){//调用多选弹出框函数；
console.log(this);

$(id).removeData('sjzd');	
		$.ajax({//读取并发症合并症数据字典接口：
type:'get',
url:'http://192.168.1.237:9003/ggws/pub/getmedicineone',
data:{'type':type,'typename':typename},//
dataType:'json',
cache:false,
success:function(data2){
		console.log(data2);


var box='<div class="ld-box">'+
'<header class="ld-header">症状</header>'+
'  <div class="ld-wrap-page">'+
'    <div id="ld-page">'+
'	<ul>'+
'			'+
'		</ul>'+
'    </div>'+
'  </div>'+
'  <footer id="ld-footer"><span class="ld-cancel">取消</span><span class="ld-sure">确定</span></footer>'+
'  </div>';
		sjzd='';
$.each(data2.conarray,function(index,i){
sjzd+='<li data-id="'+i.id+'">'+i.name+'</li>';
})
console.log(sjzd)

$('body').append(box);
top1=($(window).height()-340)/2+$(document).scrollTop();
left1=($(window).width()-300)/2;
$('.ld-box').css({left:left1+'px',top:top1+'px','display': 'block'})
	$('#ld-page ul').append(sjzd);	
	$('.ld-sure').unbind('click').bind('click',function(){
$(id).val('');

var str='';
var str3='';
$('#ld-page li.ld-active').each(function(i,e){

str=$(id).val()+','+$(this).html()
$(id).val(str);
});

$('#ld-page li.ld-active').each(function(i,e){

if(!$(id).data("sjzd")){str3=$(this).data('id');}
else{str3=$(id).data('sjzd')+','+$(this).data('id')}
$(id).data("sjzd", str3)
})

console.log($(id).data("sjzd"))

if(str){$(id).val(str.replace(',',''))}else{$(id).val('');}
$('.ld-box').css('visibility','hidden')
$('.ld-mask').remove();
$('.ld-box').remove();

})
$('.ld-box').css('visibility','visible')
$('body').append('<div class="ld-mask"></div>')
$('.ld-mask').height($(document).height())
$('#ld-page li').on('click',function(){
if(!$(this).hasClass('ld-active')){$(this).addClass('ld-active').css({"background-image":"url(../images/b.jpg)"})}else{
$(this).removeClass('ld-active').css({"background-image":"url(../images/a.jpg)"})
}})
$('.ld-cancel').click(function(){
$('.ld-box').css('visibility','hidden')
$('.ld-mask').remove();
})

	},
	error:function(err3){
console.log(err3);
}
})

}	
function addMoth(d,m){//m个月之后的日期；这个没有考虑闰年；
   var ds=d.split('-'),//_d=ds[2]-0;
   _d=ds[2];
   console.log(_d);
   var nextM=new Date( ds[0],ds[1]-1+m+1, 0 );
   var max=nextM.getDate();
   console.log(max);
   console.log(_d>01);
   d=new Date( ds[0],ds[1]-1+m,_d>max? max:_d );
   console.log(d);
    var year = d.getFullYear();       //年
        var month = d.getMonth() + 1;     //月
        var day = d.getDate();            //日
         
        var clock = year + "-";
       
        if(month < 10)
            clock += "0";
       
        clock += month + "-";
       
        if(day < 10)
            clock += "0";
           
        clock += day + " ";
       
        
        return(clock); 
   //return d.toLocaleDateString().match(/\d+/g).join('-')
}
 //alert(  addMoth('2016-10-28',3) )
//addMoth(CurentTime(),3);当前日期3个月之后日期；
function addmulMonth(dtstr, n) 
{       
    var s = dtstr.split("-"); 
    var yy = parseInt(s[0]); 
    var mm = parseInt(s[1])-1 ;  
    var dd = parseInt(s[2]);  
    var dt = new Date(yy, mm, dd);  
    dt.setMonth(dt.getMonth() + n); 
    var month = parseInt(dt.getMonth()) + 1; 
    return dt.getFullYear() + "-" + month  + "-" + dd; 
}    
//alert(  addmulMonth('2016-10-28',3) )
function scdxsj1(id,typename,id1){//多选单选数字变文字函数；
//console.log(data.conarray[0][id])
var listlist=data.conarray[0][id].split(',');
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
	if($(id1).val()){var str7=e2.name+','+$(id1).val()}else{var str7=e2.name}
$(id1).val(str7);

}
})
})
		},
		error:function(err){
		console.log(err);
		}})
}
function scdxsj3(id,typename,id1,listlist){//多选单选数字变文字函数；
//console.log(data.conarray[0][id])
//var listlist=
//console.log(listlist);
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
				console.log(listlist);
		$.each(listlist,function(i,e1){
$.each(data2.conarray,function(i,e2){
if(e2.id==e1){
	
	if($(id1).val()){var str7=e2.name+','+$(id1).val()}else{var str7=e2.name;}
$(id1).val(str7);
console.log($(id1).val())
}
})
})
		},
		error:function(err){
		console.log(err);
		}})
}
function add1(url,edit_stat){
$.ajax({//新增修改脑卒中登记记录
type:'post',
dataType:'json',
url:url,
data:{"edit_stat":edit_stat,"content":content},//right从登陆获取；1表示修改；0表示增加；　　
cache:false,
success:function(data3){
console.log(data3);
alert('成功');
},
error:function(err2){
console.log(err2);
alert('失败');
}
})
}	
	function del(e){
	console.log($('.box2').children('div:not(:hidden)').length)
	if($(e.target)[0].className=='btn1'){
	if($('.box2').children('div:not(:hidden)').length==1){
		$(e.target).siblings().val('');
		return ;
		
	}else{
	
$(e.target).parent().css('display','none');//删除一行；

}
	}

}
function date1(id){//3个月之后日期；
		 $(id).mobiscroll().date({ //日期函数绑定；
        theme:'android-holo-light', 
        display: 'center',
		endYear:'2104',
		headerText:function(valueText){
		return '日期'
		},//设置表头
		onSet:function(event,inst){
		console.log(event);
		console.log(inst);
	
		$('#date1').val(addMoth(event.valueText,3))
		
		},
		  showScrollArrows: true,//下拉箭头
	buttons: [ 
				'cancel',
				'set'
],//确定与取消互换；

		dateFormat:'yy-mm-dd'
	
    });}
function add(index){


$('.box2').append('<div class="qk">'+
'<input type"text" id="select'+index+'"/><input type="text"class="mrcs1"/><input type="text"class="mcyl1"/><img src="../images/delete.png" class="btn1" />'+
'</div>')


}
function jsbsjzd3(id,typename){
$.ajax({//这个是调用单选函数并且传入数据函数；
type:'get',
	url:'http://192.168.1.237:9003/ggws/pub/getmedicineone',
data:{'type':'1','typename':typename},//
dataType:'json',
	cache:false,
success:function(data2){
		console.log(data2);
		
		for(var k=0;k<data2.conarray.length;k++){
    delete data2.conarray[k]["codekind"];
}
dx4=JSON.parse(JSON.stringify(data2.conarray).replace(/"id"/g, '"value"').replace(/"name"/g, '"text"'))
select2(id,dx4)//select0单选;
	},
	error:function(err3){
	console.log(err3);
}
})
}

function CurentTime()//获取当天时间；
    { 
        var now = new Date();
       
        var year = now.getFullYear();       //年
        var month = now.getMonth() + 1;     //月
        var day = now.getDate();            //日
         
        var clock = year + "-";
       
        if(month < 10)
            clock += "0";
       
        clock += month + "-";
       
        if(day < 10)
            clock += "0";
           
        clock += day + " ";
       
        
        return(clock); 
    } 
	function mobiscroll_select(event,inst){
        //valueText是选中的值
        console.log(event);
        //mobiscroll对象
        console.log(inst);
		console.log(inst._tempWheelArray[0])
	$(this).data('id',inst._tempWheelArray[0])
    }
	
	function next(A,B){//点击从A页面到B页面；B页面显示；		
$(B).css({'display' : 'block'});
$(B).addClass('animatestart sliderightin');   
setTimeout(function(){ //动画结束时重置class
$(A).css({'display' : 'none'}); 
$(B).removeClass('animatestart sliderightin');
}, 350);   
}
function back(B,A){//点击从B返回到A页面；A页面显示；

$(A).css({'display' : 'block'});
$(B).addClass('animatestart sliderightout');
setTimeout(function(){ //动画结束时重置class
$(B).css('display', 'none');
$(B).removeClass('animatestart sliderightout');
}, 350);
}