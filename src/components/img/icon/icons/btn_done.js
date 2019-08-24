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
  <Svg width={246} height={69} {...props}>
    <Defs>
      <ClipPath id="prefix__clip-btn_done">
        <Path d="M0 0h246v69H0z" />
      </ClipPath>
    </Defs>
    <G id="prefix__btn_done" clipPath="url(#prefix__clip-btn_done)">
      <G
        id="prefix__Component_20_5"
        data-name="Component 20 \u2013 5"
        transform="translate(4 5)"
      >
        <G id="prefix__Group_618" data-name="Group 618">
          <Rect
            id="prefix__Rectangle_1"
            data-name="Rectangle 1"
            width={238.538}
            height={60}
            rx={10}
            fill="#297de6"
          />
          <Rect
            id="prefix__Rectangle_334"
            data-name="Rectangle 334"
            width={230.538}
            height={53}
            rx={10}
            transform="translate(8)"
            fill="#4597ff"
          />
          <Rect
            id="prefix__Rectangle_335"
            data-name="Rectangle 335"
            className="prefix__cls-4"
            width={159.066}
            height={5}
            rx={2.5}
            transform="translate(65.934 4)"
            fill="#fff"

          />
          <Rect
            id="prefix__Rectangle_336"
            data-name="Rectangle 336"
            className="prefix__cls-4"
            width={36}
            height={5}
            rx={2.5}
            transform="translate(20.934 4)"
            fill="#fff"

          />
        </G>
        <Text
          id="prefix__\u5B8C\u6210"
          transform="translate(103.92 33.973)"
          fontSize={20}
          fontFamily="PingFangTC-Regular,PingFang TC"
          fill="#fff"
        >
          <TSpan x={0} y={0}>
            {'\u5B8C\u6210'}
          </TSpan>
        </Text>
      </G>
    </G>
  </Svg>
)

export default SvgComponent
