import { motion } from "framer-motion";
import Background from "./components/Background";
import Avatar from "./components/Avatar";
import Header from "./components/Header";
import LinkCard from "./components/LinkCard";
import Socials from "./components/Socials";
import { links, doctor } from "./data/config";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <Background />

      <main
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 440,
          margin: "0 auto",
          padding: "60px 24px 80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar />
        <Header />
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.42, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: "100%",
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(43,122,111,0.35), transparent)",
            marginBottom: 26,
          }}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {links.map((link, i) => (
            <LinkCard key={link.id} link={link} index={i} />
          ))}
        </div>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.42, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: "100%",
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(43,122,111,0.35), transparent)",
            marginTop: 26,
          }}
        />
        <Socials />
        <Footer />
      </main>
    </div>
  );
}
