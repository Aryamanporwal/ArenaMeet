"use client";
import React from 'react';
import Image from 'next/image';
const MeetingTypeList = () => {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <div
        className="px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer"
        onClick={() => {}}
        style={{
          backgroundColor: "#3B82F6",
        }}
      >
        <div
          className="flex-center size-12 rounded-[10px]"
          style={{
            background: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        > <Image src = '/icons/add-meeting.svg' alt = "add-meeting" width  = {27} height = {27} /></div>
          <div className = "flex flex-col gap-2">
            <h1 className = "text-2xl font-bold">New Meeting</h1>
            <p className = "text-lg font-normal">Start an instant meeting</p>
          </div>
      </div>
    </section>
  );
};

export default MeetingTypeList;
