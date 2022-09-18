import React, { useState } from 'react';
import TestimonialsCard from './TestimonialsCard';

const TestimonialsSection = () => {
  const data = [
    {
      id: 1,
      title: 'Andrea',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, a, commodi deserunt eius necessitatibus similique quam sit nostrum architecto neque beatae fuga omnis nesciunt molestias quibusdam accusantium perspiciatis, error nihil?',
      img: 'https://ik.imagekit.io/ievdkoh2e/online_learning/Mask_Group_1_5HsaCVyjP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663506282994',
      rate: 3.5,
    },
    {
      id: 2,
      title: 'Jan',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, a, commodi deserunt eius necessitatibus similique quam sit nostrum architecto neque beatae fuga omnis nesciunt molestias quibusdam accusantium perspiciatis, error nihil?',
      img: 'https://ik.imagekit.io/ievdkoh2e/online_learning/Mask_group__1__-wlOQPJNQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663512808677',
      rate: 4,
    },
    {
      id: 3,
      title: 'Angela',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, a, commodi deserunt eius necessitatibus similique quam sit nostrum architecto neque beatae fuga omnis nesciunt molestias quibusdam accusantium perspiciatis, error nihil?',
      img: 'https://ik.imagekit.io/ievdkoh2e/online_learning/Mask_group__3__FOmqNHSBZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663512808429',
      rate: 2.5,
    },
    {
      id: 4,
      title: 'Rose',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, a, commodi deserunt eius necessitatibus similique quam sit nostrum architecto neque beatae fuga omnis nesciunt molestias quibusdam accusantium perspiciatis, error nihil?',
      img: 'https://ik.imagekit.io/ievdkoh2e/online_learning/Mask_group__2__cx_ZxwtOG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663512808430',
      rate: 4.5,
    },
    {
      id: 5,
      title: 'Victor',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, a, commodi deserunt eius necessitatibus similique quam sit nostrum architecto neque beatae fuga omnis nesciunt molestias quibusdam accusantium perspiciatis, error nihil?',
      img: 'https://ik.imagekit.io/ievdkoh2e/online_learning/Mask_group_075fm6LDZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663512808805',
      rate: 1.5,
    },
  ];

  const [current, setCurrent] = useState(0);
  const bulletsHandler = (index) => {
    setCurrent(index);
  };

  return (
    <section className='testimonials container'>
      <div className='testimonials__card-box'>
        {data.map(({ img, description, title, id, rate }) => {
          return (
            <TestimonialsCard
              key={id}
              img={img}
              description={description}
              title={title}
              id={id}
              rate={rate}
              current={current}
            />
          );
        })}
      </div>

      <div className='testimonials__bullet-box'>
        {data.map(({ id }) => {
          return (
            <span
              className={id === current + 1 ? 'active' : ''}
              onClick={() => bulletsHandler(id - 1)}
              key={id}
            ></span>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialsSection;
