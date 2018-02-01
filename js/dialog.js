//文本框获得焦点与失去焦点
//登录用户名文本框
function focusShow() {
    $("#spanName").addClass("textbox-focused");
    $("#tip1").css("display", "block");
    //alert($("#tip1").text());
}
function blurShow() {
    $("#spanName").removeClass("textbox-focused");
    $("#tip1").css("display", "none");
}

//密码文本框
function focusShow2() {
    $("#spanPwd").addClass("textbox-focused");
    $("#tip2").css("display", "block");
}
function blurShow2() {
    $("#spanPwd").removeClass("textbox-focused");
    $("#tip2").css("display", "none");
} 

//登录与注册div层弹出
function showLogin()  //显示隐藏层和弹出层
{
    var hideobj = document.getElementById("hidebg");
    hidebg.style.display = "block";  //显示隐藏层
    hidebg.style.height = document.body.clientHeight + "px";  //设置隐藏层的高度为当前页面高度
    document.getElementById("loginInfo").style.display = "block";  //显示登录层
    document.getElementById("registInfo").style.display = "none";  //隐藏注册层
    //设置背景固定，不能滚动，且当前位置固定。
    ModalHelper('modal-open').afterOpen();
}
function hideLogin()  //去除隐藏层和弹出层
{
    document.getElementById("hidebg").style.display = "none";
    document.getElementById("loginInfo").style.display = "none";
    //设置背景固定，不能滚动，且当前位置固定。
    ModalHelper('modal-open').beforeClose();
}

function showRegist()  //显示隐藏层和弹出层
{
    var hideobj = document.getElementById("hidebg");
    hidebg.style.display = "block";  //显示隐藏层
    hidebg.style.height = document.body.clientHeight + "px";  //设置隐藏层的高度为当前页面高度
    document.getElementById("registInfo").style.display = "block";  //显示弹出层
    document.getElementById("loginInfo").style.display = "none";  //显示弹出层
    //设置背景固定，不能滚动，且当前位置固定。
    ModalHelper('modal-open').afterOpen();
}
function hideRegist()  //去除隐藏层和弹出层
{
    document.getElementById("hidebg").style.display = "none";
    document.getElementById("registInfo").style.display = "none";
    //设置背景固定，不能滚动，且当前位置固定。
    ModalHelper('modal-open').beforeClose();
}

//弹出遮罩层，固定背景不能滚动
function ModalHelper(bodyCls) {
    var sTop;
    return {
        afterOpen: function () {
            sTop = document.scrollingElement.scrollTop;
            //console.log(document.scrollingElement.scrollTop);
            document.body.classList.add(bodyCls);
            //document.body.style.top = -sTop + 'px';
        },
        beforeClose: function () {
            document.body.classList.remove(bodyCls);
            //scrollTop lost after set position:fixed, restore it back.
            //document.scrollingElement.scrollTop = sTop;
        },
        afterOpenFixed: function () {
            document.body.classList.add(bodyCls);
            //document.scrollingElement.scrollTop = sTop;
        }
    };
};