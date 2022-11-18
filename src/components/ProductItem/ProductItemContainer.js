import {connect} from "react-redux";
import ProductItem from "./ProductItem";
import {
    getProductById,
    selectCurrentAttributes,
    selectCurrentImageIndex,
    selectIsProductLoading,
    selectProductById,
    setAttributes, setCurrentImageIndex
} from "../../features/products/productsSlice";
import {addToCart} from "../../features/cart/cartSlice";


const mapStateToProps = (state) => {
    return {
        selectedProduct: selectProductById(state),
        isProductLoading: selectIsProductLoading(state),
        attributes: selectCurrentAttributes(state),
        currentImageIndex: selectCurrentImageIndex(state)
    }
}

const mapDispatchToProps = {
    getProductById,
    setAttributes,
    addToCart,
    setCurrentImageIndex
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
