import {connect} from "react-redux";
import ProductsList from "./ProductsList";
import {
    fetchData,
    selectCurrentAttributes,
    selectProductById,
    selectProducts
} from "../../features/products/productsSlice";
import {addToCart} from "../../features/cart/cartSlice";


const mapStateToProps = (state) => {
    return {
        products: selectProducts(state),
        selectedProduct: selectProductById(state),
        attributes: selectCurrentAttributes(state)
    }
}

const mapDispatchToProps = {
    fetchData,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
