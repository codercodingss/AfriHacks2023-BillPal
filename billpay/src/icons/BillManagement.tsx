import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#68E1FD"
      d="m14.713 3.074 1.465-2.38h-5.156l1.466 2.38c-2.54.837-4.454 4.37-4.454 6.918 0 2.908 2.492 3.433 5.566 3.433s5.567-.525 5.567-3.433c0-2.549-1.914-6.081-4.454-6.918Z"
    />
    <Path
      fill="#093F68"
      d="M13.6 13.542c-1.86 0-3.089-.197-3.988-.638-1.14-.56-1.695-1.513-1.695-2.913 0-1.28.483-2.835 1.292-4.161.85-1.396 1.947-2.39 3.102-2.82L10.921.755a.119.119 0 0 1-.002-.12.118.118 0 0 1 .103-.059h5.156a.117.117 0 0 1 .102.06.118.118 0 0 1 0 .118L14.89 3.01c1.154.429 2.252 1.423 3.102 2.82.808 1.326 1.293 2.882 1.293 4.162 0 3.127-2.875 3.55-5.685 3.55ZM11.233.812l1.354 2.2a.117.117 0 0 1-.063.174c-1.154.38-2.26 1.362-3.116 2.766-.786 1.292-1.256 2.801-1.256 4.04 0 2.913 2.618 3.315 5.448 3.315 2.83 0 5.45-.402 5.45-3.316 0-1.238-.47-2.748-1.256-4.04-.855-1.41-1.962-2.386-3.116-2.765a.118.118 0 0 1-.064-.174l1.356-2.2h-4.737Z"
    />
    <Path
      fill="#093F68"
      d="M14.94 2.729h-2.683a.226.226 0 0 0 0 .451h2.684a.226.226 0 1 0 0-.451Z"
    />
    <Path
      fill="#093F68"
      d="M14.938 3.298h-2.68a.343.343 0 1 1 0-.687h2.68a.343.343 0 0 1 0 .687Zm-2.68-.452a.108.108 0 1 0 0 .217h2.68a.108.108 0 0 0 0-.217h-2.68Z"
    />
    <Path
      fill="#093F68"
      d="m13.472 4.68.576-1.684a.19.19 0 0 0-.118-.242l-.067-.023a.19.19 0 0 0-.242.119l-.576 1.684a.19.19 0 0 0 .119.242l.066.023a.19.19 0 0 0 .242-.119Z"
    />
    <Path
      fill="#093F68"
      d="M13.292 4.925a.295.295 0 0 1-.1-.018l-.068-.022a.308.308 0 0 1-.19-.391l.576-1.685a.308.308 0 0 1 .391-.192l.067.024a.306.306 0 0 1 .192.39l-.577 1.685a.3.3 0 0 1-.155.176.307.307 0 0 1-.136.033Zm.51-2.088a.074.074 0 0 0-.055.024.07.07 0 0 0-.014.024l-.577 1.685a.074.074 0 0 0 0 .055.069.069 0 0 0 .041.037l.068.023a.066.066 0 0 0 .078-.017.07.07 0 0 0 .014-.024l.577-1.685a.073.073 0 0 0-.003-.055.073.073 0 0 0-.042-.037l-.068-.023a.08.08 0 0 0-.021-.007h.001Z"
    />
    <Path
      fill="#093F68"
      d="m14.966 4.587-.576-1.684a.19.19 0 0 0-.242-.119l-.066.023a.19.19 0 0 0-.119.242l.576 1.684a.19.19 0 0 0 .242.119l.067-.023a.19.19 0 0 0 .118-.242Z"
    />
    <Path
      fill="#093F68"
      d="M14.721 4.985a.306.306 0 0 1-.29-.208l-.577-1.685a.308.308 0 0 1 .19-.39l.069-.024a.308.308 0 0 1 .39.192l.577 1.685a.306.306 0 0 1-.192.39l-.067.024a.297.297 0 0 1-.1.016Zm-.508-2.088a.053.053 0 0 0-.024 0l-.068.022a.073.073 0 0 0-.045.093l.577 1.685a.07.07 0 0 0 .037.042.071.071 0 0 0 .055.003l.068-.024a.071.071 0 0 0 .045-.091L14.28 2.94a.072.072 0 0 0-.069-.049v.006Z"
    />
    <Path
      fill="#fff"
      d="M13.244 10.634v-.39c-.142-.037-.28-.068-.412-.117a1.204 1.204 0 0 1-.634-.476 1.176 1.176 0 0 1-.183-.66h.76a.601.601 0 0 0 .47.564V8.523c-.152-.045-.304-.086-.454-.134a1.046 1.046 0 0 1-.442-.251.88.88 0 0 1-.247-.48 1.23 1.23 0 0 1 .048-.661 1.097 1.097 0 0 1 .668-.662c.126-.04.254-.074.384-.1l.047-.01V5.71h.705v.492c0 .037.01.048.046.056.243.046.47.153.662.31.204.165.338.4.378.66.013.07.019.142.028.216h-.774a.54.54 0 0 0-.335-.49v.968l.083.02c.209.04.412.106.606.193a.878.878 0 0 1 .526.733 1.153 1.153 0 0 1-.774 1.265c-.143.049-.29.082-.445.124v.377h-.71Zm.713-1.958v.891a.66.66 0 0 0 .315-.138c.165-.136.224-.47-.018-.622a2.65 2.65 0 0 0-.296-.131Zm-.716-.918v-.866a2.54 2.54 0 0 0-.272.137c-.197.133-.229.498.024.626.077.04.16.067.248.103Z"
    />
    <Path
      fill="#093F68"
      d="M13.955 10.752h-.705a.118.118 0 0 1-.117-.118v-.3l-.044-.01a3.355 3.355 0 0 1-.29-.082 1.317 1.317 0 0 1-.693-.522 1.293 1.293 0 0 1-.203-.724.116.116 0 0 1 .118-.117h.76a.117.117 0 0 1 .118.103.5.5 0 0 0 .235.403v-.77l-.056-.015c-.106-.03-.212-.06-.317-.094a1.176 1.176 0 0 1-.49-.28.996.996 0 0 1-.278-.542 1.321 1.321 0 0 1 .054-.725 1.215 1.215 0 0 1 .735-.73c.092-.032.186-.058.281-.076l.074-.017v-.421a.118.118 0 0 1 .118-.118h.705a.118.118 0 0 1 .117.118V6.158c.245.053.473.165.666.324.224.184.373.444.419.73.01.051.014.102.02.155l.008.068a.117.117 0 0 1-.117.131h-.774a.117.117 0 0 1-.117-.11.437.437 0 0 0-.101-.27v.644c.215.042.424.109.623.2a.992.992 0 0 1 .587.822 1.268 1.268 0 0 1-.852 1.389 3.888 3.888 0 0 1-.31.09l-.055.013v.288a.118.118 0 0 1-.073.111.117.117 0 0 1-.046.009Zm-.587-.235h.47v-.26a.117.117 0 0 1 .085-.117l.146-.038c.102-.027.199-.052.293-.085.208-.07.39-.203.517-.383.156-.218.22-.49.178-.755a.76.76 0 0 0-.458-.64 2.586 2.586 0 0 0-.588-.186c-.02 0-.042-.01-.06-.014l-.025-.006a.117.117 0 0 1-.09-.118v-.963a.117.117 0 0 1 .054-.099.117.117 0 0 1 .118-.007.648.648 0 0 1 .389.478h.54c0-.025-.007-.052-.011-.078a.94.94 0 0 0-.338-.588 1.364 1.364 0 0 0-.61-.285.161.161 0 0 1-.14-.172v-.374h-.47v.399a.118.118 0 0 1-.096.117h-.04l-.123.028a1.88 1.88 0 0 0-.249.067.987.987 0 0 0-.598.594c-.07.192-.084.4-.042.6.024.158.099.304.212.416a.94.94 0 0 0 .395.223c.104.033.207.063.312.092l.14.041a.117.117 0 0 1 .085.118v1.031a.118.118 0 0 1-.148.118.695.695 0 0 1-.533-.56h-.54c.012.17.066.335.159.478.136.204.339.356.573.428.087.03.177.053.272.077l.134.035a.118.118 0 0 1 .087.118v.27Zm.595-.823a.118.118 0 0 1-.117-.117V8.68a.118.118 0 0 1 .165-.107l.096.042c.074.028.145.062.213.102a.45.45 0 0 1 .218.362.546.546 0 0 1-.186.45.76.76 0 0 1-.37.164l-.019.001Zm.118-.836v.564a.47.47 0 0 0 .117-.075.313.313 0 0 0 .101-.252.215.215 0 0 0-.105-.177.914.914 0 0 0-.12-.065l.007.005Zm-.834-.978a.117.117 0 0 1-.045-.01l-.08-.03a2.025 2.025 0 0 1-.176-.076.445.445 0 0 1-.245-.38.504.504 0 0 1 .21-.447c.062-.04.127-.074.195-.104.03-.012.059-.026.088-.042a.118.118 0 0 1 .17.106v.866a.118.118 0 0 1-.052.097.118.118 0 0 1-.071.015l.006.005Zm-.118-.798a.638.638 0 0 0-.088.05.267.267 0 0 0-.071.345c.02.032.05.059.084.077l.077.035-.002-.507Z"
    />
    <Path
      fill="#FFC9B0"
      d="M4.114 13.327s2.137-2.636 3.454-3.125c.455-.17 6.345.91 6.713 1.492.367.582.132 1.267-1.11 1.237-.7-.01-1.4-.083-2.088-.218 0 0 2.468.774 3.173.712.705-.062 4.63-1.09 4.867-.786.237.303.634 1.175-.54 1.59-1.176.414-3.533 1.463-4.23 1.499-.699.036-6.685 1.263-6.685 1.263l-3.554-3.664Z"
    />
    <Path
      fill="#093F68"
      d="M7.662 17.109a.12.12 0 0 1-.085-.037L4.031 13.41a.118.118 0 0 1-.007-.157c.088-.108 2.171-2.667 3.504-3.162.309-.117 2.282.221 3.452.46 1.17.238 3.156.694 3.4 1.08.203.32.236.655.084.92-.135.235-.47.52-1.293.498-.196 0-.383-.013-.558-.024.645.166 1.323.31 1.634.282.235-.02.822-.149 1.521-.3 2.395-.516 3.276-.66 3.448-.441.171.22.361.647.251 1.03-.096.33-.38.58-.845.743-.372.13-.864.327-1.385.534-1.175.47-2.383.947-2.881.972-.685.036-6.607 1.248-6.667 1.261l-.027.003Zm-3.39-3.782 3.43 3.542c.677-.139 5.966-1.217 6.639-1.253.459-.023 1.706-.519 2.806-.956a42.48 42.48 0 0 1 1.393-.537c.376-.133.624-.335.698-.588.085-.291-.056-.617-.204-.81-.244-.124-2.178.295-3.22.52-.705.152-1.305.282-1.55.305-.721.063-3.115-.687-3.216-.718a.118.118 0 0 1-.079-.143.117.117 0 0 1 .14-.084c.681.13 1.373.2 2.066.209.552.013.94-.118 1.086-.378.104-.187.077-.434-.078-.678-.312-.494-6.11-1.616-6.573-1.446-1.145.43-2.97 2.567-3.338 3.015Z"
    />
    <Path
      fill="#68E1FD"
      d="m3.49 13.071 1.124-.975 3.969 4.895-1.194.923-3.898-4.843Z"
    />
    <Path
      fill="#093F68"
      d="M7.39 18.027a.118.118 0 0 1-.092-.044l-3.9-4.838a.117.117 0 0 1 .015-.162l1.123-.976a.116.116 0 0 1 .132-.015.118.118 0 0 1 .036.03l3.97 4.895a.116.116 0 0 1 .012.131.117.117 0 0 1-.03.036l-1.195.923a.118.118 0 0 1-.072.02Zm-3.733-4.935 3.76 4.665 1-.787-3.82-4.7-.94.822Z"
    />
    <Path
      fill="#fff"
      d="m8.034 17.82-4.207-5.45-3.42 2.705 4.347 5.48 3.28-2.736Z"
    />
    <Path
      fill="#093F68"
      d="M4.754 20.673h-.012a.116.116 0 0 1-.08-.043L.315 15.149a.118.118 0 0 1 .018-.165l3.42-2.703a.117.117 0 0 1 .132-.01.118.118 0 0 1 .034.03l4.203 5.447a.117.117 0 0 1-.017.162l-3.273 2.736a.118.118 0 0 1-.078.027ZM.574 15.09l4.197 5.296L7.872 17.8l-4.065-5.266L.573 15.09Z"
    />
    <Path
      fill="#093F68"
      d="M5.835 18.082a.546.546 0 1 0 0-1.092.546.546 0 0 0 0 1.093Z"
    />
    <Path
      fill="#093F68"
      d="M5.835 18.2a.663.663 0 1 1 0-1.327.663.663 0 0 1 0 1.327Zm0-1.092a.429.429 0 1 0 0 .858.429.429 0 0 0 0-.858Z"
    />
    <Path
      fill="#70CC40"
      d="m5.835 2.001-1.577 2.03h.782v5.092H6.63V4.031h.783L5.835 2Z"
    />
    <Path
      fill="#093F68"
      d="M6.629 9.242H5.04a.118.118 0 0 1-.117-.118V4.148h-.665a.117.117 0 0 1-.106-.066.118.118 0 0 1 .013-.117L5.742 1.93a.117.117 0 0 1 .185 0l1.577 2.029a.118.118 0 0 1 .013.117.118.118 0 0 1-.105.066h-.666v4.976a.117.117 0 0 1-.117.124Zm-1.471-.235H6.51V4.03a.117.117 0 0 1 .118-.118h.543l-1.337-1.72-1.337 1.72h.542a.118.118 0 0 1 .118.118v4.976Z"
    />
    <Path
      fill="#70CC40"
      d="m18.08 16.037-1.3 1.673h.645v2.42h1.31v-2.42h.646l-1.3-1.673Z"
    />
    <Path
      fill="#093F68"
      d="M18.735 20.247h-1.31a.118.118 0 0 1-.117-.118v-2.302h-.528a.117.117 0 0 1-.093-.189l1.305-1.674a.118.118 0 0 1 .145-.034c.016.008.03.02.041.034l1.3 1.674a.117.117 0 0 1 .013.124.118.118 0 0 1-.105.066h-.529v2.301a.118.118 0 0 1-.122.118Zm-1.192-.235h1.075V17.71a.118.118 0 0 1 .117-.117h.405l-1.057-1.366-1.057 1.366h.405a.117.117 0 0 1 .117.117l-.005 2.302Z"
    />
    <Path
      fill="#70CC40"
      d="m13.027 16.654-.908 1.169h.45v1.688h.915v-1.688h.451l-.908-1.17Z"
    />
    <Path
      fill="#093F68"
      d="M13.484 19.629h-.914a.117.117 0 0 1-.118-.118v-1.57h-.335a.117.117 0 0 1-.092-.191l.915-1.168a.118.118 0 0 1 .186 0l.908 1.168a.118.118 0 0 1-.093.19h-.334v1.571a.117.117 0 0 1-.076.11.118.118 0 0 1-.047.008Zm-.797-.235h.68v-1.571a.118.118 0 0 1 .117-.118h.21l-.667-.86-.669.86h.212a.118.118 0 0 1 .117.118v1.57Z"
    />
    <Path
      fill="#70CC40"
      d="m2.498 7.034-.993 1.277h.493v3.207h1V8.311h.493l-.993-1.277Z"
    />
    <Path
      fill="#093F68"
      d="M2.997 11.635h-.999a.118.118 0 0 1-.117-.117v-3.09h-.376a.117.117 0 0 1-.093-.188l.993-1.278a.118.118 0 0 1 .186 0l.991 1.278a.118.118 0 0 1-.091.189h-.376v3.089a.117.117 0 0 1-.118.117Zm-.881-.235h.764V8.311a.117.117 0 0 1 .117-.117h.253l-.752-.968-.752.968h.252a.117.117 0 0 1 .118.117v3.09Z"
    />
    <Path
      fill="#70CC40"
      d="M22.016 2.271 20.439 4.3h.782v11.675h1.589V4.3h.783L22.016 2.27Z"
    />
    <Path
      fill="#093F68"
      d="M22.81 16.093h-1.589a.117.117 0 0 1-.117-.117V4.417h-.665a.118.118 0 0 1-.106-.066.117.117 0 0 1 .013-.117l1.577-2.03a.117.117 0 0 1 .186 0l1.576 2.03a.118.118 0 0 1 .013.117.117.117 0 0 1-.105.066h-.666v11.559a.118.118 0 0 1-.117.117Zm-1.47-.235h1.352V4.3a.118.118 0 0 1 .118-.118h.543l-1.337-1.719-1.337 1.72h.542a.118.118 0 0 1 .118.117l.001 11.558Z"
    />
  </Svg>
);
export {SvgComponent as BillManagement};