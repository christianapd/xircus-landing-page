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

export default function Home() {
  return (
    <Box bgColor="black" bgImage="url('https://ucdf126b00a0ef0dfaa665809c92.previews.dropboxusercontent.com/p/thumb/ABYNKhRdPbCtRaMTO7wtH-G0IIqfPUOVYsT0iQvamPFmiiMNL2C7hMjJE0I3b_QJi-sWwj68QT2Bv_W4TjAk5Xss4ALU6jApRx36bRLew-qRkZ_oHa3gHbSvguNW4fckVyo9DJdEwrOpOsZ9YIlg_SgIviZgAeMy_fNNj_8QV3vebFHKz-NOlIFqvS33V7C1uuCqJsTOlVZRHy-mq4XU0FN3h2D85RHChNyDvCbiTD2jihr_lku8_WRkHirKwmBHRkQzZZwWThJGr_WFahHXIbYBoO607D2FHUvWJGLr2LjKm_i1dvMsF4vOyno6UngbY0FdTQhI2zY_PzymsV93iX02owwDdHrirPXQxG56eHNhzmOGEQ877RXte7Pkgefs5ao/p.png')"
    
    bgRepeat="no-repeat"
    >
      <BgImageWithRgba/>
      <NavBar  />
      <Hero/>
      <TakeFullControl/>
      <Products/>
      <HowToEarn/>
      <Cards/>
      <Deploy/>
      <EasySptep/>
      <MultipleBlackChain/>
       <BuiltIn/>
      <IncomeCalculator/>
      <Footer/>

    </Box>
  )
}
