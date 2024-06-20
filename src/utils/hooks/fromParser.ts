type TParseObj = {
  [key: string]: {
    [key: string]: number
  }
}

export function fromParser(collection: HTMLFormControlsCollection): { [key: string]: number; }[] {
  const dataArr: { [key: string]: string }[] = Array.from(collection)
    .filter((el) => el.nodeName === 'INPUT')
    .map((el) => el as HTMLInputElement)
    .map((el: HTMLInputElement) => {
      return { [`${el.name}`]: el.value };
    });

  const parseObj: TParseObj = dataArr.reduce((acc: TParseObj, item: { [key: string]: string }) => {
    const itemKey = Object.keys(item)[0];
    const keyNum = itemKey.match(/\d+/g)![0];
    const keyStr = itemKey.match(/[a-zA-Z]+/g)![0];
    acc = {
      ...acc,
    };
    acc[keyNum] = {
      ...acc[keyNum],
      [keyStr]: Number(item[itemKey])
    };
    return acc;
  }, {});

  const sortArr = Object.values(parseObj).sort((a, b) => a['speed'] - b['speed']);

  return sortArr;
}
