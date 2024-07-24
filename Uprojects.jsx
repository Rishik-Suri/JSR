import  { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './src/Card';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [swiperRef, setSwiperRef] = useState(null);
  const [array, setArray] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://jsr-backend.onrender.com/Upcoming");
      const data = await response.json();
      setArray(data);
    };
    fetchProducts();
  }, [array]);

  return (
    <>
    <div className='pt-5'>
    <span className='text-2xl'>Upcoming Projects : </span>
    </div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
       {array.map((item, index) => {
          // eslint-disable-next-line react/jsx-key
          return (
            // eslint-disable-next-line react/jsx-key
            <SwiperSlide>
              <Card key={index} data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}