import { Typography } from "@material-tailwind/react";
export default function Footer() {
  return (
    <footer className="mt-9 w-full h-20  bottom-0 flex justify-center items-center">
      <Typography
        color="blue-gray"
        className="text-center text-[#D6CDB5] font-normal"
      >
        &copy; 2024 <span className="font-spring text-xs">NikahanKita</span>
        <hr />
      </Typography>
    </footer>
  );
}
