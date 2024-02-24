'use client'
import Image from "next/image";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
  } from "@material-tailwind/react";
   
  export function CardDesain() {
    return (
      <Card className="w-full max-w-[26rem] shadow-2xl mb-4">
        <CardHeader floated={false} color="blue-gray">
          <img className="h-60 w-full object-cover"
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody className="w-full">
          <div className="mb-2 flex items-center justify-between">
            <Typography variant="h4" color="blue-gray" className="font-bold">
              Premium Desain 01
            </Typography>
            
          </div>
          <Typography variant="h5" color="blue-gray" className="line-through text-red-500 mb-2">
            Rp. 180K
          </Typography>
          <Typography variant="h5" color="blue-gray" className="font-bold">
            Rp. 125K
          </Typography>
        </CardBody>
        <CardFooter className="grid grid-cols-2 gap-4">
          <Button className=" flex items-center justify-center bg-[#967E76]" size="lg">
            Lihat
          </Button>
          <Button className="flex items-center justify-center bg-[#967E76]" size="lg" >
            Pesan
          </Button>
          
        </CardFooter>
      </Card>
    );
  }