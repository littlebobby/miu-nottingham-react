export const PLUS_ONE = 'PLUS_ONE';
export const EVENT_LIST = 'EVENT_LIST';
export const LIKE_PLUS_ONE = 'LIKE_PLUS_ONE'


export function plusOne () {
  return ({type: PLUS_ONE})
}

export function likePlusOne (id) {
  return ({type: LIKE_PLUS_ONE, payload: id})
}