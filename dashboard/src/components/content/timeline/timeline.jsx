import React from 'react'

import Workday from './workday/workday'
import Actualtime from './actualtime/actualtime'
import Masterlist from './masterlist/masterlist'


const state = {
  masters: [
     {
      name: "Faadi Al Rahman",
      photo: "image/master1.png",
      position: "Specialist",
      clients: [
        {
          client: 'Song Bao',
          time: '9:00',
          duration: 3, // half hour
          price: 10             ,
          proc: 'Haircut standart',
          status: 2 // 1 - create, 2 - apply, 3 - cancel, 4 - not come
        },
        {
          client: 'Marti Valencia',
          time: '11:00',
          duration: 4, // half hour
          price: 13,
          proc: 'Haircut standart',
          status: 1 // 1 - create, 2 - apply, 3 - cancel, 4 - not come
        },
        {
          client: 'Elston Gullan',
          time: '13:00',
          duration: 4, // half hour
          price: 13,
          proc: 'Haircut standart',
          status: 1 // 1 - create, 2 - apply, 3 - cancel, 4 - not come
        }
      ]
    },
    {
      name: "Loni Bowcher",
      photo: "master2.png",
      position: "Specialist",
      clients: [
        {
          client: 'Chioke Okonkwo',
          time: '10:00',
          duration: 4, // half hour
          price: 13,
          proc: 'Haircut standart',
          status: 4 // 1 - create, 2 - apply, 3 - cancel, 4 - not come
        },
        {
          client: 'Marti Valencia',
          time: '14:00',
          duration: 4, // half hour
          price: 13,       
          proc: 'Haircut standart',
          status: 1 // 1 - create, 2 - apply, 3 - cancel, 4 - not come
        },
      ]
    },
    {
      name: "Miriam Jesus",
      photo: "master3.png",
      position: "Specialist",
      clients: [
        {
          client: 'Mkhuseli Malinga',
          time: '9:30',
          duration: 3, // half hour
          price: 12             ,
          proc: 'Applying varnish',
          status: 2 // 1 - create, 2 - apply, 3 - cancel, 4 - not come
        },
        {
          client: 'Joslin Rodgers',
          time: '12:30',
          duration: 4, // half hour
          price: 13,
          proc: 'Applying varnish',
          status: 1 // 1 - create, 2 - apply, 3 - cancel, 4 - not come
        },
        {
          client: 'Charles Davies',
          time: '15:00',
          duration: 3, // half hour
          price: 13,
          proc: 'Applying varnish',
          status: 1 // 1 - create, 2 - apply, 3 - cancel, 4 - not come
        }
      ]
    },
    {
      name: "Rustem Tolstobrov",
      photo: "master4.png",
      position: "Specialist",
      clients: [
        {
          client: 'Afonso Pinto',
          time: '9:00',
          duration: 3, // half hour
          price: 10,
          proc: 'Applying varnish',
          status: 2 // 1 - create, 2 - apply, 3 - cancel, 4 - not come
        },
        {
          client: 'Joslin Rodgers',
          time: '12:00',
          duration: 4, // half hour
          price: 13,       
          proc: 'Applying varnish',
          status: 1 // 1 - create, 2 - apply, 3 - cancel, 4 - not come
        },
      ]
    } 
  ]
}

const Timeline = (props) => {
    return (
        <div className="main-page__line">
        <div className="timeline__wrapper">
          <div className="b-timeline padding283">
              <Workday />
              <Actualtime />
          </div>
          <Masterlist list={state} />
        </div>
      </div>
        )
}

export default Timeline;