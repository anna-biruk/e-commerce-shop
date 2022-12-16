import { PureComponent } from "react";
import PropTypes from "prop-types";
import ProductListItem from "../ProductListItem/ProductListItem";
import Typography from "../base/Typography";
import { injectStyled, Styled } from "styled-jss";


class ProductsList extends PureComponent {
    state = {
        id: 1,
        name: 'Anna'
    }

    static propTypes = {
        fetchData: PropTypes.func,
        products: PropTypes.arrayOf(PropTypes.object)
    }

    componentDidMount() {
        this.props.fetchData()
    }

    render() {
        const { products, classes, addToCart, selectedProduct, attributes } = this.props
        return (
            <div className={classes.container}>
                {
                    products.map((category) => {
                        return (
                            <div key={category.name}>
                                <Typography variant="h2">
                                    {category.name}
                                </Typography>
                                <div className={classes.productList}>
                                    {category.products.map((productItem) => {
                                        return <ProductListItem key={productItem.id} productItem={productItem} addToCart={addToCart}
                                            selectedProduct={selectedProduct}
                                            attributes={attributes} />
                                    })}
                                </div>
                            </div>)

                    })
                }


            </div>
        )
    }
}

const styled = Styled({
    container: {
        maxWidth: "1238px",
        margin: "0 auto",
        marginBottom: 190


    },
    productList: {
        display: "flex",
        rowGap: "103px",
        flexDirection: "row",
        gap: '40px',
        flexWrap: "wrap",
        justifyContent: "flex-start",
        marginTop: 88
    }
})

export default injectStyled(styled)(ProductsList)
