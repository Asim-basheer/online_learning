import Rating from './Rating';

const TestimonialsCard = ({ img, title, description, rate, current, id }) => {
  return (
    <article className={`testimonials-card ${current + 1 === id && 'active'}`}>
      <div className='testimonials-card__icon'>
        <img
          src='https://ik.imagekit.io/ievdkoh2e/online_learning/Group_86_hjrZBaFRW.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663506284390'
          alt='quote'
        />
      </div>
      <div className='testimonials-card__img'>
        <img src={img} alt='person img' />
      </div>
      <h3 className='testimonials-card__title'>{title}</h3>
      <div className='testimonials-card__rate'>
        <Rating value={rate} />
      </div>
      <p className='testimonials-card__description'>{description}</p>
    </article>
  );
};

export default TestimonialsCard;
