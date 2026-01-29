export default function Border({position ,setVisible}) {
  return (
    <div onMouseEnter={e => setVisible(true)} onMouseLeave={e => setVisible(false)} className={`border border-${position}`}></div>
  )
}
