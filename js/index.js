
let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//page load arrange numbers in asc order
window.onload = () => {
  onSort();
};

// button click arrange numbers in asc order
const onSort = () => {
  numberList = numberList.sort();
  arrangeItems();
};

// button click Shuffle numbers in radom order
const onShuffle = () => {
  numberList = numberList.sort(() => Math.random() - 0.9);
  arrangeItems();
};

//updatinging dom based on number index
const arrangeItems = () => {
  numberList.forEach((item, index) => {
    let ele = document.getElementById("boxId-" + (index + 1));
    if (ele) {
      ele.innerHTML = item;
    }
  });
};
