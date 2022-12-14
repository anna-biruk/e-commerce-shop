import { PureComponent } from "react";
import Typography from "../base/Typography";
import PropTypes from "prop-types";
import Card from "../base/Card";
import Image from "../base/Image";
import { injectStyled, Styled } from "styled-jss";
import IconButton from "../base/IconButton";
import { ReactComponent as CartSvg } from "../../assets/cart.svg";
import theme from "../../theme";
import { withRouter } from "../../hocs/withRouter";


class ProductListItem extends PureComponent {
    static propTypes = {
        router: PropTypes.objectOf({
            navigate: PropTypes.func
        }),
        productItem: PropTypes.objectOf({
            name: PropTypes.string,
            prices: PropTypes.arrayOf(PropTypes.object),
            gallery: PropTypes.arrayOf(PropTypes.string),
            currentPrice: PropTypes.objectOf({
                currency: PropTypes.objectOf({
                    label: PropTypes.string,
                    symbol: PropTypes.string
                }),
                amount: PropTypes.number
            })
        })
    }

    handleAddToCartClick = (event) => {
        event.stopPropagation()
        this.props.addToCart({ attributes: this.props.attributes, product: this.props.productItem })

    }

    handleCardClick = () => {
        this.props.router.navigate(`/${this.props.productItem.id}`)
    }

    render() {
        const { productItem, classes } = this.props
        return (

            <Card className={classes.card} variant="productCard" onClick={this.handleCardClick}>
                {
                    !productItem.inStock && (<div className={classes.overlay}>OUT OF STOCK</div>)
                }
                <Image className={classes.img} src={productItem.gallery[0]} />
                <Typography variant="h4" className={classes.title}>{productItem.name}</Typography>
                <Typography className={classes.price}
                    variant="h4">{productItem.currentPrice.currency.symbol}{productItem.currentPrice.amount}</Typography>
                {
                    productItem.inStock && (
                        <IconButton onClick={this.handleAddToCartClick} className={classes.button}>
                            <CartSvg />
                        </IconButton>
                    )
                }
            </Card>

        )
    }
}

const styled = Styled({
    title: {
        fontWeight: 300

    },

    img: {
        height: 330,
        width: "100%",
        objectFit: "cover",
        marginBottom: 24,
    },
    link: {
        textDecoration: "none",
        color: "unset"
    },
    card: {
        width: 386,
        position: "relative",
        '&:hover': {
            boxShadow: "0px 4px 35px rgba(168, 172, 176, 0.19)",
            '&:hover $button': {
                display: 'block',
            }
        }
    },
    overlay: {
        position: "absolute",
        backgroundColor: "white",
        opacity: 0.5,
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        fontSize: 24,
        fontWeight: 400,
        fontFamily: "Raleway",
        paddingTop: 152,
        paddingLeft: 82,
    },
    button: {
        display: "none",
        border: "none",
        width: 52,
        height: 52,
        borderRadius: 32,
        position: "absolute",
        bottom: 72,
        right: 31,
        cursor: "pointer",
        backgroundColor: theme.palette.primary.main
    },
    price: {
        fontWeight: 500
    }
})

export default withRouter(injectStyled(styled)(ProductListItem))