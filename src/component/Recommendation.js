import React from 'react';
import {
  Pagination, Mousewheel, Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { MdOutlineSend } from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ralph from './images/Ralph.jpeg';
import shaddai from './images/shaddai.jpeg';
import esther from './images/Esther.jpeg';
import amine from './images/Amine.jpeg';
import laura from './images/Amaka_konwea.jpeg';
import Valentine from './images/valentine.jpeg';
import Ben from './images/Ben.jpeg';

const Recommendation = () => {
  const recomend = [
    {
      img: esther,
      id: 1,
      name: 'Esther Oti',
      role: 'Project Manager',
      recomend: 'not many people can handle technical trade-offs as Ifeanyi can. He was always very patient, solution-oriented and there was nothing he couldn’t solve He is also very kind and easy to deal with which made our relationship smooth as he allowed me to make suggestions and decisions on my own.What a great professional to have as a partner.',
    },
    {
      img: ralph,
      id: 2,
      name: 'Ekpenisi Raphael',
      role: 'Software Developer',
      recomend: 'I strongly endorse Ifeanyi Oti for his outstanding coding expertise and exemplary conduct. He consistently produced top-notch output within the designated timeframe and kept us informed of his advancements. Moreover, he exhibits great teamwork and collaboration skills. I firmly believe that he would be a valuable asset to any team.',
    },
    {
      img: amine,
      id: 3,
      name: 'Amine Ouasef',
      role: 'Software Developer',
      recomend: "Oti is a dedicated software developer, being one of my mentees I had the chance to see his deep passion for software development, he always makes sure to use all the resources in his hand to overcome any challenge he faces whether it's a technical bug or a hard concept he would never give up and focus on achieving his goal regardless of the required effort. He is a passionate developer who is devoted to improving himself continuously and I highly recommend him.",
    },
    {
      img: shaddai,
      id: 4,
      name: 'Shaddai Linus',
      role: 'Software Developer',
      recomend: 'Oti Joseph is exactly the sort of software developer any company would love. I met him while struggling with Javascript and React in a software development remote school, he made pair programming so easy and fast, we worked together a lot of times and I must confess, he is an amazing team player. He has a great way of spotting bugs, which was really valuable for me. He is also just a fun person to chat with! If you need to get a job done simply and efficiently, Oti Joseph is definitely the person for you.',
    },
    {
      img: laura,
      id: 5,
      name: 'Laura Amaka Konwea',
      role: 'Software Developer',
      recomend: 'Joseph is a very smart and a creative person. We have worked together on many projects, where I have seen his collaborative skills, his contributions and ideas so I can say for a fact he will be an asset to any company. He has actually being of great help to me, been senior to me at Microverse as well. I will definitely recommend him, as he will give any company the worth they need. ',
    },
    {
      img: Valentine,
      id: 6,
      name: 'Valentine Ezekwonna',
      role: 'Software Developer',
      recomend: 'During our time working together on various projects, I have been consistently impressed by Ifeanyis technical skills, work ethic, and dedication to the success of the team As a full-stack software engineer, Ifeanyi has demonstrated an impressive ability to design and implement complex systems. He has a deep understanding of modern software development practices and always stays up-to-date with the latest technologies and trends. He is an excellent problem solver and consistently finds innovative solutions to challenging technical problems. In addition to their technical skills, Ifeanyi is an exceptional team player.',
    },
    {
      img: Ben,
      id: 7,
      name: 'Ben Sales',
      role: 'Software Developer',
      recomend: 'I am writing to recommend Ifeanyi Oti who is a professional in what he does and has demonstrated his abilities on multiple projects and tasks, his exceptional time management is something I want to point out as well, he delivers tasks and projects following the best practice with ease, I can confidently say he will be an excellent fit for any web developer role and an essential asset to any team.',
    },
  ];
  return (
    <div id="recommendations">
      <h1 className="project-title">
        <MdOutlineSend />
        <b>Testimonials</b>
      </h1>
      <h2 className="section-title">What people say about me.</h2>

      <Swiper
        modules={[Pagination, Mousewheel, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        mousewheel
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="swiper"
        data-aos="fade-up"
      >
        {
          recomend.map((recommended) => (
            <SwiperSlide key={recommended.id}>
              <div className="recomend-con">
                <div className="recomend-img"><img className="wrap-img" src={recommended.img} alt={recommended.name} /></div>
                <h2>{recommended.name}</h2>
                <p>{recommended.role}</p>
                <div className="quote-con">
                  <small>
                    <span>
                      <FaQuoteLeft className="quote" />
                    </span>
                    {recommended.recomend}
                    <span>
                      <FaQuoteRight className="quote" />
                    </span>
                  </small>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default Recommendation;
