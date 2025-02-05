import Link from "next/link";

// framer motion
import { motion } from "framer-motion";

interface LogoProps {
  withRotateAnimation?: boolean;
  withBreathAnimation?: boolean;
}

export default function Logo({
  withRotateAnimation = true,
  withBreathAnimation = true,
}: LogoProps) {
  return (
    <>
      <Link href="/" className="text-base md:text-xl  uppercase">
        <motion.div
          whileHover={{
            scale: 1.3, // Scale the letter up
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          animate={withRotateAnimation ? { rotate: 360 } : {}}
          transition={withRotateAnimation ? { duration: 1 } : {}}
          {...(withBreathAnimation && {
            animate: {
              scale: [1, 1.1, 1],
            },
            transition: {
              duration: 2,
              repeat: Infinity,
            },
          })}
        >
          <span className="!underline underline-offset-2 text-3xl font-extrabold text-gradient hover:!scale-150">
            {"b"}
          </span>
          <span className="font-bold">{"asel "}</span>
          <span className="font-bold">{"Diab"}</span>
          {/* <span className="font-bold">{"iab"}</span> */}
        </motion.div>
      </Link>
    </>
  );
}
