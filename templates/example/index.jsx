import { render, useCaspar, FramerMotion } from "@nxtedition/graphics-kit";
import { motion } from "framer-motion";

function Example() {
  const { data } = useCaspar();

  return (
    <FramerMotion>
      <motion.div
        style={{
          position: "absolute",
          bottom: 80,
          left: 266,
          width: 1388,
          padding: 20,
          backgroundColor: "white",
          borderRadius: 6,
          fontSize: 70,
          fontFamily: "Arial",
          overflow: "hidden",
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
