import {PureComponent} from "react";
import Typography from "../base/Typography";
import {injectStyled, Styled} from "styled-jss";
import CartItemContainer from "../CartItem/CartItemContainer";
import IconButton from "../base/IconButton";
import theme from "../../theme";

class CartList extends PureComponent {
    render() {
        const {cartItems, classes, totalQuantity, totalPrice, tax} = this.props;

        return (
            <div className={classes.container}>
                <Typography variant="cart">CART</Typography>
                {cartItems.map((cartItem) => {
                    return <CartItemContainer cartItem={cartItem}/>
                })}

                <div className={classes.totalInformation}>
                    <Typography variant="h4" className={classes.tax}>Tax 21%:
                        <span className={classes.amount}>{tax}</span>
                    </Typography>
                    <Typography variant='h4'>Quantity:
                        <span className={classes.amount}>{totalQuantity}</span>
                    </Typography>
                    <Typography variant="price">Total:
                        <span className={classes.amount}>{totalPrice}</span>
                    </Typography>
                    <IconButton className={classes.orderButton}>ORDER</IconButton>
                </div>
            </div>


        )
    }
}

const styled = Styled({
    container: {
        maxWidth: "1238px",
        margin: "0 auto",
    },
    totalInformation: {
        borderTop: "1px solid #E5E5E5",
        display: "flex",
        flexDirection: "column",
        gap: "8px"

    },
    tax: {
        marginTop: 24
    },
    amount: {
        fontSize: 24,
        fontWeight: 700,
        fontFamily: "Raleway",

    },
    orderButton: {
        width: 279,
        padding: "16px 32px",
        border: "none",
        color: "white",
        fontSize: 14,
        fontFamily: "Raleway",
        backgroundColor: theme.palette.primary.main,
        marginBottom: 200
    }
})

export default injectStyled(styled)(CartList)