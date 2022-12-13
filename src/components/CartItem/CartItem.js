import { PureComponent } from "react";
import Typography from "../base/Typography";
import ColorPicker from "../ColorPicker/ColorPicker";
import AttributePicker from "../AttributePicker/AttributePicker";
import { injectStyled, Styled } from "styled-jss";
import Image from "../base/Image";
import PropTypes from "prop-types";
import IconButton from "../base/IconButton";
import { ReactComponent as CaretLeft } from "../../assets/caretLeft.svg";
import { ReactComponent as CaretRight } from "../../assets/caretRight.svg";
import clsx from "clsx";

class CartItem extends PureComponent {
    state = {
        currentImageIndex: 0,
    }

    goToPrevious = () => {
        const isFirstImage = this.state.currentImageIndex === 0;
        const newIndex = isFirstImage ? this.props.cartItem.product.gallery.length - 1 : this.state.currentImageIndex - 1;
        this.setState({ currentImageIndex: newIndex })
    }
    goToNextImage = () => {
        const isLastImage = this.state.currentImageIndex === this.props.cartItem.product.gallery.length - 1;
        const newIndex = isLastImage ? 0 : this.state.currentImageIndex + 1;
        this.setState({ currentImageIndex: newIndex })
    }
    static propTypes = {
        incrementQuantity: PropTypes.func,
        decrementQuantity: PropTypes.func,
        overlay: PropTypes.bool,
    }

    handleClick = () => () => {
    }
    handleIncreaseQuantity = (id) => () => {
        this.props.incrementQuantity(id)
    }
    handleDecreaseQuantity = (id) => () => {
        this.props.decrementQuantity(id)
    }

    render() {
        const { cartItem, classes, overlay } = this.props

        return (
            <div className={clsx(classes.container, { [classes.overlayContainer]: overlay })}>
                <div className={clsx(classes.informationBlock, { [classes.overlayInformationBlock]: overlay })}>
                    <Typography variant="h3" className={clsx(classes.title,
                        { [classes.overlayTitle]: overlay })}>
                        {cartItem.product.name}
                    </Typography>
                    <Typography variant="h4" className={clsx(classes.brand,
                        { [classes.overlayBrand]: overlay })}>{cartItem.product.brand}</Typography>
                    <Typography variant="price" className={clsx(classes.price,
                        { [classes.overlayPrice]: overlay })}>
                        {cartItem.product.currentPrice.currency.symbol}{cartItem.product.currentPrice.amount}
                    </Typography>
                    {cartItem.product.attributes.map((attribute) => {
                        return (
                            <div>
                                <Typography variant="h4"
                                    className={clsx(classes.attributesName, { [classes.overlayAttributesName]: overlay })}>{attribute.name}:</Typography>
                                <div className={classes.attributesValues}>
                                    {attribute.name === "Color" ? (
                                        <ColorPicker attribute={attribute}
                                            small={overlay}
                                            handleClick={this.handleClick()}
                                            activeItem={cartItem.attributes[attribute.name]} />
                                    ) : (

                                        <AttributePicker attribute={attribute} handleClick={this.handleClick}
                                            small={overlay}
                                            activeItem={cartItem.attributes[attribute.name]} />
                                    )}

                                </div>
                            </div>


                        )
                    })}
                </div>
                <div className={clsx(classes.imageBlock, { [classes.overlayImageBlock]: overlay })}>
                    <div className={clsx(classes.quantityContainer, { [classes.overlayQuantityContainer]: overlay })}>
                        <div className={clsx(classes.quantityBlock, { [classes.overlayQuantityBlock]: overlay })}
                            onClick={this.handleIncreaseQuantity(cartItem.product.id)}>+
                        </div>
                        <div
                            className={clsx(classes.quantityValue, { [classes.overlayQuantityValue]: overlay })}>{cartItem.quantity}</div>
                        <div className={clsx(classes.quantityBlock, { [classes.overlayQuantityBlock]: overlay })}
                            onClick={this.handleDecreaseQuantity(cartItem.product.id)}>-
                        </div>
                    </div>
                    <Image className={clsx(classes.img, { [classes.overlayImage]: overlay })}
                        src={cartItem.product.gallery[this.state.currentImageIndex]} />
                    <div className={classes.sliderButtonsContainer}>
                        <IconButton className={classes.sliderButton} onClick={this.goToPrevious}><CaretLeft />
                        </IconButton>
                        <IconButton className={classes.sliderButton} onClick={this.goToNextImage}> <CaretRight />
                        </IconButton>
                    </div>
                </div>
            </div>

        )
    }
}

const styled = Styled({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderTop: "1px solid #E5E5E5",
    },
    overlayContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        border: "none"
    },
    title: {
        fontWeight: 600
    },
    overlayTitle: {
        fontWeight: 300,
        fontSize: 16,
    },
    brand: {
        fontWeight: 400,
        lineHeight: "27px",
        marginTop: 16
    },
    overlayBrand: {
        fontWeight: 300,
        fontSize: 16,
        marginTop: 4
    },

    price: {
        fontWeight: 700,
        lineHeight: "24px",
        marginTop: 20
    },
    overlayPrice: {
        fontWeight: 500,
        fontSize: 16,
        marginTop: 4
    },
    imageBlock: {
        display: "flex",
        flexDirection: "row",
        marginTop: 24,
        marginBottom: 24,
        position: "relative"
    },
    overlayImageBlock: {
        marginTop: 32,
        marginBottom: 40,
    },
    informationBlock: {
        marginTop: 24,
        marginBottom: 24
    },

    img: {
        width: 200,
        height: 288,
        objectFit: "cover",
    },
    overlayImage: {
        width: 121,
        height: 190,
        objectFit: "cover",
    },
    attributesValues: {
        display: "flex",
        flexDirection: "row"
    },
    attributesName: {
        fontWeight: 700,
        marginTop: 24,
        marginBottom: 8
    },
    overlayAttributesName: {
        fontSize: 14,
        fontWeight: 400,
        marginTop: 8
    },
    quantityContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 288,
        marginRight: 24
    },
    overlayQuantityContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 190,
        marginRight: 8
    },
    quantityBlock: {
        width: 45,
        height: 45,
        border: "1px solid #1D1F22",
        fontSize: 38,
        fontFamily: "Raleway",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 100,
        cursor: "pointer",


    },
    overlayQuantityBlock: {
        width: 24,
        height: 24,
        border: "1px solid #1D1F22",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 29,
        fontWeight: 300,
        cursor: "pointer",
    },
    quantityValue: {
        fontSize: 24,
        fontWeight: 500,
        alignItems: "center",
        display: "flex",
        justifyContent: "center"
    },
    overlayQuantityValue: {
        fontSize: 16,
        fontWeight: 500,
        alignItems: "center",
        display: "flex",
        justifyContent: "center"
    },
    sliderButtonsContainer: {
        position: "absolute",
        bottom: 16,
        right: 16,
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        cursor: "pointer",
    },
    sliderButton: {
        display: "flex",
        justifyContent: "center",
        margin: "0 auto",
        border: "none",
        width: 24,
        height: 24,
        background: "rgba(0, 0, 0, 0.73)",
        cursor: "pointer",

    }

})

export default injectStyled(styled)(CartItem)