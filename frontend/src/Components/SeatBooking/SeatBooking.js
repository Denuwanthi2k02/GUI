import React from 'react';
import "./SeatBooking.css";

function SeatBooking() {
  return (
    <div className='center'>
      <div className='tickets1'>
        <div className='tickets-selector'>
          <div className='head'>
            <div className='title'>Movie Name</div>
          </div>

          <div className='seats'>
            <div className='status'>
              <div className='item'>Available</div>
              <div className='item'>Booked</div>
              <div className='item'>Selected</div>
            </div>

            <div className='all-seats'>
              <input type='checkbox' name='tickets' id='s1'/>
              <label for="s1" className='seat'/>    
            </div>
          </div>

          <div className='timings'>
            <div className='dates'>
              <input type='radio' name='date' id="d1" checked/>
              <label for='d1'className='dates-item'>
                <div className='day'>Sun</div>
                <div className='date'>11</div>
              </label>

              <input type='radio' name='date' id="d2" />
              <label for='d2' className='dates-item'>
                <div className='day'>Mon</div>
                <div className='date'>12</div>
              </label>

              <input type='radio' name='date' id="d3" />
              <label for='d3'className='dates-item'>
                <div className='day'>Tue</div>
                <div className='date'>13</div>
              </label>

              <input type='radio' name='date' id="d4" />
              <label for='d4'className='dates-item'>
                <div className='day'>Wed</div>
                <div className='date'>14</div>
              </label>

              <input type='radio' name='date' id="d5" />
              <label for='d5'className='dates-item'>
                <div className='day'>Thu</div>
                <div className='date'>15</div>
              </label>

              <input type='radio' name='date' id="d6" />
              <label for='d6'className='dates-item'>
                <div className='day'>Fri</div>
                <div className='date'>16</div>
              </label>

              <input type='radio' name='date' id="d7" />
              <label for='d7'className='dates-item'>
                <div className='day'>Sat</div>
                <div className='date'>17</div>
              </label>
            </div>

            <div className='times'>
              <input type='radio' name='time' id='t1' checked/> 
              <label for='t1' className='time'>11.00</label>

              <input type='radio' name='time' id='t2' /> 
              <label for='t2' className='time'>14.30</label>

              <input type='radio' name='time' id='t3' /> 
              <label for='t3' className='time'>18.00</label> 

              <input type='radio' name='time' id='t4' /> 
              <label for='t4' className='time'>21.30</label>        
            </div>
          </div>
        </div>

        <div className='price'>
          <div className='total'>
            <span>
              <span className='count'>0</span>Tickets
            </span>
            <div className='amount'>0</div>
          </div>

          <button type='button'>Book</button>
        </div>
      </div>
      
    </div>
  )
}

export default SeatBooking
