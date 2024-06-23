


const Table = () => {
    const data = [
        {
          name: "Phacoemulsification (Phaco)",
          lens: "Multifocal (Tri-Focal)",
          madeBy: "ALCON/ZEISS",
          charges: "BDT 1,45,000"
        },
        {
          name: "Phacoemulsification (Phaco)",
          lens: "Multifocal (Tri-Focal)",
          madeBy: "ALCON/ZEISS",
          charges: "BDT 1,45,000"
        },
        {
          name: "Phacoemulsification (Phaco)",
          lens: "Multifocal (Tri-Focal)",
          madeBy: "ALCON/ZEISS",
          charges: "BDT 1,45,000"
        },
        {
          name: "Phacoemulsification (Phaco)",
          lens: "Multifocal (Tri-Focal)",
          madeBy: "ALCON/ZEISS",
          charges: "BDT 1,45,000"
        },
        {
          name: "Phacoemulsification (Phaco)",
          lens: "Multifocal (Tri-Focal)",
          madeBy: "ALCON/ZEISS",
          charges: "BDT 1,45,000"
        }
      ];
    
    return (
        <div>
             <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-[#08A316]">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Name of Operation
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Intraocular Lens
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Made By
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Charges
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
           <tr
           key={index}
           className={`bg-white even:bg-[#F1F1F1] odd:bg-white`}
         >
              <td className="px-6 py-4 whitespace-nowrap">
                {item.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.lens}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.madeBy}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.charges}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    );
};

export default Table;