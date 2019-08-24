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
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = props => (
  <Svg width={124} height={69} {...props}>
    <Defs>
      <ClipPath id="prefix__clip-btn_done_L">
        <Path d="M0 0h124v69H0z" />
      </ClipPath>
    </Defs>
    <G id="prefix__btn_done_L" clipPath="url(#prefix__clip-btn_done_L)">
      <G
        id="prefix__\u5C0Fbtn_2"
        data-name="\u5C0Fbtn \u2013 2"
        transform="translate(3.174 2)"
      >
        <G
          id="prefix__Group_617"
          data-name="Group 617"
          transform="translate(5.826)"
        >
          <Path
            id="prefix__Path_116"
            data-name="Path 116"
            d="M10 0h96.883a10 10 0 0110 10v46a10 10 0 01-10 10H10A10 10 0 010 56V10A10 10 0 0110 0z"
            transform="translate(-5.826)"
            fill="#73b459"
          />
          <Rect
            id="prefix__Rectangle_1"
            data-name="Rectangle 1"
            width={111.057}
            height={60}
            rx={10}
            fill="#85bf6d"
          />
        </G>
        <Text
          id="prefix__\u7E7C\u7E8C"
          transform="translate(41.68 37)"
          fontSize={20}
          fontFamily="PingFangTC-Regular,PingFang TC"
          fill="#fff"
        >
          <TSpan x={0} y={0}>
            {'\u7E7C\u7E8C'}
          </TSpan>
        </Text>
        <Rect
          id="prefix__Rectangle_332"
          data-name="Rectangle 332"
          className="prefix__cls-5"
          width={64.066}
          height={5}
          rx={2.5}
          transform="translate(41.76 3)"
        />
        <Rect
          id="prefix__Rectangle_333"
          data-name="Rectangle 333"
          className="prefix__cls-5"
          width={18}
          height={5}
          rx={2.5}
          transform="translate(16.76 3)"
        />
      </G>
    </G>
  </Svg>
)

export default SvgComponent
