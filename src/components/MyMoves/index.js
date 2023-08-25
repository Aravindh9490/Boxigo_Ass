import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import UserData from '../UserData'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class MyMoves extends Component {
  state = {apiData: [], display: apiStatusConstants.initial}

  componentDidMount() {
    this.getApi()
  }

  getApi = async () => {
    this.setState({display: apiStatusConstants.inProgress})

    const url = 'http://test.api.boxigo.in/sample-data/'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.Customer_Estimate_Flow.map(
        userDetails => ({
          callBack: userDetails.call_back,
          customStatus: userDetails.custom_status,
          dateCreated: userDetails.date_created,
          dateOfCancel: userDetails.date_of_cancel,
          dateOfComplete: userDetails.date_of_complete,
          distance: userDetails.distance,
          estimateAmount: userDetails.estimateAmount,
          estimateComparison: userDetails.estimate_comparison,
          estimateId: userDetails.estimate_id,
          estimateStatus: userDetails.estimate_status,
          fromAddress: userDetails.from_address,
          items: userDetails.items,
          moveDateFlexible: userDetails.move_date_flexible,
          movingFrom: userDetails.moving_from,
          movingOn: userDetails.moving_on,
          movingTo: userDetails.moving_to,
          newElevatorAvailability: userDetails.new_elevator_availability,
          newFloorNo: userDetails.new_floor_no,
          newHouseAdditionalInfo: userDetails.new_house_additional_info,
          newParkingDistance: userDetails.new_parking_distance,
          oldElevatorAvailability: userDetails.old_elevator_availability,
          oldFloorNo: userDetails.old_floor_no,
          oldHouseAdditionalInfo: userDetails.old_house_additional_info,
          oldParkingDistance: userDetails.old_parking_distance,
          orderDate: userDetails.order_date,
          orderReviewed: userDetails.order_reviewed,
          packingService: userDetails.packing_service,
          propertySize: userDetails.property_size,
          serviceType: userDetails.service_type,
          status: userDetails.status,
          storageItems: userDetails.storage_items,
          successfulPayments: userDetails.successfulPayments,
          toAddress: userDetails.to_address,
          totalItems: userDetails.total_items,
          unpackingService: userDetails.unpacking_service,
          userId: userDetails.user_id,
        }),
      )
      this.setState({apiData: updatedData, display: apiStatusConstants.success})
    }
    if (response.status === 401) {
      this.setState({display: apiStatusConstants.failure})
    }
  }

  renderSuccess = () => {
    const {apiData} = this.state
    return (
      <div className="d-flex flex-row">
        <div>
          <Header />
        </div>
        <div className="mt-5 p-5">
          <p className="fw-bold">My Moves</p>
          <ul className="list-unstyled">
            {apiData.map(history => (
              <UserData key={history.estimateId} userHistory={history} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  finalResult = () => {
    const {display} = this.state
    switch (display) {
      case 'IN_PROGRESS':
        return this.renderLoader()
      case 'SUCCESS':
        return this.renderSuccess()

      default:
        return null
    }
  }

  render() {
    const {apiData} = this.state
    return (
      <div className="d-flex flex-row">
        <div>
          <Header />
        </div>
        <div className="mt-5 p-5">
          <p className="fw-bold">My Moves</p>
          <ul className="list-unstyled">
            {apiData.map(history => (
              <UserData key={history.estimateId} userHistory={history} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MyMoves
