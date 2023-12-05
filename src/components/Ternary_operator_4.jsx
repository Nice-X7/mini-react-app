export const ParentBlock = () => {
    const number = 80

    return (
        <>
        {
            number < 50 ? console.log("Small") : console.log("Large")
        }
        </>
    )
}