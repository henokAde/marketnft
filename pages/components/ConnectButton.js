import React from 'react';
import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'
import { AiFillPlayCircle } from "react-icons/ai";

const ConnectButton = () => {

    const connectWallet = async () =>{
        try {
            
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object");
        }
    }
  return (
        <button
              type="button"
            //   onClick={connectWallet}
              className=" connectButton rounded-full  "
            >
              <p className=" flex flex-row justify-center items-center text-white   ">
              <AiFillPlayCircle className="text-white mr-2" />
                Connect Wallet
              </p>
            </button>
        )
 
};

export default ConnectButton;
