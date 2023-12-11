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
      d="M10.61 11.232H7.96c-.63 0-1.14.51-1.14 1.14v5.12h3.79v-6.26 0Z"
    />
    <Path
      stroke="#74B3CE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M13.261 6.682h-1.52c-.63 0-1.14.51-1.14 1.14v9.66h3.79v-9.66c0-.63-.5-1.14-1.13-1.14ZM17.048 12.932h-2.65v4.55h3.79v-3.41c-.01-.63-.52-1.14-1.14-1.14Z"
    />
    <Path
      stroke="#74B3CE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.5 22.082h6c5 0 7-2 7-7v-6c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7Z"
    />
  </Svg>
);
export {SvgComponent as Education};
