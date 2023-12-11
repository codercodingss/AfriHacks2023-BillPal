import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={props.fill || '#646464'}
      d="M14.25 9.5a.75.75 0 1 0 0 1.5h2.5a.75.75 0 1 0 0-1.5h-2.5ZM.5 3.25A3.25 3.25 0 0 1 3.75 0h13.5a3.25 3.25 0 0 1 3.25 3.25v7.5A3.25 3.25 0 0 1 17.25 14H3.75A3.25 3.25 0 0 1 .5 10.75v-7.5ZM19 4.5V3.25a1.75 1.75 0 0 0-1.75-1.75H3.75A1.75 1.75 0 0 0 2 3.25V4.5h17ZM2 6v4.75c0 .966.784 1.75 1.75 1.75h13.5A1.75 1.75 0 0 0 19 10.75V6H2Z"
    />
  </Svg>
);
export {SvgComponent as CardIcon};
