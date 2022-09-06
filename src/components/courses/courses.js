import CardCourses from '../card/card-courses'
import ece124Data from '../../assets/card-data/courses/124'
import ece150Data from '../../assets/card-data/courses/150'
import ece250Data from '../../assets/card-data/courses/250'
import ece252Data from '../../assets/card-data/courses/252'
import ece327Data from '../../assets/card-data/courses/327'

function Courses() {
    return (
        <div className="component-container flex flex-col pt-48 pb-64 items-center bg-slate-700 min-h-screen top-slant">
            <div className="font-poppins text-4xl text-teal-500 mb-10">COURSE WORK</div>

            <CardCourses data={ece327Data}/>
            <CardCourses data={ece252Data}/>
            <CardCourses data={ece250Data}/>
            <CardCourses data={ece124Data}/>
            <CardCourses data={ece150Data}/>
        </div>
    );
  }
  
  export default Courses;
  