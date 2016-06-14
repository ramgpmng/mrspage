</script><style type="text/css">
#fanback1{
display:none;
background:rgba(0,0,0,0.9);
width:100%;
height:100%;
position:fixed;
top:0;
left:0;
z-index:99999}
#fan-exit{
width:100%;
height:100%
}
#fanbox{
background:none;
width:100%;
height:auto;
position:absolute;
top:30%;
}

</style><script type="text/javascript">/*<![CDATA[
jQuery.cookie=function(key,value,options){
if(arguments.length>1&&String(value)!=="[object Object]"){
options=jQuery.extend({},options);
if(value===null||value===undefined){
options.expires=-1;
}
if(typeof options.expires==='number'){
var days=options.expires,t=options.expires=new Date();
t.setDate(t.getDate()+days);
}
value=String(value);
return(document.cookie=[
encodeURIComponent(key),'=',
options.raw?value:encodeURIComponent(value),
options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',
options.domain?'; domain='+options.domain:'',
options.secure?'; secure':''
].join(''));
}

options=value||{};
var result,decode=options.raw?function(s){return s;}:decodeURIComponent;
return(result=new RegExp('(?:^|; )'+encodeURIComponent(key)+'=([^;]*)').exec(document.cookie))?decode(result[1]):null;
};
/*]]>*/</script><script type="text/javascript">jQuery(document).ready(function($){
if(document.cookie.indexOf('visited=true')==-1){var fifteenDays=1000*60*60*6;var expires=new Date((new Date()).valueOf()+fifteenDays);document.cookie="visited=true;expires="+expires.toUTCString();
$('#fanback1').delay(3000).fadeIn('medium');
$('#fanclose, #fan-exit')(function(){
$('#fanback1').stop().fadeOut('medium');
});}});
</script><br /><div id="fanback1"><div id="fan-exit"></div><div id="fanbox"><div class="remove-borda"></div>
<center>
<div class="asd">
<img src="http://121corp.com/img/projects/print/fud_tailgate/print_thumb_fud_tailgate.jpg" alt="myads" />
</div>

</center>
</div>
</div>

<div class='clear'></div>
