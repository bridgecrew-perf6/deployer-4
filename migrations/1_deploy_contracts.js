const Migrations = artifacts.require("Migrations");
const DevestFactory  = artifacts.require("DevestFactory");
const ERC20PresetFixedSupply = artifacts.require("ERC20PresetFixedSupply");

module.exports = function(deployer) {
  deployer.deploy(Migrations).then(success => {
    deployer.deploy(DevestFactory)
        .then(() => DevestFactory.deployed())
        .then(_instance => deployer.deploy(ERC20PresetFixedSupply, "ERC20 Token", "TKO", 1000000000000, "0xECF5A576A949aEE5915Afb60E0e62D09825Cd61B"))
  })
};
