import styled from 'styled-components';
import Wrapper from '../Wrapper/Wrapper';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.color.green.medium};
    padding: ${({ theme }) => theme.spacing.small}px ${({ theme }) => theme.spacing.small}px;
`;

export const List = styled.ul`
    display: flex;
    background-color: ${({ theme }) => theme.color.green.dark};
    padding: 20px 20px;
    list-style: none;
    color: ${({ theme }) => theme.color.white.regular};
`;

export const NavigationWrapper = styled(Wrapper)`
    display: flex;
    justify-content: space-between;
`;