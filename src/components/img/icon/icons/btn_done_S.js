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
      <ClipPath id="prefix__clip-btn_done_R">
        <Path d="M0 0h124v69H0z" />
      </ClipPath>
    </Defs>
    <G id="prefix__btn_done_R" clipPath="url(#prefix__clip-btn_done_R)">
      <G id="prefix__\u5C0Fbtn" transform="translate(3.174 2)">
        <G
          id="prefix__Group_617"
          data-name="Group 617"
          transform="translate(5.826)"
        >
          <Rect
            id="prefix__Rectangle_1"
            data-name="Rectangle 1"
            width={116.883}
            height={66}
            rx={10}
            transform="translate(-5.826)"
            fill="#A7291E"
          />
          <Rect
            id="prefix__Rectangle_1-2"
            data-name="Rectangle 1"
            width={111.057}
            height={60}
            rx={10}
            fill="#EA4335"
          />
        </G>
        <Text
          id="prefix__\u5B8C\u6210"
          transform="translate(41.68 37)"
          fontSize={20}
          fontFamily="PingFangTC-Regular,PingFang TC"
          fill="#fff"
        >
          <TSpan x={0} y={0}>
            {'\u66AB\u505C'}
           
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
          fill="#fff"
        />
        <Rect
          id="prefix__Rectangle_333"
          data-name="Rectangle 333"
          className="prefix__cls-5"
          width={18}
          height={5}
          rx={2.5}
          transform="translate(16.76 3)"
          fill="#fff"
        />
      </G>
    </G>
  </Svg>
)

export default SvgComponent
