import Ember from 'ember';

const { merge } = Ember;

const defaultTolerance = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};

export default function isInViewport(boundingClientRect = {}, height = 0, width = 0, tolerance = defaultTolerance) {
  const { top, left, bottom, right } = boundingClientRect;
  const tolerances = merge(defaultTolerance, tolerance);
  const {
    top: topTolerance,
    left: leftTolerance,
    bottom: bottomTolerance,
    right: rightTolerance
  } = tolerances;

  const inTop = (top + topTolerance) >= 0 && (top + topTolerance) <= height || topTolerance === null;
  const inLeft = (left + leftTolerance) >= 0 && (left + leftTolerance) <= width || leftTolerance === null;
  const inBottom = (bottom - bottomTolerance) >= 0 && (bottom - bottomTolerance) <= height || bottomTolerance === null;
  const inRight = (right - rightTolerance) >= 0 && (right - rightTolerance) <= width || rightTolerance === null;

  return (
    inTop &&
    inLeft &&
    inBottom &&
    inRight
  );
}
