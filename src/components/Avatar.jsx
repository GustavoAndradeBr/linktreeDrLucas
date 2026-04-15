import { motion } from "framer-motion";
import { doctor } from "../data/config";

export default function Avatar() {
  return (
    <motion.div
      className="relative mb-8"
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 240, damping: 18, delay: 0.05 }}
    >
      {/* Outer animated pulse ring */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: -10,
          border: "1px solid rgba(201,169,110,0.55)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Middle ring (static) */}
      <motion.div
        className="relative rounded-full"
        style={{
          width: 96,
          height: 96,
          border: "1px solid rgba(201,169,110,0.38)",
          padding: 3,
        }}
        whileHover={{ borderColor: "rgba(201,169,110,0.7)" }}
        transition={{ duration: 0.3 }}
      >
        {/* Inner circle */}
        <div
          className="w-full h-full rounded-full flex items-center justify-center overflow-hidden"
          style={{ background: "var(--bg3)" }}
        >
          {doctor.photo ? (
            <img
              src={doctor.photo}
              alt={doctor.name}
              className="w-full h-full object-cover object-[-3px_top] scale-[1.08]"
            />
          ) : (
            <span
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 30,
                fontWeight: 300,
                color: "var(--gold)",
                letterSpacing: 2,
              }}
            >
              {doctor.initials}
            </span>
          )}
        </div>
      </motion.div>

      {/* Status dot */}
      {doctor.available && (
        <motion.div
          className="absolute rounded-full"
          style={{
            bottom: 4,
            right: 4,
            width: 13,
            height: 13,
            background: "#2ECC71",
            border: "2px solid var(--bg)",
          }}
          animate={{ scale: [1, 1.35, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </motion.div>
  );
}
