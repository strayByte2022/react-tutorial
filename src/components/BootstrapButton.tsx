
import { useState } from 'react'

let tracker = 0;
function BootstrapButton() {
  
  const [state, setState] = useState(0);
  return (
    <>
      <button type="button" className={state % 2 === 0 ? "btn btn-primary" : "btn btn-success"} onClick={() => { tracker++;setState(tracker + 1); console.log(tracker) }}>Click here</button>
    </>
  )
}

export default BootstrapButton