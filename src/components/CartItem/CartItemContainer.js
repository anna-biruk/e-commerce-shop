import CartItem from "./CartItem";
import {connect} from "react-redux";
import {decrementQuantity, incrementQuantity} from "../../features/cart/cartSlice";

const mapStateToProps = () => ({})

const mapDispatchToProps = {
    incrementQuantity,
    decrementQuantity
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)