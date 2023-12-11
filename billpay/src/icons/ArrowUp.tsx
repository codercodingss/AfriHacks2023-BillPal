import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#74B3CE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M18.57 9.57 12.5 3.5 6.43 9.57M12.5 20.5V3.67"
    />
  </Svg>
);
export {SvgComponent as ArrowUp};
