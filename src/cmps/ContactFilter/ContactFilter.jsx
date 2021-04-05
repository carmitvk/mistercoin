import { Component } from 'react'
import './ContactFilter.scss'

export class ContactFilter extends Component {
  state = {
    term: '',
  }
  // }
  // handleChange = ({ target }) => {
  //   const field = target.name
  //   const value = target.type === 'number' ? +target.value : target.value
  //   this.setState({ [field]: value }, () => {
  //     this.props.onChangeFilter({ ...this.state })
  //   })

  onFilter = ({ target }) => {
      const field = target.name
      const value = target.type === 'number' ? +target.value : target.value
      this.setState({ [field]: value }, () => {
        this.props.onChangeFilter({ ...this.state })
      })
    }

  render() {
    const { term } = this.state
    return (
      <form className="contact-filter" onSubmit={(ev) => ev.preventDefault()}>
        <label htmlFor="termForId">Search</label>
        <input type="text" id="termForId" name="term" value={term} onChange={this.onFilter} />        
      </form>
    )
  }
}
