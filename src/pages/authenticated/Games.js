import React, { useState, useEffect } from 'react';


function addIds(array){
  array.map(item => {
    let temp = item.data;
    temp.id = item.id;
    return temp;
  })
}


function Games() {
  const [data, setData] = useState({ games: []});
  useEffect(async () => {

    const result =
  })

  return (
    data.games.map(game => (
      <li key={game.id}>
        <
      </li>
    ))
  )
}

export default Games;
