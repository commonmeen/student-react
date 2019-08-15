import _ from 'lodash'


const StudentReducer = (state= {student:[]},action) =>{
    const nextState = _.cloneDeep(state);

    switch(action.type){
        case "ADD":
            nextState.student = [...state.student,action.payload];
            console.log(nextState)
            return nextState;
        default:
            return state;
    }
}

export default StudentReducer