import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'
import { socialIcons } from './Icons'
import { socials } from '../data/config'

export default function Socials() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      style={{ display: 'flex', gap: 14, marginTop: 36 }}
    >
      {socials.map((s, i) => {
        const Icon = socialIcons[s.id]
        return (
          <MagneticButton key={s.id}>
            <motion.a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              aria-label={s.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.22 + i * 0.06,
                type: 'spring',
                stiffness: 300,
                damping: 22,
              }}
              whileHover={{
                borderColor: 'rgba(201,169,110,0.5)',
                color: 'var(--gold)',
              }}
              whileTap={{ scale: 0.86 }}
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid rgba(201,169,110,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--muted)',
                textDecoration: 'none',
                background: 'var(--bg2)',
              }}
            >
              {Icon && <Icon />}
            </motion.a>
          </MagneticButton>
        )
      })}
    </motion.div>
  )
}
