import axios from 'axios'
import { HOST } from './config'

export function login (phone, pwd) {
  const url = HOST + `/login/cellphone?phone=${phone}&password=${pwd}`

  return axios.get(url, {
    xhrFields: {
      withCredentials: true // 关键
    }
  }
  )
}
