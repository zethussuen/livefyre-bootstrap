var inherits = require('inherits');
var View = require('view');

function Button (command, opts) {
    View.call(this, opts);
    if (command) {
        this._setCommand(command);
    }
}
inherits(Button, View);

Button.prototype.disabledClass = 'disabled';

Button.prototype.events = {
    click: '_execute'
};

Button.prototype._execute = function _execute() {
    this._command.execute();
};

Button.prototype._setCommand = function (command) {
    var self = this;
    this._command = command;
    this._setEnabled(this._command.canExecute());
    this._command.on('change:canExecute', function (canExecute) {
        self._setEnabled(canExecute);
    });
};

Button.prototype._setEnabled = function (isEnabled) {
    this.$el.toggleClass(this.disabledClass, ! isEnabled);
};

module.exports = Button;
