import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { linkIcons } from "./Icons";

const spring = { type: "spring", stiffness: 380, damping: 28 };

export default function LinkCard({ link, index }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const Icon = linkIcons[link.id];
  const iconColor = link.primary
    ? "rgba(201,169,110,0.9)"
    : "rgba(201,169,110,0.5)";

  const isExpandable = link.expandable && link.options;

  const handleClick = (e) => {
    if (isExpandable) {
      e.preventDefault();
      setExpanded((prev) => !prev);
    }
  };

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
        href={isExpandable ? "#" : link.href}
        target={isExpandable ? undefined : "_blank"}
        rel="noopener noreferrer"
        onClick={handleClick}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileTap={{ scale: 0.982 }}
        animate={{
          backgroundColor: hovered
            ? "var(--bg3)"
            : link.primary
              ? "rgba(201,169,110,0.07)"
              : "var(--bg2)",
          borderColor: expanded
            ? "rgba(201,169,110,0.5)"
            : hovered
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
          borderRadius: expanded ? "4px 4px 0 0" : 4,
          textDecoration: "none",
          color: "var(--text)",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* shimmer */}
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

        {/* ícone */}
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

        {/* texto */}
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

        {/* seta / chevron */}
        <motion.span
          animate={{
            rotate: isExpandable ? (expanded ? 90 : 0) : 0,
            x: !isExpandable && hovered ? 5 : 0,
            color: hovered || expanded ? "var(--gold)" : "var(--muted)",
          }}
          transition={spring}
          style={{ fontSize: 18, marginLeft: 12, display: "block" }}
        >
          →
        </motion.span>
      </motion.a>

      {/* painel expandido */}
      <AnimatePresence>
        {isExpandable && expanded && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            style={{
              overflow: "hidden",
              border: "1px solid rgba(201,169,110,0.5)",
              borderTop: "1px solid rgba(201,169,110,0.15)",
              borderRadius: "0 0 4px 4px",
              backgroundColor: "var(--bg2)",
            }}
          >
            {link.options.map((group, gi) => (
              <div key={gi} style={{ padding: "12px 20px" }}>
                {/* label do grupo */}
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: 8,
                  }}
                >
                  {group.label}
                </div>

                {/* itens clicáveis */}
                {group.items.map((item, ii) => (
                  <motion.a
                    key={ii}
                    href={item.href}
                    target={item.href.startsWith("tel:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    whileHover={{ x: 4, color: "var(--gold)" }}
                    whileTap={{ scale: 0.97 }}
                    transition={spring}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 14,
                      color: "var(--gold-light)",
                      textDecoration: "none",
                      padding: "6px 0",
                      fontWeight: 500,
                    }}
                  >
                    <span style={{ fontSize: 12, opacity: 0.6 }}>
                      {item.href.startsWith("tel:") ? "📞" : "💬"}
                    </span>
                    {item.text}
                  </motion.a>
                ))}

                {/* separador entre grupos */}
                {gi < link.options.length - 1 && (
                  <div
                    style={{
                      height: 1,
                      backgroundColor: "rgba(201,169,110,0.1)",
                      margin: "10px 0 0",
                    }}
                  />
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
