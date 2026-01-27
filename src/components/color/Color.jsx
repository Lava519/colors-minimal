export default function Color({color}) {
  return (
    <div style={{"backgroundColor": color}} className="color">
      <h2>{color}</h2>
    </div>
  )
}
