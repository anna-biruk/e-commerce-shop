import {
    fetchCurrencies,
    selectCurrencies,
    selectCurrentCurrencySymbol,
    setCurrentCurrency
} from "../../features/currencies/currenciesSlice";
import DropdownComponent from "./DropdownComponent";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        currencies: selectCurrencies(state),
        currentCurrencySymbol: selectCurrentCurrencySymbol(state),
    }
}

const mapDispatchToProps = {
    setCurrentCurrency,
    fetchCurrencies,
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownComponent)