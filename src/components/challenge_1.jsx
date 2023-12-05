export const Challenge_1 = () => {
    const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
    const positive = array.filter((number) => number > 0)

    console.log(positive)
}