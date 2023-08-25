const ItemsList = props => {
  const {itemsList} = props
  const {displayName, items} = itemsList

  return (
    <div>
      <div className="">
        <p className="fw-bold">{displayName}</p>
        {items.map(each => (
          <>
            {each.qty >= 1 ? (
              <div className="d-flex flex-row">
                <p className="m-2">{each.displayName}</p>
                <p className="fw-bold m-2">{each.qty}</p>
              </div>
            ) : null}
          </>
        ))}
      </div>
    </div>
  )
}
export default ItemsList
