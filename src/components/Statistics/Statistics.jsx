import { StatisticsSection, Title, StatList, Item, Label, Percentage } from "./Statistics.styled";

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <Item key={stat.id} color={stat.percentage}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsSection>
  );
};