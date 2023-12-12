import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.13}
      d="M6.556 1.223H11m0 0v4.444m0-4.444L6.556 5.667 4.333 3.445 1 6.778"
    />
  </Svg>
);
export {SvgComponent as ArrowChart};
