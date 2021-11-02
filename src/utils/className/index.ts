export default (array: (string | undefined)[]): string => array.filter((v) => v).join(' ').trim();
