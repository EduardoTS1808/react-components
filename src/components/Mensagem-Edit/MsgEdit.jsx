import React from 'react';

const EditableText = () => {
  const handleInput = (event) => {
    console.log(event.target.textContent);
  };

  return (
    <div
      contentEditable
      onInput={handleInput}
      style={{ border: '1px solid #ccc', padding: '8px' }}
    >
      Olá, Eduardo!
    </div>
  );
};

export default EditableText;
