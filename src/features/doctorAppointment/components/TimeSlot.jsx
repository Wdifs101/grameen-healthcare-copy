const TimeSlot = ({ time, selected, onClick }) => {
    return (
      <h2
        className={`border rounded-lg  cursor-pointer p-2 m-1 ${
          selected ? 'bg-blue-500 text-white' : 'bg-white text-black'
        }`}
        onClick={onClick}
      >
        {time}
      </h2>
    );
  };
  
  export default TimeSlot;