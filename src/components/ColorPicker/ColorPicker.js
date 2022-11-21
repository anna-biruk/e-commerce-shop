import {PureComponent} from "react";
import clsx from "clsx";
import {injectStyled, Styled} from "styled-jss";

class ColorPicker extends PureComponent {
    render() {
        const {attribute, classes, activeItem, handleClick, small} = this.props
        return (
            attribute.items.map((item) => {
                return (
                    <div
                        className={clsx(classes.attributeColor,
                            {[classes.activeButtonColor]: item.value === activeItem},
                            {[classes.smallAttribute]: small})}
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
    smallAttribute: {
        width: 24,
        height: 24,
        fontSize: 14,
    },
    activeButtonColor: {
        border: "2px solid #5ECE7B"
    },
})


export default injectStyled(styled)(ColorPicker)