export const Ternary = () => {
    // №1
    const day = (props) => {
        const isDay = props.hours < 18

        return(isDay < 18 ? "Сейчас день" : "Сейчас вечер")
    }

    console.log(day(14))
}