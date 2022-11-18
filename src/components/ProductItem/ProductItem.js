import {PureComponent} from "react";
import PropTypes from "prop-types";
import Typography from "../base/Typography";
import {injectStyled, Styled} from "styled-jss";
import Image from "../base/Image";
import InformationList from "../InformationList/InformationList";


class ProductItem extends PureComponent {
    static propTypes = {
        getProductById: PropTypes.func,
        productId: PropTypes.string,
        isProductLoading: PropTypes.bool,
        setCurrentImageIndex: PropTypes.func,
        selectedProduct: PropTypes.object,
    }

    componentDidMount() {
        this.props.getProductById(this.props.productId)
    }

    handleActiveImageClick = (index) => () => {
        this.props.setCurrentImageIndex({index})
    }

    render() {
        const {
            selectedProduct,
            classes,
            isProductLoading,
            attributes,
            setAttributes,
            addToCart,
            currentImageIndex
        } = this.props;
        return (
            (isProductLoading || !selectedProduct) ? <Typography variant="h3">Loading</Typography> : (
                <>
                    <div className={classes.container}>
                        <div className={classes.imagesList}>
                            {selectedProduct?.gallery?.map((image, index) => {
                                return <Image
                                    className={classes.selectImage} src={image}
                                    onClick={this.handleActiveImageClick(index)}/>
                            })}
                        </div>
                        <Image className={classes.image} src={selectedProduct.gallery[currentImageIndex]}/>
                        <InformationList attributes={attributes} setAttributes={setAttributes}
                                         selectedProduct={selectedProduct} addToCart={addToCart}/>
                    </div>
                </>
            )
        );
    }
}


const styled = Styled({
    container: {
        display: "flex",
        flexDirection: "row",
        maxWidth: "1238px",
        margin: "0 auto",
    },
    selectImage: {
        width: 80,
        height: 80,
        objectFit: "cover",
        marginBottom: 30
    },
    imagesList: {
        display: "flex",
        flexDirection: "column",
        marginRight: 40

    },
    image: {
        height: 510,
        maxWidth: 610,
        objectFit: "cover",
        marginRight: 100
    }
})

export default injectStyled(styled)(ProductItem)