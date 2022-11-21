import CartOverlayList from "./CartOverlayList";
import {connect} from "react-redux";
import {selectCartItems, selectTotalPrice, selectTotalQuantity} from "../../features/cart/cartSlice";

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state),
        totalQuantity: selectTotalQuantity(state),
        totalPrice: selectTotalPrice(state)
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlayList)