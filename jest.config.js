/* eslint-disable no-undef */

module.exports = {
  verbose: true,
  roots: ["<rootDir>/tests/"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/utils/fileTransformer.js",
  },
};
