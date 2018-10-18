/**
 * @overview 综合事务
 */

// eslint-disable-next-line
export function createOptions(
  content,
  answer = 'A',
  options = [],
) {
  const selectIndex = ['A', 'B', 'C', 'D'];

  const newOptions = options.reduce((acc, option, index) => {
    const result = selectIndex[index] === answer
      ? [content, option] : [option];

    return [...acc, ...result];
  }, []);

  return newOptions.map((item, index) => ({
    select: selectIndex[index],
    url: item,
  }));
}
