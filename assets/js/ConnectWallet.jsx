import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { goerli, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { ConnectButton } from "@rainbow-me/rainbowkit";

//TODO: Templatize apiKey
const { chains, provider } = configureChains(
  [goerli],
  [infuraProvider({ apiKey: 'eb3d37f720ee4952a4b2e5c541436772' })]
);


const { connectors } = getDefaultWallets({
  appName: "My Artistic App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

export default function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ConnectButton />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

