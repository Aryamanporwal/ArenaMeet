'use client'
import { cn } from '@/lib/utils'
import { CallControls, CallingState, CallParticipantsList, CallStatsButton, PaginatedGridLayout, SpeakerLayout, useCallStateHooks } from '@stream-io/video-react-sdk'
import React, {useState} from 'react'
import {EndCallButton } from '@/components/ui/EndCallButton';
import Loader from './Loader';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LayoutList, Users } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right'

const MeetingRoom = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const isPersonalRoom = !!searchParams.get('personal')
    const [layout, setLayout ] = useState<CallLayoutType>('speaker-left')
    const [showParticipant , setShowParticipant] = useState(false);
    const {useCallCallingState} = useCallStateHooks();
    const callingState = useCallCallingState();

    if(callingState !== CallingState.JOINED) return <Loader/>

    const CallLayout = ()=>{
        switch(layout){
            case 'grid':
                return <PaginatedGridLayout/>
            case 'speaker-right':
                return <SpeakerLayout participantsBarPosition="left"/>
            default:
                return <SpeakerLayout participantsBarPosition="right"/>

        }
    }
  return (
    <section className = "relative h-screen w-full overflow-hidden pt-4 text-white">
        <div className = "relative flex size-full items-center justify-center">
            <div className = "flex size-full max-w-[1000px] items-center">
                <CallLayout/>
            </div>
            <div
            className={cn(
                "fixed top-0 right-0 h-screen w-full max-w-xs bg-[#1f2a35] z-50 shadow-xl transition-transform duration-300 ease-in-out overflow-y-auto rounded-l-lg border-l border-[#2c3a48]",
                showParticipant ? "translate-x-0" : "translate-x-full"
            )}
            >
            <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Participants</h2>
                <button
                    onClick={() => setShowParticipant(false)}
                    className="text-gray-400 hover:text-white transition"
                >
                    ✕
                </button>
                </div>

                {/* Optional Search Bar */}
                <div className="relative">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded-md bg-[#0e141b] text-sm text-white px-4 py-2 pl-10 outline-none placeholder-gray-400"
                />
                <span className="absolute left-3 top-2.5 text-white opacity-70">
                    🔍
                </span>
            </div>

                {/* Stream SDK Component */}
                <CallParticipantsList onClose={() => setShowParticipant(false)} />
            </div>
            </div>



            <div className = "fixed bottom-0 flex w-full items-center justify-center gap-5 flex-wrap">
                <CallControls  onLeave = {()=> router.push('/')}/>
                    <DropdownMenu >
                        <div className = "flex items-center">
                            <DropdownMenuTrigger className = "cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
                                <LayoutList size = {20} className = "text-white"/>
                            </DropdownMenuTrigger>
                        </div>
                    <DropdownMenuContent className = "bg-neutral-950 bg-gray-800 text-white">
                        {['Grid', 'Speaker-left' , 'Speaker-right'].map((item, index)=>(
                            <div key = {index}>
                                <DropdownMenuItem className = "cursor-pointer"
                                onClick={()=>{
                                    setLayout(item.toLowerCase() as CallLayoutType)
                                }}>
                                    {item}
                                </DropdownMenuItem>
                                <DropdownMenuSeparator 
                                className = "bg-neutral-950"/>
                            </div>
                        ))}
                    </DropdownMenuContent>
                    </DropdownMenu>
                    <CallStatsButton/>
                    <button onClick= {()=> setShowParticipant((prev)=>!prev)}>
                        <div className = " bg-[#19232d] px-4 py-2 hover:bg-[#4c535b] cursor-pointer rounded-2xl">
                            <Users size = {20} className = "text-white"/>
                        </div>
                    </button>
                    {!isPersonalRoom && <EndCallButton/>}
            </div>
        </div>
    </section>
  )
}

export default MeetingRoom
