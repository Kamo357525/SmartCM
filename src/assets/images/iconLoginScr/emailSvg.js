import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgComponent(props) {
  return (
    <Svg
      width={18}
      height={20}
      viewBox='0 0 18 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M15.667 17.5v-1.667a3.333 3.333 0 00-3.333-3.333H5.667a3.333 3.333 0 00-3.333 3.333V17.5M9 9.167A3.333 3.333 0 109 2.5a3.333 3.333 0 000 6.667z'
        stroke='#11493E'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}

export default SvgComponent
