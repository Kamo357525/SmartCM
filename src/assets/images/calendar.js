import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import size from '../gStyle/resho';

function SvgComponent(props) {
  return (
    <Svg
      width={size[16]}
      height={size[19]}
      viewBox='0 0 16 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M11.318.321a.62.62 0 01.61.543l.005.085v.71c2.527.175 4.075 1.83 4.067 4.5v7.64c0 2.83-1.738 4.522-4.53 4.522H4.53C1.74 18.321 0 16.6 0 13.735V6.159c0-2.67 1.552-4.324 4.074-4.5v-.71c0-.347.276-.628.616-.628a.62.62 0 01.61.543l.005.085v.694h5.397V.95c0-.347.276-.628.616-.628zm3.45 7.455H1.23v5.959c0 2.093 1.107 3.254 3.098 3.327l.202.003h6.94c2.125 0 3.3-1.143 3.3-3.267l-.001-6.022zm-3.116 5.268c.34 0 .616.28.616.628 0 .317-.232.58-.532.622l-.084.005a.623.623 0 01-.623-.627c0-.318.232-.581.532-.623l.091-.005zm-3.64 0c.34 0 .615.28.615.628 0 .317-.232.58-.532.622l-.084.005a.623.623 0 01-.623-.627c0-.318.232-.581.532-.623l.091-.005zm-3.65 0c.34 0 .616.28.616.628 0 .317-.231.58-.532.622l-.09.005a.622.622 0 01-.616-.627c0-.318.231-.581.532-.623l.09-.005zm7.29-3.254c.34 0 .616.281.616.628 0 .318-.232.58-.532.622l-.084.006a.623.623 0 01-.623-.628c0-.318.232-.58.532-.622l.091-.006zm-3.64 0c.34 0 .615.281.615.628 0 .318-.232.58-.532.622l-.084.006a.623.623 0 01-.623-.628c0-.318.232-.58.532-.622l.091-.006zm-3.65 0c.34 0 .616.281.616.628 0 .318-.231.58-.532.622l-.09.006a.622.622 0 01-.616-.628c0-.318.231-.58.532-.622l.09-.006zm6.34-6.891H5.305v.805a.622.622 0 01-.615.628.62.62 0 01-.61-.543l-.006-.085v-.786c-1.835.156-2.843 1.28-2.843 3.24v.362h13.538v-.363c.006-1.963-.997-3.084-2.836-3.24v.787a.622.622 0 01-.615.628.62.62 0 01-.61-.543l-.005-.085V2.9z'
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgComponent
