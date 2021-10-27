import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Sign from '@/components/Sign'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}


export default function Layout({children}: LayoutProps) {
  const router = useRouter()
  const meta = {
    title: 'Monsters of the Baruvian Jungle',
    description: 'Can you find all of the shy monsters?',
    cardImage: '/og.png',
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://subscription-starter.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>
      <div className="flex flex-col min-h-screen bg-cyan-900 text-white space-y-8">
        <div className="flex max-w-screen overflow-hidden">
          <div className="absolute left-0 w-1/2 h-full z-0 mix-blend-multiply">
            <div
              className="absolute top-0 left-0 z-0 w-96 h-48 bg-opacity-75 bg-contain bg-left-top bg-no-repeat"
              style={{backgroundImage: "url('vines-dual.png')"}}
            ></div>
            <div
              className="absolute left-0 z-0 w-64 h-full mix-blend-multiply bg-opacity-75 bg-top-left bg-contain bg-no-repeat"
              style={{backgroundImage: "url('trees-left-tall.png')"}}
            ></div>
          </div>
          <div className="absolute right-0 w-1/2 h-full z-0 mix-blend-multiply hidden md:block">
            <div
              className="absolute right-0 z-0 w-96 h-48 mix-blend-multiply bg-opacity-75 bg-contain bg-no-repeat"
              style={{backgroundImage: "url('vine-single.png')"}}
            ></div>
            <div
              className="absolute right-0 z-0 w-48 h-48 mix-blend-multiply bg-opacity-75 bg-top-right bg-contain bg-no-repeat"
              style={{backgroundImage: "url('trees-right.png')"}}
            ></div>
          </div>
        </div>
        <nav className="text-center py-2 space-x-4 text-lime-200 font-bold z-10 relative">
          <Link href="#monster">
            <a>Monster Spotting</a>
          </Link>
          <a href="#about">About the Monsters</a>
          <a href="#team">Meet the Team</a>
        </nav>
        <main id="skip" className="flex-grow flex-1 text-center z-10">
          {children}
        </main>
        <footer className="text-center py-2 relative">
          <Sign />
          <p className="text-sm text-cyan-200">
            Copyright © {new Date().getFullYear()} Courtney Huddleston & Scott Zirkel. All Rights
            Reserved.
          </p>
        </footer>
      </div>
    </>
  )
}
