/**
 * ページ構成。
 *
 * 案件（業種・店舗）ごとに複製する際は、このファイルの import と JSX を
 * 直接追加・削除・並べ替えして構成します（動的なセクション管理システムは
 * 使わず、この単純な方式を基本とする）。
 *
 * 今回の案件：個人で小規模に始めるオンラインピラティスサービス。
 * 業種固有の追加セクションは Learning / OnlineLesson として下部にまとめている。
 */

// 基本セクション
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Features } from '@/components/features'
import { Gallery } from '@/components/gallery'
import { WhoItsFor } from '@/components/who-its-for'
import { Experience } from '@/components/experience'
import { Pricing } from '@/components/pricing'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'

// 今回の案件（オンラインピラティス）固有セクション
import { Learning } from '@/components/learning'
import { OnlineLesson } from '@/components/online-lesson'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />

        {/* 今回の案件固有: 学び続ける姿勢・資格（要確認項目あり） */}
        <Learning />

        {/* 今回の案件固有: オンラインレッスンの内容（要確認項目あり） */}
        <OnlineLesson />

        <Gallery />
        <WhoItsFor />
        <Experience />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
