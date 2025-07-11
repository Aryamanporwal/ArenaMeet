"use client";
import MeetingModal from '@/components/ui/MeetingModal';
import { useState } from 'react';
import HomeCard from './HomeCard';
import { useRouter } from 'next/navigation';
import { useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/nextjs';
import { Call } from '@stream-io/video-react-sdk';
import { toast } from "sonner";
import { Textarea } from './textarea';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "@/components/ui/input"



const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState , setMeetingState] = useState<'isScheduleMeeting'|'isJoiningMeeting'|'isInstantMeeting'|undefined>()
  const { user} = useUser();
  const client = useStreamVideoClient();
  const [values, setValues] = useState({
    dateTime : new Date(),
    description : '',
    link : ''
  })
  const [callDetails , setCallDetails] = useState<Call>();


  const createMeeting = async ( )=>{
      if(!client || !user) return ;

      try{
        if(!values.dateTime){
          toast("Please select a date and time")
          return ;
        }
        const id = crypto.randomUUID();
        const call = client.call('default', id);

        if(!call) throw new Error('Failed to create call');
        const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
        const description = values.description || 'Instant Meeting';
        
        await call.getOrCreate({
          data: {
            starts_at : startsAt,
            custom : {
              description
            }
          }
        })

        setCallDetails(call);

        if(!values.description){
          router.push(`/meeting/${call.id}`)
        }
        toast("Meeting Created ⏱️");
        
      } catch(error){
        console.log(error)
        toast("Failed to Create Meeting ❌");
      }
  }
    const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState('isInstantMeeting')}
        style={{backgroundColor: '#3B82F6'}}
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan a meeting"
        handleClick={() => setMeetingState('isScheduleMeeting')}
        style={{backgroundColor: '	#2563EB'}}
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Check out your recordings"
        handleClick={() => router.push('/recordings')}
        style={{ backgroundColor: '	#1D4ED8' }} 
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        handleClick={() => setMeetingState('isJoiningMeeting')}
        style={{backgroundColor: '#1E40AF'}}
      />


      {!callDetails ?(
          <MeetingModal
          isOpen = {meetingState ==='isScheduleMeeting'}
          onClose = {() => setMeetingState(undefined)}
          title = "Create Meeting"
          handleClick = {createMeeting}
        > 
          <div className = "flex flex-col gap-2.5">
            <label className ="text-base text-normal leading-[22.4px] text-cyan-200">
              Add a Description
            </label>
            <Textarea className = "border-none bg-gray-700 focus-visible:ring-0 focus-visible:ring-offset-0"
            onChange = {(e)=>
              setValues({...values, description:e.target.value})
            }
            />
          </div>
          <div className = "flex w-full flex-col gap2.5">
            <label className ="text-base text-normal leading-[22.4px] text-cyan-200">
              Select Date and Time
            </label>
            <ReactDatePicker
              selected = {values.dateTime}
              onChange = {(date)=> setValues({...values, dateTime: date!})}
              showTimeSelect
              timeFormat = "HH:mm"
              timeIntervals = {15}
              timeCaption = "time"
              dateFormat= "MMMM d, yyyy h:mm aa"
              className = "w-full rounded bg-gray-950 p-2 focus:outline-none"
            />
          </div>
          </MeetingModal>
        ):(
          <MeetingModal
          isOpen = {meetingState ==='isScheduleMeeting'}
          onClose = {() => setMeetingState(undefined)}
          title = "Meeting Created"
          className = "text-center"
          handleClick = {()=>{
            navigator.clipboard.writeText(meetingLink);
            toast("Link Copied")
          }}
          image = "/icons/checked.svg"
          buttonIcon = "/icons/copy.svg"
          buttonText= "Copy Meeting Link"
        />
      )}
      <MeetingModal
        isOpen={meetingState === 'isJoiningMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Type the link here"
        className="text-center"
        buttonText="Join Meeting"
        handleClick={() => router.push(values.link)}
      >
        
      </MeetingModal>

        <MeetingModal
          isOpen = {meetingState ==='isInstantMeeting'}
          onClose = {() => setMeetingState(undefined)}
          title = "Start Instant Meeting"
          className = "text-center"
          buttonText = "Start Meeting"
          handleClick = {createMeeting}
          />

        <MeetingModal
          isOpen = {meetingState ==='isJoiningMeeting'}
          onClose = {() => setMeetingState(undefined)}
          title = "Paste the link here..."
          className = "text-center"
          buttonText = "Join Meeting"
          handleClick = {()=>router.push(values.link)}
          >

            <Input
            placeholder="Meeting link"
            onChange={(e) => setValues({ ...values, link: e.target.value })}
            className="border-none bg-gray-600 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
       </MeetingModal>


      </section>
  );
};

export default MeetingTypeList;
