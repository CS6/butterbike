import React from 'react'
import Svg, {
  Defs,
  ClipPath,
  Path,
  G,
  Rect,
  Text,
  TSpan,
} from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter, style */

const SvgComponent = props => (
  <Svg width={240} height={177} {...props}>
    <Defs>
      <ClipPath id="prefix__clip-Btn_hear">
        <Path d="M0 0h240v177H0z" />
      </ClipPath>
    </Defs>
    <G id="prefix__Btn_hear" clipPath="url(#prefix__clip-Btn_hear)">
      <G id="prefix__btn_big" transform="translate(2.587 2.554)">
        <Rect
          id="prefix__Rectangle_1"
          data-name="Rectangle 1"
          width={234.724}
          height={171.145}
          rx={15}
          fill="#b16739"
        />
        <Rect
          id="prefix__Rectangle_1-2"
          data-name="Rectangle 1"
          width={220.874}
          height={154.368}
          rx={10}
          transform="translate(10.443 3.19)"
          fill="#f46c17"
        />
        <G
          transform="translate(-2.59 -2.55)"
          filter="url(#prefix__\u9EDE\u64CA\u9019)"
        >
          <Text
            id="prefix__\u9EDE\u64CA\u9019-2"
            data-name="\u9EDE\u64CA\u9019"
            transform="translate(60.22 97.95)"
            fontSize={42}
            fontFamily="PingFangTC-Regular,PingFang TC"
            letterSpacing=".075em"
            fill="#fff"
          >
            <TSpan x={0} y={0}>
              {'\u9EDE\u64CA\u9019'}
            </TSpan>
          </Text>
        </G>
        <Rect
          id="prefix__Rectangle_312"
          data-name="Rectangle 312"
          className="prefix__cls-5"
          width={153.776}
          height={4.575}
          rx={2.287}
          transform="translate(69.856 5.672)"
        />
        <Rect
          id="prefix__Rectangle_313"
          data-name="Rectangle 313"
          className="prefix__cls-5"
          width={32.024}
          height={4.575}
          rx={2.287}
          transform="translate(27.767 5.672)"
        />
      </G>
    </G>
  </Svg>
)

export default SvgComponent
