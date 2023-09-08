const React = require("react")

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Pokemon Page</h1>
        

        <form action="/pokes" method="POST">
          Name: <input type="text"  name="name" /> <br />
          Image URL: <input type="text" name="img" />
          <input type="submit" value="Create Pokemon" />
        </form>
        <nav>
          <a href="/pokes">Back</a>
        </nav>
      </div>
    )
  }
}

module.exports = New