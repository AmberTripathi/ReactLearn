import React, { memo } from 'react';

export const MemoComp = memo(({ name }) => {
  console.log("Rendering memo component");
  return (
    <div>{name}</div>
  );
});