import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M10.442 2.516A6 6 0 1 0 14 8v-.613a.667.667 0 0 1 1.333 0V8a7.335 7.335 0 0 1-9.874 6.875 7.333 7.333 0 1 1 5.526-13.577.667.667 0 0 1-.543 1.218Z" />
      <Path d="M15.138 2.195c.26.26.26.682 0 .943L8.472 9.81a.667.667 0 0 1-.943 0l-2-2a.667.667 0 1 1 .942-.942L8 8.397l6.195-6.202c.26-.26.682-.26.943 0Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export {SvgComponent as CompletedTick};
