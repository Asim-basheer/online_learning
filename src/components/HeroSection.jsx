const HeroSection = () => {
  return (
    <header>
      <div className='container container-navbar'>
        <nav className='navbar'>
          <div className='navbar__logo'>
            <img
              src='https://ik.imagekit.io/ievdkoh2e/online_learning/Group_266_fDtfaAWuI.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663486220121'
              alt='logo'
            />
          </div>
          <a href='/' className='navbar__btn btn'>
            Contact
          </a>
        </nav>
      </div>

      <div className='container'>
        <div className='hero-section'>
          <div className='hero-section__content'>
            <h1>
              New Learning Experience
              <span>Online Learn</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <a href='/' className='btn'>
              Explore Now
            </a>
          </div>
          <div className='hero-section__img'>
            <img
              src='https://ik.imagekit.io/ievdkoh2e/online_learning/Group_308_3Qni04Fcn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663490770585'
              alt='content'
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
