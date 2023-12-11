import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.996 1.514c-4.434 0-6.36 4.015-6.36 6.67 0 1.984.287 1.4-.811 3.82-1.341 3.448 4.051 4.858 7.171 4.858s8.512-1.41 7.172-4.858c-1.098-2.42-.81-1.836-.81-3.82 0-2.655-1.928-6.67-6.362-6.67Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.306 19.512c-1.294 1.446-3.313 1.463-4.62 0"
    />
  </Svg>
);
export {SvgComponent as Notification};
