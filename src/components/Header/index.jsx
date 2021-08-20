import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.nav `
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
`

function Header() {
    return (
        <Container>
            <StyledLink to='/'>Accueil</StyledLink>
            <StyledLink to='/survey/1' $isFullLink>Questionaire</StyledLink>
            <StyledLink to='/freelances'>Freelances</StyledLink>
        </Container>
    )
}

export default Header;