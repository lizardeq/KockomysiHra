import React, { useState } from 'react';
import './style.css';

import CrossButton from '../../CrossButton';
import Magnifier from '../../Magnifier';

const House = ({
  selectedBuilding,
  setSelectedBuilding,
  magnify,
  toggleMagnify,
  myData,
  setMyData,
}) => {
  const backHome = () => {
    const thisBuilding = myData.buildings.find(
      (building) => building.name === selectedBuilding.name,
    );
    const thisBuildingIndex = myData.buildings.indexOf(thisBuilding);

    setMyData((draft) => {
      draft.buildings[thisBuildingIndex].quizz.isActive = true;
    });

    setSelectedBuilding(undefined);
  };

  return (
    <>
      {!magnify && (
        <div className="card game__indication">
          <CrossButton closeIt={backHome} />
          <h4>{selectedBuilding.name}</h4>
          <img src={selectedBuilding.cardImg} className="building__img" />
          <div>
            <div className="indication__text">
              {selectedBuilding.description.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <img src={selectedBuilding.hintImg} className="indication__img" />
            <img
              src="../../../assets/magnifier.svg"
              className="magnifier__button"
              onClick={toggleMagnify}
            />
          </div>
          <div className="card__buttons">
            <button className="cancel" onClick={backHome}>
              Ok
            </button>
          </div>
        </div>
      )}
      {magnify && (
        <Magnifier
          imgToMagnify={selectedBuilding.hintImg}
          toggleMagnify={toggleMagnify}
        />
      )}
    </>
  );
};

export default House;
