import Typography from "../../../shared/components/Typography/Typography";


const WhatARe = () => {
    return (
        <div id="whatAre" className="space-y-3 mt-5">
        <Typography variant='h4'>What are the symptoms of cataract?</Typography>
        <Typography variant="p" className="block">The most common cause of cataract is degenerative changes due to the ageing process. With age, proteins in the natural lens</Typography>
        <Typography variant="p" className="block">For perfect vision the lens should be clear so that light can pass through it. Light enters through the cornea, passes through your natural lens and is focused onto your retina, resulting in clear vision.</Typography>

        <Typography className="font-semibold mt-2" variant="h4">
        degenerate, resulting in a clouded lens called a cataract. There might be other causes such as:
        </Typography>
        <ul className="list-disc pl-5">
          <li>Health conditions like diabetes, kidney disease, glaucoma, smoking, eye injuries, infection, and inflammation inside the eye</li>
          <li>Prolonged use of certain medications can also lead to cataract formation</li>
          <li>Refractive error correction</li>
          <li>
          Cataract may also occur in children due to genetic or metabolic defect or due to infection and trauma
          </li>
        
        </ul>
         
       </div>
    );
};

export default WhatARe;