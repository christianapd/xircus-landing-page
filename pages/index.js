import { Box,Text
} from '@chakra-ui/react'
import NavBar from './components/NavBar'
import BgImageWithRgba from './components/sections/BgImageWithRgba'
import Hero from './components/sections/Hero'
import TakeFullControl from './components/sections/TakeFullControl'
import Products from './components/sections/Products'
import HowToEarn from './components/sections/HowToEarn'
import Cards from './components/sections/Cards'
import Deploy from './components/sections/Deploy'
import EasySptep from './components/sections/EasyStep'
import MultipleBlackChain from './components/sections/MultipleBlackChain'
import BuiltIn from './components/sections/BuiltIn'
import IncomeCalculator from './components/sections/IncomeCalculator'
import Footer from './components/Footer'
import { useTranslations } from 'next-intl'

import navBarData from './data/navBarData.json'
import productsData from './data/productsData.json' 
import takeFullControlData from './data/takeFullControlData.json'
import howToEarnData from './data/howToEarnData.json'
import cardsData from './data/cardsData.json'
import deployData from './data/deployData.json'
import easyStepData from './data/easyStepData.json'
import multipleBlackChainData from './data/multipleBlackChain.json'
import builtInData from './data/builtInData.json'
import incomeCalculatorData from './data/incomeCalculatorData.json'
import footerData from './data/footerData.json'
import heroData from './data/heroData.json'
 

export default function Home() {
  const NavBarTranslated = useTranslations('navBarLang')
  const HeroTranslated = useTranslations('heroLang')
  const TakeFullControlTranslated = useTranslations('takeFullControlLang')
  const ProductsTranslated = useTranslations('productsLang')
  const HowToEarnTranslated = useTranslations('howToEarnLang')
  const cardsTranslated = useTranslations('cardsLang')
  const DeployTranslated = useTranslations('deployLang')
  const EasyStepTranslated = useTranslations('easyStepLang')
  const MultipleBlackChainTranslated = useTranslations('multipleBlackChainLang')
  const BuiltInTranslated = useTranslations('builtInLang')
  const IncomeCalculatorTranslated = useTranslations('incomeCalculatorLang')
  const FooterTranslated = useTranslations('footerLang')




  return (
    <Box bgColor="black" bgImage="url('https://ucb5787f90bc6ff4d5d4b7880aa2.previews.dropboxusercontent.com/p/thumb/ABaseCi7155WQZ7jnyiAp1hlSlzc8-eD4E2EG9BvpvFSFCPj3tjR-YxDD-WNINbyL_2_y-0Fapzb7WO1svjJTOW_F-T5KMsBt9Zz7OUsdUm7LvvntN0EWG4diL8_zan-PNMDUak7qNkxDFL4WN5FxBqDfwtAMA5gQFzIp5Br4mpH4ekHUmupebul8jP6xdSPkEmVm-RYOu_AbiiujliOEfP_RkmXSDfDWH3imAcVHQoF-kaqO2KVD7wPrqwdvA8NqXtagHkZAa45LMwqUlz6wa81MH4af4MO2Ooa9fHvjBosmBDcSvPDiTM0ENbhNNgSaURH31j3B70QsL_iUlvLAPFVP9ShnONnMI3NqjiGhCFUlpuIeji2V9lI1Cgjat3IVXE/p.png')"  
    bgRepeat="no-repeat"
    bgSize="cover"
    >
      <NavBar navBarData={navBarData} icon="https://icoholder.com/files/img/6f7203a158209cb2e9143d6631cbb7c2.png" translate={NavBarTranslated}/>
      <Hero heroData= {heroData} icon="https://icoholder.com/files/img/6f7203a158209cb2e9143d6631cbb7c2.png" translate={HeroTranslated}/>
      <TakeFullControl takeFullControlData={takeFullControlData} translate={TakeFullControlTranslated}/>
      <Products productsData={productsData} translate={ProductsTranslated}/>
      <HowToEarn howToEarnData={howToEarnData} translate={HowToEarnTranslated}/>
      <Cards cardsData={cardsData} translate={cardsTranslated}/>
      <Deploy deployData={deployData} translate={ DeployTranslated}/>
      <EasySptep easyStepData={easyStepData} translate={EasyStepTranslated}/>
      <MultipleBlackChain multipleBlackChainData={multipleBlackChainData} translate={MultipleBlackChainTranslated}/>
       <BuiltIn builtInData={builtInData} translate={BuiltInTranslated}/>
      <IncomeCalculator incomeCalculatorData={incomeCalculatorData} translate={IncomeCalculatorTranslated}/>
      <Footer footerData={footerData} translate={FooterTranslated}/>

    </Box>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../languages/${locale}.json`)).default
    }
  };
}
