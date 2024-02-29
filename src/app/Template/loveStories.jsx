import { LoveStory } from "@/components/loveStory";
export default function LoveStories() {
  return (
    <div className=" mt-28 flex flex-col justify-center items-center">
      <h4 className="mx-4  text-2xl text-[#D6CDB5] text-center font-spring">
        Our Love Story
      </h4>
      <div className="mt-9 ">
        <LoveStory></LoveStory>
      </div>
    </div>
  );
}
