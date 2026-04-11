import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { linkIcons } from "./Icons";

const spring = { type: "spring", stiffness: 380, damping: 28 };

export default function LinkCard({ link, index }) {
  const [hovered, setHovered] = useState(false);

  const Icon = linkIcons[link.id];
  const iconColor = link.primary
    ? "rgba(201,169,110,0.9)"
    : "rgba(201,169,110,0.5)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(7px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        delay: 0.48 + index * 0.075,
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileTap={{ scale: 0.982 }}
        animate={{
          backgroundColor: hovered
            ? "var(--bg3)"
            : link.primary
              ? "rgba(201,169,110,0.07)"
              : "var(--bg2)",
          borderColor: hovered
            ? "rgba(201,169,110,0.4)"
            : link.primary
              ? "rgba(201,169,110,0.3)"
              : "rgba(201,169,110,0.11)",
          y: hovered ? -2 : 0,
        }}
        transition={spring}
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          padding: "15px 20px",
          border: "1px solid rgba(201,169,110,0.11)",
          borderRadius: 4,
          textDecoration: "none",
          color: "var(--text)",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="shimmer"
              initial={{ x: "-110%", opacity: 0 }}
              animate={{ x: "110%", opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.52, ease: "easeInOut" }}
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(201,169,110,0.065) 50%, transparent 100%)",
                pointerEvents: "none",
              }}
            />
          )}
        </AnimatePresence>

        <motion.div
          animate={{
            borderColor: hovered
              ? "rgba(201,169,110,0.38)"
              : "rgba(201,169,110,0.12)",
            backgroundColor: link.primary
              ? hovered
                ? "rgba(201,169,110,0.13)"
                : "rgba(201,169,110,0.07)"
              : "var(--bg3)",
          }}
          transition={spring}
          style={{
            width: 38,
            height: 38,
            borderRadius: 3,
            border: "1px solid rgba(201,169,110,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 16,
            flexShrink: 0,
          }}
        >
          {Icon && <Icon color={iconColor} />}
        </motion.div>

        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 12,
              letterSpacing: "1.8px",
              textTransform: "uppercase",
              color: link.primary ? "var(--gold)" : "var(--gold-light)",
              fontWeight: 400,
              marginBottom: 2,
            }}
          >
            {link.label}
          </div>
          <div style={{ fontSize: 13, color: "var(--muted)" }}>
            {link.description}
          </div>
        </div>

        <motion.span
          animate={{
            x: hovered ? 5 : 0,
            color: hovered ? "var(--gold)" : "var(--muted)",
          }}
          transition={spring}
          style={{ fontSize: 18, marginLeft: 12, display: "block" }}
        >
          →
        </motion.span>
      </motion.a>
    </motion.div>
  );
}
