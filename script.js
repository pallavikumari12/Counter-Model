const countValue = document.querySelector('#counter');

const increment = () => {
   // get value from UI
    let value = parseInt(countValue.innerText);
    //increment the value
    value = value + 1 ;
    // set value into UI
    countValue.innerText = value;
};

const decrement = () => {
    // get value from UI
   let value = parseInt(countValue.innerText);
    //decrement the value
    value = value - 1 ;
    // set value into UI
    countValue.innerText = value;

};