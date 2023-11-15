import React, { useState } from 'react';
import { Input, Button, Typography } from 'antd';
import './trigger.scss';
import PayloadViewer from './PayloadViewer';

const { Title, Paragraph } = Typography;

const Triggers = () => {
  const [contract, setContract] = useState('');
  const [contract2, setContract2] = useState('');
  const [payloadvicival, serPayload] = useState('' as any);
  const [payloadvicival2, serPayload2] = useState('' as any);
  const payload = {
    event: 'Transfer',
    contract: '0xec2539400BB79aA7cc2a028B1031bcb1CAb575D0',

    from: '0xec2539400BB79aA7cc2a028B1031bcb1CAb575D0',
    to: '0x2947F98C42597966a0ec25e92843c09ac17Fbaa7',
    __length__: 3,
  };

  const handleTopla = () => {
    if (contract != '') {
      serPayload(payload);
    }
  };

  const triggerSolana = () => {
    serPayload2(
      'https://solscan.io/tx/47DVBrxue5ZxKMNmhQYCnB2seN3v3MRHx2ZY1bnAo2y861eab439ULYzpRKif6UD8P5WJxRcWMEkfLy8xt1NqJen',
    );
  };

  return (
    <div style={{ width: '300px', margin: 'auto', textAlign: 'start' }}>
      <Title level={2}>Contract Fusion</Title>

      <div className="contract-div">
        <Input
          type="text"
          placeholder="Enter Contract One"
          value={contract}
          onChange={(e) => setContract(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <Button
          type="primary"
          onClick={handleTopla}
          style={{ marginBottom: '10px' }}
        >
          Listen
        </Button>
      </div>

      <div className="contract-div">
        <Input
          type="text"
          placeholder="Enter Contract Two"
          value={contract2}
          onChange={(e) => setContract2(e.target.value)}
          style={{ marginBottom: '10px' }}
        />

        <Button
          type="primary"
          onClick={triggerSolana}
          style={{ marginBottom: '10px' }}
        >
          Direct
        </Button>
      </div>

      <Paragraph>"Toplam"</Paragraph>
      <div style={{ color: 'white' }}>
        <h3>Event: {payloadvicival.event}</h3>
        <p>Contract: {payloadvicival.contract}</p>
        <p>From: {payloadvicival.from}</p>
        <p>To: {payloadvicival.to}</p>
        <p>__length__: {payloadvicival.__length__}</p>
        <h1>{payloadvicival2}</h1>
      </div>
    </div>
  );
};

export default Triggers;
