const bre = require("@nomiclabs/buidler");

async function main() {
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Buidler!");

  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();

  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(999999);

  await greeter.deployed();
  await counter.deployed();
  await myToken.deployed();
}

module.exports = main;
