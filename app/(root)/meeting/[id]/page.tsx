// "use client";
// import React , { useState }from 'react'
// import { useUser } from '@clerk/nextjs';
// import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
// import MeetingSetUp from '@/components/ui/MeetingSetUp';
// import MeetingRoom from '@/components/ui/MeetingRoom';
// import { useGetCallById } from '@/hooks/useGetCallById';
// import { Loader } from 'lucide-react';
// import { useParams } from 'next/navigation';
// // export default Meeting;
// const Meeting = ({params:{id}}: {params: {id: string}}) => {
//   // Simulate fetching meeting data
//   const {isLoaded, user} = useUser();
//   const [isSetUpComplete , setIsSetUpComplete]  = useState(false);
//   const {call , isCallLoading } = useGetCallById(id);
//   if(!isLoaded || isCallLoading) return <Loader/>

//   return (
//      <main className='h-screen w-full '>
//       <StreamCall call= {call}>
//         <StreamTheme>
//           {!isSetUpComplete?(
//             <MeetingSetUp setIsSetUpComplete={setIsSetUpComplete}/>
//           ):(
//             <MeetingRoom/>
//           )}
//         </StreamTheme>
//       </StreamCall>
//      </main>
//   );
// }

// export default Meeting;


'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation';
import { Loader } from 'lucide-react';

import { useGetCallById } from '@/hooks/useGetCallById';
import {Alert} from '@/components/ui/alert';
import MeetingSetUp from '@/components/ui/MeetingSetUp';
// If the file exists with a different name or casing, update the import accordingly, for example:
import MeetingRoom from '@/components/ui/MeetingRoom';
// Or, if the file does not exist, create 'MeetingRoom.tsx' in the appropriate directory.

const MeetingPage = () => {
  const { id } = useParams();
  const { isLoaded, user } = useUser();
  const { call, isCallLoading } = useGetCallById(id as string);
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  if (!isLoaded || isCallLoading) return <Loader />;

  if (!call) return (
    <p className="text-center text-3xl font-bold text-white">
      Call Not Found
    </p>
  );

  // get more info about custom call type:  https://getstream.io/video/docs/react/guides/configuring-call-types/
  const notAllowed = call.type === 'invited' && (!user || !call.state.members.find((m) => m.user.id === user.id));

  if (notAllowed) return <Alert title="You are not allowed to join this meeting" />;

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>

        {!isSetupComplete ? (
          <MeetingSetUp setIsSetUpComplete={setIsSetupComplete} />
        ) : (
          <MeetingRoom />
        )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default MeetingPage;