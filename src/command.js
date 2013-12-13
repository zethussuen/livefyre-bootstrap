var EventEmitter = require('event-emitter');
var inherits = require('inherits');

function Command (fn) {
    this._execute = fn;
    this._canExecute = true;
    EventEmitter.call(this);
}
inherits(Command, EventEmitter);

/**
 * Execute the Command
 */
Command.prototype.execute = function () {
    this._execute();
};

Command.prototype.enable = function () {
    this._changeCanExecute(true);
};

Command.prototype.disable = function () {
    this._changeCanExecute(false);
};

Command.prototype._changeCanExecute = function (canExecute) {
    this._canExecute = canExecute;
    this.emit('change:canExecute', this._canExecute);
};

Command.prototype.canExecute = function () {
    return this._canExecute;
};

module.exports = Command;