import PropTypes from "prop-types";
import { PureComponent } from "react";
import { injectStyled, Styled } from "styled-jss";
import clsx from "clsx";

class Typography extends PureComponent {

    render() {
        const { variant, children, classes, className } = this.props

        return (
            <div className={clsx(classes[variant], className)}>
                {children}
            </div>
        )
    }
}

Typography.propTypes = {
    variant: PropTypes.oneOf(['h2', 'h3', 'h4', 'price', 'cart'])
}

const styled = Styled({
    h2: {
        fontSize: 42,
        fontWeight: 400,
        fontFamily: "Raleway",
    },
    h3: {
        fontSize: 30,
        fontFamily: "Raleway",

    },
    h4: {
        fontSize: 18,
        fontFamily: "Raleway",
    },
    cart: {
        fontSize: 32,
        fontFamily: "Raleway",
        fontWeight: 700,
        marginBottom: 30
    },
    price: {
        fontSize: 24,
        fontFamily: 'Raleway',
    },
})

export default injectStyled(styled)(Typography)