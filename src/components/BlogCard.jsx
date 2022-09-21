const BlogCard = ({ img, title, description }) => {
  return (
    <article className='blog-card'>
      <div className='blog-card__img'>
        <img src={img} alt='' />
      </div>
      <h3 className='blog-card__title'>{title}</h3>
      <p className='blog-card__description'>{description}</p>
      <a href='/' className='btn btn--secondary'>
        Read more
      </a>
    </article>
  );
};

export default BlogCard;
