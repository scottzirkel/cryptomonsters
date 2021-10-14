import { useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app'

import Layout from '@/components/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
