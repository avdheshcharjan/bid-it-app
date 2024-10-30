import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, sepolia } from 'wagmi/chains'
import { http } from 'wagmi'
import { createConfig } from 'wagmi'

export const config = getDefaultConfig({
  appName: 'DutchX Auctions',
  projectId: 'YOUR_WALLET_CONNECT_PROJECT_ID', // Get from https://cloud.walletconnect.com
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})