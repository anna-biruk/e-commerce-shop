import styled from "styled-jss";
import PropTypes from "prop-types";

const Card = styled('div')(({theme, variant}) => theme.card[variant] || {})

Card.propTypes = {
    variant: PropTypes.oneOf(['productCard'])
}

export default Card