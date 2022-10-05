import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import size from '../../gStyle/resho';

function SvgComponent(props) {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 43 57'
      width={size[53]}
      height={size[67]}
      {...props}
    >
      <Path
        d='M3.8 33.2C-5.2 19.2 4.9.8 21.5.8c16.6 0 26.7 18.4 17.7 32.4L25.7 54.3c-2 3-6.4 3-8.4 0z'
        fill={props.color? '#FFFFFF' :'#347474' }
      />
      <Path d='M28.2 25.8h-6v6h-2v-6h-6v-2h6v-6h2v6h6z' fill={props.color? '#347474' : '#FFFFFF'} />
    </Svg>
  )
}

export default SvgComponent
