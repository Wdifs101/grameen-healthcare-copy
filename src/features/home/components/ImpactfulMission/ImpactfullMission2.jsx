
import Mission1 from "../../assets/mission-1.png";
import Mission2 from "../../assets/mission-2.png";
import Mission3 from "../../assets/mission-3.png";
import Mission5 from "../../assets/mission-5.png";
import "../ImpactfulMission/StyleFile.css"
const ImpactfullMission2 = () => {
     const images = [Mission1, Mission2, Mission3, Mission5];
     const repeatedImages = [...images, ...images]; // Repeat the images to create a continuous loop
     
    return (
     //    <div className='slider'>
     //         <div className='slider-track'>
     //            <div className='slider'>
     //                 <img src={Mission1} alt="" />
     //            </div>
     //            <div className='slider'>
     //                 <img src={Mission1} alt="" />
     //            </div>
     //            <div className='slider'>
     //                 <img src={Mission1} alt="" />
     //            </div>
     //            <div className='slider'>
     //                 <img src={Mission1} alt="" />
     //            </div>
     //            <div className='slider'>
     //                 <img src={Mission1} alt="" />
     //            </div>
     //            <div className='slider'>
     //                 <img src={Mission1} alt="" />
     //            </div>
     //            <div className='slider'>
     //                 <img src={Mission1} alt="" />
     //            </div>

     //         </div>
     //    </div>
     <div className='slider'>
     <div className='slider-track'>
         {repeatedImages.map((image, index) => (
             <div className='slider' key={index}>
                 <img src={image} alt={`Mission ${index + 1}`} />
             </div>
         ))}
     </div>
 </div>
    );
};

export default ImpactfullMission2;