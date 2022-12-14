import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import resho from '../../gStyle/resho';

function SvgComponent(props) {
  return (
    <Svg
      width={resho[15]}
      height={resho[17]}
      viewBox='0 0 15 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.639 15.89a1 1 0 01-2 0v-11a1 1 0 012 0v11zm-4 0a1 1 0 01-2 0v-7a1 1 0 012 0v7zm6 0v-9a1 1 0 012 0v9a1 1 0 01-2 0zm4-14a1 1 0 112 0v14a1 1 0 01-2 0v-14z'
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgComponent
