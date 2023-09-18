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
  const arr = items;

  const n = arr.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;

      while (j >= gap && arr[j - gap].props.height > temp.props.height) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = temp;
      await updateDisplay(time, arr);
    }

    gap = Math.floor(gap / 2);
  }
};
