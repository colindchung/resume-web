import CardProjects from '../card/card-projects'
import ecofrostData from '../../assets/card-data/ecofrost'
import billyData from '../../assets/card-data/billy'
import homewatchData from '../../assets/card-data/homewatch'
import healixData from '../../assets/card-data/healix'

function Projects() {
    return (
        <div className="component-container flex flex-col pt-48 pb-64 items-center min-h-screen top-slant">
            <div className="font-poppins text-4xl mb-10">PROJECTS</div>

            <CardProjects data={ecofrostData}/>
            <CardProjects data={healixData}/>
            <CardProjects data={homewatchData}/>
            {/* <CardProjects data={billyData}/> */}
        </div>
    );
  }
  
  export default Projects;
  