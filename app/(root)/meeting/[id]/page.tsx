import React from 'react'
// export default Meeting;
const Meeting =  ({params}: {params: {id: string}}) => {
  // Simulate fetching meeting data
  return (
    <div>
      <div>Meeting Room : #{params.id}</div>
    </div>
  );
}

export default Meeting;