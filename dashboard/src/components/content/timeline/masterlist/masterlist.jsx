import React from 'react'

function Master(props) {
  return (
    <div className="master__wrapper">
    <div className="master__logo"><img src={ props.info.photo } /></div>
    <div>
      <div className="master__name">{props.info.name}</div>
      <div className="master__position">{props.info.position}</div>
    </div>
  </div>
  )
}


const Masterlist = (props) => {
    const listMasters = props.list.masters;
    const listItems = listMasters.map((master) =>    <Master info={master} />  );

    return (
      <div className="b-users">
      <div className="b-users__item">
        <div className="master">
          {listItems}
          <div className="master__events">
            <div className="event time0900 interval3" data-period="0900" data-interval="3">
              <div className="event__wrapper">
                <div className="event__time">9:00</div>
                <div className="event__price">$10</div>
                <div className="event__person">Song Bao</div>
                <div className="event__todo">Haircut standard</div>
              </div>
              <div className="event__resize">&nbsp;</div>
            </div>
            <div className="event time1100 interval4" data-period="1100" data-interval="4">
              <div className="event__wrapper">
                <div className="event__time">11:00</div>
                <div className="event__price">$13</div>
                <div className="event__person">Elston Gullan</div>
                <div className="event__todo">Haircut standard</div>
              </div>
              <div className="event__resize">&nbsp;</div>
            </div>
            <div className="event time1300 interval4" data-period="1300" data-interval="4">
              <div className="event__wrapper">
                <div className="event__time">13:00</div>
                <div className="event__price">$13</div>
                <div className="event__person">Marti Valencia</div>
                <div className="event__todo">Haircut standard</div>
              </div>
              <div className="event__resize">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>

    </div>
)
}

export default Masterlist;