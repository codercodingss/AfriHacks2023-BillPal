import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.667 1.333S6.333 4.096 6.333 6c0 1.903-4.666 4.666-4.666 4.666"
    />
  </Svg>
);
export {SvgComponent as ArrowRight};
