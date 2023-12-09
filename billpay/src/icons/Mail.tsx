import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#4D7789"
      d="M47.5 95.353c26.193 0 47.426-21.234 47.426-47.426C94.926 21.732 73.693.5 47.5.5S.073 21.733.073 47.926 21.307 95.353 47.5 95.353Z"
    />
    <Path
      fill="#4682B4"
      d="M94.764 44.132 69.903 19.258 20.567 75.671l19.008 19.008c2.583.437 5.23.674 7.925.674 26.197 0 47.426-21.23 47.426-47.427a47.47 47.47 0 0 0-.162-3.794Z"
    />
    <Path
      fill="#535E6F"
      d="M73.273 36.956 50.146 23.789a5.511 5.511 0 0 0-5.417 0L21.615 36.956a5.47 5.47 0 0 0-2.77 4.755v21.205h57.198V41.699a5.45 5.45 0 0 0-2.77-4.743Z"
    />
    <Path
      fill="#4682B4"
      d="M67.407 18.41H27.48a3.542 3.542 0 0 0-3.545 3.544v40.812a3.542 3.542 0 0 0 3.545 3.544h39.926a3.542 3.542 0 0 0 3.544-3.544V21.954c-.012-1.96-1.597-3.544-3.544-3.544Z"
    />
    <Path
      fill="#fff"
      d="m47.5 60.757-28.655-16.8v28.02a5.465 5.465 0 0 0 5.466 5.466h46.378a5.465 5.465 0 0 0 5.467-5.466v-28.02L47.5 60.758Z"
    />
    <Path
      fill="#E5E8EC"
      d="M50.146 57.237a5.511 5.511 0 0 0-5.417 0l-25.884 14.74a5.465 5.465 0 0 0 5.466 5.466h46.253a5.465 5.465 0 0 0 5.467-5.466l-25.885-14.74Z"
    />
    <Path
      fill="#fff"
      d="M54.502 41.237c.524 0 .985-.412 1.385-1.248.4-.836.599-1.885.599-3.145 0-2.734-.786-5.005-2.359-6.802-1.572-1.798-3.682-2.696-6.328-2.696-2.645 0-4.867.948-6.677 2.82-1.81 1.885-2.708 4.144-2.708 6.777 0 2.634.849 4.818 2.546 6.565 1.697 1.747 3.807 2.621 6.303 2.621 1.96 0 3.694-.724 5.192-2.159l1.198 2.072c-.774.686-1.772 1.223-2.97 1.647-1.211.412-2.347.624-3.408.624-3.245 0-5.953-1.086-8.137-3.245-2.184-2.171-3.282-4.88-3.282-8.125 0-3.257 1.148-6.028 3.457-8.337 2.296-2.296 5.08-3.457 8.312-3.457 3.245 0 5.953 1.11 8.125 3.32 2.171 2.21 3.27 4.967 3.27 8.275 0 2.134-.437 3.856-1.323 5.142-.887 1.298-2.047 1.934-3.483 1.934-.736 0-1.41-.224-2.021-.674-.612-.449-1.036-1.01-1.273-1.685-1.074 1.386-2.422 2.072-4.07 2.072-1.647 0-3.07-.624-4.28-1.872-1.21-1.248-1.822-2.82-1.822-4.73 0-1.91.549-3.52 1.647-4.83 1.099-1.31 2.534-1.972 4.331-1.972.6 0 1.173.125 1.722.4.55.261.937.523 1.161.773l.375.375v-1.199h3.644v9.298c0 .974.3 1.46.874 1.46Zm-4.481-4.394c0-.973-.262-1.772-.774-2.42-.511-.637-1.185-.962-2.022-.962-.836 0-1.497.325-1.997.961-.499.637-.748 1.436-.748 2.372 0 .936.25 1.76.748 2.458.5.7 1.174 1.049 2.022 1.049.849 0 1.535-.337 2.022-1.011.5-.662.749-1.486.749-2.447Z"
    />
  </Svg>
);
export {SvgComponent as Mail};
