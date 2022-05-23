import MainLayout from '../components/layouts/MainLayout';  
import Link from 'next/link';
import { ReactFragment } from 'react';

export default function HomePage() {
  return (
    <>
        <h1 className="title">
          Go to <Link href="/about">About</Link>
        </h1>
    </>
  )
}

HomePage.getLayout = function getLayout(page: ReactFragment){
  return(
    <MainLayout>
      {page}
    </MainLayout>
  )
}
