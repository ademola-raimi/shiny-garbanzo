export const getCurrentPrice = (price, discount) => {
    return (price - ((discount/100) * price)).toFixed(2);
}