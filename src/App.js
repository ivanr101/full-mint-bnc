import { useState } from 'react';
import './App.css';
// import injected from './components/wallet/connector';
// import { useWeb3React } from '@web3-react/core';
import NavBar from './NavBar';
import MainMint from './MainMint';

function App() {
  const [accounts, setAccounts] = useState([]);
	// const { active, account, library, connector, activate, deactivate } = useWeb3React()

	// async function connect() {
	// 	try {
	// 		await activate(injected);
	// 	} catch (ex) {
	// 		console.log(ex);
	// 	}
	// }

	return (
		<div className="App">
      <NavBar accounts={accounts} setAccounts={setAccounts}/>
      <MainMint accounts={accounts} setAccounts={setAccounts}/>
		</div>

	);
}

export default App;
