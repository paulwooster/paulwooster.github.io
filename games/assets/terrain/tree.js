/* Define various parameters related to tiles in this folder */

const terrain = [
  "",
  "_ramp",
  "_rampLarge",
  "_rampLarge_detailed",
  "_roadCorner",
  "_roadCross",
  "_roadEnd",
  "_roadSplit",
  "_roadStraight",
  "_sideCliff",
  "_sideCornerInner",
  "_sideCorner",
  "_sideEnd",
  "_side"
];

const flatTerrain = [
  "",
//  "_roadCorner",
  "_roadCross",
  "_roadEnd",
//  "_roadSplit",
  "_roadStraight",
];

const terrain_suffix = ["_NW", "_NE", "_SE", "_SW"];

const terrain_anchor = [0.5, 0.615];

const terrain_halfWidth = 64;
const terrain_halfHeight = 32;

const terrain_hitArea = [
  terrain_halfWidth, 0,
  0, terrain_halfHeight,
  -terrain_halfWidth, 0,
  0, -terrain_halfHeight
];