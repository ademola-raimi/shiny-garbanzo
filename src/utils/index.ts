export const getCurrentPrice = (price: number, discount: number) => {
    return (price - ((discount/100) * price)).toFixed(2);
}