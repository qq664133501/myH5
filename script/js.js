function taolu(){
    alert("lalala");
    alert("lalala123");
}
var number,money;
number = prompt("每杯饮料10元，第二杯半价，请输入几杯！");
function isPositiveInteger(s){//是否为正整数
    var re = /^[0-9]+$/ ;
    return re.test(s)
}

if (isPositiveInteger( number )){
    if(number % 2 == 0){
     money = number * 7.5;
     }else{
     money = number * 7.5 + 2.5;
     }
alert("您需要支付的费用为" + money + "元");
}else{
    alert("请输入正整数");
} ;





