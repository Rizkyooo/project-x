import React, { useEffect, useState } from "react";
import moment from "moment"; // Import moment.js
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
  Radio,
  List,
  ListItem,
  Card,
} from "@material-tailwind/react";
import {
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";
import supabase from "@/database/supabase";

export default function Kehadiran() {
  const [kehadiran, setKehadiran] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getKehadiran();
  }, []);

  const getKehadiran = async () => {
    try {
      const { data, error } = await supabase.from("demo").select("*");

      if (error) throw error;

      if (data !== null) {
        setKehadiran(data);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const insertKehadiran = async () => {
    try {
      const { data, error } = await supabase.from("demo").insert([
        {
          name: formData.name,
          ucapan: formData.ucapan,
          kehadiran: formData.kehadiran,
          date: formData.date,
        },
      ]);
      getKehadiran()
    } catch (error) {
      alert(error.message);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    ucapan: "",
    kehadiran: true,
    date: moment().format("DD-MM-YYYY"),
  });
  const [ucapanList, setUcapanList] = useState([]);

  const handleOpen = () => setOpen(!open);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);

  const handleSubmit = () => {
    if(kehadiran.length > 0){
      insertKehadiran();
      setFormData({
        name: "",
        ucapan: "",
        kehadiran: true,
        date: moment().format("DD-MM-YYYY"),
      });
      setOpen(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="mb-4 mx-4 text-3xl text-[#D6CDB5] text-center">
        Kehadiran
      </h3>
      <h4 className="mb-6 mt-0 mx-4 text-xs text-[#D6CDB5] text-center">
        Kehadiran dan Ucapan Anda Sangat Berarti Bagi Kami
      </h4>
      <Button
        className="flex gap-1 justify-center items-center"
        size="sm"
        color="green"
        onClick={handleOpen}
      >
        <ClipboardDocumentCheckIcon className="animate-bounce" height={20} />{" "}
        Konfirmasi Kehadiran
      </Button>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            <Typography className="mb-1" variant="h4">
              Konfirmasi Kehadiran
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          <div className="grid gap-6">
            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Nama Lengkap
            </Typography>
            <Input
              label="Nama"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Textarea
              label="Ucapan❤️"
              name="ucapan"
              value={formData.ucapan}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <Radio
              size={20}
              name="kehadiran"
              label="Ya, Saya Akan Hadir"
              onChange={handleChange}
              value={true}
              defaultChecked={"true"}
            />
            <Radio
              size={20}
              name="kehadiran"
              label="Tidak, Saya Tidak Bisa Hadir"
              onChange={handleChange}
              value={false}
            />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpen}>
            batal
          </Button>
          <Button variant="gradient" color="gray" onClick={handleSubmit}>
            Kirim Ucapan
          </Button>
        </DialogFooter>
      </Dialog>

      <div className="mt-6">
        <Card className=" w-[22rem] h-96 ">
          <List className="overflow-y-scroll">
            {kehadiran.map((ucapan, index) => (
              <ListItem
                className=" border-gray-300 border-2 border-solid pointer-events-none"
                key={index}
              >
                <div>
                  <Typography className="text-sm" variant="h6" color="blue-gray">
                    {ucapan.name} {ucapan.kehadiran === true ? "✅" : "✖️"}
                  </Typography>
                  <Typography 
                    variant="small"
                    color="gray"
                    className="text-md mt-2 mb-4 text-sm"
                  >
                    {ucapan.ucapan}
                  </Typography>
                  <Typography variant="small" color="gray" className="text-xs opacity-70">
                    {ucapan.date}
                  </Typography>
                </div>
              </ListItem>
            ))}
          </List>
        </Card>
      </div>
    </div>
  );
}
