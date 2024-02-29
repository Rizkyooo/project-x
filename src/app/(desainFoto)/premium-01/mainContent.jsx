import Link from "next/link";
import Countdown from "react-countdown";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { LoveStory } from "@/components/loveStory";
import { WeddingGift } from "@/components/weddingGift";
import Kehadiran from "@/components/kehadiran";
import Maps from "@/components/maps";
import { Typography, IconButton } from "@material-tailwind/react";
import { MusicalNoteIcon, PauseCircleIcon } from "@heroicons/react/24/solid";
import { rendererCountDown } from "@/app/Template/countDown";
import Covers from "@/app/Template/covers";
import Date from "@/app/Template/Date";
import Pasangan from "@/app/Template/Pasangan";
import LoveStories from "@/app/Template/loveStories";
import Music from "@/app/Template/music";
import Gift from "@/app/Template/gift";
import Footer from "@/app/Template/footer";
import BottomNav from "@/app/Template/bottomNav";
import Dalil from "@/app/Template/dalil";
export default function MainContent() {
  const [audio] = useState(new Audio("/images/beatuifulInWhite.mp3"));
  const [isPlaying, setIsPlaying] = useState(true);
  useEffect(() => {
    if(isPlaying) {

      audio.play();
       audio.loop = true;
    }
  }, [])
  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? audio.pause() : audio.play();
  }
  const date = new Date("2025-02-29T00:00:00")
  
  return (
    <Fragment>
      {/*icon music*/}
        <div className=" fixed right-0  z-50 flex  justify-end p-2">
        <IconButton onClick={()=>handlePlay()} className="bg-[#D6CDB5]">{isPlaying ? <PauseCircleIcon className=" h-6 w-6 text-[#314361]" /> : <MusicalNoteIcon className="h-6 w-6 text-[#314361]" />}</IconButton>
        </div>

  {/*container*/}
      <div
        className="max-w-md mx-auto bg-[#314361] min-h-screen"
        data-aos="zoom-out"
        data-aos-duration="2000"
      >
        {/*Cover*/}
        <Covers date = {date}/>
        

        {/*dalil*/}
        <Dalil></Dalil>
        

        {/*pasangan*/}
        <Pasangan></Pasangan>
        

        {/*Love Story*/}
        <LoveStories></LoveStories>
        

        {/*Date*/}
        <Date date = {date}></Date>
        

        {/*Gift*/}
        <Gift ></Gift>
        
        
        {/*footer*/}
        <Footer></Footer>
      

      {/*nav*/}
        <BottomNav></BottomNav>
      </div>
    </Fragment>
  );
}
