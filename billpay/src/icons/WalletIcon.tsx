import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={props.stroke || '#646464'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.5 8h4"
    />
    <Path
      stroke={props.stroke || '#646464'}
      strokeWidth={1.5}
      d="M21.333 9h-2.602c-1.785 0-3.231 1.343-3.231 3s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002.54-.033.97-.432 1.005-.933.002-.032.002-.071.002-.148v-3.834c0-.077 0-.116-.002-.148-.036-.501-.465-.9-1.005-.933C21.459 9 21.417 9 21.333 9Z"
    />
    <Path
      stroke={props.stroke || '#646464'}
      strokeWidth={1.5}
      d="M21.465 9c-.078-1.872-.328-3.02-1.137-3.828C19.157 4 17.271 4 13.5 4h-3C6.729 4 4.843 4 3.672 5.172 2.5 6.343 2.5 8.229 2.5 12c0 3.771 0 5.657 1.172 6.828C4.843 20 6.729 20 10.5 20h3c3.771 0 5.657 0 6.828-1.172.809-.808 1.06-1.956 1.137-3.828"
    />
    <Path
      stroke={props.stroke || '#646464'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.491 12h.01"
    />
  </Svg>
);
export {SvgComponent as Wallet};
