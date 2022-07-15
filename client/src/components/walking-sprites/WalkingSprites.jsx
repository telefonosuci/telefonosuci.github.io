/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid'
import Dragula from 'dragula'

import './WalkingSprites.module.css'

const initialState = {
  spritesRed: {
    id: 0,
    sprites: [{
      id: v4(),
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-ZAK-SHEET.png",
      active: true,
      powers: {
        coding: 10,
        problemsolving: 10,
        socialskills: 10,
        speech: 10,
        copyandpaste: 10
      }
    },
    {
      id: v4(),
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-HANK-2-SHEET.png",
      active: false,
      powers: {
        coding: 10,
        problemsolving: 10,
        socialskills: 10,
        speech: 10,
        copyandpaste: 10
      }
    },
    {
      id: v4(),
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-EMMY-SHEET.png",
      active: false,
      powers: {
        coding: 10,
        problemsolving: 10,
        socialskills: 10,
        speech: 10,
        copyandpaste: 10
      }
    },
    {
      id: v4(),
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-BEAR-SHEET.png",
      active: false,
      powers: {
        coding: 10,
        problemsolving: 10,
        socialskills: 10,
        speech: 10,
        copyandpaste: 10

      }
    }],
    availableObjects: [{
      id: v4(),
      name: 'pizza',
      powers: {
        coding: 10,
        problemsolving: 0,
        socialskills: 0,
        speech: 0,
        copyandpaste: 0
      }
    },
    {
      id: v4(),
      name: 'hamburger',
      powers: {
        coding: 0,
        problemsolving: 0,
        socialskills: 0,
        speech: 0,
        copyandpaste: 10
      }
    },
    {
      id: v4(),
      name: 'sushi',
      powers: {
        coding: 0,
        problemsolving: 0,
        socialskills: 10,
        speech: 0,
        copyandpaste: 0
      }
    },
    {
      id: v4(),
      name: 'coffe',
      powers: {
        coding: 0,
        problemsolving: 10,
        socialskills: 0,
        speech: 0,
        copyandpaste: 0
      }
    }],
    powers: [],
    isRunning: false,
    currentPowers: [10, 10, 10, 10, 10]
  },
  filtersRed: {
    filter: 'ALL'
  }

};

const WalkingSprites = (props) => {
  
  const [stateSpriteIndex, setStateSpriteIndex] = useState(0)
  const [powersState, setPowerState] = useState(initialState.spritesRed.sprites[stateSpriteIndex].powers)

  useEffect(() => {
    const droppable = [...document.querySelectorAll('.drag-n-drop')];
    const options = {};
    const drake = Dragula(droppable, options);
    drake.on("drop", onDrop);
  }, []);

  useEffect(() => {
    setPowerState(initialState.spritesRed.sprites[stateSpriteIndex].powers)
  }, [stateSpriteIndex]);

  const setPreviousActive = () => {
    if (stateSpriteIndex > 0)
      setStateSpriteIndex(stateSpriteIndex - 1);
  }

  const setNextActive = () => {
    if (stateSpriteIndex < initialState.spritesRed.sprites.length - 1)
      setStateSpriteIndex(stateSpriteIndex + 1);
  }

  const logPowers = () => {
    console.log('Current powers: ', powersState);
  }

  const onDrop = el => {
    
    const { objectId } = el.dataset;

    console.log('Dropped object ID: ', objectId);

    updatePowers(initialState.spritesRed.availableObjects[objectId].powers);
  }

/**
 * 
 * TODO: Only the last item get added to powers and chart is not updated correctly
 */
  const updatePowers = powers => {
    console.log('Current powers: ', powersState)
    console.log('Plus: ', powers)

    setPowerState(prevState => {
        return {
          coding: prevState.coding + powers.coding,
          problemsolving: prevState.problemsolving + powers.problemsolving,
          socialskills: prevState.socialskills + powers.socialskills,
          speech: prevState.speech + powers.speech,
          copyandpaste: prevState.copyandpaste + powers.copyandpaste
        }
      }
    )
  }

  useEffect(() => {
    console.log('Powers updated, effect triggered (update chart now): ', powersState);
  }, [powersState]);

  return (
    <div className="walking-sprites">
      

      <div className="Character Character--walk-down">

        {initialState.spritesRed.sprites.map((sprite, index) => (
          <img key={index} src={sprite.image} className={`PixelArtImage Character_sprite-sheet index-${index} ${index == stateSpriteIndex ? "active" : ""}`}></img>
        ))}
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-Shadow.png" className="Character_shadow PixelArtImage" />
      </div>

      <div className="walking-sprites__sprites-navigation">
        <span onClick={setPreviousActive}>Previous</span><span onClick={logPowers}>Log powers</span><span onClick={setNextActive}>Next</span>
      </div>

      <div className="walking-sprites__assigned-objects drag-n-drop">
      </div>

      <div className="walking-sprites__usefull-objects drag-n-drop">

        {initialState.spritesRed.availableObjects.map((object, index) => (
          <span key={index} className={`ObjectDraggable object-${object.name}`} data-object-id={index}></span>
        ))}
      </div>
      
    </div>
  );
}

export default WalkingSprites;