exports.compile = function (msgs) {
  return Object.fromEntries(Object.entries(msgs).map(([id, msg]) => [id, msg]));
};
