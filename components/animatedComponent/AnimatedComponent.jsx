import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

export default function AnimatedComponent({ children }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <Box ref={ref}>
      {inView ? (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 100,
            delay: 0.2,
          }}
        >
          <Box>{children}</Box>
        </motion.div>
      ) : (
        <Box style={{ opacity: 0 }}>{children}</Box>
      )}
    </Box>
  );
}
