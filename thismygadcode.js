<script type="text/javascript">/*<![CDATA[
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
</script>
