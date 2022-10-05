import * as React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
import size from '../../gStyle/resho';

function SvgComponent(props) {
  return (
    <Svg
      width={size[40]}
      height={size[39]}
      viewBox='0 0 46 46'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Circle cx={23.1465} cy={22.5488} r={22.5488} fill='#347474' />
      <Path
        d='M32.147 15.049a1.5 1.5 0 00-1.5-1.5h-3v-1.5h-1.5v1.5h-6v-1.5h-1.5v1.5h-3a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5h3v-1.5h-3v-15h3v1.5h1.5v-1.5h6v1.5h1.5v-1.5h3v4.5h1.5v-4.5z'
        fill='#FCFCFC'
      />
      <Path
        d='M26.896 21.799l1.912 3.703 4.089.594-3 2.883.75 4.07-3.75-1.922-3.75 1.922.75-4.07-3-2.883 4.2-.594 1.8-3.703z'
        fill='#FCFCFC'
      />
    </Svg>
  )
}

export default SvgComponent

