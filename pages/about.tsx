import Link from 'next/link';
import { ReactFragment } from 'react';
import DarkLayout from '../components/layouts/DarkLayout';
import MainLayout from '../components/layouts/MainLayout';

export default function AboutPage() {
  return (
    <>
        <h1 className="title">
          Go to <Link href="/">Home</Link>
        </h1>
    </>
    )
}

AboutPage.getLayout = function getLayout(page: ReactFragment){
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
