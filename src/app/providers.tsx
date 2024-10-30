'use client'

import * as React from 'react'
import {
  RainbowKitProvider,
  darkTheme,
  cssStringFromTheme
} from '@rainbow-me/rainbowkit'
import { WagmiConfig } from 'wagmi'
import { config } from '@/lib/wagmi'
import '@rainbow-me/rainbowkit/styles.css'

const theme = darkTheme({
  accentColor: '#8B5CF6', // purple-500
  accentColorForeground: 'white',
  borderRadius: 'large',
  fontStack: 'system',
  overlayBlur: 'small',
})

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider theme={theme} chains={chains}>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
