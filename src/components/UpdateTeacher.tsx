import React, { useState } from 'react';

const UpdateTeacherLevel: React.FC = () => {
  const [selectedName, setSelectedName] = useState<string>('');
  const names = ['ENTRY', 'Beginner', 'INTERMEDIATE', 'ADVANCED','AMBASSADOR'];

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedName(event.target.value);
  };

  return (
    <div className='flex justify-center items-center h-screen'>
  <div className='bg-white shadow-lg rounded-md w-100 p-4'>
    <h2 className='text-black font-bold'>You can Update Teacher Level/category Only</h2>
      <label htmlFor="name-select" className='my-2'>Select a name:</label>
      <select id="name-select" className='border-2 border-solid border-green w-full rounded-sm p-2 ' value={selectedName} onChange={handleSelectChange}>
        <option value="" disabled>Select a name</option>
        {names.map((name, index) => (
          <option key={index} value={name}>{name}</option>
        ))}
      </select>
      <p className='my-4'>
      {selectedName && <p>You selected: {selectedName}</p>}
      </p>
      

<div className='flex justify-center'>
<button className='bg-[green] text-white rounded-md mt-2 p-2'>Update</button>
</div>
      
    </div>
    </div>
  
  );
};

export default UpdateTeacherLevel;
