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
import { useTranslations } from 'next-intl';


export default function Home() {
  const NavBarTranslated = useTranslations('navBarLang')
  const HeroTranslated = useTranslations('heroLang')
  const TakeFullControlTranslated = useTranslations('takeFullControlLang')
  const ProductsTranslated = useTranslations('productsLang')
  const HowToEarnTranslated = useTranslations('howToEarnLang')
  const DeployTranslated = useTranslations('deployLang')
  const EasyStepTranslated = useTranslations('easyStepLang')
  const MultipleBlackChainTranslated = useTranslations('multipleBlackChainLang')
  const BuiltInTranslated = useTranslations('BuiltInLang')
  const IncomeCalculatorTranslated = useTranslations('incomeCalculatorLang')
  const FooterTranslated = useTranslations('footerLang')




  return (
    <Box bgColor="black" bgImage="url('https://ucdf126b00a0ef0dfaa665809c92.previews.dropboxusercontent.com/p/thumb/ABYNKhRdPbCtRaMTO7wtH-G0IIqfPUOVYsT0iQvamPFmiiMNL2C7hMjJE0I3b_QJi-sWwj68QT2Bv_W4TjAk5Xss4ALU6jApRx36bRLew-qRkZ_oHa3gHbSvguNW4fckVyo9DJdEwrOpOsZ9YIlg_SgIviZgAeMy_fNNj_8QV3vebFHKz-NOlIFqvS33V7C1uuCqJsTOlVZRHy-mq4XU0FN3h2D85RHChNyDvCbiTD2jihr_lku8_WRkHirKwmBHRkQzZZwWThJGr_WFahHXIbYBoO607D2FHUvWJGLr2LjKm_i1dvMsF4vOyno6UngbY0FdTQhI2zY_PzymsV93iX02owwDdHrirPXQxG56eHNhzmOGEQ877RXte7Pkgefs5ao/p.png')"  
    bgRepeat="no-repeat"
    >
      <NavBar icon="https://icoholder.com/files/img/6f7203a158209cb2e9143d6631cbb7c2.png" translate={NavBarTranslated}/>
      <Hero icon="https://icoholder.com/files/img/6f7203a158209cb2e9143d6631cbb7c2.png" translate={HeroTranslated}/>
      <TakeFullControl translate={TakeFullControlTranslated}/>
      <Products translate={ProductsTranslated}/>
      <HowToEarn translate={HowToEarnTranslated}/>
      <Cards/>
      <Deploy translate={ DeployTranslated}/>
      <EasySptep translate={EasyStepTranslated}/>
      <MultipleBlackChain translate={MultipleBlackChainTranslated}/>
       <BuiltIn translate={BuiltInTranslated}/>
      <IncomeCalculator translate={IncomeCalculatorTranslated}/>
      <Footer translate={FooterTranslated}/>

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
