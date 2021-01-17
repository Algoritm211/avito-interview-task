

export function convert(unixtimestamp: number) {
  const months_arr = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const date = new Date(unixtimestamp * 1000);
  const year = date.getFullYear();
  const month = months_arr[date.getMonth()];
  const day = date.getDate();

  return `${day}.${month}.${year}`
}