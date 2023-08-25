import {useState} from 'react'
import ItemsList from '../ItemsList'
import './index.css'

const Items = props => {
  const [displayItems, setDisplayItems] = useState(false)
  const {item} = props

  const onDisplayItems = () => {
    setDisplayItems(displayItems => !displayItems)
  }

  const renderItems = () => (
    <div>
      <ul className="d-flex flex-row justify-content-between">
        {item.category.map(items => (
          <ItemsList key={items.id} itemsList={items} />
        ))}
      </ul>
    </div>
  )

  return (
    <li onClick={onDisplayItems} className="bgcol">
      <p className="p-2 col fw-bold">
        {item.displayName}
        <span className="count m-2"> {item.category.length}</span>
      </p>
      <div className="bg-light">{displayItems ? renderItems() : null}</div>
    </li>
  )
}

export default Items
