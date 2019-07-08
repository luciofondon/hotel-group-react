import action from '../action-types';

function data(state, action){
    switch(action.type){
        case action.SEARCH_HOTEL: {
            let results = [];
            if(action.payload.query){ //Para cuando busco sin introducir texto
                const list = state.data.categories[2].playlist;
                result = list.filter((item)=>{
                return  item.author.includes(action.payload.query);
                })
            }
            return {
                ...state,
                search: result
            };
        }
        default:
            return state;
    }
}

export default data;