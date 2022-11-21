import {selectCartItems, selectTotalPrice, selectTotalQuantity} from "../../features/cart/cartSlice";
import {connect} from "react-redux";
import Modal from "./Modal";

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state),
        totalQuantity: selectTotalQuantity(state),
        totalPrice: selectTotalPrice(state)
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)