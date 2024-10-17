import { animate, motion } from 'framer-motion'

const BlurBackground = () => {
  const circleVariants = {
    animate1: {
      scale: [1, 1.2, 1],
      x: [0, 100, 0],
      y: [0, 50, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeOut',
      },
    },

    animate2: {
      scale: [1, 1.1, 1],
      x: [0, 120, 0],
      y: [0, -60, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },

    animate3: {
      scale: [1, 1.3, 1],
      x: [0, 140, 0],
      y: [0, 70, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    animate4: {
      scale: [1, 1.4, 1],
      x: [0, 160, 0],
      y: [0, -80, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    animate5: {
      scale: [1, 1.5, 1],
      x: [0, 180, 0],
      y: [0, 90, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    animate6: {
      scale: [1, 1.6, 1],
      x: [0, 200, 0],
      y: [0, -100, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }
  return (
    <>
      <div
        className="
      animateSection"
      >
        <motion.div
          className="animate1"
          variants={circleVariants}
          animate="animate1"
        ></motion.div>
        <motion.div
          className="animate2"
          variants={circleVariants}
          animate="animate2"
        ></motion.div>
        <motion.div
          className="animate3"
          variants={circleVariants}
          animate="animate3"
        ></motion.div>
        <motion.div
          className="animate4"
          variants={circleVariants}
          animate="animate4"
        ></motion.div>
        <motion.div
          className="animate5"
          variants={circleVariants}
          animate="animate5"
        ></motion.div>
        <motion.div
          className="animate6"
          variants={circleVariants}
          animate="animate6"
        ></motion.div>
      </div>
    </>
  )
}

export default BlurBackground
