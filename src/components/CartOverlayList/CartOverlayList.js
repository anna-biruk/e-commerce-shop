import {PureComponent} from "react";
import CartItemContainer from "../CartItem/CartItemContainer";
import {injectStyled, Styled} from "styled-jss";

class CartOverlayList extends PureComponent {
    render() {
        const {cartItems} = this.props
        return (
            <>

                {cartItems.map((cartItem) => {
                    return <CartItemContainer cartItem={cartItem} overlay={true}/>
                })}


            </>
        )
    }
}

const styled = Styled({


})

export default injectStyled(styled)(CartOverlayList)