import React, { useState, useEffect } from "react";
//import { ethers } from "ethers";
import { Navbar } from "./components/Navbar";
import Table from "./components/Table";

const App = () => {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get Metamask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  return (
    <div>
      <Navbar currentAccount={currentAccount} connectWallet={connectWallet}/>
      <Table />
    </div>
  );
};

export default App;
