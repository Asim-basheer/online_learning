const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__logo'>
          <img
            src='https://ik.imagekit.io/ievdkoh2e/online_learning/Group_267_Vv-hZtnDj.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663582656861'
            alt='logo'
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{' '}
          </p>
          <p>© Copyright 2022 Online </p>
        </div>
        <div className='footer__links'>
          <h5>Information</h5>
          <div>
            <a href='/'>About Us</a>
            <a href='/'>Products</a>
            <a href='/'>Contact Us</a>
            <a href='/'>Terms of Service</a>
          </div>
        </div>
        <div className='footer__social'>
          <h5>Follow Us</h5>
          <div>
            <a href='https://www.facebook.com/asim.alabtah.1/' target='_blank'>
              <img
                src='https://ik.imagekit.io/ievdkoh2e/online_learning/Group_99_8QmptakDa.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663582656795'
                alt='social icon'
              />
            </a>
            <a
              href='https://www.linkedin.com/in/asim-basheer-77606b20b/'
              target='_blank'
            >
              <img
                src='https://ik.imagekit.io/ievdkoh2e/online_learning/Group_100_zEbYHk-Ya.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663582656871'
                alt='social icon'
              />
            </a>
            <a href='https://twitter.com/AsimBasheer22' target='_blank'>
              <img
                src='https://ik.imagekit.io/ievdkoh2e/online_learning/Group_104_PguCT6IOd.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663582656901'
                alt='social icon'
              />
            </a>
            <a
              href='https://www.instagram.com/asim_basheer5500/'
              target='_blank'
            >
              <img
                src='https://ik.imagekit.io/ievdkoh2e/online_learning/Group_105_GS6KxSa_z.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663582656909'
                alt='social icon'
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
