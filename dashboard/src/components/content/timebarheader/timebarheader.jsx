import React from 'react'

const Timebarheader = (props) => {
    return (
        <div className="main-page__line">
        <div className="line__wrapper">
          <div className="b-location">
            <div className="b-location__logo"><img src="image/geo.png" /></div>
            <div className="b-location__list"></div>
            <div className="b-location__button">
              <img src="image/drop-list.png" />
            </div>
          </div>
          <div className="b-calendar">
            <div className="b-calendar__wrapper">
              <div className="calendar-days">
                <div className="calendar-days__item">
                  <div className="day-week">Mo</div>
                  <div className="day-number active">24</div>
                </div>
                <div className="calendar-days__item">
                  <div className="day-week">Tu</div>
                  <div className="day-number">25</div>
                </div>
                <div className="calendar-days__item">
                  <div className="day-week">We</div>
                  <div className="day-number">26</div>
                </div>
                <div className="calendar-days__item">
                  <div className="day-week">Th</div>
                  <div className="day-number">27</div>
                </div>
                <div className="calendar-days__item">
                  <div className="day-week">Fr</div>
                  <div className="day-number">28</div>
                </div>
                <div className="calendar-days__item">
                  <div className="day-week">Sa</div>
                  <div className="day-number">29</div>
                </div>
                <div className="calendar-days__item">
                  <div className="day-week">Su</div>
                  <div className="day-number">30</div>
                </div>
                <div className="calendar-days__item">
                  <div className="day-week"></div>
                  <div className="day-number">Jul</div>
                </div>
                <div className="calendar-days__item">
                  <div className="day-week">Tu</div>
                  <div className="day-number">1</div>
                </div>
                <div className="calendar-days__item">
                  <div className="day-week">We</div>
                  <div className="day-number">2</div>
                </div>
                <div className="calendar-days__item">
                  <div className="day-week">Th</div>
                  <div className="day-number">3</div>
                </div>
                <div className="calendar-days__item">
                  <div className="day-week"></div>
                  <div className="day-number icon-calendar">
                    <img src="image/calendar.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Timebarheader