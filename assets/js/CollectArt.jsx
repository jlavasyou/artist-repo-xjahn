import { utils } from 'ethers'
import { goerli, configureChains, usePrepareContractWrite, createClient, WagmiConfig, useContractWrite, useAccount } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

//TODO: Templatize apiKey, address, price
const { chains, provider } = configureChains(
  [goerli],
  [infuraProvider({ apiKey: 'eb3d37f720ee4952a4b2e5c541436772' })]
);


const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains })
  ],
  provider
})

export default function App() {
  return (
    <WagmiConfig client={client}>
      <CollectArt />
    </WagmiConfig>
  )
}

function CollectArt() {
  const { address } = useAccount()

  const { config, error } = usePrepareContractWrite({
    address: '0xB7Fb42699Ed5f99D0f1A426897277fa1E043EAbF',
    abi: [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "tokenURI",
            "type": "string"
          }
        ],
        "name": "mintNFT",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
    ],
    functionName: 'mintNFT',
    args: [address, 13],
    overrides: {
      value: utils.parseUnits("10", "wei")
    }
  })
  const { write } = useContractWrite(config)

  return (
    <>
      <button disabled={!write} onClick={() => write?.()}>
        Mint
      </button>
      {error && (
        <div>An error occurred preparing the transaction: {error.message}</div>
      )}
    </>
  )
}