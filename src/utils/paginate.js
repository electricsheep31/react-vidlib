import _ from "lodash";

export function paginate(items, currentPage, itemsPerPage) {
  //   const startIndex = (currentPage - 1) * itemsPerPage;
  const startIndex = currentPage * itemsPerPage - itemsPerPage;
  //page 1 = 0 * 3 = 0
  //page 2 = 1 * 3 = 3
  //page 3 = 2 * 3 = 6

  //_(items) is needed to chain first:
  return _(items).slice(startIndex).take(itemsPerPage).value();
  //value method returns a regular array
}
