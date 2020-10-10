import React, { Component, Fragment } from "react";

class UserManagerComponent extends Component {
  constructor(props) {
    super(props);

    this.renderSelect = this.renderSelect.bind(this);

    this.userOptions = {
      midiUser: "MidiUserComponent",
      domUser: "DomUserComponent",
    };
  }

  renderSelect() {
    const users = [];
    for (let key in this.userOptions) {
      users.push(
        <option key={key} onChange={() => {}} value={this.userOptions[key]}>
          {this.userOptions[key]}
        </option>
      );
    }
    return <select>{users}</select>;
  }

  render() {
    const { matrix, currentStep } = this.props;

    return (
      <Fragment>
        {matrix.map((row, i) => {
          return (
            <div
              style={{
                backgroundColor: `${row[currentStep] ? "tomato" : "white"}`,
              }}
              className="cmp-block six columns"
              key={`user-${i}`}
            >
              <h6>{`USER #${i + 1}`}</h6>
              <div>{this.renderSelect()}</div>
              <div>{}</div>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

export default UserManagerComponent;
