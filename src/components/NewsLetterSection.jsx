import Heading from './Heading';

const NewsLetterSection = () => {
  return (
    <section className='news-letter'>
      <div className='container'>
        <div className='news-letter__icon'>
          <img
            src='https://ik.imagekit.io/ievdkoh2e/online_learning/Group_261_xvXdjRUxZ.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663514189733'
            alt='section img'
          />
        </div>

        <Heading
          icon={false}
          title='Subscribe to Our Newsletter'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />

        <div className='news-letter__form'>
          <input placeholder='Enter your email address' />
          <button type='submit' className='btn btn--submit'>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSection;
