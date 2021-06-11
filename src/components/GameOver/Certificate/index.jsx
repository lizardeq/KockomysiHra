import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Certificate = ({ myData, myScores }) => {
  const rank = myData.winner_ranks.find(
    (item) => item.scoreUp >= myScores.score && item.scoreDown < myScores.score,
  );

  return (
    <div className="container certificate">
      <div className="certificate__photo">
        <img
          src="/assets/photos/photo-like_portrait.png"
          alt="photo of mouse puppet"
          className="certificate__img"
        />
        <div className="certificate__text">
          <div>{rank.name}</div>
          <div>{myScores.nick}</div>
        </div>
        <img src="/assets/seal.png" alt="seal" className="certificate__seal" />
      </div>
      <div className="container certificate__scores">
        <div className="scores__heading">
          <div>Je po boji a kočky strádají...</div>
          <div>Z Mňou-chenu se stal Myš-shen. Děkujeme za pomoc, agente!</div>
        </div>
        <div className="scores__score">
          <h4>Tvoje skóre:</h4>
          <table>
            <tbody>
              <tr className="score__quizzes">
                <td>Rébusy:</td>
                <td>{myScores.riddles}</td>
              </tr>
              <tr className="score__time">
                <td>Čas:</td>
                <td>
                  {String(Math.floor(myScores.time / 60)).padStart(2, 0) +
                    ':' +
                    String(myScores.time % 60).padStart(2, 0)}
                </td>
              </tr>
              <tr className="score__R">
                <td>Číslo R:</td>
                <td>{myScores.score}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="scores__rank">
          Mezi ostatními ses umístil na <strong>X. místě</strong> z 11.
        </div>
        <div className="scores__title__text">
          <div>Vysloužil sis hodnost:</div>
          <div className="scores__title">{rank.name}</div>
        </div>
        <div className="container certificate__buttons">
          <a href="" className="button share">
            <img src="/assets/facebook.svg" alt="Facebook logo" />
            <p>Sdílej</p>
          </a>
          <a href="" className="button print">
            <img src="/assets/print.svg" alt="print icon" />
            <p>Tiskni</p>
          </a>
          <Link
            to="/"
            className="button next"
            // onClick={() => localStorage.clear()}
          >
            <img src="/assets/home.svg" alt="arrow next" />
            <p>Konec</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Certificate;