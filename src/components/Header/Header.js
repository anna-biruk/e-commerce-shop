import {PureComponent} from "react";
import IconButton from "../base/IconButton";
import {injectStyled, Styled} from "styled-jss";
import {ReactComponent as Logo} from "../../assets/logo.svg";
import PropTypes from "prop-types";
import theme from "../../theme";
import {ReactComponent as CartButton} from "../../assets/cartButton.svg";
import clsx from 'clsx';
import {Link} from "react-router-dom";
import ModalContainer from "../Modal/ModalContainer";


class Header extends PureComponent {
    static propTypes = {
        fetchCategories: PropTypes.func,
        fetchCurrencies: PropTypes.func,
        setActiveCategory: PropTypes.func,
        setCurrentCurrency: PropTypes.func,
        currentCurrencySymbol: PropTypes.string
    }
    state = {
        show: false
    }

    showModal = (e) => {
        e.stopPropagation()
        this.setState({show: true});
    };

    hideModal = (e) => {
        e.stopPropagation()
        this.setState({show: false});
    };

    componentDidMount() {
        this.props.fetchCategories()
        this.props.fetchCurrencies()
    }

    handleClick = (category) => () => {
        this.props.setActiveCategory(category.name)
    };
    handleCurrencyChange = (event) => {
        this.props.setCurrentCurrency(event.target.value)
    }

    render() {
        const {categories, classes, activeCategory, currencies, currentCurrencySymbol, totalQuantity} = this.props
        return (
            <div className={classes.container}>
                <div className={classes.list}>
                    <div>
                        {categories.map((category) => {
                            return <IconButton onClick={this.handleClick(category)}
                                               className={clsx(classes.button, {[classes.active]: activeCategory === category.name})}>
                                {category.name.toUpperCase()}
                            </IconButton>
                        })}
                    </div>
                    <Link to="/">
                        <IconButton className={classes.logoButton}><Logo/></IconButton>

                    </Link>
                    <div>
                        <select value={currentCurrencySymbol} className={classes.select}
                                onChange={this.handleCurrencyChange}>
                            {currencies.map((item) => {
                                return <option value={item.symbol}
                                               className={classes.selectOption}>{item.symbol} {item.label}</option>
                            })}
                        </select>
                        <IconButton className={classes.cartButton} onClick={this.showModal}>
                            <CartButton/>
                            <div className={classes.label}>{totalQuantity}</div>
                        </IconButton>
                        <ModalContainer show={this.state.show} handleClose={this.hideModal}/>

                    </div>


                </div>

            </div>
        )
    }
}

const styled = Styled({
    container: {
        maxWidth: "1238px",
        margin: "0 auto",
        marginBottom: 80,
        position: "relative"
    },
    list: {
        height: 80,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"

    },
    select: {
        border: "none",
        fontSize: 18,
        fontFamily: "Raleway",
        fontWeight: 500,
        cursor: "pointer"
    },
    selectOption: {
        border: "none",
    },
    button: {
        border: "none",
        backgroundColor: "white",
        fontSize: 16,
        fontWeight: 400,
        height: 56,
        fontFamily: "Raleway",
        marginRight: 32,
        cursor: "pointer",
        '&:hover': {
            color: theme.palette.primary.main,
            fontWeight: 600,
            borderBottom: `2px solid ${theme.palette.primary.main}`
        }
    },
    logoButton: {
        border: "none",
        backgroundColor: "white",
        fontSize: 16,
        fontWeight: 400,
        height: 56,
        fontFamily: "Raleway",
        marginRight: 32,
        cursor: "pointer",
    },
    active: {
        color: theme.palette.primary.main,
        fontWeight: 600,
        borderBottom: `2px solid ${theme.palette.primary.main}`
    },
    cartButton: {
        border: "none",
        backgroundColor: "white",
        position: "relative",
        cursor: "pointer",
    },
    label: {
        position: "absolute",

        width: 20,
        height: 20,
        borderRadius: 60,
        backgroundColor: "black",
        color: "white",
        fontSize: 14,
        fontFamily: "Raleway",
        fontWeight: 700,
        bottom: 14,
        left: 17,
        display: "block",
        margin: "0 auto"
    },


})

export default injectStyled(styled)(Header)