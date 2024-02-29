import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  import { FaceSmileIcon, UsersIcon, LockClosedIcon, LinkIcon, HeartIcon} from "@heroicons/react/24/solid";

   
  export function LoveStory() {
    return (
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2 bg-[#D6CDB5]">
                <FaceSmileIcon className="h-4 w-4 text-[#314361]"/>
              </TimelineIcon>
              <Typography className="text-[#D6CDB5]" variant="h5" color="">
              2019
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="gary" className="text-sm text-gray-400">
              First Time We Meet
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2 bg-[#D6CDB5]">
              <LockClosedIcon className="h-4 w-4 text-[#314361]" />
              </TimelineIcon>
              <Typography className="text-[#D6CDB5]" variant="h5" color="blue-gray">
                2020
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="gary" className="text-sm text-gray-400">
                We Decided to Enggaged
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2 bg-[#D6CDB5]">
              <UsersIcon className="h-4 w-4 text-[#314361]" />
              </TimelineIcon>
              <Typography className="text-[#D6CDB5]" variant="h5" color="blue-gray">
                2020
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="gary" className="text-sm text-gray-400">
                We are Married
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className="p-2 bg-[#D6CDB5]">
              <HeartIcon className="h-4 w-4 text-[#314361]" />
              </TimelineIcon>
              <Typography variant="h5" className="text-[#D6CDB5]"color="blue-gray">
                Finally
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography color="gary" className="text-sm text-gray-400">
                Kami sah Menjadi Sepasang Suami Istri
              </Typography>
            </TimelineBody>
          </TimelineItem>
          
        </Timeline>

    );
  }