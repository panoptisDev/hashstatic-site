import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Content from '../components/Content'
import MarketStats from '../components/MarketStats'
import RunningBanner from '../components/RunningBanner'
import Footer from '../components/Footer'
import { Box, useMediaQuery } from '@chakra-ui/react'
import MobileView from '../components/mobileView'
import IpadView from '../components/IpadView'
const Home: NextPage = () => {
  const [isLargerThan1700] = useMediaQuery('(min-width: 1700px)')
  const [isLessThan1210] = useMediaQuery('(max-width: 1210px)')
  const [isLessThan500] = useMediaQuery('(max-width: 500px)')
  const [isLessThan980] = useMediaQuery('(max-width: 980px)')
  return (


    <Box 
    background={isLessThan500 ?"linear-gradient(to bottom,#7331ea47 0%,#000 55%),radial-gradient(circle at top right, #7331ea33 95%, transparent 100%)":"linear-gradient(to bottom left,rgba(115, 49, 234, 0.28) 0%,#000 55%, #7331ea33 89%),radial-gradient(circle at top right, #7331ea33 55%, transparent 100%)"}
      height="100vh"
      overflowX="hidden"
      overflowY="scroll"
      backgroundRepeat="no-repeat"
    >
      {isLessThan500 ? <MobileView /> : 
      isLessThan980  ?<IpadView/>:      <Box>
        <Banner />
        <Navbar />
        <Box ml={isLargerThan1700 ? "4rem" : "0rem"}>
          <Content />
          <MarketStats />

        </Box>
        <RunningBanner />
        {!isLessThan1210 && <Footer />}
      </Box>}

    </Box>
  )
}

export default Home
