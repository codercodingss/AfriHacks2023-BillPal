import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#9CA3AF"
      d="m13.526 12.847 3.569 3.569-1.18 1.179-3.568-3.57a7.467 7.467 0 0 1-4.68 1.641c-4.14 0-7.5-3.36-7.5-7.5 0-4.14 3.36-7.5 7.5-7.5 4.14 0 7.5 3.36 7.5 7.5a7.467 7.467 0 0 1-1.641 4.681Zm-1.672-.618A5.814 5.814 0 0 0 13.5 8.166a5.832 5.832 0 0 0-5.833-5.833 5.831 5.831 0 0 0-5.834 5.833A5.832 5.832 0 0 0 7.666 14a5.814 5.814 0 0 0 4.063-1.646l.125-.125Z"
    />
  </Svg>
);
export {SvgComponent as Search};
