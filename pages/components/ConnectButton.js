
import { useWeb3 } from '@3rdweb/hooks';
import { useEffect } from 'react';
import { AiFillPlayCircle, } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { shortenAddress } from '../utils/shortenAddress';
import { useRouter } from 'next/router'

const ConnectButton = () => {
    const router = useRouter()
    const {address, connectWallet} = useWeb3()

    useEffect(() =>{
      if(address) router.push("/")
    }, [address])

  return (
      <div>
   { address ?
   
   <div >
   <p className="flex flex-row justify-center items-center text-gradient ">
   <CgProfile className=" mr-2 text-gradient"/>
   {shortenAddress(address)}
   </p>
   </div>
    : (
      <button
        type="button"
        onClick={(() => connectWallet("injected"))}
        className=" connectButton rounded-full  "
      >
        <p className=" flex flex-row justify-center items-center text-white   ">
        <AiFillPlayCircle className="text-white mr-2" />
          Connect Wallet
        </p>
      </button>)
      }
  </div>
    )
 
};

export default ConnectButton;
