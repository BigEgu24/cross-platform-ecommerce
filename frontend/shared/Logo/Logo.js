import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
export default function Logo(props) {
  return /*#__PURE__*/React.createElement(Svg, {
    height: props.height,
    width: props.width,
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement(Path, {
    fill: props.fill,
    d: "M12 1c6.074 0 10.999 4.925 10.999 11 0 6.074-4.925 10.999-11 10.999-6.074 0-10.999-4.925-10.999-11C1 5.925 5.925 1 12 1zm0 18.173a7.174 7.174 0 10-.001-14.347 7.174 7.174 0 000 14.347zm0-3.653a3.52 3.52 0 110-7.04 3.52 3.52 0 010 7.04z"
  }));
}