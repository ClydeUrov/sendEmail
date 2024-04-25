'use client'

import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { compileWelcomeTemplate, sendMail } from "@/lib/mail";
import send from "@/helpers/api";

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Home() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [source, setSource] = useState('');
  
  const sendEmail = (e: any) => {
    e.preventDefault();
    send({email, firstName, lastName, message, source})
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <form onSubmit={sendEmail} className='flex flex-col items-start justify-start gap-6 w-full h-full'>
        <Input label='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <div className='flex gap-8 w-full'>
          <Input label='First name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <Input label='Last name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className='w-full'>
          <Label htmlFor="message">Your message</Label>
          <Textarea id="message" placeholder="Type your message here" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <Input label='How did you hear about us?' value={source} onChange={(e) => setSource(e.target.value)} />
        <Button type="submit" className="bg-green-700 hover:bg-green-500 text-white text-lg px-6 py-2 rounded-md">Submit</Button>
      </form>
    </main>
  );
}
