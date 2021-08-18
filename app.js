function productItems(product, price, isIncreasing) {
    const productItem = document.getElementById(product + '-number');
    const productNumber = parseInt(productItem.value);
    if (isIncreasing) {
        updateProduct = productNumber + 1;
    } else if (productNumber > 0) {
        updateProduct = productNumber - 1;
    }
    productItem.value = updateProduct;
    // update price
    const pricetext = document.getElementById(product + '-price');
    if (product == 'phone') {
        pricetext.innerText = updateProduct * price;
    } else if (product == 'case') {
        pricetext.innerText = updateProduct * price;
    }
    // update final total amount and tax amount
    finalCalculation();
}
// final calculation function
function finalCalculation() {
    const phonePrice = document.getElementById('phone-price').innerText;
    const casePrice = document.getElementById('case-price').innerText;
    const subTotalText = document.getElementById('sub-total');
    const taxAmountText = document.getElementById('tax-amount');
    const payTotalText = document.getElementById('pay-total');
    const subTotal = parseInt(phonePrice) + parseInt(casePrice);
    const taxAmount = subTotal * .075;
    const payTotal = subTotal + taxAmount;

    subTotalText.innerText = subTotal;
    taxAmountText.innerText = taxAmount.toFixed(2);
    payTotalText.innerText = payTotal.toFixed(2);

}
document.getElementById('phone-plus').addEventListener('click', function () {
    productItems('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    productItems('phone', 1219, false);
});
document.getElementById('case-plus').addEventListener('click', function () {
    productItems('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    productItems('case', 59, false);
});