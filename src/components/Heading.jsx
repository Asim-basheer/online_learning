const Heading = ({
  img = 'https://ik.imagekit.io/ievdkoh2e/online_learning/Group_254_Sl4yoUpyr.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663498354893',
  title,
  description,
  icon = true,
}) => {
  return (
    <div className='heading'>
      {icon && <img className='heading__img' src={img} alt='svg' />}

      <h2 className='heading__title'>{title}</h2>
      <p className='heading__description'>{description}</p>
    </div>
  );
};

export default Heading;
