import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  padding-top: 8px;
  grid-column-gap: 4px;
  justify-content: space-around;
`;

export const ListStat = styled.li`
  display: flex;
  padding-top: 4px;
  padding-bottom: 4px;
  flex wrap: wrap;
  flex-direction: column;
  width: calc(100% / 3);
  background-color: #93c47d;
  border-radius: 4px;
  border-bottom: 4px;
`;

export const Text = styled.span`
  font-size: 14px;
  margin-bottom: 4px;
`;

export const Quantity = styled.span`
font - size: 16px;
font weight: bold;
`;
