exports.uniqueWordCount = function (str) {
  return str ? new Set(str.split(" ")).size : 0;
};
