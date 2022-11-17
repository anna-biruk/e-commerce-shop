import {PureComponent} from "react";
import ProductItemContainer from "../components/ProductItem/ProductItemContainer";
import {withRouter} from "../hocs/withRouter";
import HeaderContainer from "../components/Header/HeaderContainer";

class ProductPage extends PureComponent {
    render() {
        return (
            <>
                <HeaderContainer/>
                <ProductItemContainer productId={this.props.router.params.productId}/>
            </>
        )
    }
}

export default withRouter(ProductPage)