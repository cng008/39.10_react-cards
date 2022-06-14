import { useState } from 'react'

/** return an array with two elements
 *
 * The first element is the current flip state of the card,
 * and the second element is a function that will toggle the flip state
 *
 */

const useFlip = (initialState = true) => {
  const [state, setState] = useState(initialState)
  const toggleState = () => {
    setState(state => !state)
  }
  return [state, toggleState]
}

export default useFlip
