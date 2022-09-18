import BlogCard from './BlogCard';
import Heading from './Heading';

const BlogSection = () => {
  const data = [
    {
      id: 1,
      img: 'https://ik.imagekit.io/ievdkoh2e/online_learning/Mask_group__6__rZWeaatoz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663519013719',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      title: 'Blog Post One',
    },
    {
      id: 2,
      img: 'https://ik.imagekit.io/ievdkoh2e/online_learning/Mask_group__5__TSapRyaML.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663519013844',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      title: 'Blog Post Two',
    },
    {
      id: 3,
      img: 'https://ik.imagekit.io/ievdkoh2e/online_learning/Mask_group__4__isxHqG-R9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663519013791',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      title: 'Blog Post Three',
    },
  ];
  return (
    <section>
      <div className='container'>
        <Heading
          title='Read Our Blog'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />

        <div className='col-3'>
          {data.map(({ img, des, title, id }) => {
            return (
              <BlogCard img={img} description={des} title={title} key={id} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
