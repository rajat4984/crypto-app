import axios from "axios";
import React, { useEffect } from "react";
import image from "../../bitcoin-btc-logo.png";

function CoinInfo() {
  const getCoinInfo = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`;
    const { data } = await axios.get(url);
    console.log(data);
  };
  useEffect(() => {
    getCoinInfo();
  }, []);

  return (
    <div>
      <div className="coin-info">
        {/* <div className="coin-info-img">
          <img src={image} alt="" />
        </div> */}
        <div className="coin-desc">
          <p className="description">
            "Bitcoin is the first successful internet money based on
            peer-to-peer technology; whereby no central bank or authority is
            involved in the transaction and production of the Bitcoin currency.
            It was created by an anonymous individual/group under the name,
            Satoshi Nakamoto. The source code is available publicly as an open
            source project, anybody can look at it and be part of the
            developmental process. Bitcoin is changing the way we see money as
            we speak. The idea was to produce a means of exchange, independent
            of any central authority, that could be transferred electronically
            in a secure, verifiable and immutable way. It is a decentralized
            peer-to-peer internet currency making mobile payment easy, very low
            transaction fees, protects your identity, and it works anywhere all
            the time with no central authority and banks. Bitcoin is designed to
            have only 21 million BTC ever created, thus making it a deflationary
            currency. Bitcoin uses the{" "}
            <a href="https://www.coingecko.com/en?hashing_algorithm=SHA-256">
              SHA-256
            </a>{" "}
            hashing algorithm with an average transaction confirmation time of
            10 minutes. Miners today are mining Bitcoin using ASIC chip
            dedicated to only mining Bitcoin, and the hash rate has shot up to
            peta hashes. Being the first successful online cryptography
            currency, Bitcoin has inspired other alternative currencies such as{" "}
            <a href="https://www.coingecko.com/en/coins/litecoin">Litecoin</a>,{" "}
            <a href="https://www.coingecko.com/en/coins/peercoin">Peercoin</a>,{" "}
            <a href="https://www.coingecko.com/en/coins/primecoin">Primecoin</a>
            , and so on. The cryptocurrency then took off with the innovation of
            the turing-complete smart contract by{" "}
            <a href="https://www.coingecko.com/en/coins/ethereum">Ethereum</a>{" "}
            which led to the development of other amazing projects such as{" "}
            <a href="https://www.coingecko.com/en/coins/eos">EOS</a>,{" "}
            <a href="https://www.coingecko.com/en/coins/tron">Tron</a>, and even
            crypto-collectibles such as{" "}
            <a href="https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos">
              CryptoKitties
            </a>
            ."
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoinInfo;
