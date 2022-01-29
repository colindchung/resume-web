import Card from '../card/card'
import spsData from '../../assets/card-data/sps'
import uptakeData from '../../assets/card-data/uptake'
import bdoData from '../../assets/card-data/bdo'
import geekEduData from '../../assets/card-data/geekedu'

function Work() {
    return (
        <div className="component-container flex flex-col pt-48 pb-64 items-center bg-slate-700 min-h-screen top-slant">
            <div className="font-poppins text-4xl text-teal-500 mb-10">WORK EXPERIENCE</div>

            {/* <Card data={wishData}/> */}
            <Card data={bdoData}/>
            <Card data={uptakeData}/>
            <Card data={spsData}/>
            <Card data={geekEduData}/>
        </div>
    );
  }
  
  export default Work;
  