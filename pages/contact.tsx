import Link from 'next/link';
import { ReactFragment } from 'react';
import MainLayout from '../components/layouts/MainLayout';

export default function ContactPage() {
  return (
    <>
      <h1 className="title">
        Go to <Link href="/">Home</Link>
        </h1>
        <h1 className="title">
        Go to <Link href="/about">About</Link>
        </h1>
    </>
  )
}


ContactPage.getLayout = function getLayout(page: ReactFragment){
  return(
    <MainLayout>
      {page}
    </MainLayout>
  )
}