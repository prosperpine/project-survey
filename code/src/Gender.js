import React, { useState } from 'react';

export const Gender = () => {
  const [gender, setGender] = useState('');

  return (
    <form>
      <select onChange={(event) => setGender(event.target.value)} value={gender}>
        <option value=""> Select gender:</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="None of the above">None of the above</option>
      </select>
    </form>
  );
};

export default Gender;