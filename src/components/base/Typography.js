import styled from "styled-jss";
import PropTypes from "prop-types";

const Typography = styled('div')(({theme, variant}) => theme.typography[variant] || {})

Typography.propTypes = {
    variant: PropTypes.oneOf(['h2', 'h3', 'h4', 'price', 'cart'])
}


export default Typography