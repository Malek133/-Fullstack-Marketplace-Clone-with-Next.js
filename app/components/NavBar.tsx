import Link from 'next/link'
import React from 'react'
import { DarkMode } from './DarkMode'
import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react';

const NavBar = () => {
  return (
    <main className="flex justify-between items-center mx-16 my-3 py-6">
    <Link href={'/'}>
    <h1 className="text-3xl font-semibold">MarketPlace</h1>
    </Link>

         <div className='flex items-center space-x-2'>
           <Button>Add New Ads</Button>
           <Button><LogIn /></Button>
           <DarkMode />
        </div>
   
   </main>
  )
}

export default NavBar
