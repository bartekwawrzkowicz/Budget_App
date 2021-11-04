import React from 'react';
import styled from 'styled-components';

import { Wrapper } from 'components';

const Container = styled.div`
    background-color: ${({ theme }) => theme.color.grey.light};
    padding: ${({ theme }) => theme.spacing.small}px ${({ theme }) => theme.spacing.small}px;
    justify-content: space-between;
    margin: 20px 20px;
`;

const Navigation = () => {
    return (
        <Container>
            <Wrapper>
                List
            </Wrapper>
        </Container>
    );
}

export default Navigation;