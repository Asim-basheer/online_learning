const Rating = ({ value }) => {
  const emptyStar =
      'https://ik.imagekit.io/ievdkoh2e/online_learning/Group_80_TkWtMr6iH.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663507595571',
    halfStar =
      'https://ik.imagekit.io/ievdkoh2e/online_learning/Group_V-BI0iD4x.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663507733075',
    fillStar =
      'https://ik.imagekit.io/ievdkoh2e/online_learning/star-svgrepo-com__1__1_Eomq9gl-g.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663507595557';

  return (
    <div className='rating'>
      <span>
        {value >= 1 ? (
          <img src={fillStar} alt='' />
        ) : value >= 0.5 ? (
          <img src={halfStar} alt='' />
        ) : (
          <img src={emptyStar} alt='' />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <img src={fillStar} alt='' />
        ) : value >= 1.5 ? (
          <img src={halfStar} alt='' />
        ) : (
          <img src={emptyStar} alt='' />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <img src={fillStar} alt='' />
        ) : value >= 2.5 ? (
          <img src={halfStar} alt='' />
        ) : (
          <img src={emptyStar} alt='' />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <img src={fillStar} alt='' />
        ) : value >= 3.5 ? (
          <img src={halfStar} alt='' />
        ) : (
          <img src={emptyStar} alt='' />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <img src={fillStar} alt='' />
        ) : value >= 4.5 ? (
          <img src={halfStar} alt='' />
        ) : (
          <img src={emptyStar} alt='' />
        )}
      </span>
    </div>
  );
};

export default Rating;
