function Command (fn) {
    this._execute = fn;
    this._enabled = true;
}

/**
 * Execute the Command
 */
Command.prototype.execute = function () {
    this._execute();
};

Command.prototype.enable = function () {
    this._enabled = true;
};

Command.prototype.disable = function () {
    this._enabled = false;
};

Command.prototype.canExecute = function () {
    return this._enabled;
};

module.exports = Command;