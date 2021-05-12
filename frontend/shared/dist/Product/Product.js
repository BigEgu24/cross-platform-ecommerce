import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path, Polygon, G } from 'react-native-svg';
export const Department = props => {
  // Pass the param props to the product
  console.log(props);
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, null, props.department));
};
export const Title = props => {
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, null, props.title));
};
export const Price = props => {
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, null, props.price.toFixed(2)));
};

function FullStar(props) {
  return /*#__PURE__*/React.createElement(Svg, {
    height: 32,
    width: 32,
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement(G, {
    id: "icon-star"
  }, /*#__PURE__*/React.createElement(Path, {
    stroke: "#E17D23",
    fill: "#FFA41C",
    d: "M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118 l11.547-1.2L16.026,0.6L20.388,10.918z"
  })));
}

function HalfStar(props) {
  return /*#__PURE__*/React.createElement(Svg, {
    height: 32,
    width: 32,
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement(G, {
    id: "half-star"
  }, /*#__PURE__*/React.createElement(Polygon, {
    fill: "#fff",
    stroke: "#E17D23",
    points: "32,12.118 20.389,10.918 16.026,0.6 16,0.66 16,25.325 16.021,25.312 25.914,31.4 23.266,19.867 "
  }), /*#__PURE__*/React.createElement(Polygon, {
    fill: "#FFA41C",
    stroke: "#E17D23",
    points: "11.547,10.918 0,12.118 8.822,19.867 6.127,31.4 16,25.325 16,0.66 \t"
  })));
}

function IconStar(props) {
  return /*#__PURE__*/React.createElement(Svg, {
    viewBox: "0 0 1000 1000",
    width: "1.8rem",
    height: "1.8rem",
    style: styles.star
  }, /*#__PURE__*/React.createElement(Path, {
    fill: "currentColor",
    d: "M10,394.5c0-14.8,10.9-23.9,32.7-27.4l295.4-42.2L471,56.9c7.7-16.2,17.2-24.3,28.5-24.3s21.1,8.1,29.5,24.3l131.9,267.9l295.4,42.2c22.5,3.5,33.8,12.7,33.8,27.4c0,8.4-5.3,17.9-15.8,28.5L760,630.8l50.6,294.3c0.7,2.8,1.1,7,1.1,12.7c0,7.7-2.1,14.4-6.3,20c-4.2,5.6-10.2,8.8-17.9,9.5c-7,0-14.8-2.5-23.2-7.4L499.5,820.7L235.7,959.9c-9.1,4.9-17.2,7.4-24.3,7.4c-7.7,0-13.7-3.2-17.9-9.5c-4.2-6.3-6.3-13-6.3-20c0-2.8,0.4-7,1.1-12.7l50.6-294.3L24.8,423C14.9,412.4,10,402.9,10,394.5L10,394.5z"
  }));
}

const Stars = props => {
  let rating = 0;
  /* This is to round the rating to closest .5 or .0 */

  if (props.ratings) {
    console.log(props.ratings);
    rating = (Math.round(props.ratings * 10 / 5) * 5 / 10 * 20).toString() + "%";
  }

  return /*#__PURE__*/React.createElement(View, {
    style: styles.back
  }, /*#__PURE__*/React.createElement(IconStar, null), /*#__PURE__*/React.createElement(IconStar, null), /*#__PURE__*/React.createElement(IconStar, null), /*#__PURE__*/React.createElement(IconStar, null), /*#__PURE__*/React.createElement(IconStar, null), /*#__PURE__*/React.createElement(View, {
    style: [{
      width: rating
    }, styles.front]
  }, /*#__PURE__*/React.createElement(IconStar, null), /*#__PURE__*/React.createElement(IconStar, null), /*#__PURE__*/React.createElement(IconStar, null), /*#__PURE__*/React.createElement(IconStar, null), /*#__PURE__*/React.createElement(IconStar, null)));
};

export const Ratings = props => {
  return /*#__PURE__*/React.createElement(View, {
    style: styles.ratings
  }, props.ratings || "N/A", /*#__PURE__*/React.createElement(Stars, {
    ratings: props.ratings
  }));
};
const styles = StyleSheet.create({
  container: {
    width: 230,
    maxWidth: 230
  },
  ratings: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  front: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    overflow: 'hidden',
    color: '#ffbc0b'
  },
  back: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    color: '#d3d3d3'
  },
  star: {
    flexShrink: 0
  }
});