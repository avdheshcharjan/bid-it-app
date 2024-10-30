
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DutchX - Web3 Dutch Auctions',
  description: 'Decentralized Dutch Auction Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0F172A] text-gray-100`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

// components/WalletButton.tsx
'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'

export const WalletButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading'
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated')

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Connect Wallet
                  </button>
                )
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-200"
                  >
                    Wrong network
                  </button>
                )
              }

              return (
                <div className="flex items-center gap-4">
                  <button
                    onClick={openChainModal}
                    className="bg-[#1E293B] hover:bg-[#2D3B4E] text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 flex items-center gap-2"
                  >
                    {chain.hasIcon && (
                      <div className="w-6 h-6">
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            className="w-6 h-6"
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button
                    onClick={openAccountModal}
                    className="bg-[#1E293B] hover:bg-[#2D3B4E] text-white font-bold py-2 px-4 rounded-lg transition-all duration-200"
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}
