import styled from 'styled-components';
import { features } from './featuresData';

const StyledFeatures = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Madimi One', sans-serif;
  font-weight: 400;
  font-style: normal;
  * {
    margin-bottom: 20px;
  }
`;

const StyledFeaturesGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
        padding: 10px;
        border: 1px solid #c6c7d2;
        border-radius: 5px;
        background-color: #c6c7d2;
        h2 {
        margin-bottom: 10px;
        }
    }
    `;

const Features = () => {
return (
    <StyledFeatures>
        <h1>Features</h1>
        <StyledFeaturesGrid>
            {features.map((feature, index) => {
                return (
                    <li key={index}>
                        <h2>{feature.name}</h2>
                        <p>{feature.description}</p>
                    </li>
                );
            })}
        </StyledFeaturesGrid>
    </StyledFeatures>
);
};

export default Features;
