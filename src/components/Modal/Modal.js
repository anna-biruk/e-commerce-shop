import {Component} from "react";
import IconButton from "../base/IconButton";
import {injectStyled, Styled} from "styled-jss";
import clsx from "clsx";
import CartOverlayListContainer from "../CartOverlayList/CartOverlayListContainer";
import theme from "../../theme";
import {Link} from "react-router-dom";
import Typography from "../base/Typography";

class Modal extends Component {
    render() {
        const {show, children, classes, totalQuantity, totalPrice} = this.props
        return (
            <>
                <div
                    className={clsx(classes.modal, [show ? classes.displayBlock : classes.displayNone],
                    )}>

                    {children}
                    <Typography className={classes.bag}>My Bag, <span
                        className={classes.quantity}>{totalQuantity} items</span></Typography>
                    <CartOverlayListContainer/>
                    <div className={classes.totalPriceContainer}>
                        <Typography className={classes.total}>Total: </Typography>
                        <Typography className={classes.priceNumber}>{totalPrice}</Typography>
                    </div>
                    <div className={classes.buttonsContainer}>
                        <Link to="/cart" className={classes.link}>
                            <IconButton className={classes.viewBagButton}>VIEW BAG</IconButton>
                        </Link>
                        <IconButton className={classes.checkOutButton} onClick={this.props.handleClose}>CHECK
                            OUT</IconButton>
                    </div>


                </div>
                <div
                    className={clsx(classes.modalBackDrop, [show ? classes.displayBlock : classes.displayNone])}>
                </div>

            </>

        )
    }
}


const styled = Styled({
    modal: {
        position: "fixed",
        top: 78,
        right: 74,
        width: 325,
        backgroundColor: "white",
        zIndex: 30,
        paddingRight: 18,
        paddingLeft: 18,
        maxHeight: "calc(100vh - 100px)",
        overflowY: "auto"

    },
    modalBackDrop: {
        position: "fixed",
        top: 78,
        zIndex: 10,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(57, 55, 72, 0.22)",
    },
    bag: {
        fontSize: 16,
        fontWeight: 700,
    },
    quantity: {
        fontSize: 16,
        fontWeight: 500,
    },
    total: {
        fontSize: 16,
        fontWeight: 500
    },
    priceNumber: {
        fontSize: 16,
        fontWeight: 700
    },
    totalPriceContainer: {
        display: "flex",
        justifyContent: "space-between"
    },
    displayBlock: {
        display: "block"
    },
    displayNone: {
        display: "none"
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 32,
        marginBottom: 32,
    },
    link: {
        textDecoration: "none"
    },
    viewBagButton: {
        width: 140,
        height: 43,
        borderRadius: "1px solid #1D1F22",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        fontSize: 14,
        fontWeight: 400,
        boxSizing: "border-box",
        cursor: "pointer",
    },
    checkOutButton: {
        width: 140,
        height: 43,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 14,
        fontWeight: 400,
        boxSizing: "border-box",
        backgroundColor: theme.palette.primary.main,
        border: "none",
        color: "white",
        cursor: "pointer",

    },

})
export default injectStyled(styled)(Modal)