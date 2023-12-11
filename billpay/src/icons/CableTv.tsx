import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#74B3CE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.94 2h11.11c3.56 0 4.45.89 4.45 4.44v6.33c0 3.56-.89 4.44-4.44 4.44H6.94c-3.55.01-4.44-.88-4.44-4.43V6.44C2.5 2.89 3.39 2 6.94 2ZM12.5 17.22V22M2.5 13h20M8 22h9"
    />
  </Svg>
);
export {SvgComponent as CableTv};
