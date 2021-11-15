import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.color.green.medium};
    padding: ${({ theme }) => theme.spacing.small}px ${({ theme }) => theme.spacing.small}px;
    justify-content: space-between;
    margin: 20px 20px;
`;

export const List = styled.ul`
    background-color: ${({ theme }) => theme.color.green.dark};
    padding: 20px 20px;
    list-style: none;
    color: ${({ theme }) => theme.color.white.regular};
`;