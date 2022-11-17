import {selectCartItems, selectTax, selectTotalPrice, selectTotalQuantity} from "../../features/cart/cartSlice";
import {connect} from "react-redux";
import CartList from "./CartList";

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state),
        totalQuantity: selectTotalQuantity(state),
        totalPrice: selectTotalPrice(state),
        tax: selectTax(state)
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CartList)