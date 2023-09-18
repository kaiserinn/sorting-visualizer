import { useState } from 'react';
import NodeElement from './data-structures/NodeElement';
import getRandomNumber from './utils/getRandomNumber';
import {
  bubbleSort,
  insertionSort,
  selectionSort,
  shellSort,
} from './utils/sorting-algorithm';

const arr: JSX.Element[] = [];
for (let i = 0; i < 20; i++) {
  arr.push(<NodeElement height={getRandomNumber(20, 101)} />);
}

function App() {
  const [items, setItems] = useState<JSX.Element[]>(arr);
  const [length, setLength] = useState(20);
  const [time, setTime] = useState(25);
  const [isSorting, setIsSorting] = useState(false);
  const [selectValue, setSelectValue] = useState('bubbleSort');

  const updateDisplay = (time: number, arr: JSX.Element[]) => {
    return new Promise<void>((resolve, _reject) => {
      setTimeout(() => {
        setItems([...arr]);
        resolve();
      }, time);
    });
  };

  const onGenerate = () => {
    if (isSorting) return;

    const arr: JSX.Element[] = [];
    for (let i = 0; i < length; i++) {
      arr.push(<NodeElement height={getRandomNumber(20, 101)} />);
    }
    setItems([...arr]);
  };

  const handleClick = async () => {
    const newArr = items;
    setIsSorting(true);

    if (selectValue === 'bubbleSort') {
      bubbleSort(newArr, updateDisplay, time);
    } else if (selectValue === 'insertionSort') {
      insertionSort(newArr, updateDisplay, time);
    } else if (selectValue === 'selectionSort') {
      selectionSort(newArr, updateDisplay, time);
    } else if (selectValue === 'shellSort') {
      shellSort(newArr, updateDisplay, time);
    }

    setIsSorting(false);
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 bg-zinc-800">
      <div className="flex h-[100px] items-end gap-2">
        {items.map((item) => item)}
      </div>

      <div className="mt-4 flex items-end gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="length" className="text-sm text-slate-100">
            length
          </label>
          <input
            type="number"
            value={length}
            id="length"
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-24 rounded-md px-2"
          />
        </div>
        <button
          onClick={onGenerate}
          className="w-28 rounded-md bg-slate-100 px-4 py-1"
        >
          Generate
        </button>

        <div className="flex flex-col gap-1">
          <label htmlFor="time" className="text-sm text-slate-100">
            time (ms)
          </label>
          <input
            type="number"
            value={time}
            id="time"
            onChange={(e) => setTime(parseInt(e.target.value))}
            className="w-24 rounded-md px-2"
          />
        </div>
        <button
          onClick={handleClick}
          className="w-28 rounded-md bg-slate-100 px-4 py-1"
        >
          Sort
        </button>

        <select
          onChange={(e) => setSelectValue(e.target.value)}
          id="sortType"
          value={selectValue}
          className="rounded-md"
        >
          <option value="bubbleSort">Bubble Sort</option>
          <option value="insertionSort">Insertion Sort</option>
          <option value="selectionSort">Selection Sort</option>
          <option value="shellSort">Shell Sort</option>
        </select>
      </div>
    </div>
  );
}

export default App;
