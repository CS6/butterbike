import React from 'react'
import Svg, { Defs, ClipPath, Path, G, Ellipse } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter, style */

const SvgComponent = props => (
  <Svg width={94} height={129} {...props}>
    <Defs>
      <ClipPath id="prefix__clip-path" />
      <ClipPath id="prefix__clip-BM3">
        <Path d="M0 0h94v129H0z" />
      </ClipPath>
    </Defs>
    <G id="prefix__BM3" clipPath="url(#prefix__clip-BM3)">
      <G
        id="prefix__Mask_Group_18"
        data-name="Mask Group 18"
        transform="translate(-206 -690)"
        clipPath="url(#prefix__clip-path)"
      >
        <G id="prefix__\u73CD\u5976" transform="translate(217.755 705.156)">
          <Ellipse
            id="prefix__Ellipse_28"
            data-name="Ellipse 28"
            cx={26.851}
            cy={10.114}
            rx={26.851}
            ry={10.114}
            transform="translate(4.674 91.096)"
            fill="#e2e1e0"
          />
          <Path
            id="prefix__Path_163"
            data-name="Path 163"
            className="prefix__cls-5"
            d="M74.252 38.9c0-4.734-14.116-8.567-31.525-8.567S11.2 34.167 11.2 38.9a2.476 2.476 0 00.047.459l7.93 80.77c0 3.543 10.543 6.411 23.548 6.411s23.548-2.868 23.548-6.411l7.9-80.789a2.475 2.475 0 00.075-.441z"
            transform="translate(-11.201 -21.685)"
          />
          <Ellipse
            id="prefix__Ellipse_29"
            data-name="Ellipse 29"
            className="prefix__cls-5"
            cx={31.525}
            cy={8.577}
            rx={31.525}
            ry={8.577}
            transform="translate(0 8.639)"
          />
          <Path
            id="prefix__Path_164"
            data-name="Path 164"
            d="M70.888 1.056L64.049.784 47.339.128 44.316.006a7.763 7.763 0 00-7.968 6.627L22.726 98.042a2.593 2.593 0 002.454 2.971l4.824.2a2.588 2.588 0 002.65-2.2l13.23-86.666a.747.747 0 01.774-.637l17.643.694 6.139.244c1.381.047 2.594-2.5 2.724-5.7s-.857-5.845-2.276-5.892z"
            fill="#e6f1ff"
            strokeWidth={0.64}
            stroke="#848484"
            strokeMiterlimit={10}
          />
          <Ellipse
            id="prefix__Ellipse_30"
            data-name="Ellipse 30"
            cx={5.792}
            cy={2.499}
            rx={5.792}
            ry={2.499}
            transform="rotate(-87.76 40.488 -29.056)"
            strokeWidth={0.64}
            fill="none"
            stroke="#848484"
            strokeMiterlimit={10}
          />
          <Path
            id="prefix__Path_165"
            data-name="Path 165"
            className="prefix__cls-8"
            d="M11.2 36.189a2.476 2.476 0 00.047.459l7.93 80.77c0 3.543 10.543 6.411 23.548 6.411s23.548-2.868 23.548-6.411l7.9-80.789a2.477 2.477 0 000-.459"
            transform="translate(-11.201 -18.974)"
          />
          <Path
            id="prefix__Path_166"
            data-name="Path 166"
            className="prefix__cls-8"
            d="M74.252 36.183c0 4.743-14.116 8.577-31.525 8.577S11.2 40.926 11.2 36.183"
            transform="translate(-11.201 -18.968)"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default SvgComponent
