import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={props.stroke || '#fff'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M19 10v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9m16 2-9-9-9 9"
    />
  </Svg>
);
export {SvgComponent as HomeIcon};
