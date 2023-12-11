import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#74B3CE"
      d="M15.64 23.21 37.978.87l3.438 3.436L15.64 30.082.175 14.617 3.61 11.18 15.64 23.21Z"
    />
  </Svg>
);
export {SvgComponent as Tick};
