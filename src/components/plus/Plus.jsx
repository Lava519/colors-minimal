export default function Plus({index, setVisible, insert}) {
  return (
    <div className="plus">
      <div onMouseOver={e => setVisible(true)} onMouseOut={e => setVisible(false)} onClick={e => insert(index)}><img src="plus.svg" alt="+"/></div>
    </div>  
  ) 
}
