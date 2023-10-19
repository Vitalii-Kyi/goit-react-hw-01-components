import styled from 'styled-components';

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

export const StatisticsSection = styled.section`
  margin: 60px auto;
  width: 320px;
  height: auto;
  background-color: #f8f8f8;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  text-transform: uppercase;
  padding: 24px;
`;

export const StatList = styled.ul`
  display: flex;
  grid-column-gap: 4px;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
  margin-right: 4px;
`;

export const Item = styled.li`
  width: calc(100% / 5);
  padding-top: 4px;
  padding-bottom: 4px;
  margin-bottom: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${randomHexColor};
`;

export const Label = styled.span`
  margin-bottom: 10px;
  color: #ffffff;
`;

export const Percentage = styled.span`
  font-size: 16px;
  color: #ffffff;
`;
