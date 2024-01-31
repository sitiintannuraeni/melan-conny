import { HeartIcon, ShareIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";

function DetailDesc() {
  return (
    <>
      <div className="px-3 mt-16">
        <Typography className="font-medium tracking-wide text-lg">
          Elgant Basic Shirt Clean Look Black
        </Typography>
        <Typography className="font-medium tracking-wide text-md mt-2">
          Rp 185.000
        </Typography>
        <Typography className="text-[#989898] mt-1 text-xs">
          9,764 items sold
        </Typography>
        <Typography className="text-[#000000] mt-10 text-md">
          Select Size
        </Typography>
        <div className="flex gap-[11px] mt-3">
          <Button
            variant="outlined"
            className="text-sm h-[40px] w-[40px] flex justify-center items-center"
          >
            XS
          </Button>
          <Button
            variant="outlined"
            className="text-sm h-[40px] w-[40px] flex justify-center items-center"
          >
            S
          </Button>
          <Button
            variant="outlined"
            className="text-sm h-[40px] w-[40px] flex justify-center items-center"
          >
            M
          </Button>
          <Button
            variant="outlined"
            className="text-sm h-[40px] w-[40px] flex justify-center items-center"
          >
            XL
          </Button>
          <Button
            variant="outlined"
            className="text-sm h-[40px] w-[40px] flex justify-center items-center"
          >
            L
          </Button>
          <Button
            variant="outlined"
            className="text-sm h-[40px] w-[40px] flex justify-center items-center"
          >
            XXL
          </Button>
        </div>
        <div className="grid grid-cols-5 gap-4 w-full max-w-md mt-4 font-bold">
          <div className="col-span-5">
            <Button size="lg" className="w-[349px]">
              ADD TO BAG
            </Button>
          </div>
          <div className="col-span-3">
            <Button
              size="md"
              variant="outlined"
              className="flex items-center gap-2 w-[265px]"
            >
              <HeartIcon className="h-5 w-5" />
              <Typography floated={false} variant="small" className="font-bold">
                ADD TO WISHLIST
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant="outlined" size="md">
              <ShareIcon className="h-5 w-5 flex-auto" />
            </Button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1">
            <div className="text-lg font-medium mt-7">Details</div>
            <div className="w-[70px] border-b-[4px] border-black mt-2">
              {/* <div className="w-[500px] border-b-[1px] border-black " /> */}
            </div>
          </div>
          <Typography className="mt-4 font-semibold text-sm">
            ELGANT BASIC SHIRT CLEAN LOOK
          </Typography>
          <div className="grid grid-cols-2 w-[200px] mt-[30px] text-base tracking-wider">
            <div className="font-semibold text-[#857F7F] text-md">
              Material :
            </div>
            <div className="text-[#B0B0B0] text-sm mt-[3px]">CVC Pabric</div>
          </div>
          <div className="grid grid-cols-1 w-[200px] mt-[30px] text-base tracking-wider gap-1">
            <div className="font-semibold text-[#857F7F] text-md">
              Features :
            </div>
            <div className="text-[#B0B0B0] text-sm">
              - Easy Iron <br /> - Modern fit <br /> - Clean look shirt
            </div>
          </div>
          <div className="grid grid-cols-1 w-[450px] mt-[30px] text-base tracking-wider gap-1">
            <div className="font-semibold text-[#857F7F] text-md">
              Overview :
            </div>
            <div className="text-[#B0B0B0] text-sm">
              - CVC fabric with smooth handfeel and wrinkle les fabric <br /> -
              Modern fit for smart formal looks and fit to body
              <br /> - Must have item heymale shirt with affordable price
            </div>
          </div>
          <div className="font-semibold text-[#857F7F] mt-9 text-md">
            Size Chart : <br /> Length x Chest x Shoulder
          </div>
          <div className="text-[#B0B0B0] mt-2 text-sm">
            - XS : 70,5 cm x 48,5 cm x 38,5 cm
            <br /> - S : 72 cm x 51 cm x 41 cm
            <br /> - M : 73,5 cm x 53,5 cm x 43,5 cm
            <br /> - L : 75 cm x 56 cm x 46 cm
            <br /> - XL : 76,5 cm x 58,5 cm x 48,6
            <br /> - XXL : 78 cm 61 cm x 51 cm
          </div>
          <div className="text-[#857F7F] mt-8">
            <Typography className="text-md font-semibold text-md">
              Talent
            </Typography>
          </div>
          <div className="text-[#B0B0B0] text-sm">
            - Tinggi : 180 cm
            <br /> - Berat : 70 kg <br /> - Menggunakan size L
          </div>
          <div className="text-[#B0B0B0] mt-9">
            <Typography className="text-sm">
              Warna yang terlihat pada gambar mungkin tidak 100% sama dengan
              produk yang sebenarnya, disebabkan karna proses pencahayaan pada
              pengambilan gambar atau kualitas layar gadget yang digunakan untuk
              melihat gambar.
            </Typography>
            <Typography className="text-sm mt-[30px]">
              Untuk pembelian online, mohon pertimbangkan toleransi perbedaan
              warna dan ukuran produk yang dipesan. Apabila setelah barang
              diterima terdapat perbedaan yang di anggap terlalu jauh dan tidak
              dapat diterima, silahkan ajukan penukaran barang melalui Customer
              Service kami.
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailDesc;
