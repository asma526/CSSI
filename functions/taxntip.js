function taxTip(totalBill,percentTax,percentTip){
  var total = totalBill - totalBill*percentTax;
  var price = total + total*percentTip;
  return price;
}
