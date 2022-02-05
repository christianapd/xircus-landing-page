import { Box, Container, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { typoStyle, containerStyle, productCardStyle, gridStyle } from '../../../styles/globalStyle'

const ProductData = [
  {
    icon: 'https://uc5091e98c5a2fefa534416f30f9.previews.dropboxusercontent.com/p/thumb/ABYAkctN4qQxUzqw54oYGDoB3fy2v1yZ8WoWJRqWkUwVgtgBWXspqbu_XtnfWsdx70y8vX8icxl_ahtnE10F7BQGKngRKnFXxPu4BUe26IWl5WgkXSUO2TXl2O-O1ldbSE5o24n_BIpXaYTdMHl5RYBYfiD9Gtv74lZACLrVi1Cm0kIaRiLN5_Xk_27SsFTM7op77RU91n7XQ3m0P_q4XbyqHlILWSd2PBcB2PceBrXf1PxTT8OnwtIfqRrsWtRCATnRhKE8mciaj7Orzf_v8cZ9D4wcPbXnXLm2NAM-WT3ug6akP77kpo0pS8sMx9X3sXyCihZMU1eFo9PwywzpJv6kvP1qVkgXjnUUhYLVAn5_W_Vqmwtl9f8GdcwTr3wpQpU/p.png',
    title: 'Dashboard',
    desc: 'Xircuse Assets overview',
  },
  {
    icon: 'https://ucf05690b905693e1796e9541e54.previews.dropboxusercontent.com/p/thumb/ABZUCLmmZkvm0_OSKNojY6MOaTEcT1Vk6C7QQL1laMmqwKkvM8M1x6DIxL0nqYp6MwQXDCrSg44dDn43908ePWcAbSZG02eIHeYnWXymd67eknyJ4P4hjLeXToZfdTfkVoMLGorcxZeqtN4GQOMilgSDCBb9v8jd_suEc-0gZhsPbyA76xg3v_nrab7qQRvha-nOv2fJCotdDbDCwVS8vk3BIYZd-gVy1AHKOgirrLJaNBs0FW6RTnlMmYbuXtptmK3lJ2kjtDaJp1I3Dq9eJ_oDyecyhoFU9ttZnU_zDhTzltlM6hp1CounqlVod13_rSTVVZmH1koKt1YcEybtK2Zuc8ajamB1u3p3WVNBmr1Jmu_ycO4yJeZkAqtlRk321Uo/p.png',
    title: 'Market Explorer',
    desc: 'Discover marketplaces and games mint and collect NFT Items',
  },
  {
    icon: 'https://uc465fafb586f3d070af1f99da16.previews.dropboxusercontent.com/p/thumb/ABbTM-uUFNC-QHyESXemnJkHKySBA0p9Wl7MWUtZN8AX1_Qsy9B97xP92wqnGdSIVivF9UOVf-lssjWLb3uAipOKuEeErgpW1eQx1__fzHMWlitBJQAcj8DcI4mB4iNidxkmiZCkH2_kHApgAMTyY5U08LqUEKJWSW7H6KV0QpYHrqV0G7T4_V4s-2pjirYf1HmyW7SUyoq7v3iY5j7ygAH7KW3VtSGJmjfCsv0yDbKCtViJLLOPjZlzUaAjqcWh97RvDRlLoniDuQQbBHt13VLbJLcYiTRmpIpyn--1JhBsqOa6pP3CIx23ZtXdu7IZJ01tRk4Pi-NG-Tz3vCtGPH1u65FuLHnn63k1tuC2BDaaZtbLK1SyJbt5EsnloGUwKSc/p.png',
    title: 'XircusPunks',
    desc: 'Exclusive DAO Avatar'
  },
  {
    icon: 'https://uc18726d8a413cac9dfcd3c5b80b.previews.dropboxusercontent.com/p/thumb/ABbavZMrD5DDDGINAjSW7IwEqrqItDpC7Ti4WraPi0xbxn-B7aMG7vxfKege6TYj6SsHP6t0ZcFUyIUhpNXL3NpfwsOBYJFP2XICHGlmjve2VFv43ZLXOeTnR8eFVq-7w8F67qQsGExq5S4NUKhwCuq3V4StQhHvk-yBYI_mcVp82Lzn8KBYn4iyRQ8b41m45rSinQ5cgR5fCxd-oSjCXB-czBuAse-qrLNid-pmFVhTsnCxwgPZKYdFEvexhnw-45V-8RT47c_t49dkPjK1TaDEmJsULefQYcdUpXkvYFTpgulNq9P2SxuoLI4CWKU61Ko2c_AXf3FOq9H8gtPUn2x-UCJP-ISQ13W2t9-NB584o0Db4y8bdV6uyCn9b7pXdhM/p.png',
    title: 'Lunchpad',
    desc: 'Decentralized Token Auctions'
  },
  {
    icon: 'https://uca63546f311bb4df1bd719026ae.previews.dropboxusercontent.com/p/thumb/ABaOGV_tfDnPSKQ2pDSI_9yz2FuMODDDoOvd5opgfFd7ofknQCV7vJrAHRezqLU7xqO74B1ieWPKI515-A-lGUC18ilbc0g9SVZ39yY1s7-E4j3ZSBIAZXqysGHsmHc0hUsykESkRGrNv67BMLuQIdmG1y0MIt-3zNM30-vfDQf8sWYciryrr5eO9VQDxMjjXLq60Shzk4MUKFVobX9EKUDRYjpKsA_gIUYgfNRkYZwOeyy5G-pewC2K-R3PetnMCymLnXBh5dpqYOnaT97RBiS5aRivU3CJlmyebBaR18a6dkQyrnODjO79ZFRgHYUbK43_jBYEPZYYWpmCclNEPqwA0j628bVxsaISoqkszXuGfRexRRngYDgjFvnp46tjxX4/p.png',
    title: 'Provider Center',
    desc: 'Hot NFT Marketplace Data'
  },
  {
    icon: 'https://uc807a33afdfe9d5336a3facb63e.previews.dropboxusercontent.com/p/thumb/ABZ28YjzOu4Md3BmX0W3gUA7FSUFvloyzd-kW3uD0PfzgDJPA8AQytHHP_HA7YbdHBQU1VwEhVvrRma-43PJKhCzqf7bJvrPQW0ybxc_tMb68vBbIT7CeoEQDwOlyTV40npUmCRFoFHZGpbfRiie7CigDeZmKQK3SMCMxpGABk0A2Sy7i4QykUNz8HcabcInFOb9-wf5TacxFBU75-wr0MZZxcK1m7m9z42p-VBj7-auS3T773kW17CTt8faDZ3q9ss55C5pAyIaC9fgCb_FZJ1cAYPUVgTgkgQhbn1C29LEJy0-K14pOOmUX1MTb2mQdsMDj72mHMDSR7SLaiD5jPX-TYK1sgvvZxo-Q_Xi1eW7n737r0tTbANVKIhj7YiQdA4/p.png',
    title: 'Token Factory',
    desc: 'Deploy ERC20/BEP20 Tokens'
  },
  {
    icon: 'https://ucf44a999103e74bac4944aef9dc.previews.dropboxusercontent.com/p/thumb/ABafCU4HAyWAXy7DjgOK_PxWJNO2-eiuF_y18YQC57uU25jVzlgvaVCvQCi4lS1qR8B05qjzUZFjkSdr0UMv5tO--lGW4l64pCuWgFns8mRZXKkm9Z3Gxkx2DhsKZUAEvKCXSEysZrMAFUE5bsZPGpqxPW6M4FUUJUIXS_LAe6uKyrF02pbbuM1CZul5LQMcjbGRXfH9i8CNgntbTOGUVH1E9x8pP6DiU-0k-3Mv4QJwZednrgSWSzrDswn2RdI22X6vfIePiTTwy1z4zDQdb_vhXooLE96Vfb9fBPPqTswTWJXiGp4a1gi1SYSoqq-_1J2pRn92DDLUM4Sw1ZqmU_N9QR2hofnJrPrzxQTdmWdpiPJLIUDCQ1lxq_fmcfHzmRY/p.png',
    title: 'Governance',
    desc: 'DAO Voting and loung'
  },
  {
    icon: 'https://uc5b77bf9719896b683c72d6e93b.previews.dropboxusercontent.com/p/thumb/ABYvYYBA_HwRxL6KL2RmMb65ivR9SP_LiN10eF4rA8gZGkxJ44kBIwsGBJFnXIAtJ_Lvg66bw-ATdGaCssvqXUnwAgoWXgpAQI0f08QkIMGBOgKMgT_5iLYmZ36vCPAOVkt7mTCKdGBKSIFphg2mq3zX7hotqdxCIdkjkVoD5Gzt3-J4_xpDTcU5cku7mQK2noW9ZWVFg4MJ5x3FMPgq-bAFQZ2JQ4lC5hwUFg6RWBRpT7nyU4M5aNuD1S_Zy51nmivW8urDLKxw4hjyuLtbAAUFbdOv1t_tZ4m-lwL8Yex6KQj1adFacB0AWbIYQxy2ckl8U0qjAbBcVBXHlG2OvezMmdJ_Dy76bH08hvr4eL02xK9dZT7dwvce9rvitfHZAnk/p.png',
    title: 'Deployer Studio ',
    desc: 'Deploy your or Community NFT MArketplace '
  },
  {
    icon: 'https://uc0c179a3b07bfad104f4938946f.previews.dropboxusercontent.com/p/thumb/ABYhs7VV3g1HSyzdmg3ILOCtGYMIREjoTBrZm6OSh8kBM1j2nI46nZEH98-ylyWhAhqU4yxhkkXNzlJNFTat_7mIRNB86WohDcIlVqKGTlBDWPaEXl9w0pyoihcAsFzPnQMG21pGcb_syvgQ0ZlBsuZrNAalkdrwIPM83yRAsNNJxF0jwoZDuokfK3c-BuPCQDqFT4M0HIJT3bOfc7lZB7GNkdPqnWolngPKvEkn_mdLzljyOVgG-i8PEwQ0Wvq59lkCEk5Z44MjxZARF7PBau3C6el0CMrS72w6BTogmBfBhp6tnL5sElSWxn0q3q4he4rwwif_8JFHxw5StmlUb1UjnaN7aMEDcB8QriA7cNQWmsXsPRnY1gi_dqeVv1dffdI/p.png',
    title: 'Xircus Skins',
    desc: ' Buy and Sell Marketplace Skins'
  },
  {
    icon: 'https://uc0f7f4faf68a3683b9cbe45d904.previews.dropboxusercontent.com/p/thumb/ABajzxLjKodCFiXW7B3ZHiq9bW0Z-RupGUd6rBzq9wi0uCZNpyLtYVnDHpYRxJWw2wERHoP6_G8SLPgqCSYDIT6_zx1v3Fo2VDcG_A963ObCcQ1iVoNbdaPm_75RWRuctAUIVVgnnQZ7B6r5rB2Jdb3Hx3RJDvhSfZJZ0fAjtQnoihbrUcEnVUqoCpcF_PXcUTxf15cDGhKMJSDyAA6u8i3jeNaegJrN2JjLRPllnCqaaveoaydu_68zfSZaxn0e1_myzSnj6eA_DF2ash_3F4i5JFlAjwiwKtUYGBM30EG8ZZUnQgrq13K-lvkUws-R_I12uGZ7PbiMW36-QavznggtKOTDixb4M081NEqhnXUemU5n96Q0z52W9FRvQDWCWx4/p.png',
    title: 'Stake And Farm',
    desc: 'Earn Staking Rewards'
  },
  {
    icon: 'https://uc42a86b926cce03cde198634fd8.previews.dropboxusercontent.com/p/thumb/ABYwEu4nKG3GZ1Ek2h0-HMc70MhTbhEIMbvmzAM-7ivCMm9laBrSdP-8lG2-03k1s2aTROJ4YdmY_vwhz_KDTKv7_KOSkLnJrHCoQA-jtbw-Pg5SINVkZPIemo4_Iog1IB65F76Mr2Xtp3ZJzm2JSWRS5IVaMb2Kunablec1nNdfr5vcu3OaALvDWmw8hQ2jtRs0YlHQmHCO45c0azOgE0fe1uANb_a-t_FQvqPEqEfOt9qDyz4JG2UkQJQtKZpF9ExrfqYgCT4VOM07TfS8PQrsbkpSMA4kOKmF9mBUpfbJMDEoX7-zkEulRBQ0qcqNSf4pGYPc51fCVq_8XuEa9Urp9xVlXqI9dnJcEHKU_lwTYvsLi3QxqVAPsYfn8t0dhAo/p.png',
    title: 'NFT Meta Uploader',
    desc: 'Upload NFT META to IPFS'
  },
  {
    icon: 'https://uc9d415d449dc956245b32118077.previews.dropboxusercontent.com/p/thumb/ABZM9mR1Qr90pMTn1lMyzWRxdVTyHIORn66aYBxGrB2VY6LGJQZrEAnEvig9RcOTN5-Un5i7a3J7bOAyZTM7uye1sCcsWSV_7tIy3D8dJE8eSPwWkRTxqPo174L_6zqd0lrhZSDKyYr4aFOChja7i-p_LkyUptUFHQhJkiPYQGPhl2JMsB-hkyyTH-T7SdLqrTtqNbvEbjLqinQZZMsL6F5xuoo9tb6b_r53WOjBjFbSFVs_PT4yxFJ22ZlnPdl-Q-u81FffLzjjTloHdVBkztsQVHk0FSrabN_nq0wESbk6zbyYv4IpI9t1wZGVQc197cb-9n3eUympQ1Wr8XvGrSda4Z2fdghHNWs8iYhD52P4m2GemvZRIRMKscBc4smRWK4/p.png',
    title: 'Leaderboard',
    desc: 'View Marketplace Performance'
  },

]
const ProductCard = ({ icon, title, desc }) => (
  <Box {...productCardStyle.boxCardStyle}>
    <Image src={icon} {...productCardStyle.imageIcon} />
    <Heading {...productCardStyle.cardHeading}>{title}</Heading>
    <Text {...productCardStyle.cardText}>{desc}</Text>
  </Box>
)

export default function Products({translate}) {
  return (
    <Box as="section">
      <Container {...containerStyle.conXl}  centerContent>
        <Box w="100%">
          <Heading {...typoStyle.productHeading}>{translate('Products')}</Heading>
        </Box>
        <Box>
          <Grid {...gridStyle.productGridStyle}>
            {(ProductData || []).map((data, key) => (<ProductCard{...data} />))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}