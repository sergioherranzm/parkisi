export const Logo: React.FC<{
  fillColor?: string;
  width?: string;
  height?: string;
}> = ({ fillColor = 'black', width = '40', height = '40' }) => {
  return (
    <svg
      fill={fillColor}
      width={width}
      height={height}
      viewBox="0 0 212.911 212.911"
    >
      <path
        d="M106.465,0C47.776,0,0.01,47.727,0.01,106.456c0,58.68,47.766,106.456,106.456,106.456
c58.699,0,106.436-47.776,106.436-106.456C212.902,47.727,165.165,0,106.465,0z M106.465,203.513
c-53.531,0-97.086-43.555-97.086-97.057c0-53.531,43.555-97.086,97.086-97.086c53.511,0,97.057,43.555,97.057,97.086
C203.522,159.957,159.977,203.513,106.465,203.513z M107.374,34.948c-14.391,0-25.715,1.221-34.323,2.667v136.948h17.87v-55.514
c4.123,1.016,9.067,1.241,14.411,1.241c17.479,0,32.691-5.159,42.363-15.271c6.986-7.181,10.689-17.049,10.689-29.565
c-0.01-12.349-4.719-22.423-12.125-29.017C138.013,39.061,125.058,34.948,107.374,34.948z M105.742,105.889
c-5.989,0-10.913-0.401-14.831-1.426V50.561c3.078-0.801,9.067-1.426,16.873-1.426c19.54,0,32.711,8.852,32.711,27.366
C140.495,95.181,127.325,105.889,105.742,105.889z"
      />
    </svg>
  );
};