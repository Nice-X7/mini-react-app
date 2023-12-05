export const Challenge_3 = () => {
    const words = ['lincode', 'js', 'react', 'css', 'angular', 'bootstrap', 'html'];
    const changeStar = words.map((word) => {
        if (word.length < 5) {
            return "*"
        } else {
            return word
        }
    })
    console.log(changeStar)
}