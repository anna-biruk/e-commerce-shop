import {connect} from "react-redux";
import {
    fetchCategories,
    selectActiveCategory,
    selectCategories,
    setActiveCategory
} from "../../features/categories/categoriesSlice";
import Header from "./Header";
import {
    fetchCurrencies,
    selectCurrencies,
    selectCurrentCurrencySymbol,
    setCurrentCurrency
} from "../../features/currencies/currenciesSlice";
import {selectTotalQuantity} from "../../features/cart/cartSlice";

const mapStateToProps = (state) => {
    return {
        categories: selectCategories(state),
        activeCategory: selectActiveCategory(state),
        currencies: selectCurrencies(state),
        currentCurrencySymbol: selectCurrentCurrencySymbol(state),
        totalQuantity: selectTotalQuantity(state)
    }
}

const mapDispatchToProps = {
    fetchCategories,
    fetchCurrencies,
    setActiveCategory,
    setCurrentCurrency
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);