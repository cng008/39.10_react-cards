import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import axios from 'axios'

/** return an array with two elements.
 *
 * The first element is an array of data obtained from previous AJAX requests.
 * The second element is a function that will add a new object of data to our array
 *
 */

const useAxios = url => {
  const [responses, setResponse] = useState([])
  const addResponseData = async (options = '') => {
    const response = await axios.get(url + options)
    setResponse(cards => [...cards, { ...response.data, id: uuid() }])
  }
  return [responses, addResponseData]
}

export default useAxios
