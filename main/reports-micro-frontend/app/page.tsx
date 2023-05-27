import ReportComponent from '@/components/reportComponent'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      Hello from reports page.tsx
      <ReportComponent/>
    </main>
  )
}
