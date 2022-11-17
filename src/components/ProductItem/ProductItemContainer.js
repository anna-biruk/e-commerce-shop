import {connect} from "react-redux";
import ProductItem from "./ProductItem";
import {
    getProductById,
    selectCurrentAttributes,
    selectIsProductLoading,
    selectProductById,
    setAttributes
} from "../../features/products/productsSlice";
import {addToCart} from "../../features/cart/cartSlice";


const mapStateToProps = (state) => {
    return {
        selectedProduct: selectProductById(state),
        isProductLoading: selectIsProductLoading(state),
        attributes: selectCurrentAttributes(state)
    }
}

const mapDispatchToProps = {
    getProductById,
    setAttributes,
    addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
