import { SquareGridFaded } from '@/components/ui/SquareBg'
import { SignIn } from '@clerk/nextjs'
import React from 'react'

function page() {
  return (
    <main className="h-screen w-screen flex-center">
      <SquareGridFaded faded={true}>
        <SignIn routing="hash" />
      </SquareGridFaded>
    </main>
  )
}

export default page