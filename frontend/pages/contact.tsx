import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <AnimatePresence>
        <div tw="flex flex-col items-center justify-center">
          <div tw="my-8 flex flex-col items-center">
            {' '}
            <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ['20%', '20%', '50%', '50%', '20%'],
              }}
            ></motion.div>
            <motion.svg
              width="200"
              height="200"
              viewBox="0 0 212.911 212.911"
              style={{ position: 'relative' }}
            >
              <defs>
                <path
                  id="a"
                  d="M106.465,0C47.776,0,0.01,47.727,0.01,106.456c0,58.68,47.766,106.456,106.456,106.456
c58.699,0,106.436-47.776,106.436-106.456C212.902,47.727,165.165,0,106.465,0z M106.465,203.513
c-53.531,0-97.086-43.555-97.086-97.057c0-53.531,43.555-97.086,97.086-97.086c53.511,0,97.057,43.555,97.057,97.086
C203.522,159.957,159.977,203.513,106.465,203.513z"
                />
                <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="100%">
                  <motion.stop
                    stopColor="#671014"
                    animate={{
                      stopColor: [
                        '#FDB1B5',
                        '#E7777D',
                        '#A7383E',
                        '#671014',
                        '#280002',
                        '#6CC063',
                        '#378B2E',
                        '#14560D',
                        '#032100',
                      ],
                    }}
                    transition={{
                      yoyo: Infinity,
                      ease: 'linear',
                      duration: 8,
                    }}
                    offset="25%"
                  />
                  <motion.stop
                    stopColor="#14560D"
                    animate={{
                      stopColor: [
                        '#BCF5B6',
                        '#AAE9A3',
                        '#6CC063',
                        '#378B2E',
                        '#14560D',
                        '#032100',
                        '#FDB1B5',
                        '#E7777D',
                        '#A7383E',
                        '#671014',
                        '#280002',
                      ],
                    }}
                    transition={{
                      yoyo: Infinity,
                      ease: 'linear',
                      duration: 8,
                    }}
                    offset="50%"
                  />
                  <motion.stop
                    stopColor="#A7383E"
                    animate={{
                      stopColor: ['#E7777D', '#FDB1B5', '#6CC063', '#378B2E'],
                    }}
                    transition={{
                      yoyo: Infinity,
                      ease: 'linear',
                      duration: 8,
                    }}
                    offset="75%"
                  />
                  <motion.stop
                    stopColor="#FDB1B5"
                    animate={{
                      stopColor: ['#6CC063', '#378B2E', '#FDB1B5', '#E7777D'],
                    }}
                    transition={{
                      yoyo: Infinity,
                      ease: 'linear',
                      duration: 8,
                    }}
                    offset="100%"
                  />
                </linearGradient>
                <linearGradient
                  id="linear2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <motion.stop
                    stopColor="#671014"
                    animate={{
                      stopColor: ['#671014', '#14560D'],
                    }}
                    transition={{
                      yoyo: Infinity,
                      ease: 'linear',
                      duration: 3,
                    }}
                    offset="25%"
                  />
                  <motion.stop
                    stopColor="#14560D"
                    animate={{
                      stopColor: ['#671014', '#14560D'],
                    }}
                    transition={{
                      yoyo: Infinity,
                      ease: 'linear',
                      duration: 3,
                    }}
                    offset="50%"
                  />
                  <motion.stop
                    stopColor="#671014"
                    animate={{
                      stopColor: ['#671014', '#14560D'],
                    }}
                    transition={{
                      yoyo: Infinity,
                      ease: 'linear',
                      duration: 3,
                    }}
                    offset="75%"
                  />
                  <motion.stop
                    stopColor="#14560D"
                    animate={{
                      stopColor: ['#671014', '#14560D'],
                    }}
                    transition={{
                      yoyo: Infinity,
                      ease: 'linear',
                      duration: 3,
                    }}
                    offset="100%"
                  />
                </linearGradient>
              </defs>
              <use fill="url(#linear)" xlinkHref="#a" />
              <motion.path
                id="b"
                fill="url(#linear2)"
                animate={{ rotateY: 360 }}
                transition={{
                  ease: 'easeInOut',
                  flip: Infinity,
                  repeatDelay: 5,
                  duration: 2,
                }}
                d="M107.374,34.948c-14.391,0-25.715,1.221-34.323,2.667v136.948h17.87v-55.514
            c4.123,1.016,9.067,1.241,14.411,1.241c17.479,0,32.691-5.159,42.363-15.271c6.986-7.181,10.689-17.049,10.689-29.565
            c-0.01-12.349-4.719-22.423-12.125-29.017C138.013,39.061,125.058,34.948,107.374,34.948z M105.742,105.889
            c-5.989,0-10.913-0.401-14.831-1.426V50.561c3.078-0.801,9.067-1.426,16.873-1.426c19.54,0,32.711,8.852,32.711,27.366
            C140.495,95.181,127.325,105.889,105.742,105.889z"
              />
            </motion.svg>
            <h1 tw="my-2 text-7xl font-extrabold text-primary-400 ">PARKISI</h1>
          </div>
          <div tw="text-4xl flex flex-col items-center font-bold gap-5 text-primary-400">
            <p>Sergio Herranz Montoya</p>
            <Link href="/user/myProfile">
              <a tw="text-xl mr-2 hover:underline cursor-pointer hover:text-secondary-400">
                https://github.com/sergioherranzm/parkisi
              </a>
            </Link>
            <p tw="text-xl">sergioherranzm@gmail.com</p>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default Home;
