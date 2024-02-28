import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
  Typography,
  MenuItem,
  Alert
} from "@material-tailwind/react";
import { GiftIcon, CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/solid";

export function WeddingGift() {
  const [copiedMetamask, setCopiedMetamask] = useState(false);
  const [copiedCoinbase, setCopiedCoinbase] = useState(false);
  const [copiedTrustWallet, setCopiedTrustWallet] = useState(false);
  const [open, setOpen] = useState(false);

  const copyToClipboard = async (text, setCopiedFunction) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedFunction(true);
      setTimeout(() => {
        setCopiedFunction(false);
      }, 1000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button className="flex justify-center items-center gap-1 bg-[#D6CDB5] text-[#314361]" size="sm" onClick={handleOpen}><GiftIcon className="text-[#314361] animate-bounce" height={20}/>Beri Hadiah</Button>
      <Dialog size="xs" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <div>
            <Typography variant="h5" color="blue-gray">
              Kirim Hadiah
            </Typography>
            <Typography color="gray" variant="paragraph">
              Pilih Bank Atau Wallet di Bawah ini
            </Typography>
          </div>
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody className="overflow-y-scroll !px-5">
          <div className="mb-6">
            <Typography
              variant="paragraph"
              color="blue-gray"
              className="py-3 font-semibold uppercase opacity-70"
            >
              BANK
            </Typography>
            <ul className="mt-3 -ml-2 flex flex-col gap-1">
              <MenuItem className="mb-4 flex items-center justify-center gap-3 !py-4 shadow-md">
                <img
                  src="https://docs.material-tailwind.com/icons/metamask.svg"
                  alt="metamast"
                  className="h-6 w-6"
                />
                <Typography
                  className="uppercase"
                  color="blue-gray"
                  variant="h6"
                >
                  0660580697 <IconButton onClick={() => copyToClipboard('0660580697', setCopiedMetamask)} className="bg-[#314361]" size="sm"> {copiedMetamask ? <CheckIcon height={20}/> : <DocumentDuplicateIcon height={20}/>}</IconButton>
                </Typography>
              </MenuItem>
              <MenuItem className="mb-1 flex items-center justify-center gap-3 !py-4 shadow-md">
                <img
                  src="https://docs.material-tailwind.com/icons/coinbase.svg"
                  alt="metamast"
                  className="h-6 w-6 rounded-md"
                />
                <Typography
                  className="uppercase"
                  color="blue-gray"
                  variant="h6"
                >
                  0660580697 <IconButton onClick={() => copyToClipboard('0660580697', setCopiedTrustWallet)} className="bg-[#314361]" size="sm"> {copiedTrustWallet ? <CheckIcon height={20}/> : <DocumentDuplicateIcon height={20}/>}</IconButton>
                </Typography>
              </MenuItem>
            </ul>
          </div>
          <div>
            <Typography
              variant="paragraph"
              color="blue-gray"
              className="py-4 font-semibold uppercase opacity-70"
            >
              E-WALLET
            </Typography>
            <ul className="mt-4 -ml-2.5 flex flex-col gap-1">
              <MenuItem className="mb-1 flex items-center justify-center gap-3 !py-4 shadow-md">
                <img
                  src="https://docs.material-tailwind.com/icons/coinbase.svg"
                  alt="metamast"
                  className="h-6 w-6 rounded-md"
                />
                <Typography
                  className="uppercase"
                  color="blue-gray"
                  variant="h6"
                >
                  0660580697 <IconButton onClick={() => copyToClipboard('0660580697', setCopiedCoinbase)} className="bg-[#314361]" size="sm"> {copiedCoinbase ? <CheckIcon height={20}/> : <DocumentDuplicateIcon height={20}/>}</IconButton>
                </Typography>
              </MenuItem>
            </ul>
          </div>
          <div>
            <Typography
              variant="paragraph"
              color="blue-gray"
              className="mt-4 font-semibold uppercase opacity-70"
            >
              KIRIM hadiah langsung
            </Typography>
            <ul className="mt-4 flex flex-col gap-1">
              <MenuItem className="mb-4 flex items-center justify-center shadow-md">
                <Typography
                  className="uppsecase"
                  color="blue-gray"
                  variant="h6"
                >
                  Plataran Menteng, Jalan HOS. Cokroaminoto, RT.6/RW.4, Gondangdia,
              Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, Indonesia
                </Typography>
              </MenuItem>
            </ul>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
