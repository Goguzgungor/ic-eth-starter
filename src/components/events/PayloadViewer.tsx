import React from 'react';

const PayloadViewer = (payload: any) => {
  return (
    <div>
      <h3>Event: {payload.event}</h3>
      <p>Contract: {payload.contract}</p>
      <p>From: {payload.payload.from}</p>
      <p>To: {payload.payload.to}</p>
      <p>__length__: {payload.payload.__length__}</p>
    </div>
  );
};

export default PayloadViewer;
