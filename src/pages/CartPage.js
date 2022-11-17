import {PureComponent} from "react";
import HeaderContainer from "../components/Header/HeaderContainer";
import CartListContainer from "../components/CartList/CartListContainer";

class CartPage extends PureComponent {
    render() {
        return (
            <>
                <HeaderContainer/>
                <CartListContainer/>
            </>
        )
    }
}


export default CartPage