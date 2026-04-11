import { motion } from 'framer-motion'
import { doctor } from '../data/config'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
})

export default function Header() {
  return (
    <div className="text-center mb-11">
      {/* CRM with letter-spacing animation */}
      <motion.p
        initial={{ opacity: 0, letterSpacing: '10px' }}
        animate={{ opacity: 1, letterSpacing: '3px' }}
        transition={{ delay: 0.2, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontSize: 10,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          fontWeight: 400,
          marginBottom: 10,
        }}
      >
        {doctor.crm}
      </motion.p>

      {/* Name */}
      <motion.h1
        {...fadeUp(0.28)}
        style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 40,
          fontWeight: 300,
          lineHeight: 1.05,
          color: 'var(--text)',
          marginBottom: 6,
        }}
      >
        {doctor.name}
      </motion.h1>

      {/* Specialty */}
      <motion.p
        {...fadeUp(0.36)}
        style={{
          fontSize: 12,
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          color: 'var(--muted2)',
          marginBottom: 14,
        }}
      >
        {doctor.specialty}
      </motion.p>

      {/* Subspecialty tag */}
      <motion.div {...fadeUp(0.44)}>
        <motion.span
          whileHover={{
            borderColor: 'rgba(201,169,110,0.5)',
            backgroundColor: 'rgba(201,169,110,0.06)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          style={{
            display: 'inline-block',
            padding: '5px 18px',
            border: '1px solid rgba(201,169,110,0.18)',
            borderRadius: 100,
            fontSize: 11,
            letterSpacing: '1.5px',
            color: 'var(--gold-light)',
            textTransform: 'uppercase',
            cursor: 'default',
          }}
        >
          {doctor.subspecialties}
        </motion.span>
      </motion.div>
    </div>
  )
}
