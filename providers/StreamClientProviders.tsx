"use client";
import { tokenProvider } from "@/actions/stream.actions";
import { useUser } from "@clerk/nextjs";
import {
  StreamVideoClient,
  StreamVideo,
} from "@stream-io/video-react-sdk";
import { Loader } from "lucide-react";
import React, { ReactNode } from "react";
import { useEffect } from "react";
const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

export const StreamVideoProvider= ({children}:{children:ReactNode}) => {
    const [videoClient, setVideoClient] = React.useState<StreamVideoClient | null>(null);
    const {user , isLoaded} = useUser();
    useEffect(() => {
        if(!isLoaded || !user) return;
        if(!apiKey) throw new Error("Stream API key is not defined")
        const client = new StreamVideoClient({apiKey, 
            user : {
                id: user?.id,
                name : user?.username || user?.id,
                image : user?.imageUrl,
            },
            tokenProvider,
            })
            setVideoClient(client);
        },[user, isLoaded]);

        if(!videoClient)  return <Loader/>
  return (
    <StreamVideo client={videoClient}>
      {children}
    </StreamVideo>
  );
};

export default StreamVideoProvider;