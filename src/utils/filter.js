import _ from "lodash";

export function filterItems(items, value) {
  return _.filter(items, function (item) {
    return item.genre.name === value;
  });
}
