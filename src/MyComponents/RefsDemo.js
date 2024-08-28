import React, { useRef, useEffect } from 'react'

export function RefsDemo() {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <>
      <label>Name</label>
      <input type="text" ref={inputRef} />
    </>
  )
}

export default RefsDemo