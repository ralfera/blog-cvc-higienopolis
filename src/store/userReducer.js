const INITIAL_STATE = {
  user: {
    isLoggedIn: false,
    usuarioEmail: '',
    uid: ''
  },
  background: {
    color: "black"
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
      return console.log("deslogou", state);
    default:
      return state;
  }
};

export default userReducer;
