'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { DarkMode } from './DarkMode'
import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react';
import {Session} from "next-auth";
import {signIn,signOut} from "next-auth/react";
  import Image from 'next/image'

const NavBar = ({session}:{session:Session|null}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="flex justify-between items-center mx-16 my-3 py-6">
    <Link href={'/'}>
    <h1 className="text-3xl font-semibold">MarketPlace</h1>
    </Link>

    <div className='flex items-center space-x-2'>
         {!session?.user && (
          <>
            <Button
              onClick={() => signIn('google')}
              className=" border-0 px-6 py-1">
              <LogIn />
            </Button>
          </>
        )}
        {session?.user && (
          <>
          <Link href={"/new"}>Post Ad</Link>
            <div className="relative flex items-center">
               <Button className="rounded-full p-0 overflow-hidden"
                onClick={() => setShowDropdown(prev => !prev)} 
                >
                 <Image
                  src={session.user.image as string} 
                  alt={'avatar'} 
                  width={36} height={36}
                   className={"rounded-full relative "+(showDropdown?'z-50':'')}
                /> 
              </Button>
              {showDropdown && (
                <>
                
                  <div
                     onClick={() => setShowDropdown(false)}
                    className=" fixed inset-0 z-40"></div>
                  <div className="absolute z-50 right-0 top-9 bg-white rounded-md w-24 border">
                    <Button
                      onClick={() => {
                         setShowDropdown(false);
                        // router.push('/my-ads');
                      }}
                      className="p-2 block text-center w-full" >My ads</Button>
                    <Button className="p-2 block w-full" onClick={() => signOut()}>Logout</Button>
                  </div>
                </>
              )}

            </div>
            
          </>
          
        )}
         <DarkMode />
   </div>
   </div>
  )
}

export default NavBar
