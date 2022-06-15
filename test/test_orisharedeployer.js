const DeVestFactory = artifacts.require("DeVestFactory");
// const Child = artifacts.require("Child");
// const MetaCoin = artifacts.require("MetaCoin");
const performance = require("perf_hooks").performance;
const fs = require('fs');
const Web3 = require("web3");

const NUMBER_OF_CHILDREN = 6;
let indexes, deployer;

contract("DeVestFactory", function (/* accounts */) {
    before(async () => {
        console.log("Before executing...")
        indexes = [...Array(NUMBER_OF_CHILDREN).keys()]

        // const web3 = new Web3();
        // address = await web3.eth.accounts.create();
        // console.log(address)
        // console.log(address)
    })


    describe.only("deploy contract", async () => {

        let deployer;
        beforeEach(async () => {
            deployer = await DeVestFactory.deployed();
            console.log("FoundationFactory DEPLOYED")
        });

        it("should create new children", async () => {
            console.log("Creating new children!");

            const gasUsed = [];

            for(let one of indexes){
                console.log(one)
                const args = [
                    '0xECF5A576A949aEE5915Afb60E0e62D09825Cd61B',
                    "ERC20 Token",
                    "TKO",
                    // 5,
                    // 750000000000
                ]

                const res = await deployer.issue(args[0], args[1], args[2]);

                console.log(`tx: ${JSON.stringify(res)}`)
                // console.log(`Gas used: ${res.receipt.gasUsed}`)
                ///
                // gasUsed.push(res.receipt.gasUsed);

                gasUsed.push(res.receipt.gasUsed);
            }

            const result1 = await deployer.fetch.call();

            console.log("result1")
            console.log(JSON.stringify(result1))

            console.log("gasUsed")
            console.log(gasUsed)
        });


    });
});
