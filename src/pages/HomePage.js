import React, {PureComponent} from "react";
import HeaderContainer from "../components/Header/HeaderContainer";
import ProductsListContainer from "../components/ProductsList/ProductsListContainer";

class HomePage extends PureComponent {
    render() {
        return (
            <>
                <HeaderContainer/>
                <ProductsListContainer/>
            </>
        )
    }
}

export default HomePage