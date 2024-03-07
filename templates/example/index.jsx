import { render, useCaspar, FramerMotion, useFont } from "@nxtedition/graphics-kit";
import { motion } from "framer-motion";
import fontRegularSrc from './assets/fonts/Sundry-Regular.woff2';
//import fontMediumSrc from './assets/fonts/Sundry-Medium.woff2';

function Example() {
  const { data } = useCaspar();
  const fontRegular = useFont({ fontRegularSrc });
  //const fontMedium = useFont({ fontMediumSrc });

  return (
    <FramerMotion>
      <motion.div
        style={{
          backgroundColor: "#edede5",
          borderRadius: 0,
          bottom: 80,
          color: "black",
          fontSize: 72,
          fontFamily: "Sundry-Regular",
          //fontFamily: "Sundry-Medium",
          left: 220,
          overflow: "hidden",
          padding: 20,
          position: "absolute",
          width: 1440
        }}

        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            opacity: {
              duration: 0.4,
            },
            y: {
              duration: 0.6,
            },
          },
        }}
        exit={{
          y: 100,
          opacity: 0,
          transition: {
            duration: 0.4,
          },
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: "100%",
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              delay: 0.3,
            },
          }}
        >
          {data.text}
        </motion.div>
      </motion.div>
    </FramerMotion>
  );
}

render(Example);
