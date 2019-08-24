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
  <Svg width={316} height={69} {...props}>
    <Defs>
      <ClipPath id="prefix__clip-btn_set">
        <Path d="M0 0h316v69H0z" />
      </ClipPath>
    </Defs>
    <G id="prefix__btn_set" clipPath="url(#prefix__clip-btn_set)">
      <G
        id="prefix__Component_5_6"
        data-name="Component 5 \u2013 6"
        transform="translate(8 2)"
      >
        <G id="prefix__bg" transform="translate(6)">
          <Rect
            id="prefix__Rectangle_337"
            data-name="Rectangle 337"
            width={299.951}
            height={66}
            rx={20}
            transform="translate(-6)"
            fill="#f4c917"
          />
          <Rect
            id="prefix__Rectangle_1"
            data-name="Rectangle 1"
            width={293.951}
            height={60}
            rx={20}
            fill="#f4da17"
          />
        </G>
        <Rect
          id="prefix__Rectangle_338"
          data-name="Rectangle 338"
          className="prefix__cls-4"
          width={185.066}
          height={5}
          rx={2.5}
          transform="translate(82.347 4)"
          fill="#FFF"

        />
        <Rect
          id="prefix__Rectangle_339"
          data-name="Rectangle 339"
          className="prefix__cls-4"
          width={36}
          height={5}
          rx={2.5}
          transform="translate(35.347 4)"
          fill="#FFF"

        />
        <Text
          id="prefix__\u8A2D\u5B9A"
          transform="translate(134.413 40)"
          fill="#707070"
          fontSize={20}
          fontFamily="PingFangTC-Regular,PingFang TC"
        >
          <TSpan x={0} y={0}>
            {'\u8A2D\u5B9A'}
          </TSpan>
        </Text>
      </G>
    </G>
  </Svg>
)

export default SvgComponent
