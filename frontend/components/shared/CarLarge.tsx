export const CarLarge: React.FC<{
  fillColor?: string;
  width?: string;
  height?: string;
}> = ({ fillColor = 'black', width = '40', height = '40' }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 691.000000 640.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,1150.000000) scale(0.100000,-0.100000)"
        fill={fillColor}
        stroke="none"
      >
        <path
          d="M3725 9597 c-51 -20 -100 -55 -114 -81 -13 -23 -20 -25 -130 -31
-346 -19 -586 -81 -778 -201 -108 -67 -181 -140 -358 -357 -168 -205 -206
-242 -292 -283 -75 -35 -129 -41 -423 -48 -828 -20 -1351 -143 -1467 -344 -15
-26 -39 -61 -54 -78 -67 -79 -63 -275 8 -356 13 -15 10 -18 -31 -36 -73 -33
-86 -63 -86 -210 0 -141 9 -167 67 -203 32 -20 54 -24 143 -27 129 -5 182 8
228 54 l35 35 104 -7 c103 -7 103 -7 103 -33 0 -14 7 -57 15 -96 43 -206 207
-386 410 -451 99 -32 236 -36 334 -10 239 62 422 272 450 516 l6 55 1378 3
1377 2 0 -33 c0 -99 77 -254 175 -352 77 -78 196 -144 293 -164 68 -14 196
-14 264 0 136 28 289 132 370 253 41 60 98 200 98 243 0 54 -4 53 220 53 199
0 208 -1 226 -21 38 -44 71 -49 291 -49 233 0 258 6 300 69 20 30 23 46 23
143 0 79 -4 117 -15 139 -17 32 -69 69 -97 69 -16 0 -18 11 -18 82 0 65 5 91
23 127 20 42 22 60 22 216 0 155 -2 174 -22 219 -17 36 -23 67 -23 118 l0 70
-207 387 c-113 212 -217 401 -231 420 -31 42 -108 77 -190 86 -50 6 -65 11
-73 29 -7 11 -21 32 -33 44 -49 54 -2 52 -1190 51 -817 0 -1109 -4 -1131 -12z
m435 -67 l0 -40 -232 0 -233 1 33 28 c50 43 82 49 265 50 l167 1 0 -40z m1380
0 l0 -40 -655 0 -655 0 0 40 0 40 655 0 655 0 0 -40z m367 25 c40 -17 73 -43
73 -57 0 -4 -83 -8 -185 -8 l-185 0 0 40 0 40 130 0 c95 0 141 -4 167 -15z"
        />
      </g>
    </svg>
  );
};
