import '../styles/globals.css'
import Link from 'next/link'
import { motion } from "framer-motion"
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
import ConnectButton from './components/ConnectButton'

const supportedChainsIds = [1, 80001, 4]
const connectors = {
  injected: {

  }
}

function Marketplace({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider supportedChainsIds= {supportedChainsIds}
    connectors= {connectors}>
    <div className="min-h-screen gradient-bg-welcome ">
      <nav className="border-b p-6">
      <Link href="/">
        <a>
        <p className="text-4xl font-bold md:flex-[0.5] flex-initial justify-center items-center text-gradient">
          N Market</p>
        </a>
      </Link>

        <div className="flex justify-evenly mt-4 text-white">
          <motion.div
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 4px gray"
            }}
          >
          <Link href="/">
            <a className="mr-6">
              Home
            </a>
          </Link>
        </motion.div>


        <motion.div
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 4px gray"
            }}
          >
          <Link href="/create-item">
            <a className="mr-6 ">
              Sell Digital Asset
            </a>
          </Link>
        </motion.div>

        <motion.div
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 4px gray"
            }}
          >
          <Link href="/my-assets">
            <a className="mr-6 ">
              My Digital Assets
            </a>
          </Link>
        </motion.div>

        <motion.div
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 4px gray"
            }}
          >
          <Link href="/creator-dashboard">
            <a className="mr-6 ">
              Creator Dashboard
            </a>
          </Link>
        </motion.div>

        <ConnectButton />
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
    </ThirdwebWeb3Provider>

  )
}

export default Marketplace