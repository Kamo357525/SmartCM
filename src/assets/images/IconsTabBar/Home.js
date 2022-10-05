import * as React from 'react'
import Svg, { Path } from 'react-native-svg';
import resho from '../../gStyle/resho';

function SvgComponent(props) {
  return (
    <Svg
      width={resho[19]}
      height={resho[18]}
      viewBox='0 0 19 18'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M7.498 16.353v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87l-8.36-7.53c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87h1.7v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z'
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgComponent
