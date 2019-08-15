import { connect } from 'react-redux';
import StudentList from '../components/StudentList';
import getAllStudent from '../actions/ListAction'

const mapDispatchToProps = (dispatch) =>({
    findData: async(name) => {
        try{
            let a = await fetch("http://localhost:8080/api/all")
            let resutl = await a.json()
            dispatch(getAllStudent(resutl))
        }
        catch(error){
            console.error(error.message)
        }
        
    }
})



export default connect (null,mapDispatchToProps) (StudentList)