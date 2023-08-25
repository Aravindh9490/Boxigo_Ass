import {useState} from 'react'

import {
  BsArrowRightCircle,
  BsFillCalendarCheckFill,
  BsFillExclamationTriangleFill,
} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {HiTemplate} from 'react-icons/hi'
import {GiPathDistance} from 'react-icons/gi'
import {GrEdit} from 'react-icons/gr'

import Items from '../Items'
import './index.css'

const UserData = props => {
  const [display, setDisplay] = useState(false)
  const date = new Date()
  const {userHistory} = props
  const {
    estimateId,
    totalItems,
    fromAddress,
    movingFrom,
    movingTo,
    propertySize,
    distance,
    orderDate,
    oldFloorNo,
    oldElevatorAvailability,
    oldParkingDistance,
    newParkingDistance,
    newElevatorAvailability,
    newFloorNo,
    items,
  } = userHistory

  const onClickViewMore = () => {
    setDisplay(display => !display)
  }

  const AdditionalDetails = () => (
    <div>
      <div className="d-flex flex-row justify-content-between">
        <div>
          <p className="fw-bold">Additional Information</p>
        </div>
        <div>
          <button className="btn btn-dark" type="button">
            Edit Additional Info
          </button>
        </div>
      </div>
      <p>Test Data</p>
      <div className="d-flex flex-row justify-content-between">
        <div>
          <p className="fw-bold">House Details</p>
        </div>
        <div>
          <button className="btn btn-dark" type="button">
            Edit House Details
          </button>
        </div>
      </div>
      <div className="mt-2">
        <p className="col fw-bold">Existing House Details</p>
        <div className="d-flex flex-row justify-content-between">
          <div>
            <p className="fw-bold">Floor No.</p>
            <p>{oldFloorNo}</p>
          </div>
          <div>
            <p className="fw-bold">Elevator Available.</p>
            <p>{oldElevatorAvailability}</p>
          </div>
          <div>
            <p className="fw-bold">Distance from Elevator/Staircase to truck</p>
            <p>{oldParkingDistance}</p>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <p className="col fw-bold">New House Details</p>
        <div className="d-flex flex-row justify-content-between">
          <div>
            <p className="fw-bold">Floor No.</p>
            <p>{newFloorNo}</p>
          </div>
          <div>
            <p className="fw-bold">Elevator Available.</p>
            <p>{newElevatorAvailability}</p>
          </div>
          <div>
            <p className="fw-bold">Distance from Elevator/Staircase to truck</p>
            <p>{newParkingDistance}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="fw-bold">Inventory Details</p>
        <ul className="list-unstyled">
          {items.inventory.map(eachItem => (
            <Items key={eachItem.id} item={eachItem} />
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <li className="m-3 shadow p-3 w-100">
      <div className="d-flex flex-row justify-content-between p-3">
        <div className="w-25">
          <p className="fw-bold">From</p>
          <p>{movingFrom}</p>
        </div>
        <div className="w-25 text-center align-self-center">
          <BsArrowRightCircle />
        </div>

        <div className="w-25">
          <p className="fw-bold">To</p>
          <p>{movingTo}</p>
        </div>
        <div className="w-25 text-center">
          <p className="fw-bold">Request#</p>
          <p className="fw-bold col">{estimateId}</p>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-row">
          <div>
            <AiFillHome color="#f57231" />
          </div>
          <div>
            <p>{propertySize}</p>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div>
            <HiTemplate color="#f57231" />
          </div>
          <div>
            <p>{totalItems}</p>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div>
            <GiPathDistance color="#f57231" />
          </div>
          <p>{distance}</p>
        </div>
        <div className="d-flex flex-row">
          <div>
            <BsFillCalendarCheckFill color="#f57231" />
          </div>
          <div>
            <p>{orderDate}</p>
          </div>
          <div>
            <GrEdit />
          </div>
        </div>
        <div>
          <input id="check" type="checkbox" className="check" checked />
          <label htmlFor="check">Is flexible</label>
        </div>
        <div className="m-2">
          <button
            onClick={onClickViewMore}
            className="viewButton"
            type="button"
          >
            View Move Details
          </button>
        </div>
        <div className="m-2">
          <button className="QuotButton" type="button">
            Quotes Awaiting
          </button>
        </div>
      </div>
      <div className="d-flex flex-row">
        <div>
          <BsFillExclamationTriangleFill color="#f57231" />
        </div>
        <div>
          <p>
            <span className="fw-bold">Disclaimer:</span>Please update your move
            date before two days of shifting
          </p>
        </div>
      </div>
      <div>{display ? AdditionalDetails() : null}</div>
    </li>
  )
}

export default UserData
