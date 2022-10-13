import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap';
import { Wheel } from 'react-custom-roulette'

const WheelFortune = (props) => {
  const [mustSpin, setMustSpin] = useState(true);
  const [prizeNumber, setPrizeNumber] = useState('');


  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * props.groups.length)
    const winner = props.groups.filter((group, i) => i === newPrizeNumber)[0]
    setPrizeNumber(winner.option)
    setMustSpin(true)
  }

  return (
    <>
      {prizeNumber !== '' && !mustSpin &&
        <div className='mt-5'>
          <Alert>
            Le groupe gagnant est : {prizeNumber}
          </Alert>
        </div>
      }

      <div>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={props.groups}

          onStopSpinning={() => {
            console.log('spinning finished')
            setMustSpin(false);
          }}
        />
      </div>

      {!mustSpin &&
        <div className='mt-5'>
          <Button onClick={handleSpinClick} variant="primary" size="lg">
            Lancer le tirage au sort
          </Button>
        </div>
      }
    </>
  )
}

export default WheelFortune