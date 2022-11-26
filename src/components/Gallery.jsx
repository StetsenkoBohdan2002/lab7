import React from 'react';
import GoodsCard from './GoodsCard';

function Gallery() {
  const mainList = [
    {
      img: 'https://storage.dtkt.ua/files/NikoNews/TovarVozvrat06.jpg',
      name: 'Test',
      price: 100,
    },
    {
      img: 'https://storage.dtkt.ua/files/NikoNews/TovarVozvrat06.jpg',
      name: 'Test',
      price: 100,
    },
    {
      img: 'https://storage.dtkt.ua/files/NikoNews/TovarVozvrat06.jpg',
      name: 'Test',
      price: 100,
    },
    {
      img: 'https://storage.dtkt.ua/files/NikoNews/TovarVozvrat06.jpg',
      name: 'Test',
      price: 100,
    },
    {
      img: 'https://storage.dtkt.ua/files/NikoNews/TovarVozvrat06.jpg',
      name: 'Test',
      price: 100,
    },
    {
      img: 'https://storage.dtkt.ua/files/NikoNews/TovarVozvrat06.jpg',
      name: 'Test',
      price: 100,
    },
    {
      img: 'https://storage.dtkt.ua/files/NikoNews/TovarVozvrat06.jpg',
      name: 'Test',
      price: 100,
    },
  ];
  const listItems = mainList.map((item) => (
    <GoodsCard name={item.name} img={item.img} price={item.price}></GoodsCard>
  ));
  return <ul style={{display:'flex', justifyContent:'space-between',flexWrap:'wrap'}}>{listItems}</ul>;
}

export default Gallery;
