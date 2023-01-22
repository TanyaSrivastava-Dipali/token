
const { ethers } = require("hardhat");

async function main() {

  const initialSupply = ethers.utils.parseEther('10000')
  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy(initialSupply);
  await token.deployed();

  console.log("Token deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});