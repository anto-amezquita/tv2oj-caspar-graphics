import {
  render,
  useCaspar,
  FramerMotion,
  useFont,
} from "@nxtedition/graphics-kit";
import { motion } from "framer-motion";
import fontRegularSrc from "./assets/fonts/Sundry-Regular.woff2";
import fontMediumSrc from "./assets/fonts/Sundry-Medium.woff2";

function LowerThird() {
  const { data } = useCaspar();
  const fontRegular = useFont({ fontRegularSrc });
  const fontMedium = useFont({ fontMediumSrc });

  return (
    <FramerMotion>
      <motion.div
        style={{
          borderBottomRightRadius: 40,
          bottom: 40,
          left: 40,
          lineHeight: "1",
          overflow: "hidden",
          position: "absolute",
          width: 1840,
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
            y: "-100%",
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
          <motion.div
            style={{
              backgroundColor: "#fff",
              color: "black",
              fontSize: 36,
              fontFamily: "Sundry-Regular",
              overflow: "hidden",
              padding: "20px 80px",
            }}
          >
            {data.role}
          </motion.div>

          <motion.div
            style={{
              backgroundColor: "#edede5",
              color: "black",
              fontSize: 72,
              fontFamily: "Sundry-Medium",
              overflow: "hidden",
              padding: "20px 80px",
            }}
          >
            {data.name}
          </motion.div>
        </motion.div>
      </motion.div>
    </FramerMotion>
  );
}

render(LowerThird);
