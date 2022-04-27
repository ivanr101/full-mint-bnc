import React from 'react';
import bnctiny from './images/bnctiny.png';

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if(window.ethereum){
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
			<header className="App-header">
				<div className="bncMint"> <img src={bnctiny} /> Bot N Cop MINT</div>
				<div className="bncLinks">
                    {isConnected ? (
                        <button>Connected</button>
                    ) : (
                        <button onClick={connectAccount}>Connect to MetaMaaask </button>
                    )}
					{/* {active ? <span> Connected with <b>{account}</b> </span> : <span> Not Connected </span> } */}
					<a href="https://twitter.com/OfficialBotNCop"><i class="fa-brands fa-twitter"></i></a>
					<a href="https://www.instagram.com/officialbotncop/"><i className="fa fa-instagram"></i></a>
					<a href="https://discord.com/invite/BotNCop"> <i class="fa-brands fa-discord"></i> </a>
				</div>
			</header>
    )
};

export default NavBar;