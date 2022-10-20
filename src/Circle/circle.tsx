import React from 'react';

interface LotteryProps extends React.PropsWithChildren {
  number: number;
};

const Lottery: React.FC<LotteryProps> = (props) => {
  return (
    <>
      <span>{props.number}</span>
    </>
  );
};

export default Lottery;