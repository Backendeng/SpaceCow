// ------------------------------------------------------------------
//
// Rendering function for a Missile object.
//
// ------------------------------------------------------------------
Game.graphics.Missile = (function(graphics) {
  'use strict';
  let that = {};

  // ------------------------------------------------------------------
  //
  // Renders a Missile model.
  //
  // ------------------------------------------------------------------
  that.render = function(model, texture) {
    graphics.drawCircle(model.position, model.radius, '#FF0000');
  };

  return that;

}(Game.graphics));