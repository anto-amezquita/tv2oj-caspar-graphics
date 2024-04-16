import {
  render,
  useCaspar,
  FramerMotion,
  useFont,
} from "@nxtedition/graphics-kit";
import { motion } from "framer-motion";
import sundryRegular from "./assets/fonts/Sundry-Regular.woff2";
import sundryMedium from "./assets/fonts/Sundry-Medium.woff2";
import "./style.css";

function LowerThird() {
  const { data } = useCaspar();
  const fontRegular = useFont({ src: sundryRegular });
  const fontMedium = useFont({ src: sundryMedium });

  return (
    <FramerMotion>
      <motion.div
        className="container"
        style={fontRegular.style}
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
          className="container__top"
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
          {data.role}
        </motion.div>

        <motion.div className="container__bottom" style={fontMedium.style}>
          {data.name}
        </motion.div>
      </motion.div>
    </FramerMotion>
  );
}

render(LowerThird);
