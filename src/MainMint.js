import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import BNCKeyNFT from './BNCKeyNFT.json';
import './MainMint.css';
import bncLARGE from './images/bncLARGE.jpg';

const BNCKeyNFTAddress = "0xf08De74d5500C83B409e7AcA3434a259Fc2555e1";

const MainMint = ( { accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint(){
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                BNCKeyNFTAddress,
                BNCKeyNFT.abi,
                signer
            );
            try {
                const response = await contract.mint(mintAmount);
                console.log('response: ', response)
            }
            catch(err){
                console.log("error", err)
            }
        }
    }

    const handleDecrement = () => {
        if(mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if(mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <div>
            <img src={bncLARGE} />
            <h1>BNC-KEY</h1>
            <p>Very Happy</p>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <input type="number" value={mintAmount}/>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button onClick={handleMint}>Mint Now</button>
                </div>
            ) : (
                <p>You are not connected yet!</p>
            )}
        </div>
    );
};

export default MainMint;