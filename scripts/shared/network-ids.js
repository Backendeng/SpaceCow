// ------------------------------------------------------------------
//
// Shared module between Nodejs and the browser that defines constants
// used for network communication.
//
// The use of the IIFE is to create a module that works on both the server
// and the client.
// Reference for this idea: https://caolan.org/posts/writing_for_node_and_the_browser.html
//
// ------------------------------------------------------------------
(function(exports) {
  'use strict';

  Object.defineProperties(exports, {
    'INPUT': {
      value: 'input',
      writable: false
    },
    'INPUT_MOVE': {
      value: 'move',
      writable: false
    },
    'INPUT_ROTATE_LEFT': {
      value: 'rotate-left',
      writable: false
    },
    'INPUT_ROTATE_RIGHT': {
      value: 'rotate-right',
      writable: false
    },
    'INPUT_FIRE': {
      value: 'fire',
      writable: false
    },
    'CONNECT': {
      value: 'connection',
      writable: false
    },
    'CONNECT_ACK': {
      value: 'connect-ack',
      writable: false
    },
    'CONNECT_OTHER': {
      value: 'connect-other',
      writable: false
    },
    'DISCONNECT': {
      value: 'disconnect',
      writable: false
    },
    'DISCONNECT_OTHER': {
      value: 'disconnect-other',
      writable: false
    },
    'LOGIN_REQUEST': {
      value: 'login-request',
      writable: false
    },
    'LOGIN_RESPONSE': {
      value: 'login-response',
      writable: false
    },
    'CREATE_USER_REQUEST': {
      value: 'create-user-request',
      writable: false
    },
    'CREATE_USER_RESPONSE': {
      value: 'create-user-response',
      writable: false
    },
    'UPDATE_SELF': {
      value: 'update-self',
      writable: false
    },
    'UPDATE_OTHER': {
      value: 'update-other',
      writable: false
    },
    'MISSILE_NEW': {
      value: 'missile-new',
      writable: false
    },
    'MISSILE_HIT': {
      value: 'missile-hit',
      writable: false
    },
    'CHAT_MESSAGE': {
      value: 'chat_message',
      writable: false
    },
    'LEAVE_LOBBY': {
      value: 'leave_lobby',
      writable: false
    },
    'ENTER_LOBBY': {
      value: 'enter_lobby',
      writable: false
    },
    'REQUEST_USERS': {
      value: 'request_users',
      writable: false
    },
    'START_TIMER': {
      value: 'start_timer',
      writable: false
    },
    'REQUEST_TIMER': {
      value: 'request_timer',
      writable: false
    },
    'START_GAME': {
      value: 'start_game',
      writable: false
    }
  });

})(typeof exports === 'undefined' ? this['NetworkIds'] = {} : exports);
