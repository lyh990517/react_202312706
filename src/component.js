import React, { useState } from 'react';

function App() {
  // 입장 및 퇴장 인원 수를 저장하는 상태 변수
  const [entranceCount, setEntranceCount] = useState(0);
  const [exitCount, setExitCount] = useState(0);

  const increaseEntranceCount = () => {
    setEntranceCount(entranceCount + 1);
  };

  const increaseExitCount = () => {
    setExitCount(exitCount + 1);
  };

  return (
    <div>
      <h1>입장/퇴장 인원 체크 앱</h1>
      <p>입장한 인원: {entranceCount} 명</p>
      <p>퇴장한 인원: {exitCount} 명</p>
      <button onClick={increaseEntranceCount}>입장</button>
      <button onClick={increaseExitCount}>퇴장</button>
    </div>
  );
}

export default App;