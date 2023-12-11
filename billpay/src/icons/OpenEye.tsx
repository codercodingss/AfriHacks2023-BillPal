import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={props.fill || '#5F738C'}
      fillRule="evenodd"
      d="M9 .333c2.99 0 5.63 2.027 7.926 5.953l.172.298.235.416-.407.714C14.63 11.64 11.99 13.667 9 13.667S3.37 11.64 1.074 7.714l-.172-.298L.667 7l.235-.416C3.24 2.463 5.935.334 9 .334ZM9 2C6.748 2 4.607 3.596 2.588 7c2.019 3.404 4.16 5 6.412 5 2.191 0 4.274-1.508 6.24-4.713L15.411 7l-.173-.287C13.271 3.506 11.189 2 9 2Zm0 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export {SvgComponent as OpenEye};
