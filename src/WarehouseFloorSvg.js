import React from 'react'
import data from './data.json'

function WarehouseFloorSvg({ props, activeItem }) {
  const boxesIds = data.map((x) => x.id)
  const [boxes] = React.useState(boxesIds)

  function handleChange(elem) {
    if (elem !== null || elem !== undefined) {
      document.getElementById(elem).style.color = 'rebeccapurple'
      document.getElementById(elem).style.fontSize = '36px'
      const toDesactivate = [...boxes]
      toDesactivate.splice(toDesactivate.indexOf(elem), 1)
      for (let index = 0; index < toDesactivate.length; index++) {
        document.getElementById(toDesactivate[index]).style.color = 'black'
        document.getElementById(toDesactivate[index]).style.fontSize = '12px'
      }
    }
  }

  React.useEffect(() => {
    console.log(activeItem)
    if (activeItem !== '') {
      handleChange(activeItem)
    }
  }, [activeItem])
  return (
    <div className="row justify-content-center">
      <svg className="w-50" viewBox="-0.5 -0.5 2462 1211" {...props}>
        <path
          d="M136.44 1137.28l2.99 24.08c.57 3.53-.99 7.08-3.98 9.02a98.839 98.839 0 01-30.9 0c-2.99-1.94-4.55-5.49-3.98-9.02l2.99-24.08c.57-2.67 3.42-4.72 6.97-5.02h18.94c3.55.3 6.4 2.35 6.97 5.02z"
          fill="#fff"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          d="M135.67 1131.77c.82.31 1.27 1.31 1 2.24-.28.93-1.17 1.43-2 1.12a62.229 62.229 0 00-29.9 0c-.62-.18-1.11-.7-1.31-1.38-.21-.68-.08-1.42.32-1.98a62.228 62.228 0 0131.89 0"
          fill="#fff"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M10 1149h300v50H10zM300 1007h80v5h-80z"
        />
        <path
          d="M300 1012c0 44.18 35.82 80 80 80v-80"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          d="M0 385V0h100v10H10v375z"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          d="M5 0h2456v1210H5v-10h2446V10H5z"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          d="M469 386h335v481H469v-10h325V396H469zM1881 388h221v266h-10V398h-211z"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          d="M2102 650v142h-442v-10h432V650z"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          d="M1666 792h-186V394h10v388h176z"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M2.5 545.5v-160h5v160z"
        />
        <path
          d="M2.5 465.5h5m0 0c44.18 0 80 35.82 80 80h-80m0-80c44.18 0 80-35.82 80-80h-80"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path stroke="#000" pointerEvents="all" d="M210 669v246h-10V669z" />
        <path
          d="M5 571h205v17h-10v-7H5z"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M206.5 588.5v80h-5v-80z"
        />
        <path
          d="M201.5 668.5c-44.18 0-80-35.82-80-80h80"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path stroke="#000" pointerEvents="all" d="M1 1005h299v10H1z" />
        <path stroke="#000" pointerEvents="all" d="M210 996v18h-10v-18z" />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M206.5 995.5v-80h-5v80z"
        />
        <path
          d="M201.5 915.5c-44.18 0-80 35.82-80 80h80"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M100 1177h40v-18h-40zM105 1199h28v-20h-28z"
        />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M95 1197h50v-15H95z"
        />
        <path
          fill="none"
          stroke="#000"
          pointerEvents="all"
          d="M102 1172h20v-10h-20zM130 1172h8v-10h-8zM124 1165h4v-3h-4zM124 1172h4v-3h-4z"
        />
        <path
          d="M95 1194h50"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          fill="none"
          stroke="#000"
          pointerEvents="all"
          d="M98 1192h44v-8H98z"
        />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M88.807 1196.059l-67.614-18.118 1.294-4.83L90.1 1191.23z"
        />
        <path
          d="M79.148 1193.47l-7.797 2.052a6.98 6.98 0 01-3.156.19l-28.978-7.765a6.98 6.98 0 01-2.639-1.742l-5.726-5.675z"
          fill="#fff"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          d="M59.76 1192.417l1.036-3.864m-3.933 3.087l1.035-3.864m-3.933 3.088L55 1187m-6.83 2.31l1.034-3.863m1.863 4.64l1.035-3.863"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M218.89 1175.03l-65.78 23.94-1.71-4.698 65.78-23.941z"
        />
        <path
          d="M209.492 1178.45l-5.21 6.152a6.98 6.98 0 01-2.477 1.966l-28.19 10.26a6.98 6.98 0 01-3.161.087l-7.946-1.364z"
          fill="#fff"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          d="M193.006 1188.707l-1.368-3.76m-1.45 4.786l-1.369-3.76m-1.45 4.786L186 1187m-4.27 5.81l-1.368-3.758m4.187 2.733l-1.368-3.759"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          stroke="#000"
          pointerEvents="all"
          d="M10 546v664H0V546zM397 1014v191h-10v-191z"
        />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M10.5 1015.5v100h60v-100z"
        />
        <path
          d="M65.5 1015.5v100m0-50h5"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M70.5 1035.5v10h5v-10zM70.5 1085.5v10h5v-10z"
        />
        <ellipse
          cx={355.8}
          cy={1171.86}
          rx={14.892}
          ry={14.962}
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
        />
        <ellipse
          cx={354.91}
          cy={1185.23}
          rx={5.262}
          ry={11.77}
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
        />
        <path
          d="M355.31 1172.09c.88 1.03.64 2.9-.66 5.2-1.29 2.31-3.55 4.86-6.25 7.08-5.6 4.58-11.56 6.56-13.35 4.43-.88-1.02-.64-2.9.66-5.2 1.3-2.31 3.55-4.86 6.26-7.09 5.6-4.58 11.55-6.55 13.34-4.42z"
          fill="#fff"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          d="M328.24 1158.68c1.45-2.98 8.95-2.32 16.78 1.46 3.79 1.85 7.14 4.19 9.3 6.5 2.17 2.32 2.97 4.42 2.24 5.84-1.45 2.98-8.95 2.32-16.78-1.46-3.79-1.85-7.14-4.19-9.3-6.5-2.17-2.32-2.97-4.42-2.24-5.84z"
          fill="#fff"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          d="M357.91 1169.44c2.51-2.73 9.18-.72 14.94 4.49 2.78 2.53 4.97 5.49 6.07 8.21 1.1 2.73 1.03 5-.19 6.31-2.51 2.74-9.19.73-14.95-4.49-2.79-2.53-4.97-5.49-6.07-8.21-1.1-2.73-1.03-5 .2-6.31z"
          fill="#fff"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          d="M382.18 1159.44c.72 1.17-.02 3.12-2.06 5.4-2.03 2.28-5.18 4.71-8.76 6.74-7.39 4.19-14.5 5.59-15.92 3.14-.72-1.18.02-3.12 2.05-5.4 2.04-2.28 5.19-4.71 8.77-6.75 7.39-4.19 14.5-5.59 15.92-3.13z"
          fill="#fff"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          d="M350.31 1149.03c2.73-.58 6.2 4.69 7.76 11.77.75 3.42.94 6.81.54 9.42-.4 2.62-1.36 4.25-2.68 4.53-2.73.58-6.19-4.69-7.75-11.77-.75-3.42-.95-6.81-.55-9.42.4-2.62 1.37-4.25 2.68-4.53z"
          fill="#fff"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          d="M364.67 1156.23c.98.5 1.41 1.97 1.17 4.07-.23 2.1-1.09 4.67-2.4 7.14-2.71 5.09-6.54 8.36-8.56 7.3-.98-.51-1.4-1.97-1.17-4.08.23-2.1 1.1-4.67 2.41-7.13 2.71-5.09 6.53-8.35 8.55-7.3z"
          fill="#fff"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          d="M1059 1204V954h21v10h-11v240zM1240 954h330v254h-10V964h-320z"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M1080 957h160v5h-160z"
        />
        <path
          d="M1160 957v5m0 0c0 44.18-35.82 80-80 80v-80m80 0c0 44.18 35.82 80 80 80v-80"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M1260 954h120v10h-120z"
        />
        <path
          d="M1260 959h120"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M1400 954h110v10h-110z"
        />
        <path
          d="M1400 959h110"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path stroke="#000" pointerEvents="all" d="M1570 1005h10v10h-10z" />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M1580 1008h80v5h-80z"
        />
        <path
          d="M1660 1013c0 44.18-35.82 80-80 80v-80"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path stroke="#000" pointerEvents="all" d="M2147 1014v191h-10v-191z" />
        <path stroke="#000" pointerEvents="all" d="M1657 1005h497v10h-497z" />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M2154 1008h80v5h-80z"
        />
        <path
          d="M2234 1013c0 44.18-35.82 80-80 80v-80"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          stroke="#000"
          pointerEvents="all"
          d="M2255 780h204v10h-204zM2234 1005h216v10h-216zM2255 554v139h-10V554z"
        />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M2247.5 773.5v-80h5v80z"
        />
        <path
          d="M2252.5 693.5c44.18 0 80 35.82 80 80h-80"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          stroke="#000"
          pointerEvents="all"
          d="M2255 340h204v10h-204zM2255 334v139h-10V334zM2255 4v248h-10V4z"
        />
        <path
          d="M210 364v12H8v-10h192v-2z"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path stroke="#000" pointerEvents="all" d="M210 4v279h-10V4z" />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M207.5 363.5v-80h-5v80z"
        />
        <path
          d="M202.5 283.5c-44.18 0-80 35.82-80 80h80"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          stroke="#000"
          pointerEvents="all"
          d="M210 240h212v10H210zM1715 4v244h-10V4zM1275 4v244h-10V4zM834 4v244h-10V4zM460 622h107v10H460zM470 386v150h-10V386zM470 718v149h-10V718z"
        />
        <path stroke="#000" pointerEvents="all" d="M470 617v20h-10v-20z" />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M462.5 616.5v-80h5v80z"
        />
        <path
          d="M467.5 536.5c44.18 0 80 35.82 80 80h-80"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M462.5 717.5v-80h5v80z"
        />
        <path
          d="M467.5 717.5c44.18 0 80-35.82 80-80h-80"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path stroke="#000" pointerEvents="all" d="M987 395v399h-10V395z" />
        <path
          d="M1303 583v14h-96v-10h86v-4z"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path stroke="#000" pointerEvents="all" d="M1169 394v9h-10v-9z" />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M1300.5 502.5v80h-5v-80z"
        />
        <path
          d="M1295.5 502.5c-44.18 0-80 35.82-80 80h80"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          d="M977 388h326v114h-10V398H977zM1303 682v110H980v-10h313V682z"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M1300.5 681.5v-80h-5v80z"
        />
        <path
          d="M1295.5 681.5c-44.18 0-80-35.82-80-80h80"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path
          stroke="#000"
          pointerEvents="all"
          d="M1303 591v10h-10v-10zM1480 388h220v10h-220z"
        />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M1801 390h80v5h-80z"
        />
        <path
          d="M1881 395c0 44.18-35.82 80-80 80v-80"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path stroke="#000" pointerEvents="all" d="M1781 388h20v10h-20z" />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M1701 390h80v5h-80z"
        />
        <path
          d="M1701 395c0 44.18 35.82 80 80 80v-80"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          pointerEvents="all"
        />
        <path stroke="#000" pointerEvents="all" d="M1798 394v100h-10V394z" />
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M257 47h100v100H257z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 97,
                marginLeft: 258,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="a2"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <font fontSize={48}>{'A2'}</font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={307}
            y={101}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'A2'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M377 47h100v100H377z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 97,
                marginLeft: 378,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="a3"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <font fontSize={48}>{'A3'}</font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={427}
            y={101}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'A3'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M617 47h100v100H617z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 97,
                marginLeft: 618,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="a5"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <font fontSize={48}>{'A5'}</font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={667}
            y={101}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'A5'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M497 47h100v100H497z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 97,
                marginLeft: 498,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="a4"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <font fontSize={48}>{'A4'}</font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={547}
            y={101}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'A4'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M77 167h100v100H77z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 217,
                marginLeft: 78,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="a0"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <font fontSize={48}>{'A0'}</font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={127}
            y={221}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'A0'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M77 47h100v100H77z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 97,
                marginLeft: 78,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="a1"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <font fontSize={48}>{'A1'}</font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={127}
            y={101}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'A1'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M878 47h99v99h-99z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 97,
                height: 1,
                paddingTop: 97,
                marginLeft: 879,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="b0"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <span fontSize={48}>{'B0'}</span>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={928}
            y={100}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'B0'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M1118 47h100v100h-100z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 97,
                marginLeft: 1119,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="b2"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <font fontSize={48}>{'B2'}</font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={1168}
            y={101}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'B2'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M998 47h100v100H998z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 97,
                marginLeft: 999,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="b1"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <font fontSize={48}>{'B1'}</font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={1048}
            y={101}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'B1'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M1320 47h99v99h-99z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 97,
                height: 1,
                paddingTop: 97,
                marginLeft: 1321,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="b3"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <span fontSize={48}>{'B3'}</span>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={1370}
            y={100}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'B3'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M1560 47h100v100h-100z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 97,
                marginLeft: 1561,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="b5"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <font fontSize={48}>{'B5'}</font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={1610}
            y={101}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'B5'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M1440 47h100v100h-100z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 97,
                marginLeft: 1441,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="b4"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <font fontSize={48}>{'B4'}</font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={1490}
            y={101}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'B4'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M1812 47h99v99h-99z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 97,
                height: 1,
                paddingTop: 97,
                marginLeft: 1813,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="c0"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <span fontSize={48}>{'C0'}</span>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={1862}
            y={100}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'C0'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M2054 45h100v100h-100z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 95,
                marginLeft: 2055,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="c2"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <font fontSize={48}>{'C2'}</font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={2104}
            y={99}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'C2'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M1934 45h100v100h-100z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 95,
                marginLeft: 1935,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="c1"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <font fontSize={48}>{'C1'}</font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={1984}
            y={99}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'C1'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M2307 47h100v100h-100z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 97,
                marginLeft: 2308,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="c4"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <font fontSize={48}>{'C4'}</font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={2357}
            y={101}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'C4'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M2307 166h100v100h-100z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 216,
                marginLeft: 2308,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="c5"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <font fontSize={48}>{'C5'}</font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={2357}
            y={220}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'C5'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M1934 166h100v100h-100z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 216,
                marginLeft: 1935,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="c3"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <font fontSize={48}>{'C3'}</font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={1984}
            y={220}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'C3'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M1621 522h99v99h-99z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 97,
                height: 1,
                paddingTop: 572,
                marginLeft: 1622,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="e0"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <span fontSize={48}>{'E0'}</span>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={1671}
            y={575}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'E0'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M1861 522h100v100h-100z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 572,
                marginLeft: 1862,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="e2"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <span fontSize={48}>{'E2'}</span>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={1911}
            y={576}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'E2'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M1741 522h100v100h-100z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 572,
                marginLeft: 1742,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="e1"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <font fontSize={48}>{'E1'}</font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={1791}
            y={576}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'E1'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M1621 642h99v99h-99z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 97,
                height: 1,
                paddingTop: 692,
                marginLeft: 1622,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="e3"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <span fontSize={48}>{'E3'}</span>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={1671}
            y={695}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'E3'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M1861 642h100v100h-100z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 692,
                marginLeft: 1862,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="e5"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <font fontSize={48}>{'E5'}</font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={1911}
            y={696}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'E5'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M1741 642h100v100h-100z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 692,
                marginLeft: 1742,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="e4"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <font fontSize={48}>{'E4'}</font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={1791}
            y={696}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'E4'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M597 957h99v99h-99z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 97,
                height: 1,
                paddingTop: 1007,
                marginLeft: 598,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="d0"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <span fontSize={48}>{'D0'}</span>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={647}
            y={1010}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'D0'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M837 957h100v100H837z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 1007,
                marginLeft: 838,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="d2"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <span fontSize={48}>{'D2'}</span>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={887}
            y={1011}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'D2'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M717 957h100v100H717z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 1007,
                marginLeft: 718,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="d1"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <font fontSize={48}>{'D1'}</font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={767}
            y={1011}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'D1'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M597 1077h99v99h-99z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 97,
                height: 1,
                paddingTop: 1127,
                marginLeft: 598,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="d3"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <span fontSize={48}>{'D3'}</span>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={647}
            y={1130}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'D3'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M837 1077h100v100H837z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 1127,
                marginLeft: 838,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="d5"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <font fontSize={48}>{'D5'}</font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={887}
            y={1131}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'D5'}
          </text>
        </switch>
        <path
          fill="#fff"
          stroke="#000"
          pointerEvents="all"
          d="M717 1077h100v100H717z"
        />
        <switch transform="translate(-.5 -.5)">
          <foreignObject
            style={{
              textAlign: 'left',
            }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            overflow="visible"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                alignItems: 'unsafe center',
                justifyContent: 'unsafe center',
                width: 98,
                height: 1,
                paddingTop: 1127,
                marginLeft: 718,
              }}
              display="flex"
            >
              <div
                style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
                fontSize={0}
              >
                <div
                  id="d4"
                  style={{
                    lineHeight: 1.2,
                    whiteSpace: 'normal',
                    wordWrap: 'normal',
                  }}
                  display="inline-block"
                  fontSize={12}
                  fontFamily="Helvetica"
                  color="#000"
                  pointerEvents="all"
                >
                  <font fontSize={48}>{'D4'}</font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={767}
            y={1131}
            fontFamily="Helvetica"
            fontSize={12}
            textAnchor="middle"
          >
            {'D4'}
          </text>
        </switch>
      </svg>
    </div>
  )
}

export default WarehouseFloorSvg
