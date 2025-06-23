"use client";
import MeetingModal from '@/components/ui/MeetingModal';
import { useState } from 'react';
import HomeCard from './HomeCard';
import { useRouter } from 'next/navigation';
const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState , setMeetingState] = useState<'isScheduleMeeting'|'isJoiningMeeting'|'isInstantMeeting'|undefined>()
  const createMeeting = ( )=>{
      
  }

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
        style={{ backgroundColor: '	#1D4ED8' }} />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        handleClick={() => setMeetingState('isJoiningMeeting')}
        style={{backgroundColor: '#1E40AF'}}/>

        <MeetingModal
          isOpen = {meetingState ==='isInstantMeeting'}
          onClose = {() => setMeetingState(undefined)}
          title = "Start Instant Meeting"
          className = "text-center"
          buttonText = "Start Meeting"
          handleClick = {createMeeting}
          
        />
    </section>
  );
};

export default MeetingTypeList;
