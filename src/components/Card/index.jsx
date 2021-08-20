import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const Container = styled.div `
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

const CardLabel = styled.span `
    color: #5843e4;
    font-size: 22px;
    font-weight: bold
`
const CardImage = styled.img `
    height: 80px;
    with: 80px;
    border-radius: 50px
`

function Card({ label, title, picture }) {

    return (
        <Container>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" height={80} width={80} />
            <span>{title}</span>
        </Container>
    )
}

Card.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string
}

export default Card;