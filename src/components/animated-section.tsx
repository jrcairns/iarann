'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedSectionProps {
    children: React.ReactNode
    className?: string
    delay?: number
    initial?: { opacity: number, y: number }
}

export function AnimatedSection({ children, className, delay = 0, initial = { opacity: 0, y: 30 } }: AnimatedSectionProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "70px" })

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={isInView ? { opacity: 1, y: 0 } : initial}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.215, 0.610, 0.355, 1.000],
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
} 