import {PureComponent} from "react";
import {injectStyled, Styled} from "styled-jss";
import {ReactComponent as AngelUpIcon} from "../../assets/angle-up.svg";
import {ReactComponent as AngelDownIcon} from "../../assets/angle-down.svg";
import PropTypes from "prop-types";

class DropdownComponent extends PureComponent {
    static propTypes = {
        setCurrentCurrency: PropTypes.func,
        currentCurrencySymbol: PropTypes.string,
        fetchCurrencies: PropTypes.func,
    }
    state = {
        isListOpen: false,
    }

    toggleList = () => {
        this.setState(prevState => ({
            isListOpen: !prevState.isListOpen
        }))
    }
    componentDidMount() {
        this.props.fetchCurrencies()
    }
    handleCurrencyChange = (currencySymbol) => () => {
        debugger
        this.props.setCurrentCurrency(currencySymbol)
    }

    render() {
        const {isListOpen} = this.state;
        const {currencies, currentCurrencySymbol, classes} = this.props;

        return (
            <div>
                <button
                    type="button"
                    className={classes.dropdownHeader}
                    onClick={this.toggleList}
                >
                    <div>{currentCurrencySymbol}</div>
                    {isListOpen
                        ? <AngelUpIcon/>
                        : <AngelDownIcon/>}
                    {isListOpen && (
                        <div
                            role="list"
                            className={classes.dropdownList}
                        >
                            {currencies.map((item) => (
                                <button
                                    onClick={this.handleCurrencyChange(item.symbol)}
                                    type="button"
                                    className={classes.dropdownListItem}
                                    key={item.id}
                                >
                                    {item.symbol} {item.label}
                                    {' '}
                                </button>
                            ))}
                        </div>
                    )}
                </button>
            </div>
        )
    }
}

const styled = Styled({
    dropdownHeader: {
        border: "none",
        fontSize: 18,
        fontFamily: "Raleway",
        fontWeight: 500,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        gap: "10px",
        position: "relative"
    },
    dropdownList: {
        display: "flex",
        flexDirection: "column",
        width: 114,
        backgroundColor: "white",
        position: "absolute",
        top: 28,
        right: -47,
        zIndex: 10,
        filter: "drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19))",

    },
    dropdownListItem: {
        border: "none",
        fontSize: 18,
        fontWeight: 500,
        height: 62,
        backgroundColor: "white",
        '&:hover': {
            background: "#EEEEEE"
        }
    }
})

export default injectStyled(styled)(DropdownComponent)