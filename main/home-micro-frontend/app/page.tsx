import HomeComponent from '@/components/homeComponent'
import dynamic from 'next/dynamic';
import Image from 'next/image'
import styles from './page.module.css'
const SampleComponent = dynamic(() => import('reports/reportComponent'), {
  ssr: false,
});
export default function Home() {
  return (
  <main>
    Hello From Home Page.tsx
    <HomeComponent/>
    </main>
  )
}
