import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#4D7789"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M13.564 4.989a3.802 3.802 0 0 0-7.44 1.039v1.807M9.925 11.796v1.85"
    />
    <Path
      stroke="#4D7789"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M9.925 7.353c-4.787 0-6.383 1.306-6.383 5.225 0 3.92 1.596 5.227 6.383 5.227 4.788 0 6.384-1.307 6.384-5.227 0-3.919-1.596-5.225-6.384-5.225Z"
      clipRule="evenodd"
    />
  </Svg>
);
export {SvgComponent as LockIcon};
