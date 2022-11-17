import {PureComponent} from "react";
import clsx from "clsx";
import {injectStyled, Styled} from "styled-jss";

class ColorPicker extends PureComponent {
    render() {
        const {attribute, classes, activeItem, handleClick} = this.props
        return (
            attribute.items.map((item) => {
                return (
                    <div
                        className={clsx(classes.attributeColor,
                            {[classes.activeButtonColor]: item.value === activeItem})}
                        style={{backgroundColor: `${item.value}`}}
                        onClick={handleClick(item.value, attribute.name)}>
                    </div>
                )
            })
        )
    }

}

const styled = Styled({
    attributeColor: {
        width: 32,
        height: 32,
        marginRight: 10,
        boxSizing: "border-box",
        cursor: "pointer"
    },

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

    activeButtonColor: {
        border: "2px solid #5ECE7B"
    },
})


export default injectStyled(styled)(ColorPicker)