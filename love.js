var fun=function(){
var x=document.getElementById('name').value;
var y=document.getElementById('lname').value;
if(x=="")
{
alert("Warning! Please fill your name");
}
else if(!isNaN(x)){
alert("Number are not allowed");
}
else if(x.length<=3){
alert("Minimum length is 3");
}
else if(y==""){
alert("Warning! Please fill your partner name");
}
else if(!isNaN(y)){
alert("Number are not allowed");
}
else if(y.length<3){
alert("Minimum length is 3");
}
else{
var lovedata=Math.random() * 100;
//console.log(Math.floor(lovedata));
lovedata=Math.floor(lovedata);
document.getElementById('lovedata').value=lovedata + '%';
}
}