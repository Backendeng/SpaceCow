//------------------------------------------------------------------
//
// Model for each player in the game.
//
//------------------------------------------------------------------
Game.components.Player = function() {
  'use strict';

  let that = {};

  let position = {
    x: 0,
    y: 0
  };

  let size = {
    width: 0.05,
    height: 0.05
  };

  let target = {
    x: 0,
    y: 0
  };

  let direction = 0;
  let rotateRate = 0;
  let speed = 0;

  Object.defineProperty(that, 'direction', {
    get: () => direction,
    set: (value) => { direction = value; }
  });

  Object.defineProperty(that, 'speed', {
    get: () => speed,
    set: value => { speed = value; }
  });

  Object.defineProperty(that, 'rotateRate', {
    get: () => rotateRate,
    set: value => { rotateRate = value; }
  });

  Object.defineProperty(that, 'position', {
    get: () => position
  });

  Object.defineProperty(that, 'size', {
    get: () => size
  });

  Object.defineProperty(that, 'target', {
    get: () => target,
    set: (value) => {
      target.x = value.x;
      target.y=value.y;
    }
  });

  //------------------------------------------------------------------
  //
  // Public functions that move the player in the specified direction.
  //
  //------------------------------------------------------------------
  that.moveUp = function(elapsedTime) {
    position.y -= elapsedTime * speed;
  };

  that.moveDown = function(elapsedTime) {
    position.y += elapsedTime * speed;
  };

  that.moveLeft = function(elapsedTime) {
    position.x -= elapsedTime * speed;
  };

  that.moveRight = function(elapsedTime) {
    position.x += elapsedTime * speed;
  };

  function tolerance(value, test, tolerance) {
    if (Math.abs(value - test) < tolerance) {
      return true;
    } else {
      return false;
    }
  }

  //------------------------------------------------------------------
  //
  // Public function that rotates the player
  //
  //------------------------------------------------------------------
  that.rotate = function() {
    let v1 = {
        x : position.x,
        y : position.y
      },
      v2 = {
        x : target.x - window.innerWidth/2,
        y : target.y - window.innerHeight/2
      },
      angle;

    v2.len = Math.sqrt(v2.x * v2.x + v2.y * v2.y);
    v2.x /= v2.len;
    v2.y /= v2.len;

    angle = Math.acos(v1.x * v2.x + v1.y * v2.y);
    if (tolerance(direction, angle, .001)) {
      return false;
    } else {
      direction = angle;
      return true;
    }

  };

  that.update = function(elapsedTime) {
  };

  return that;
};
