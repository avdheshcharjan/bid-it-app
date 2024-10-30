import React from 'react'
import { Header } from './Header'
import { ActiveAuctions } from './ActiveAuctions'
import { CreateAuction } from './CreateAuction'
import { WalletButton } from './WalletButton'

export const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              DutchX Auctions
            </h1>
            <p className="text-xl text-gray-400">
              The Next Generation of Dutch Auctions on Web3
            </p>
          </div>
          <div className="flex justify-center">
            <WalletButton />
          </div>
        </section>
        <ActiveAuctions />
      </main>
    </div>
  )
}