import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 1.5s-4.144 7-7 7c-2.855 0-7-7-7-7"
    />
  </Svg>
);
export {SvgComponent as ArrowDown};
