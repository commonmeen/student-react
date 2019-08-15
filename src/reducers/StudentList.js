import _ from 'lodash'


const StudentList = (state=[],action) =>{
    const nextState = _.cloneDeep(state);

    switch(action.type){
        case "SHOW_ALL":
            console.log(nextState)
            //nextState.student = [...state.student,action.payload];
            
            return nextState;
        default:
            return state;
    }
}

export default StudentList