$(function () {
    $("#top").load("../shtml/top.shtml");
    $("#footer").load("../shtml/bottom.shtml");
})


//获取浏览器地址栏的参数
var url = window.location;//获取浏览器地址栏的内容
function getUrlParam(url, name) {
    var pattern = new RegExp("[?]" + name + "\=([^&]+)", "g");
    var matcher = pattern.exec(url);
    var items = null;
    if (matcher != null) {
        try {
            items = decodeURIComponent(decodeURIComponent(matcher[1]));
        } catch (e) {
            try {
                items = decodeURIComponent(matcher[1]);
            } catch (e) {
                items = matcher[1];
            }
        }
    }
    return items;
}

$(function () {
    //顶部导航样式
     var currentPage = $("#currentPage").val();
    if (currentPage == "Home") {
        $("#Home").addClass("currentPage");
    }
    else if (currentPage == "Type") {
        $("#a_type").addClass("a_type");
      
    }
    else if (currentPage == "List") {
        $("#List").addClass("currentPage");
    }
    else if (currentPage == "Activity") {
        $("#Activity").addClass("currentPage");
    }
    else if (currentPage == "About") {
        $("#About").addClass("currentPage");
    }

    //榜单列表样式判断
    var bkList = getUrlParam(url, 'BKList');
    if (bkList == "CXList" ) {
        $("#CXList").addClass("current_list");
        $("#CXContList").css("display", "block");
        $("#HPContList").css("display", "none");
        $("#JYContList").css("display", "none");
        $("#DJContList").css("display", "none");
        
    }
    else if (bkList == "HPList") {
        $("#HPList").addClass("current_list");
        $("#CXContList").css("display", "none");
        $("#HPContList").css("display", "block");
        $("#JYContList").css("display", "none");
        $("#DJContList").css("display", "none");
    }
    else if (bkList == "JYList") {
        $("#JYList").addClass("current_list");
        $("#CXContList").css("display", "none");
        $("#HPContList").css("display", "none");
        $("#JYContList").css("display", "block");
        $("#DJContList").css("display", "none");
    }
    else if (bkList == "DJList") {
        $("#DJList").addClass("current_list");
        $("#CXContList").css("display", "none");
        $("#HPContList").css("display", "none");
        $("#JYContList").css("display", "none");
        $("#DJContList").css("display", "block");
    }
})
