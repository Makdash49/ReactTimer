var React = require('react');

var TimerForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    this.props.onSetCountdown(parseInt(0, 10));
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = TimerForm;
