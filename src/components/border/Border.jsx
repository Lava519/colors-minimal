export default function Border({position ,setVisible}) {
  return (
    <div onMouseOver={e => setVisible(true)} onMouseOut={e => setVisible(false)} className={`border border-${position}`}></div>
  )
}
