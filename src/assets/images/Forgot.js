import * as React from 'react'
import Svg, {
  Path,
  G,
  Rect,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={192}
      height={219}
      viewBox='0 0 192 219'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M172.495 191.865c-2.968-12.188 3.68-58.718-50.519-62.35-39.546-2.651-40.004 52.335-84.236 23.516'
        stroke='#DED2FA'
        strokeWidth={3.03309}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeDasharray='10.11 10.11'
      />
      <Path
        d='M6.937 206.185c13.71-4.96 27.396-2.04 36.43-8.16 9.035-6.12 23.899 4.663 34.682 4.663 10.783 0 37.596-2.04 41.968 8.743 4.371 10.784-154.65 9.795-113.08-5.246z'
        fill='#E8E9EB'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M62.986 192.026s-.079 5.078 3.037 6.881c3.116 1.804 7.944 5.155 7.944 5.155l-18.365.624.523-12.706 6.861.046z'
        fill='#F8CFCF'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M54.96 197.621l-.299 8.238h4.267l.292-1.062s1.606-.066 2.534.393c.981.484 1.113.72 1.113.72l13.53.028s.668-2.662-3.456-4.588c-4.125-1.926-7.128-4.66-7.698-4.939-.575-.283-1.734-.442-2.551.22-.816.663-1.462 2.404-3.312 2.458-2.381.07-3.75-2.861-4.42-1.468z'
        fill='#4B4B4B'
      />
      <Path
        d='M66.524 197.304l-1.403 1.357M68.57 198.333l-1.404 1.356M70.615 199.361l-1.403 1.357'
        stroke='#fff'
        strokeWidth={2}
        strokeLinecap='round'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M49.544 82.33s5.102 56.179 5.261 60.084c.159 3.905-1.639 10.645-1.604 17.949.035 7.305.657 33.051.657 33.051l11.255.238s4.73-46.524 4.781-53.501c.051-6.976.485-57.149.485-57.149l-20.835-.671z'
        fill='#5A9687'
      />
      <Path
        opacity={0.283552}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M57.657 144.162l.013.14c.17 2.381-1.31 10.217-4.438 23.506l-.03-7.444c-.035-7.175 1.698-13.804 1.61-17.738l-.007-.212c-.053-1.316-.668-8.569-1.46-17.607l.37 1.323c2.17 7.841 3.484 13.853 3.942 18.032z'
        fill='#fff'
        fillOpacity={0.192499}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M35.834 191.31l-2.171 13.15 8.002-.041.253-13.315-6.084.206z'
        fill='#F8CFCF'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M34.972 196.998a1.747 1.747 0 00-1.377 1.651l-.064 1.955c-1.133 1.255-1.667 4.882-1.723 5.285a.287.287 0 00-.003.074c.166 1.777 11.805 1.755 12.898.084a.354.354 0 00.039-.256c-.123-.741-.773-4.328-2.024-5.306l-.007-1.937a1.75 1.75 0 00-1.295-1.682l-1.203-.323c-1.17-1.706-2.764-1.645-4.13.214l-1.11.241z'
        fill='#4B4B4B'
      />
      <Path
        d='M36.537 198.178h3.24M36.537 199.72h3.24M37.051 201.261h2.21'
        stroke='#fff'
        strokeWidth={2}
        strokeLinecap='round'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M39.869 83.068s-3.575 38.509-3.526 45.883c.048 7.375 1.1 10.614-.397 15.904-1.497 5.29-2.774 47.516-2.774 47.516l11.07 1.211s7.072-45.184 7.84-51.448c.77-6.265 10.274-59.597 10.274-59.597l-22.487.531z'
        fill='#80BDAE'
      />
      <Path
        opacity={0.283552}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M42.858 109.205l-.675 2.444c-1.977 7.213-3.802 14.842-3.324 25.738l.023.498c.117 2.36-1.384 16.059-4.505 41.098l-.297 1.76a274.444 274.444 0 01-.817 4.593l.068-2.217c.397-12.239 1.468-34.214 2.614-38.264 1.497-5.29.446-8.529.397-15.903-.034-5.163 1.707-25.581 2.755-37.367l.771-8.517 4.673-.11.012 1.311c.082 12.109-.483 20.42-1.695 24.936z'
        fill='#5A9687'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M68.33 21.798s-4.882-2.448-5.522-3.4c-.555-.819.17-3.996.17-3.996s-2.967-8.76-1.66-9.182c1.06-.344 3.368 5.956 3.368 5.956s4.577-.636 5.703.283c1.126.919 1.509 7.904 1.509 7.904l-3.568 2.435z'
        fill='#EABFBF'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M63.189 13.61s.617-1.99 1.333-2.021c.61-.026 1.281 2.178 1.673 2.36.392.181 3.368 1.535 3.454 1.422.085-.113-3.97-4.123-5.173-4.227-.988-.084-1.287 2.467-1.287 2.467z'
        fill='#F28585'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M67.615 41.098c-5.412-4.676-11.41 2.881-2.349 10.718 3.458 2.99 6.955 6.812 9.617 8.452 4.239 2.61 9.138-.874 9.91-5.246.874-4.954-10.319-35.721-13.233-37.761-2.338 0-3.237 1.798-3.945 2.877C65.242 22.19 74.027 47.8 74.027 47.8s-4.103-8.16-6.412-6.703z'
        fill='#EE9087'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M73.006 46.634s1.924 3.203 2.16 2.792c.234-.41-1.252-4.378-1.252-4.378l.341 2.96-1.249-1.374z'
        fill='#000'
        fillOpacity={0.159856}
      />
      <Path
        d='M67.864 21.436c.034-1.982 1.779-3.346 3.696-3.65'
        stroke='#C96C62'
        strokeLinecap='round'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M46.48 36.534s3.11-.715 3.22-5.714c.107-4.998.031-6.705.031-6.705l7.377-.12s.074 5.57.076 7.585c.002 4.386 3.325 5.572 3.325 5.572s-.275 4.795-6.486 5.138c-4.849.268-7.544-5.756-7.544-5.756z'
        fill='#F8C5C5'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M47.847 35.7l8.804 5.71 3.97-4.61s8.361 2.588 9.913 5.614c2.238 4.366-.711 39.347.575 41.457 2.74 4.499-.903 7.587-12.963 8.72-12.06 1.135-22.759.207-20.818-5.796 1.942-6.004-5.55-45.18 1.055-47.338 2.064-.675 9.464-3.757 9.464-3.757z'
        fill='#F08175'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M41.907 46.5c.533.942.258 4.202-.825 9.781A17.817 17.817 0 0044 69.918l.157.22c.941 1.3 1.81 3.01 2.604 5.133 1.95 5.206-2.546 9.546.9 17.691l-.418-.02c-6.759-.349-11.227-2.088-9.914-6.147 1.592-4.922-3.158-32.145-1.28-42.98 3.252.637 5.205 1.532 5.859 2.685z'
        fill='#000'
        fillOpacity={0.159856}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M47.847 35.7l7.875 5.127c-1.154 1.34-1.773 2.897-2.007 4.613-3.027-2.363-6.172-5.664-7.146-9.214l1.278-.526zM57.273 40.693c1.331.9 2.393 2.49 3.258 4.3 1.037-2.079 1.434-4.826 1.434-7.755l-1.3-.512-3.392 3.967z'
        fill='#C96C62'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M55.722 40.826l.102.058c.473.263 1.061.185 1.449-.19 2.968 10.865 5.056 22.824 5.688 34.978l-3.098 5.138L56.239 76c.472-12.631.469-24.948-.517-35.175z'
        fill='#F19B51'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M34.39 42.834c2.904-6.235 12.847-2.034 10.341 4.646-2.427 6.47-8.308 21.578-8.308 21.578s18.636 2.351 20.089 3.448c1.938 1.462.74 5.636-.907 6.379-1.394.628-11.747.995-21.877.202-5.01-.392-8.717-2.532-9.234-8.088-.363-3.891 7.098-22.158 9.896-28.165z'
        fill='#EE9087'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M36.43 69.055s-1.548 2.926-1.106 2.985c.443.06 2.694-2.77 2.694-2.77l-1.587-.215z'
        fill='#000'
        fillOpacity={0.159856}
      />
      <Path
        d='M55.2 72.188c.575 1.823.17 3.961-.627 5.473'
        stroke='#C96C62'
        strokeLinecap='round'
      />
      <G clipPath='url(#clip0_11_6040)'>
        <Path
          d='M86.405 84.021a.962.962 0 01-1.289.434l-1.239-.615-1.31 2.639a.962.962 0 01-1.722-.855l1.31-2.64-2.478-1.23-.615 1.24a.962.962 0 01-1.723-.856l.615-1.239-4.653-2.31a5.609 5.609 0 01-2.758 2.02 5.615 5.615 0 01-4.315-.295 5.615 5.615 0 01-2.844-3.26 5.615 5.615 0 01.294-4.315 5.615 5.615 0 013.26-2.844 5.615 5.615 0 014.315.294 5.615 5.615 0 012.844 3.26 5.609 5.609 0 01.06 3.417l5.505 2.733.009.004.008.005 4.18 2.075.013.006.012.006 2.088 1.037c.475.236.67.813.433 1.29zM70.398 71.912a3.704 3.704 0 00-2.847-.194 3.704 3.704 0 00-2.15 1.876 3.704 3.704 0 00-.194 2.847 3.703 3.703 0 001.876 2.15 3.703 3.703 0 002.847.194 3.703 3.703 0 002.15-1.876 3.703 3.703 0 00.194-2.846 3.704 3.704 0 00-1.876-2.15z'
          fill='#5A9687'
        />
      </G>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M55.892 73.829s2.673-.534 3.767-1.388c1.094-.853 4.408-1.457 4.408-1.457l-1.06 2.219s8.12-.758 8.312.038c.193.796-2.156 1.662-2.156 1.662s-1.158 2.15-2.28 3.395c-1.06 1.18-6.332 1.04-8.18.303-1.596-.635-3.333-.318-3.333-.318l.522-4.454z'
        fill='#F8CFCF'
      />
      <Path
        d='M60.11 30.912c-.752.47-2.513.524-3.968 0-2.644.116-5.731-2.153-7.89-4.43a9.751 9.751 0 01-1.834-2.758c-1.333-2.845-1.296-5.713-1.296-5.713-.228-1.692-.243-3.232.037-4.582.353-1.7 1.178-3.072 2.622-3.998.855-.54 1.923-.927 3.234-1.131 5.878-.905 16.899-.858 14.915 7.283-1.984 8.141-.794 12.184-5.82 15.329z'
        fill='#F5C3C0'
      />
      <Path
        d='M57.535 31.267c-3.99.264-7.093-2.434-9.264-4.729a9.833 9.833 0 01-1.844-2.78c-1.341-2.868-1.304-5.759-1.304-5.759-.23-1.706-.245-3.258.037-4.619.355-1.714 1.185-3.096 2.637-4.03.082.08.148.176.193.286.622 1.53 2.037 2.942 2.037 2.942s2.012 13.916 7.508 18.689z'
        fill='#EEB6B0'
      />
      <Path
        d='M47.552 21.438s-1.83-2.657-3.962-1.248c-2.133 1.41.093 8.857 5.675 5.607l-1.713-4.36z'
        fill='#F5C3C0'
      />
      <Path
        d='M42.498 14.914c.544 1.126 2.146 3.826 2.878 4.842l4.51.928-.399-4.243s2.117.268 2.844-1.241a.927.927 0 00.048-.106c.204-.496 1.04-2.726 1.246-6.364 0 0 5.231 3.349 8.24 4.144 1.081.287 2.429.064 3.713-.342 2.575-.811 5.27-4.386 5.262-7.085v-.053c-.058-3.978-2.485-1.591-2.485-1.591S68.262.605 66.347.09c-1.915-.514-3.602 2.156-3.602 2.156A31.064 31.064 0 0051.405 0c-7.711-.019-6.631 5.46-6.631 5.46s-5.82.91-2.276 9.454z'
        fill='#5B1C10'
      />
      <Path
        d='M45.376 19.756l4.51.928-1.062.928.133 2.121h-.398l-.928-2.386c-.809-.931-1.46-1.326-2.255-1.591zM59.155 23.558a.37.37 0 00.08.014c.072.005 1.789.096 2.454-1.302a.386.386 0 00-.08-.443c-1.046-1.008-1.699-3.39-1.705-3.414a.384.384 0 10-.744.2c.027.1.636 2.32 1.703 3.544-.519.696-1.57.647-1.582.646a.386.386 0 00-.126.755zM58.596 25.494c2.14-.6 3.732-.099 3.813-.073a.384.384 0 01.246.485l-5.673.654a.385.385 0 01.176-.516c.498-.244.98-.422 1.438-.55zM57.703 14.632s-.095-1.555-.474-1.85c-.38-.296-.434.444-.434.444s-3.067-.648-3.468 2.437c0 0 1.378-1.679 4.376-1.031zM61.118 14.897s.094-1.555.473-1.85c.38-.296.435.445.435.445s3.066-.649 3.467 2.436c0 0-1.378-1.679-4.375-1.031zM62.965 18.985c.658-.004 1.188-.672 1.183-1.492-.005-.82-.543-1.48-1.201-1.477-.658.004-1.188.672-1.183 1.492.005.82.542 1.48 1.2 1.477z'
        fill='#5B1C10'
      />
      <Path
        d='M63.324 17.083a.41.41 0 10.222-.79.41.41 0 00-.222.79z'
        fill='#fff'
      />
      <Path
        d='M56.228 19.158c.658-.004 1.188-.672 1.183-1.492-.005-.82-.543-1.48-1.2-1.477-.66.004-1.189.672-1.184 1.491.005.82.543 1.482 1.2 1.478z'
        fill='#5B1C10'
      />
      <Path
        d='M56.588 17.256a.41.41 0 10.22-.79.41.41 0 00-.22.79z'
        fill='#fff'
      />
      <G filter='url(#filter0_bi_11_6040)'>
        <Rect
          x={84}
          y={61.7432}
          width={77.1689}
          height={61.5514}
          rx={7.93224}
          fill='#fff'
          fillOpacity={0.1}
        />
        <Rect
          x={84}
          y={61.7432}
          width={77.1689}
          height={61.5514}
          rx={7.93224}
          fill='url(#paint0_linear_11_6040)'
          fillOpacity={0.08}
        />
        <Rect
          x={85.0797}
          y={62.8228}
          width={75.0095}
          height={59.392}
          rx={6.85257}
          stroke='url(#paint1_linear_11_6040)'
          strokeOpacity={0.1}
          strokeWidth={2.15933}
        />
      </G>
      <G filter='url(#filter1_bi_11_6040)'>
        <Rect
          width={78.5469}
          height={61.5514}
          rx={7.93224}
          transform='matrix(-1 0 0 1 168.978 64.959)'
          fill='#fff'
        />
        <Rect
          width={78.5469}
          height={61.5514}
          rx={7.93224}
          transform='matrix(-1 0 0 1 168.978 64.959)'
          fill='url(#paint2_linear_11_6040)'
          fillOpacity={0.08}
        />
        <Rect
          x={-1.07967}
          y={1.07967}
          width={76.3875}
          height={59.392}
          rx={6.85257}
          transform='matrix(-1 0 0 1 166.819 64.959)'
          stroke='url(#paint3_linear_11_6040)'
          strokeOpacity={0.1}
          strokeWidth={2.15933}
        />
      </G>
      <Rect
        width={39}
        height={3}
        rx={1.5}
        transform='matrix(-1 0 0 1 161 81.743)'
        fill='#EFE3EC'
      />
      <Rect
        width={23}
        height={3}
        rx={1.5}
        transform='matrix(-1 0 0 1 161 86.743)'
        fill='#EFE3EC'
      />
      <Rect
        width={11.9428}
        height={11.9428}
        rx={5.9714}
        transform='matrix(-1 0 0 1 115.694 81.495)'
        fill='#F4C584'
      />
      <Path
        transform='matrix(-1 0 0 1 161.169 94.356)'
        fill='#77B0A8'
        d='M0 0H4.13405V26.6416H0z'
      />
      <Path
        transform='matrix(-1 0 0 1 144.633 101.246)'
        fill='#EE7C92'
        d='M0 0H4.13405V19.7516H0z'
      />
      <Path
        transform='matrix(-1 0 0 1 128.096 106.299)'
        fill='#92BEFA'
        d='M0 0H4.13405V14.6988H0z'
      />
      <Path
        transform='matrix(-1 0 0 1 112.938 112.271)'
        fill='#EE7C92'
        d='M0 0H4.13405V8.72743H0z'
      />
      <Path
        transform='matrix(-1 0 0 1 156.116 102.165)'
        fill='#EF988F'
        d='M0 0H4.13405V18.8329H0z'
      />
      <Path
        transform='matrix(-1 0 0 1 139.58 107.218)'
        fill='#FCECEB'
        d='M0 0H4.13405V13.7802H0z'
      />
      <Path
        transform='matrix(-1 0 0 1 123.043 110.893)'
        fill='#F18A7E'
        d='M0 0H4.13405V10.1054H0z'
      />
      <Path
        transform='matrix(-1 0 0 1 107.885 115.026)'
        fill='#EF9890'
        d='M0 0H4.13405V5.9714H0z'
      />
      <Defs>
        <LinearGradient
          id='paint0_linear_11_6040'
          x1={87.2154}
          y1={74.0534}
          x2={170.435}
          y2={88.5445}
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#FE82DB' />
          <Stop offset={1} stopColor='#68E4FF' />
        </LinearGradient>
        <LinearGradient
          id='paint1_linear_11_6040'
          x1={86.4115}
          y1={64.541}
          x2={161.169}
          y2={64.541}
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#FD84DC' />
          <Stop offset={1} stopColor='#7FD6FA' />
        </LinearGradient>
        <LinearGradient
          id='paint2_linear_11_6040'
          x1={3.27279}
          y1={12.3103}
          x2={87.889}
          y2={27.3076}
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#FE82DB' />
          <Stop offset={1} stopColor='#68E4FF' />
        </LinearGradient>
        <LinearGradient
          id='paint3_linear_11_6040'
          x1={2.45459}
          y1={2.79779}
          x2={78.5469}
          y2={2.79779}
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#FD84DC' />
          <Stop offset={1} stopColor='#7FD6FA' />
        </LinearGradient>
        <ClipPath id='clip0_11_6040'>
          <Path
            fill='#fff'
            transform='scale(1 -1) rotate(18.601 367.66 168.308)'
            d='M0 0H38.4703V38.4703H0z'
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent

