import {PureComponent} from "react";
import clsx from "clsx";
import Typography from "../base/Typography";
import {injectStyled, Styled} from "styled-jss";

class AttributePicker extends PureComponent {
    render() {
        const {attribute, classes, activeItem, handleClick} = this.props
        return (
            attribute.items.map((item) => {
                return (
                    <div
                        className={clsx(classes.attributeItem, {[classes.activeButton]: item.value === activeItem})}
                        onClick={handleClick(item.value, attribute.name)}>
                        <Typography variant="h4">{item.value}</Typography>
                    </div>
                )
            })
        )
    }
}

const styled = Styled({
    attributeItem: {
        display: "flex",
        width: 63,
        height: 45,
        border: '1px solid #1D1F22',
        marginRight: 12,
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"

    },
    activeButton: {
        backgroundColor: "#1D1F22",
        color: "white"
    },

})

export default injectStyled(styled)(AttributePicker)