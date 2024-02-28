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
import { ClipboardDocumentCheckIcon, XCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { DataUcapan } from "@/app/data/dataUcapan";

export default function Kehadiran() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    ucapan: "",
    konfirmasi: ""
  });
  const [ucapanList, setUcapanList] = useState([]);

  const handleOpen = () => setOpen(!open);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  console.log(ucapanList)

  const handleSubmit = () => {
    setUcapanList([...ucapanList, { ...formData, tanggal: moment().format("DD-MM-YYYY") }]); // Tambahkan tanggal dengan format DD/MM/YYYY
    setFormData({
      nama: "",
      ucapan: "",
      konfirmasi: "",
    });
    setOpen(false);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="mb-4 mx-4 text-2xl text-[#D6CDB5] text-center">Kehadiran</h3>
      <h4 className="mb-6 mt-2 mx-4 text-sm text-[#D6CDB5] text-center">
        Kehadiran dan Ucapan Anda Sangat Berarti Bagi Kami
      </h4>
      <Button className="flex gap-1 justify-center items-center" size="sm" color="green" onClick={handleOpen}>
        <ClipboardDocumentCheckIcon height={20}/> Konfirmasi Kehadiran
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
            <Input label="Nama" name="nama" value={formData.nama} onChange={handleChange} />
            <Textarea label="Ucapan❤️" name="ucapan" value={formData.ucapan} onChange={handleChange} />
          </div>
          <div className="flex flex-col gap-2 ">
            <Radio size={20} name="konfirmasi" label="Ya, Saya Akan Hadir" onChange={handleChange} value="ya" />
            <Radio size={20} name="konfirmasi" label="Tidak, Saya Tidak Bisa Hadir" onChange={handleChange} value="tidak" />
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
        <Card className="w-80 h-80 ">
          <List className="h-80 overflow-scroll">
            {ucapanList.map((ucapan, index) => (
              <ListItem className=" border-gray-300 border-2 border-solid" key={index}>
                <div>
                  <Typography variant="h6" color="blue-gray">
                    {ucapan.nama} {ucapan.konfirmasi==="ya" ? "✅" : "✖️"}
                  </Typography>
                  <Typography variant="small" color="gray" className="text-md mt-2 mb-4">
                    {ucapan.ucapan}
                  </Typography>
                  <Typography variant="small" color="gray" className="text-xs">
                    {ucapan.tanggal} {/* Tampilkan tanggal */}
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
