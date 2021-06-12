import React from 'react';

// import styled from 'styled-components';

const FancyDiv: React.FC = ({ children }) => {
  return <div style={{ border: '1px solid red' }}>{children}</div>;
};
export default FancyDiv;
