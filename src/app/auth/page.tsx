'use client'
import Image from 'next/image';

import { ParticlesBackground } from '@/components/particles-background';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LoginForm } from './components/login-form';
import { RegisterForm } from './components/register-form';

export default function Login() {
  return (
    <div className='flex w-screen h-screen bg-background justify-center items-center'>
      <ParticlesBackground />
      <div className='z-50 absolute flex flex-col items-center gap-4 bg-foreground p-6 rounded-xl'>
        <div className="space-y-2">
          <Image src="/logo.svg" width={150} height={100} alt='Logo' />
          <h1 className='text-3xl font-bold text-white/75'>LugAniList</h1>
        </div>
        <Tabs defaultValue='login' className='w-96 space-y-4'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='login'>Login</TabsTrigger>
            <TabsTrigger value='register'>Register</TabsTrigger>
          </TabsList>
          <TabsContent value='login'>
            <LoginForm />
          </TabsContent>
          <TabsContent value='register'>
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}