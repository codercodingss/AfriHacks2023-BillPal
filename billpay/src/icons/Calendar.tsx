import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.75 11.776c0-6.956 2.319-9.274 9.274-9.274 6.956 0 9.275 2.318 9.275 9.274 0 6.956-2.32 9.274-9.275 9.274S.75 18.732.75 11.776Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.025 8.324h18.008M14.428 12.261h.01M10.029 12.261h.009M5.621 12.261h.01M14.428 16.113h.01M10.029 16.113h.009M5.621 16.113h.01M14.033 1.05v3.262M6.025 1.05v3.262"
    />
  </Svg>
);
export {SvgComponent as Calendar};
