"use client"

import styles from './style.module.scss'

function MdxLayout({children}: { children: React.ReactNode }) {
  return (
      <section
          className={styles['markdown']}
      >
        {children}
      </section>
  )
}


export default MdxLayout