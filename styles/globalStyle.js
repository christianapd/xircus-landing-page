import { color } from "@chakra-ui/react"
import MultipleBlackChain from "../pages/components/sections/MultipleBlackChain"

export const typoStyle = {
  headline: {
    color: 'white',
    fontSize: { base: '30px', sm: '50px', md: '65px' },
    mb: '10px',
    textAlign: 'center',
  },
  subheadline: {
    color: 'white',
    fontSize: { base: '15px', sm: '20px', md: '30px' },
    mb: '10px',
    w: "65%",
    textAlign: 'center',
    mb: '10px'

  },
  title: {
    color: 'white',
    fontSize: '35px',
    mb: '10px',
    textAlign: 'center',

  },
  subtitle: {
    color: 'gray.100',
    fontSize: '20px',
    textAlign: 'center',

  },
  asSeenOn: {
    color: 'White',
    fontSize: '25px',
    my: 'auto'
  },
  navBartypoStyle: {
    my: 'auto',
    color: 'orange'
  },
  productHeading:{
    color:'white',
    mb:'30px',
    textAlign:'left'
  }

}
export const stackStyle = {
  heroAsSeenOnstackStyle: {
    direction: { base: 'column', sm: 'column', md: 'row' },
    w: '100%',
    my: 'auto',
    spacing: 5
  },
  incomeCalculatorStactStyle:{
    spacing:{ base: 3, sm: 4, md: 6 },
    direction:{ base: 'column', sm: 'column', md: 'row' },
     mb:'4%',
     color:'white'
  },
  incomeCalculatorInnerStactStyle:{
    bgColor:'gray.900',
    borderTop:'1px solid gray',
    w:{ base: '350px', sm: '500px', md: '700px' },
    p:'20px',
    borderRadius:20,
  }
}

export const imageStyle = {
  navBarImageStyle: {
    h: '70px',
    my: 'auto'
  },
  deployImageStyle:{
    h:{base:'160px',sm:'400px',md:'550px'}, 
    objectFit:'cover',
    fallbackSrc:'https://via.placeholder.com/550'  
  },
  easyStepImageStyle:{
    h:{ base: '200px', sm: '350px', md: '550px' },
    w:'100%',
    objectFit:'cover',
    fallbackSrc:'https://via.placeholder.com/550'  
  }
}
export const flexStyle = {
  navBarFlexStyle: {
    color: 'white',
    display: { base: 'none', sm: 'none', md: 'flex' },
    spacing: 30
  }
}

export const linkStyle = {
  navBarLinkStyle: {
    mx: 3,
    my: 'auto',
    fontWeight: 800
  },
  footerLinkStyle:{
    fontSize:'13px'
  }

}


export const boxStyle = {
  navBarBoxStyle: {
    as: 'section',
    zIndex: 999,
    sx: { position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '0', },
    bgColor: 'rgba(255,255,255,0.3)'
  },
  NFTmakeBoxStyle: {
    mt: '10%',
    w: '60%',
    bgColor: 'rgba(0,0,0,0.4)',
    border: '3px solid orange',
    p: '25px',
    color: 'white',
    textAlign: 'center',
    borderRadius: '30'
  }
}

export const HStackStyle = {
  
}

export const buttonStyle = {
  navBarButtonStyle: {
    ml: '20px',
    borderRadius: 900,
    bgColor: 'rgba(0,0,0,0.4)'
  },

  heroButton: {
    color: 'white',
    w: { base: '150px', sm: '180px', md: '200px' },
    h: '50px',
    bgGradient: 'linear(to-l, #8a2387, #e94057, #f27121)',
    fontSize: '12px',
    borderRadius: 30,
    mr: '15px',
    fontWeight: 900,
    _hover: {

    }
  },

  heroPlayButton: {
    bgColor: 'white',
    variant: 'ghost',
    size: '70px',
    mb: '7%'
  },

  DeployButton: {
    color:'white',
    variant: 'ghost',
    color:'white',
    borderBottom: '1px solid white',
    borderRadius: 0,
    w: { base: '150px', sm: '250px', md: '350px' },
    h: { base: '30px', sm: '50px', md: '70px' },
    fontSize: { base: '13px', sm: '16px', md: '23px' },
    _hover:{

    }
  },

  EasyStepButton: {
    variant: 'ghost',
    color:'white',
    borderBottom: '1px solid white',
    borderRadius: 0,
    w: { base: '110px', sm: '200px', md: '300px' },
    h: { base: '30px', sm: '50px', md: '70px' },
    fontSize: { base: '10px', sm: '14px', md: '23px' },
    _hover:{
      
    }
  }
}

export const containerStyle = {
  conXl: {
    maxW: 'container.xl',
    mb: "8%",
    
  },
  ConLg: {
    maxW: 'container.lg',
    mb: "8%"
  },
  navBarContainerStyle: {
    maxW: 'container.xl',
    h: '70px'
  }


}

export const takeFullControlCardStyle = {
  outerBox: {
    w: '250px',
    h: '250px',
    align: 'center',
    color: 'white',
    position: 'relative'
  },
  absuluteBox: {
    borderRadius: 20,
    w: '250px',
    h: '165px',
    position: 'absolute',
    bottom: '0',
    bgGradient: 'linear(to-b, #56333d,#3d1a25, #3d1a20)'
  },
  wrapperBox: {
    zIndex: 1,
    mt: '20px',
    p: '20px',
    position: 'relative'
  },
  imageIcon: {
    h: '120px'
  },
  cardText: {

  }
}

export const productCardStyle = {
  boxCardStyle: {
    w: '280px',
    h: '290px',
    color: 'white',
    bgColor: '#0a0708',
    borderTop: '1px solid gray',
    boxShadow: 'sm',
    borderRadius: 15,
    p: '20px'
  },
  imageIcon:{
    h:'120px',
    mb:'10px',
    mt:'30px',
    fallbackSrc:'https://via.placeholder.com/120'
  },
  cardHeading:{
    fontSize:'20px',
    mb:'10px'
  },
  cardText:{
    fontSize:'15px'
  }
}
export const howToEarnCardStyle = {
  HowToEarnHStack: {
    textAlign: 'left',
    p: '10px'
  },
  imageIcon:{
    h:'100px',
    my:'auto',
    borderRadius:10,
    ml:'10px',
    fallbackSrc:'https://via.placeholder.com/100'
  },
  cardHeading:{
    fontSize:'20px'
  },
  cardText:{
    fontSize:'15px'
  }
}
export const cardsCardStyle={
  cardBox:{
    w:'280px',
    h:'330px', 
    color:'white',
    boxShadow:'sm',
    borderRadius:15,
     p:'20px'
  },
  imageIcon:{
    h:'120px', 
    mb:'30px' 
  },
  cardHeading:{
    fontSize:'20px',
    mb:'10px'
  },
  cardText:{
    fontSize:'15px',
  }
}

export const multipleBlackChainCardStyle={
  cardStack:{
    align:'center'
  },
  imageIcon:{
    h:'50px'
  },
  cardText:{

  },
  cardTextStatus:{
    bgColor:'red',
    p:0,
    borderRadius:5,
     fontSize:'12px'
  }
}

export const builtInCardStyle={
  cardBox:{
    w:'250px', 
    h:'300px',
    color:'white' ,
    bgColor:'gray.900',
    borderTop:'1px solid gray',
    borderRadius:10,
    align:'center',
    pt:'50px'
  },
  imageIcon:{
    h:'180px',
    mb:'30px'
  },
  cardText:{
    fontSize:'20px'
  }
}

export const gridStyle = {
  takeFullControlGridStyle: {
    templateColumns: { base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
    gap: 8
  },
  productGridStyle:{
    templateColumns:{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
     gap:6
  },
  howToEarnGridStyle:{
    templateColumns:{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }, 
    gap:6,
    textAlign:'left'
  },
  cardGridStyle:{
    templateColumns:{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
    gap:6
  },
  multipleBlackChaingGridSyleRow1:{
    w:'100%',
    color:'white',
    templateColumns:{ base: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)' },
    gap:2
  },
  multipleBlackChaingGridSyleRow2:{
    w:'100%',
    color:'white',
    templateColumns:{ base: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)', md: 'repeat(10, 1fr)' },
    gap:2
  },
  incomeCalculatorGridStyle:{
    templateColumns:{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
    gap:2
  },
  footerGridStyle:{
    color:'white' ,
    textAlign:'center',
    templateColumns:{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
    gap:5
  }
}
// export const itemAvatarStyle = {

// }

// export const itemMetaStyle = {
// name,
// desc,
// price,
// }


// // Collections
// export const ColListStyle = {
//  wrap,
//  title
// }

// export const ColCardStyle = {
//   cover,
//   avatar,
//   name,
//   address
// }

// export const itemListStyle = { 
//   wrap, 
//   title: typoStyle.title
// }