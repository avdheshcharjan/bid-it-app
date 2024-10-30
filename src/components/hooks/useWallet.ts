// hooks/useWallet.ts
'use client'

import { useAccount, useBalance } from 'wagmi'
import { useNetwork } from 'wagmi/hooks'

    
export const useWallet = () => {
  const { address, isConnected } = useAccount()
  const { chain } = useNetwork()
  const { data: balance } = useBalance({
    address,
  })

  return {
    address,
    isConnected,
    chain,
    balance,
  }
}

