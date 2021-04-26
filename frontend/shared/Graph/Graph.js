var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=Graph;var _reactNativeReanimated=_interopRequireWildcard(require("react-native-reanimated"));var _reactNative=require("react-native");var _react=_interopRequireWildcard(require("react"));var _jsxFileName="/Users/bigegu24/Desktop/react-crossplatform-ecommerce/frontend/shared/src/Graph/Graph.js";function getColor(){return'#'+('000000'+Math.floor(Math.random()*16777215).toString(16)).slice(-6);}function hexToRGB(h){var r=0,g=0,b=0;if(h.length==4){r='0x'+h[1]+h[1];g='0x'+h[2]+h[2];b='0x'+h[3]+h[3];}else if(h.length==7){r='0x'+h[1]+h[2];g='0x'+h[3]+h[4];b='0x'+h[5]+h[6];}return'rgb('+ +r+','+ +g+','+ +b+')';}function Graph(props){var color=(0,_reactNativeReanimated.useSharedValue)(hexToRGB(getColor()));var style=(0,_reactNativeReanimated.useAnimatedStyle)(function(){const _f=function(){return{backgroundColor:(0,_reactNativeReanimated.withTiming)(color.value,{duration:500,easing:_reactNativeReanimated.Easing.bezier(0.5,0.01,0,1)})};};_f._closure={withTiming:_reactNativeReanimated.withTiming,color,Easing:{bezier:_reactNativeReanimated.Easing.bezier}};_f.asString="function _f(){const{withTiming,color,Easing}=jsThis._closure;{return{backgroundColor:withTiming(color.value,{duration:500,easing:Easing.bezier(0.5,0.01,0,1)})};}}";_f.__workletHash=3815004686354;_f.__location="/Users/bigegu24/Desktop/react-crossplatform-ecommerce/frontend/shared/src/Graph/Graph.js (40:33)";global.__reanimatedWorkletInit(_f);return _f;}());(0,_react.useEffect)(function(){setInterval(function(){color.value=hexToRGB(getColor());},1000);},[]);return _react.default.createElement(_reactNative.View,{style:styles.container,__self:this,__source:{fileName:_jsxFileName,lineNumber:55,columnNumber:5}},_react.default.createElement(_reactNative.Text,{style:styles.text,__self:this,__source:{fileName:_jsxFileName,lineNumber:57,columnNumber:7}},"Logo!"));}var styles=_reactNative.StyleSheet.create({container:{width:'100%',height:'100%',backgroundColor:'#000'},text:{color:'#fff'}});