const DeVestFactory  = artifacts.require("DeVestFactory");
// const ERC20Token  = artifacts.require("ERC20Token");

module.exports = function(deployer) {
  deployer.deploy(DeVestFactory)
  // deployer.deploy(ERC20Token, '0xE0726569A43F3FcE8A3127e33e4050Ad012632A2',
  //     "ERC20 Token",
  //     "TKO2",
  //     5,
  //     750000000000)
};
