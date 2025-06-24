import MeetingTypeList from '@/components/ui/MeetingTypeList';
import React from 'react';

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString('en-IN', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
  timeZone: 'Asia/Kolkata' // Force IST
  });

  const date = new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'full',
    timeZone: 'Asia/Kolkata' // Ensure IST for date as well
  }).format(now);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="relative h-[300px] w-full rounded-[20px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover z-[-1]"
        >
          <source src="/images/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional foreground content here */}
        <div className = "flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2   style={{
                  background: "rgba(255, 255, 255, 0.25)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",  
                  marginTop: "2px", 
                  marginBottom: "18px",      
          }} className = "max-w-[270px] text-indigo-100 text-center text-base font-normal p-5 rounded text-10px ">
            Upcoming Meeting Soon
          </h2>
          <div className='flex flex-col gap-2'>
            <h1 className = 'text-4xl font-extrabold lg:text-7xl'>
              {time}
            </h1>
            <p className = 'text-lg font-medium text-cyan-100' >{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList/>
    </section>
  );
};

export default Home;
