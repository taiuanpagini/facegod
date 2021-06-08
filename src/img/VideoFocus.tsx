import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import { IIcon } from './interface';

const VideoFocus: React.FC<IIcon> = ({ color }) => {
  const svg = `
    <svg height="30" viewBox="0 -87 432 432" width="30" xmlns="http://www.w3.org/2000/svg">
      <path d="m278.90625 0h-248.90625c-16.5625.0195312-29.9804688 13.4375-30 30v197.421875c.0195312 16.5625 13.4375 29.980469 30 30h248.90625c16.558594-.019531 29.980469-13.4375 30-30v-197.421875c-.019531-16.5625-13.441406-29.9804688-30-30zm0 0"/>
      <path d="m328.90625 169.800781 103.09375 56.285157v-194.105469l-103.09375 56.285156zm0 0"/>
    </svg>
  `;

  return <SvgCss fill={color} xml={svg} />;
};
export default VideoFocus;
