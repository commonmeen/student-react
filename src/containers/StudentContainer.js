import StudentForm from "../components/StudentForm";
import { connect } from 'react-redux';
import addStudent from '../actions/indexAction'


const mapDispatchToProps = (dispatch) =>({
    transfer: async(name,surname) => {
        dispatch(addStudent({name,surname}));
    }
})

const mapStateToProps = (state) => {
    const {student} = state.student;
    return {
        student
    }
};


export default connect (mapStateToProps,mapDispatchToProps) (StudentForm)