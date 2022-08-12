
const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//page load arrange numbers in asc order
window.onload = () => {
  onSort();
};

// button click arrange numbers in asc order
const onSort = () => {
  arrangeItems(numberList.sort());
};

// button click Shuffle numbers in radom order
const onShuffle = () => {
  let arr=[...numberList];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  arrangeItems(arr);
};

//updatinging dom based on number index
const arrangeItems = (data) => {
  data.forEach((item, index) => {
    let ele = document.getElementById("boxId-" + (index + 1));
    if (ele) {
      ele.innerHTML = item;
    }
  });
};
