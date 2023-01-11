import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";

import ConnectWallet from "./ConnectWallet";
import CollectArt from "./CollectArt";

const rootElement = document.getElementById("connect-wallet");
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <ConnectWallet />
  </StrictMode>
);

const newRootElement = document.getElementById("buy-main-nft");
const newRoot = createRoot(newRootElement)

newRoot.render(
  <StrictMode>
    <CollectArt />
  </StrictMode>
);

