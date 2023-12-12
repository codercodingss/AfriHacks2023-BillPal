import * as React from 'react';
import Svg, {SvgProps, Path, Circle} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={props.stroke || '#646464'}
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
    />
    <Circle
      cx={12}
      cy={7}
      r={3}
      stroke={props.stroke || '#646464'}
      strokeWidth={1.5}
    />
  </Svg>
);
export {SvgComponent as ProfileIcon};
