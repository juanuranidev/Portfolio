import React from "react";
import { useInView } from "react-intersection-observer";
import { variants } from "../../helpers/util";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

export default function Animation({ children }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

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
            delay: 0.1,
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
