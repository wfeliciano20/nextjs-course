import MainLayout from "../../components/layouts/MainLayout";
import Link from 'next/link';
import { ReactFragment } from "react";

const PricingPage = () => {
  return (
    <>
      <h1 className="title">
        Go to <Link href="/">Home</Link>
        </h1>
    </>
  )
}

PricingPage.getLayout = function getLayout(page: ReactFragment){
  return(
    <MainLayout>
        {page}
    </MainLayout>
  )
}

export default PricingPage;