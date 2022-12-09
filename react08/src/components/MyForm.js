import React, { useState } from 'react';
import { Prompt } from 'react-router-dom';

const MyForm = () => {
  const [isPrompt, setIsPrompt] = useState(false);
  return (
    <div>
      <Prompt when={isPrompt} message="数据将会丢失" />
      <input type="text" onChange={(e) => setIsPrompt(e.target.value.trim().length !== 0)} />
    </div>
  );
};

export default MyForm;
