import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={15} fill="none" {...props}>
    <Path
      stroke="#847CAB"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M.833 7C.833 2.375 2.375.833 7 .833c4.624 0 6.166 1.543 6.166 6.167 0 4.625-1.542 6.167-6.166 6.167C2.375 13.167.833 11.625.833 7Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#847CAB"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 4.403V7M6.997 9.333h.006"
    />
  </Svg>
);
export {SvgComponent as Warning};
