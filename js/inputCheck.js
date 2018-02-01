//登录页面文本框输入验证
function CheckInput() {
    var loginName = document.getElementById("loginName").value;
    var pwd = document.getElementById("loginPwd").value;

    if (loginName == null || loginName == "") {
        alert("用户名不能为空！");
        return false;
    }

    if (pwd == null || pwd == "") {
        alert("密码不能为空！");
        return false;
    }

    return true;
}

/*注册电话信息验证*/
function RegistCheckPhone() {    
    var reg = /\d{3}-\d{8}|\d{4}-\d{7}|\d{11}/;
    var registTel = document.getElementById("registTel").value;
    if (!reg.test(registTel)) {
        alert("输入的电话号码格式不对，请重新输入！");
    }
}

/*注册邮箱信息验证*/
function RegistCheckEmail() {
    var reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    var registEmail = document.getElementById("registEmail").value;
    if (!reg.test(registEmail)) {
        alert("输入的邮箱格式不对，请重新输入！");
    }
}

/*注册身份证信息验证*/
function RegistCheckID() {
    var reg = /\d{15}|\d{18}/;
    var registID = document.getElementById("registID").value;
    if (!reg.test(registID)) {
        alert("输入的身份证号码格式不对，请重新输入！");
    }
}


//注册文本框获得焦点
function registFocus(obj) { 
    $(obj.parentNode).addClass("textbox-focused"); 
    $(obj.parentNode.nextElementSibling).css("display", "block");
}

////密码文本框
//function registFocus2() {
//    $("#spanPwd2").addClass("textbox-focused");
//    $("#registTip2").css("display", "block");
//}


////确认密码文本框
//function registFocus3() {
//    $("#spanPwd3").addClass("textbox-focused");
//    $("#registTip3").css("display", "block");
//}

//注册文本框失去焦点，进行数据验证
function registBlur(obj) { 
    var registInfo = $(obj).val();
    var registId = obj.id;
    var regexp;
    switch (registId) {
        case "registName":
            //验证用户名，4-16位字符，只可是用汉字,字母，数字 
            regexp = /^[\u4e00-\u9fa5a-zA-Z0-9]{3,15}$/; 
            break;
        case "registPwd":
            //验证密码，6-16位字符,可使用字母(区分大小写),数字,符号
            regexp = /^(?=[\x21-\x7e]+)[^A-Za-z0-9]|[A-Za-z0-9]{5,15}$/;
            break;
        case "registTel":
            //验证三大通信系统的号码格式
            regexp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
            break;
        case "registEmail":
            //验证三大通信系统的号码格式
            regexp = /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/;
            break;
    }
    
    if (registInfo == "" || registInfo == undefined || registInfo == null) {
        $("#" + registId + "_f").css("display", "inline-block");
        return false;
    }
    if (!regexp.test(registInfo)) {
        //alert("输入格式错误");
        $("#" + registId + "_f").css("display", "inline-block");
        $("#" + registId + "_t").css("display", "none");
        $(obj.parentNode).removeClass("textbox-focused");
        $(obj.parentNode.nextElementSibling).css("display", "block");
    }
    else {
        $("#" + registId + "_t").css("display", "inline-block");
        $("#" + registId + "_f").css("display", "none");
        $(obj.parentNode).removeClass("textbox-focused");
        $(obj.parentNode.nextElementSibling).css("display", "block");
    }
}

//function registBlur2() {
//    var registPwd = $("#registPwd").val();
//    //验证密码，6-16位字符,可使用字母(区分大小写),数字,符号
//    var reg = /^(?=[\x21-\x7e]+)[^A-Za-z0-9]|[A-Za-z0-9]{5,15}$/;
//    if (!reg.test(registPwd)) {
//        $("#false2").css("display", "block");
//        $("#true2").css("display", "none");
//        $("#spanPwd2").removeClass("textbox-focused");
//        $("#registTip2").css("display", "block");
//    }
//    else {
//        $("#true2").css("display", "block");
//        $("#false2").css("display", "none");
//        $("#spanPwd2").removeClass("textbox-focused");
//        $("#registTip2").css("display", "none");
//    }
   
//}

function checkPwd(obj) {
    var registPwd = $("#registPwd").val();
    //去除空格符等
    registPwd = registPwd.replace(/^\s+|\s+$/g, "");

    var registPwd2 = $("#registPwd2").val();
    registPwd2 = registPwd2.replace(/^\s+|\s+$/g, "");

    //验证两次输入的密码是否相同    
    if (registPwd != registPwd2) {
        $("#" + obj.id + "_f").css("display", "inline-block");
        $("#" + obj.id + "_t").css("display", "none");
        $(obj.parentNode).removeClass("textbox-focused");
        $(obj.parentNode.nextElementSibling).css("display", "block");
    }
    else {
        $("#" + obj.id + "_t").css("display", "inline-block");
        $("#" + obj.id + "_f").css("display", "none");
        $(obj.parentNode).removeClass("textbox-focused");
        $(obj.parentNode.nextElementSibling).css("display", "block");
    }
   
}