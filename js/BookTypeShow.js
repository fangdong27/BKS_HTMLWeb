var myobj = {
    _$AllGameDiv: $("#AllGameDiv div"),
    _$GameDHDiv: $("#GameDH div")
};
$(function() {
    myobj._$AllGameDiv.hover(function() { showtopdh(this); }, function() { hidetopdh(this); });
    myobj._$GameDHDiv.hover(function() { show_z_dh(this); }, function() { hide_z_dh(this); });
    $("#GameDH").hide();
});
function showtopdh(e) {
    var _$this = $(e); //当前对象
    var _$AllGameDiv = myobj._$AllGameDiv;
    var _$GameDHDiv = myobj._$GameDHDiv;
    //设置下拉对象显示位置
    var _$menu_wz = _$this.offset();
    var height = _$this.height();
    var _top = _$menu_wz.top + height - 15; //5 相差10像素即可实现
    var _left = _$menu_wz.left;
    _$GameDHDiv.css({ top: _top, left: _left });
    _$GameDHDiv.show();
    $("#GameDH").show();
    
}
function hidetopdh(e) {
    var _$this = $(e);
    var _$AllGameDiv = myobj._$AllGameDiv;
    myobj._$GameDHDiv.hide();
    $("#GameDH").hide();
}
function show_z_dh(e) {
    _$this = $(e);
    _$this.show();
    $("#GameDH").show();
}
function hide_z_dh(e) {
    _$this = $(e);
    _$this.hide();
    $("#GameDH").hide();
}