import Heading from './Heading';
import OnlineCard from './OnlineCard';

import { MdOutlineLocalCafe, MdStars, MdWatchLater } from 'react-icons/md';

const WelcomeSection = () => {
  return (
    <section>
      <div className='container'>
        <Heading
          title='Welcome to On line learning '
          img='https://ik.imagekit.io/ievdkoh2e/online_learning/Group_254_Sl4yoUpyr.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663498354893'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />

        <div className='col-4'>
          <OnlineCard number={'One'} />
          <OnlineCard number={'Two'} Icon={MdStars} />
          <OnlineCard number={'Three'} Icon={MdWatchLater} />
          <OnlineCard number={'Four'} Icon={MdOutlineLocalCafe} />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
