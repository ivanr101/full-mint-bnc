const hre = require("hardhat");

async function main() {
  const BNCKeyNFT = await hre.ethers.getContractFactory("BNCKeyNFT");
  const bnckeyNFT = await BNCKeyNFT.deploy();

  await bnckeyNFT.deployed();

  console.log("BNCKeyNFT deployed to:", bnckeyNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
