// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { CarouselItem } from "./CarouselItem";

const dataSlides = [
  {
    id:"01",
    title: "HOME PREFERRED SOLUTION",
    subtitle: "-Best home health care, awesome care givers.-",
    sign: "Yohana Terry",
    img: "/assets/1937848612.jpg",
  },
  {
    id:"03",
    title: "HOME PREFERRED SOLUTION",
    subtitle: "-Equipo de primera. Atendieron a mi mama fenomenalmente bien.-",
    sign: "Omar Kindelan",
    img: "/assets/150773027.jpg",
  },
  {
    id:"04",
    title: "HOME PREFERRED SOLUTION",
    subtitle: "-Equipo de primera. Atendieron a mi mama fenomenalmente bien.-",
    sign: "Omar Kindelan",
    img: "/assets/1416346082.jpg",
  },
  {
    id:"05",
    title: "HOME PREFERRED SOLUTION",
    subtitle: "-Equipo de primera. Atendieron a mi mama fenomenalmente bien.-",
    sign: "Omar Kindelan",
    img: "/assets/1910306026.jpg",
  },
  {
    id:"06",
    title: "HOME PREFERRED SOLUTION",
    subtitle: "-Equipo de primera. Atendieron a mi mama fenomenalmente bien.-",
    sign: "Omar Kindelan",
    img: "/assets/2157169755.jpg",
  },
  {
    id:"07",
    title: "HOME PREFERRED SOLUTION",
    subtitle: "-Equipo de primera. Atendieron a mi mama fenomenalmente bien.-",
    sign: "Omar Kindelan",
    img: "/assets/240339163.jpg",
  },
];

export function CarouselBase() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >       
        {dataSlides.map((item) => (
          <SwiperSlide key={item.id}>
            <CarouselItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
