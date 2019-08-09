import React from 'react';
import DeviceOrientation from 'react-device-orientation';

function App() {
  return (
<DeviceOrientation>
    {({ absolute, alpha, beta, gamma }) => (
      <div>
        {`Absolute: ${absolute}`}
        {`Alpha: ${alpha}`}
        {`Beta: ${beta}`}
        {`Gamma: ${gamma}`}
      </div>
    )}
  </DeviceOrientation>
  );
}

export default App;
