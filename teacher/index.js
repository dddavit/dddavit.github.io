/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_portrait";

loadLib("@babel/runtime/helpers/Arrayincludes.js");
loadLib("@babel/runtime/helpers/assertThisInitialized.js");
loadLib("@babel/runtime/helpers/classCallCheck.js");
loadLib("@babel/runtime/helpers/createClass.js");
loadLib("@babel/runtime/helpers/defineProperty.js");
loadLib("@babel/runtime/helpers/get.js");
loadLib("@babel/runtime/helpers/getPrototypeOf.js");
loadLib("@babel/runtime/helpers/setPrototypeOf.js");
loadLib("@babel/runtime/helpers/inherits.js");
loadLib("@babel/runtime/helpers/interopRequireDefault.js");
loadLib("@babel/runtime/helpers/possibleConstructorReturn.js");
loadLib("@babel/runtime/helpers/set.js");
loadLib("@babel/runtime/helpers/superPropBase.js");
loadLib("@babel/runtime/helpers/typeof.js");

loadLib("libs/min/laya.core.js");
loadLib("libs/min/fairygui.min.js");
loadLib("libs/min/laya.ani.js");
loadLib("libs/min/laya.ui.js");
loadLib("libs/min/laya.tiledmap.js");
loadLib("libs/min/laya.particle.js");
loadLib("libs/min/laya.physics3D.min.js");
loadLib("libs/min/laya.d3.js");
loadLib("libs/min/laya.html.js");
// loadLib("libs/min/laya.physics_o.js");

//-----libs-begin-----

//-----libs-end-------
loadLib("js/bundle.js");

// ov 需要注释掉 effendi：
// loadLib("effendi/effendi_main.js"); // aly 这次上 tt
// loadLib("aly/aly-main.js")