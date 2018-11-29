const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    // todo login
    case 'LOGIN_ERROR': 
      console.log('login error')
      return  {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS': 
      console.log('login success')
      console.log('waht does the state have', state)
      return {
        ...state,
        authError: null
      }
    // todo signout
    case 'SIGNOUT_SUCCESS': 
      console.log('SIGINOUT success')
      return state
    // todo signup
    case 'SIGNUP_SUCCESS': 
      console.log('SIGINUP success')
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR': 
      console.log('SIGINUP error')
      console.log('signup error is', action.err);
      // can i print out err message like err.message
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state
  }
}

export default authReducer