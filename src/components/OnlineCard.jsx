import { MdAccountBalance } from 'react-icons/md';

const OnlineCard = ({ number, Icon = MdAccountBalance }) => {
  return (
    <article className='online-card'>
      <div className='online-card__icon'>
        <Icon />
      </div>
      <h3 className='online-card__title'>Online Learning {number}</h3>
      <p className='online-card__description'>
        Lorem ipsum dolor sit amet, consectetur
      </p>
    </article>
  );
};

export default OnlineCard;
