import {PureComponent} from "react";
import Typography from "../base/Typography";
import IconButton from "../base/IconButton";
import parse from "html-react-parser";
import {injectStyled, Styled} from "styled-jss";
import theme from "../../theme";
import PropTypes from "prop-types";
import ColorPicker from "../ColorPicker/ColorPicker";
import AttributePicker from "../AttributePicker/AttributePicker";

class InformationList extends PureComponent {
    static propTypes = {
        setAttributes: PropTypes.func
    }
    handleClick = (value, name) => () => {
        this.props.setAttributes({value, name})
    };
    handleAddToCartClick = () => {
        this.props.addToCart({attributes: this.props.attributes, product: this.props.selectedProduct})
    }

    render() {
        const {classes, selectedProduct, attributes} = this.props
        return (
            <div className={classes.informationBlock}>
                <Typography className={classes.title} variant="h3">{selectedProduct.name}</Typography>
                <Typography variant='h4'>{selectedProduct.brand}</Typography>
                <div>
                    {selectedProduct?.attributes?.map((attribute) => {
                        return (
                            <>
                                <Typography variant="h4"
                                            className={classes.attributesName}>{attribute.name}:</Typography>
                                <div className={classes.attributesItemsContainer}>
                                    {attribute.name === "Color" ? (
                                        <ColorPicker attribute={attribute} handleClick={this.handleClick}
                                                     activeItem={attributes[attribute.name]}/>
                                    ) : (

                                        <AttributePicker attribute={attribute} handleClick={this.handleClick}
                                                         attributes={attributes}
                                                         activeItem={attributes[attribute.name]}/>
                                    )}

                                </div>
                            </>
                        )
                    })}
                    <div>
                        <Typography variant="h4" className={classes.attributesName}>Price: </Typography>
                        <Typography className={classes.price} variant="price">
                            {selectedProduct.currentPrice.currency.symbol}{selectedProduct.currentPrice.amount}
                        </Typography>
                    </div>

                </div>
                <div>
                    <IconButton className={classes.button}
                                onClick={this.handleAddToCartClick}>ADD TO CART</IconButton>
                </div>
                <div className={classes.description}>{parse(selectedProduct.description)}</div>
            </div>

        )
    }
}

const styled = Styled({
    informationBlock: {
        display: "flex",
        flexDirection: "column",
    },
    title: {
        fontWeight: 600,
    },
    description: {
        maxWidth: 290,
        marginTop: 40,
    },
    price: {
        fontWeight: 700
    },
    button: {
        width: 292,
        border: "none",
        backgroundColor: theme.palette.primary.main,
        color: "white",
        padding: 16,
        fontSize: 16,
        fontFamily: "Raleway",
        fontWeight: 600,
        marginTop: 20,
        cursor: "pointer",
    },
    attributesName: {
        fontWeight: 700,
        marginTop: 24
    },
    attributesItemsContainer: {
        display: "flex",
        flexDirection: "row",
    },

})

export default injectStyled(styled)(InformationList)