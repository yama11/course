/**
 * @overview 综合事务
 */

// eslint-disable-next-line
export function createOptions(
  content,
  answer = 'A',
  options = [],
) {
  const list = [...options];

  const selectIndex = ['A', 'B', 'C', 'D'];

  return Array(options.length + 1).fill(null)
    .map((item, index) => {
      const select = selectIndex[index];

      const url = answer === select ? content : list.pop();

      return { select, url };
    });
}
