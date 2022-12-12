import React, { useImperativeHandle, useRef } from 'react';

const Some = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      changeInputValue: (val) => {
        inputRef.current.value = val;
      },
    };
  });
  return (
    <div>
      SOME
      <input ref={inputRef} type="text" />
    </div>
  );
});

export default Some;
