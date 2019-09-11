// Setup the SDK & retrieve all existing tokens
import { TezosNFT, Config } from "@stove-labs/tezos-nft-sdk";

const config: Config = {
    serverAddress: "http://alphanet-node.tzscan.io",
    contractAddress: "KT1HCbJDVV3TzzuFuHCagwy8h6H78KEYERgL"
};

const nft = new TezosNFT(config);

nft.getAllTokens()
    .then(tokens => console.log("token1s", tokens));
