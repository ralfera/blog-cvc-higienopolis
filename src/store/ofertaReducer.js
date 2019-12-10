const INITIAL_STATE = {
  Destaque:{},
  listaOfertas: []
};

const ofertaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "PUSH_OFERTA_DESTAQUE":
    const ofertaDestaque = []
    action.oferta.map((item, key)=>{
      if(item.destaque === true) {         
          ofertaDestaque.push({
            ...item
          })
        }
      })
      return {
        ...state,
        Destaque: {...ofertaDestaque[0]}
        }
        
    case "PUSH_TODAS_OFERTAS":
    return {
        ...state,
        listaOfertas: action.lista
      }
      default:        
      return state;
  }
};

export default ofertaReducer;
