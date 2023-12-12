import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={17} height={17} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.028 6.347v5.361M11.711 9.028H6.344"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.725 9.027c0-5.476 1.826-7.302 7.303-7.302 5.476 0 7.302 1.826 7.302 7.302 0 5.477-1.826 7.303-7.302 7.303-5.477 0-7.303-1.826-7.303-7.303Z"
      clipRule="evenodd"
    />
  </Svg>
);
export {SvgComponent as PlusButton};
