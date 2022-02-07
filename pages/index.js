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
    <Box bgColor="black" bgImage="url('https://uc9350dc0890b88efa93c6ec31f2.previews.dropboxusercontent.com/p/thumb/ABbXOUSdprtFmRfwAyxk3aemm4kATVO90JbFYXn3DhN59BdX8dQaoU9kgfOFnOZCaD5NonDXPMsJDTBRkOuMmaRFF49lPo8fQK2sJRWoKmLGwmW_-gWirqKz3oDMykGyfTKXaii4iT-1enJ4PIKI1E54GYwA9opRWp_A9I5soLVCgzBVycZGu16zq55ixuZCP63yQMLQSv0uvutifuS81PRXCNsTboWrqwDIc7LMKuYA-FD-XyX0QKiJpSxpEyY_xj0utF4pbp0sshFouMb2aDv_pWj9dPFI6_Gem56x8a9GpxGbMCiD-YSomBNF1RSiTHdIcBvF7w83OYzHmwYQ4npA-EAyD4xPpXZYhsWQYKRKbCqoySIEeUZmKH4wEIq-e5Y/p.png')"  
    bgRepeat="no-repeat"
    bgSize="cover"
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
