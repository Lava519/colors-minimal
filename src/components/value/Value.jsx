export default function Value({color, remove, index}) {
  return (
    <div className="value-container">
      <h2>{color}</h2>
      <div onClick={ e=>{remove(index)}} className="minus">
        <img src="minus.svg" alt="-"/>
      </div>
    </div>  
  )
}
