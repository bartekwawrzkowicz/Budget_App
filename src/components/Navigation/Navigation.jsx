import { Container, List, NavigationWrapper } from './Navigation.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = ({ items = [], RightElement }) => {
    return (
        <Container>
            <NavigationWrapper>
                <List>
                    {items.map(item => (
                        <li key={item.to}>
                            <Link to={item.to} >{item.content}</Link>
                        </li>
                    ))}
                </List>
                {RightElement}
            </NavigationWrapper>
        </Container>
    );
}

Navigation.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Navigation;