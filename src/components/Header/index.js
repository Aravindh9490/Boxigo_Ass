import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import {FaTruckMoving} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {RiBillFill} from 'react-icons/ri'
import {AiOutlineLogout} from 'react-icons/ai'
import './index.css'

// const HeadingTitles = [
//   {id: 1, icon: 'FaTruckMoving', title: 'MY MOVES'},
//   {id: 2, icon: 'CgProfile', title: 'MY PROFILE'},
//   {id: 3, icon: 'RiBillFill', title: 'GET QUOTE'},
//   {id: 4, icon: 'AiOutlineLogout', title: 'LOGOUT'},
// ]

class Header extends Component {
  render() {
    return (
      <nav className="p-3">
        <div className="mb-4">
          <img
            className="logo"
            src="https://ik.imagekit.io/b3bpbvln0v/sdwlnz51ii8wy1kosapn.webp?updatedAt=1692888582657"
            alt="logo"
          />
        </div>
        <div className="d-flex flex-column">
          <Link to="/">
            <button type="button" className="onclick m-2">
              <div className="d-flex flex-row">
                <FaTruckMoving className="m-1" />
                <h6 className="fw-bold">MY MOVES</h6>
              </div>
            </button>
          </Link>
          <Link to="/profile">
            <button type="button" className="onclick m-2">
              <div className="d-flex flex-row">
                <CgProfile className="m-1" />
                <h6 className="fw-bold">MY PROFILE</h6>
              </div>
            </button>
          </Link>
          <Link to="/quote">
            <button type="button" className="onclick m-2">
              <div className="d-flex flex-row">
                <RiBillFill className="m-1" />
                <h6 className="fw-bold">GET QUOTE</h6>
              </div>
            </button>
          </Link>
          <div>
            <button type="button" className="onclick m-2">
              <div className="d-flex flex-row">
                <AiOutlineLogout className="m-1" />
                <h6 className="fw-bold">LOGOUT</h6>
              </div>
            </button>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Header)
