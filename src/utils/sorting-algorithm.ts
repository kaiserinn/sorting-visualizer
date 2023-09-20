export const bubbleSort = async (
  items: JSX.Element[],
  updateDisplay: (time: number, newArr: JSX.Element[]) => Promise<void>,
  time: number
) => {
  const arr = items;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      const current = arr[j].props.height;
      const next = arr[j + 1].props.height;

      if (current > next) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        await updateDisplay(time, arr);
      }
    }
  }
};

export const insertionSort = async (
  items: JSX.Element[],
  updateDisplay: (time: number, newArr: JSX.Element[]) => Promise<void>,
  time: number
) => {
  const arr = items;

  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];

    let j = i - 1;
    while (j > -1 && current.props.height < arr[j].props.height) {
      arr[j + 1] = arr[j];
      await updateDisplay(time, arr);
      j--;
    }
    arr[j + 1] = current;
  }
};

export const selectionSort = async (
  items: JSX.Element[],
  updateDisplay: (time: number, newArr: JSX.Element[]) => Promise<void>,
  time: number
) => {
  const arr = items;

  for (let i = 0; i < arr.length; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].props.height < arr[min].props.height) {
        min = j;
      }
    }
    if (min != i) {
      // Swapping the elements
      const tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
      await updateDisplay(time, arr);
    }
  }
};

export const shellSort = async (
  items: JSX.Element[],
  updateDisplay: (time: number, newArr: JSX.Element[]) => Promise<void>,
  time: number
) => {
  const arrayToSort = items;

  const n = arrayToSort.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const currentElement = arrayToSort[i];
      let j = i;

      while (j >= gap && arrayToSort[j - gap].props.height > currentElement.props.height) {
        arrayToSort[j] = arrayToSort[j - gap];
        j -= gap;
        await updateDisplay(time, arrayToSort);
      }

      arrayToSort[j] = currentElement;
      await updateDisplay(time, arrayToSort);
    }

    gap = Math.floor(gap / 2);
  }
};
