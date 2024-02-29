import { IconButton, PauseCircleIcon, MusicalNoteIcon } from "@material-tailwind/react";
export default function Music() {
  return (
    <div className=" fixed right-0  z-50 flex  justify-end p-2">
      <IconButton onClick={() => handlePlay()} className="bg-[#D6CDB5]">
        {isPlaying ? (
          <PauseCircleIcon className=" h-6 w-6 text-[#314361]" />
        ) : (
          <MusicalNoteIcon className="h-6 w-6 text-[#314361]" />
        )}
      </IconButton>
    </div>
  );
}
