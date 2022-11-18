import {PureComponent} from "react";
import Typography from "../base/Typography";
import ColorPicker from "../ColorPicker/ColorPicker";
import AttributePicker from "../AttributePicker/AttributePicker";
import {injectStyled, Styled} from "styled-jss";
import Image from "../base/Image";
import PropTypes from "prop-types";
import IconButton from "../base/IconButton";
import {ReactComponent as CaretLeft} from "../../assets/caretLeft.svg";
import {ReactComponent as CaretRight} from "../../assets/caretRight.svg";

class CartItem extends PureComponent {
    state = {
        currentImageIndex: 0,
    }

    goToPrevious = () => {
        const isFirstImage = this.state.currentImageIndex === 0;
        const newIndex = isFirstImage ? this.props.cartItem.product.gallery.length - 1 : this.state.currentImageIndex - 1;
        this.setState({currentImageIndex: newIndex})
    }
    goToNextImage = () => {
        const isLastImage = this.state.currentImageIndex === this.props.cartItem.product.gallery.length - 1;
        const newIndex = isLastImage ? 0 : this.state.currentImageIndex + 1;
        this.setState({currentImageIndex: newIndex})
    }
    static propTypes = {
        incrementQuantity: PropTypes.func,
        decrementQuantity: PropTypes.func
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
        const {cartItem, classes} = this.props

        return (
            <div className={classes.container}>
                <div className={classes.informationBlock}>
                    <Typography variant="h3" className={classes.title}>{cartItem.product.name}</Typography>
                    <Typography variant="h4" className={classes.brand}>{cartItem.product.brand}</Typography>
                    <Typography variant="price" className={classes.price}>
                        {cartItem.product.currentPrice.currency.symbol}{cartItem.product.currentPrice.amount}
                    </Typography>
                    {cartItem.product.attributes.map((attribute) => {
                        return (
                            <div>
                                <Typography variant="h4"
                                            className={classes.attributesName}>{attribute.name}:</Typography>
                                <div className={classes.attributesValues}>
                                    {attribute.name === "Color" ? (
                                        <ColorPicker attribute={attribute}
                                                     handleClick={this.handleClick()}
                                                     activeItem={cartItem.attributes[attribute.name]}/>
                                    ) : (

                                        <AttributePicker attribute={attribute} handleClick={this.handleClick}
                                                         activeItem={cartItem.attributes[attribute.name]}/>
                                    )}

                                </div>
                            </div>


                        )
                    })}
                </div>
                <div className={classes.imageBlock}>
                    <div className={classes.quantityContainer}>
                        <div className={classes.quantityBlock}
                             onClick={this.handleIncreaseQuantity(cartItem.product.id)}>+
                        </div>
                        <div className={classes.quantityValue}>{cartItem.quantity}</div>
                        <div className={classes.quantityBlock}
                             onClick={this.handleDecreaseQuantity(cartItem.product.id)}>-
                        </div>
                    </div>
                    <Image className={classes.img} src={cartItem.product.gallery[this.state.currentImageIndex]}/>
                    <div className={classes.sliderButtonsContainer}>
                        <IconButton className={classes.sliderButton} onClick={this.goToPrevious}><CaretLeft/>
                        </IconButton>
                        <IconButton className={classes.sliderButton} onClick={this.goToNextImage}> <CaretRight/>
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
    title: {
        fontWeight: 600
    },
    brand: {
        fontWeight: 400,
        lineHeight: "27px",
        marginTop: 16
    },
    price: {
        fontWeight: 700,
        lineHeight: "24px",
        marginTop: 20
    },
    imageBlock: {
        display: "flex",
        flexDirection: "row",
        marginTop: 24,
        marginBottom: 24,
        position: "relative"
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
    attributesValues: {
        display: "flex",
        flexDirection: "row"
    },
    attributesName: {
        fontWeight: 700,
        marginTop: 24
    },
    quantityContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 288,
        marginRight: 24
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
        fontWeight: 100

    },
    quantityValue: {
        fontSize: 24,
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
        gap: "8px"
    },
    sliderButton: {
        display: "flex",
        justifyContent: "center",
        margin: "0 auto",
        border: "none",
        width: 24,
        height: 24,
        background: "rgba(0, 0, 0, 0.73)",

    }

})

export default injectStyled(styled)(CartItem)