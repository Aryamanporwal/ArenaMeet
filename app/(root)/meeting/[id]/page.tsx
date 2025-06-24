"use client";
import React , { useState }from 'react'
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import MeetingSetUp from '@/components/ui/MeetingSetUp';
import MeetingRoom from '@/components/ui/MeetingRoom';
import { useGetCallById } from '@/hooks/useGetCallById';
import { Loader } from 'lucide-react';
// export default Meeting;
const Meeting = ({params:{id}}: {params: {id: string}}) => {
  // Simulate fetching meeting data
  const {user, isLoaded} = useUser();
  const [isSetUpComplete , setIsSetUpComplete]  = useState(false);
  const {call , isCallLoading } = useGetCallById(id);
  if(!isLoaded || isCallLoading) return <Loader/>

  return (
     <main className='h-screen w-full '>
      <StreamCall call= {call}>
        <StreamTheme>
          {!isSetUpComplete?(
            <MeetingSetUp setIsSetUpComplete={setIsSetUpComplete}/>
          ):(
            <MeetingRoom/>
          )}
        </StreamTheme>
      </StreamCall>
     </main>
  );
}

export default Meeting;