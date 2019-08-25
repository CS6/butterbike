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
  <Svg width={246} height={67} {...props}>
    <Defs>
      <ClipPath id="prefix__clip-btn_go">
        <Path d="M0 0h246v67H0z" />
      </ClipPath>
    </Defs>
    <G id="prefix__btn_go" clipPath="url(#prefix__clip-btn_go)">
      <G
        id="prefix__Component_20_4"
        data-name="Component 20 \u2013 4"
        transform="translate(4 3)"
        fill="#fff"

      >
        <G id="prefix__Group_618" data-name="Group 618">
          <Rect
            id="prefix__Rectangle_1"
            data-name="Rectangle 1"
            width={238.538}
            height={60}
            rx={10}
            // fill="#D5C238"
            fill="#A7291E"

          />
          <Rect
            id="prefix__Rectangle_334"
            data-name="Rectangle 334"
            width={230.538}
            height={53}
            rx={10}
            transform="translate(8)"
            fill="#EA4335"
            // fill="#F4DA17"

          />
          <Rect
            id="prefix__Rectangle_335"
            data-name="Rectangle 335"
            className="prefix__cls-4"
            width={159.066}
            height={5}
            rx={2.5}
            transform="translate(65.934 4)"
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
          id="prefix__\u958B\u59CB"
          transform="translate(103.92 33.973)"
          fontSize={20}
          fontFamily="PingFangTC-Regular,PingFang TC"
          fill="#fff"
        >
          <TSpan x={0} y={0}>
            {'\u555F\u52D5'}
          </TSpan>
        </Text>
      </G>
    </G>
  </Svg>
)

export default SvgComponent
