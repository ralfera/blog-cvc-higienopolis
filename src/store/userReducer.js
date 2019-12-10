const INITIAL_STATE = {
  user: {
    isLoggedIn: false,
    usuarioEmail: '',
    uid: ''
  },
  sidebar: {
    show: false
  }
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state, user: {
          isLoggedIn:true,
          usuarioEmail: action.usuarioEmail,
          uid: action.uid
        }
      }
    case "LOG_OUT":
      return {
        ...state,
        user: {
        usuarioEmail: null,
        uid: null,
        isLoggedIn: false
        }
      }

    case "OPEN_SIDEBAR":
      return {
        ...state,
        sidebar: {
          show: action.show
        }
       }
    default:
      return state;
  }
};

export default userReducer;
