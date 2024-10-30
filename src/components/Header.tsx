import React from 'react'
import { WalletButton } from './WalletButton'

export const Header = () => {
  return (
    <header className="border-b border-gray-800 bg-[#1E293B]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              DutchX
            </h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Explore
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Create
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    My Auctions
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <WalletButton />
        </div>
      </div>
    </header>
  )
}


