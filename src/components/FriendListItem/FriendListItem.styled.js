import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  height: 60px;
  padding-left: 16px;
  background-color: #f8f8f8;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
`;

const getIsOnlineColor = ({ $status }) => ($status ? 'green' : 'red');

export const Status = styled.span`
  background-color: ${getIsOnlineColor};
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 20px;
`;