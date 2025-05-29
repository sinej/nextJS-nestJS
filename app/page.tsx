import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Next.js Tutorial',
  description: 'Next.js 튜토리얼',
}

export default function Home() {
  return (
    <main>
      <Link href={'/dashboard'}>대시보드</Link>
    </main>
  );
}
