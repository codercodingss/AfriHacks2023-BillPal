import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#172429"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.791 10.121H8.75M17.864 7.205l2.928 2.916-2.928 2.916M15.36 5.63c-.33-3.58-1.67-4.88-7-4.88C1.259.75 1.259 3.06 1.259 10c0 6.94 0 9.25 7.1 9.25 5.33 0 6.67-1.3 7-4.88"
    />
  </Svg>
);
export {SvgComponent as Logout};
