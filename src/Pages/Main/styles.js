import styled from 'styled-components';

import headerBackground from '../../assets/images/reno4-slider-bg.png';

export const Container = styled.div`
  header {
  background-image: url('${headerBackground}');
    background-size: cover 0;
    background-repeat: no-repeat;
    background-position: 50% -2rem;
    width: 100%;
    height: 100vh;
  }
`;
