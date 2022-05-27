// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName (){
   customerName = customerName.toUpperCase();
}
function setBestCustomer (){
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(customer) {
    bestCustomer = customer;
}

const leastFavouriteCustomer = 'Nick';
function changeLeastFavoriteCustomer (customer) {
    leastFavouriteCustomer = customer;
}