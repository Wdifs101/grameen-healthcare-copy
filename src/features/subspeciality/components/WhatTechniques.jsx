import Typography from "../../../shared/components/Typography/Typography";


const WhatTechniques = () => {
    return (
       
              <div id="whatTechniques" className="space-y-3 mt-5">
        <Typography  variant='h4'>What surgical techniques are available at LVPEI to remove the cataract?</Typography>
        <Typography variant="p" className="block">LVPEI offers various advanced, cutting edge surgical techniques to treat cataract. Based on the type of cataract you have, your health condition and your lifestyle, the Ophthalmologist will recommend the best suitable option for you. The three commonly used surgical techniques are:</Typography>
        {/* <Typography variant="p" className="block">Small Incision Cataract Surgery (SICS):</Typography> */}
        <div>
             <Typography variant="p" className="block font-medium">Small Incision Cataract Surgery (SICS):</Typography>
             <Typography variant="p" className="block">This is also a new technique where the cataract is removed manually through a slightly larger incision. This technique is used if your cataract is excessively hard, making phacoemulsification difficult.</Typography>
             <Typography variant="p" className="block">Phacoemulsification</Typography>
             <ul className="list-disc pl-5">
          <li>In this method a tiny instrument is inserted through a very small incision (approximately 2.2 to 2.8 mm wide).</li>
          <li>Ultrasound vibrations break the cataract into tiny pieces.</li>
          <li>These pieces are gently suctioned out.</li>
        </ul>
        <Typography variant="p" className="block">Usually no stitches are required to close the incision. This minimally invasive surgery allows faster and safer healing, and you can return to your normal activities in no time.</Typography>
        </div>

        <div>
             <Typography variant="p" className="block font-medium">Femto Second Laser Cataract Surgery:</Typography>
             <Typography variant="p" className="block">The Femto-second laser is the latest breakthrough in advanced cataract surgery, resulting in higher precision and safety of crucial steps of the surgery. The laser can help in.</Typography>
             <ul className="list-disc pl-5">
          <li>Creation of surgical incisions</li>
          <li>Perfect Circular opening on the lens surface (capsulotomy)</li>
          <li>Fragmentation of the natural human cataractous lens</li>
        </ul>
        <Typography variant="p" className="block">The additional advantage of this laser is that it is accurate enough to plan incisions in the peripheral cornea to aid in the correction of pre-existing corneal astigmatism (cylindrical power).</Typography>
        </div> 
         
       </div>
     
    );
};

export default WhatTechniques;