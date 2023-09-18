const timeout = (time: number) => {
  return new Promise<void>((resolve, _reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

export default timeout;
