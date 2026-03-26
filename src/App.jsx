import { Suspense } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import PricingOption from './components/Pricing/PricingOption'

function App() {

  const pricingPromise=fetch("/public/pricing.json").then(res=>res.json())

  return (
    <>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>

      <main>
        <Suspense fallback={<span className="mx-auto flex justify-center items-center mt-5 loading loading-bars loading-xl"></span>}>

          <PricingOption pricingPromise={pricingPromise}></PricingOption>
          
        </Suspense>
      </main>
    </>
  )
}

export default App
