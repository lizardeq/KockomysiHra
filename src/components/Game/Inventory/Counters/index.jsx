import React from 'react';
import './style.css';

const Counters = ({ remainingSeconds, myData }) => {
  return (
    <div className="container game__counters">
      <div className="game__counter test_tubes">
        <img
          src="/assets/test-tube.png"
          alt="test tube icon"
          className="test_tube__img"
        />
        <div className="test__tube">
          <div className="test_tube__count">{myData.scores.tubes}</div>
        </div>
      </div>
      <div className="countR">
        <div className="countR__count">{myData.scores.R.toFixed(1)}</div>
      </div>
      <div className="game__counter watch">
        <img
          src="assets/watch_col.png"
          alt="watch icon"
          className="timer__img"
        />
        <div className="timer">
          <div className="timer__count">
            {Math.floor(remainingSeconds / 60)}:{remainingSeconds % 60}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counters;