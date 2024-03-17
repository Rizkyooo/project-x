import { useState } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";

export function Gallery() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(""); // State untuk menyimpan URL gambar yang dipilih

  // Fungsi untuk menampilkan dialog dan mengatur gambar yang dipilih
  const handleOpen = (imageUrl) => {
    setSelectedImage(imageUrl); // Menetapkan URL gambar yang dipilih ke dalam state
    setOpen(true); // Membuka dialog
  };

  // Fungsi untuk menutup dialog
  const handleClose = () => {
    setOpen(false); // Menutup dialog
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mx-4">
        {/* Menampilkan gambar-gambar dalam grid */}
        
        {images.map((image, index) => (
          <div className="grid grid-gap-4" key={index} onClick={() => handleOpen(image.src)}> {/* Menjalankan handleOpen ketika gambar diklik */}
          <div>
            <img
              className="h-40 w-full rounded-lg object-cover object-center cursor-pointer"
              src={image.src}
              alt={`gallery-photo-${index}`}
            />
          </div>
          </div>
        ))}
      </div>
      
      {/* Dialog untuk menampilkan gambar yang dipilih */}
      <Dialog size="lg" open={open} handler={handleClose}> {/* Menggunakan handler untuk menutup dialog saat diluar dialog diklik */}
        <DialogBody>
          <img src={selectedImage} alt="selected-image" /> {/* Menampilkan gambar yang dipilih */}
        </DialogBody>
      </Dialog>
    </>
  );
}

// Daftar gambar yang akan ditampilkan dalam galeri
const images = [
  { src: "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
  { src: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" },
  { src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" },
  { src: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
  { src: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" },
  { src: "https://docs.material-tailwind.com/img/team-3.jpg" },
];
