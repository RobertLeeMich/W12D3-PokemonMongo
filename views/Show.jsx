const React = require("react");

class Show extends React.Component {
  render() {
    const {img, name} = this.props.pokemon
    const ext = ".jpg"
    return (
      <div>
        <h1> Gotta Catch 'Em All</h1>
        <img src = {`${img}${ext}`} alt = {name} />
        <h1><a href = "/pokes">Back</a></h1>
      </div>
    );
  }
}

module.exports = Show