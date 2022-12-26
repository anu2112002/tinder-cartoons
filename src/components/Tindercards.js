import React from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function Tindercards() {

  const [ cartoons, setCartoons ] = React.useState([
    { 
      name:"shinchan",
      url: "https://i.pinimg.com/736x/3d/96/eb/3d96eba59a324ac1570e174fd5bb5e94.jpg" 
    },
    {
      name:"doraemon",
      url: "https://cdn.pixabay.com/photo/2019/10/16/09/09/doraemon-4553920_1280.png" 
    },
    {
      name:"tom and jerry",
      url: "https://i.pinimg.com/564x/4f/80/43/4f80437432fd5dbfecf3204e666c3047.jpg"
    },
    {
      name:"ninja hattori",
      url: "https://cdn.nickindia.com/wp-content/uploads/2018/05/Untd-3-13.jpg"
    }

  ]);
  return (
    <>
    <div className="card-container">
    {
      cartoons.map( cartoons => (
        <TinderCard className="swipe"
        key={cartoons.name}
        preventSwipe={['up', 'down']}>
          <div style= { { backgroundImage: `url(${cartoons.url})`} } className="card">
            <h2>{cartoons.name}</h2>
          </div>
        </TinderCard>
      ))
    }
    </div>
    </>
    
  )
}

export default Tindercards