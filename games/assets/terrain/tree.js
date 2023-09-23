/* Define various parameters related to tiles in this folder */

export const terrain = [
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

export const terrain_suffix = ["_NW", "_NE", "_SE", "_SW"];

export const terrain_anchor = [0.5, 0.615];

export const terrain_halfWidth = 64;
export const terrain_halfHeight = 32;

export const terrain_hitArea = [
  terrain_halfWidth, 0,
  0, terrain_halfHeight,
  -terrain_halfWidth, 0,
  0, -terrain_halfHeight
];