import {connect} from "react-redux";
import {PureComponent} from "react";

class ProductsList extends PureComponent {
    render() {
        return (
            <>
                {
                    JSON.stringify(this.props)
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.items,
    }
}


export default connect(mapStateToProps)(ProductsList);
