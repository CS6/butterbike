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
  <Svg width={240} height={78} {...props}>
    <Defs>
      <ClipPath id="prefix__clip-DOC">
        <Path d="M0 0h240v78H0z" />
      </ClipPath>
    </Defs>
    <G id="prefix__DOC" clipPath="url(#prefix__clip-DOC)">
      <G id="prefix__btn_big" transform="translate(2.502 .801)">
        <Rect
          id="prefix__Rectangle_1"
          data-name="Rectangle 1"
          width={234.724}
          height={75.427}
          rx={15}
          fill="#b16739"
        />
        <Rect
          id="prefix__Rectangle_1-2"
          data-name="Rectangle 1"
          width={220.874}
          height={58.65}
          rx={10}
          transform="translate(10.443 3.19)"
          fill="#f46c17"
        />
        <G
          transform="translate(-2.5 -.8)"
          filter="url(#prefix__\u67E5\u770B\u6587\u7AE0)"
        >
          <Text
            id="prefix__\u67E5\u770B\u6587\u7AE0-2"
            data-name="\u67E5\u770B\u6587\u7AE0"
            transform="translate(52 46)"
            fontSize={33}
            fontFamily="PingFangTC-Regular,PingFang TC"
            letterSpacing=".075em"
            fill="#fff"
          >
            <TSpan x={0} y={0}>
              {'\u67E5\u770B\u6587\u7AE0'}
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
