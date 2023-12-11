import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#74B3CE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.5 6v10c0 4-1 5-5 5h-6c-4 0-5-1-5-5V6c0-4 1-5 5-5h6c4 0 5 1 5 5ZM11.5 4.5h-4"
    />
    <Path
      stroke="#74B3CE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.5 18.1a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Z"
    />
  </Svg>
);
export {SvgComponent as Smartphone};
