// Write your JS code here
import './index.css'
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameError: false,
    showLastNameError: false,
    isSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    this.setState({showFirstNameError: firstName === ''})
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    this.setState({showLastNameError: lastName === ''})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    const isFirstNameValid = firstName !== ''
    const isLastNameValid = lastName !== ''

    if (isFirstNameValid && isLastNameValid) {
      this.setState({isSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isFirstNameValid,
        showLastNameError: !isLastNameValid,
      })
    }
  }

  onClickSubmitAnotherResponse = () => {
    this.setState({
      firstName: '',
      lastName: '',
      showFirstNameError: false,
      showLastNameError: false,
      isSubmitted: false,
    })
  }

  renderForm = () => {
    const {
      firstName,
      lastName,
      showFirstNameError,
      showLastNameError,
    } = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <div className="input-container">
          <label className="input-label" htmlFor="firstName">
            FIRST NAME
          </label>

          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={this.onChangeFirstName}
            onBlur={this.onBlurFirstName}
            className={`name-input ${showFirstNameError ? 'error-field' : ''}`}
            placeholder="First Name"
          />

          {showFirstNameError && <p className="error-message">Required</p>}
        </div>

        <div className="input-container">
          <label className="input-label" htmlFor="lastName">
            LAST NAME
          </label>

          <input
            className={`name-input ${showLastNameError ? 'error-field' : ''}`}
            type="text"
            id="lastName"
            value={lastName}
            onChange={this.onChangeLastName}
            onBlur={this.onBlurLastName}
            placeholder="Last Name"
          />

          {showLastNameError && <p className="error-message">Required</p>}
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    )
  }

  renderSuccessView = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p className="success-message">Submitted Successfully</p>

      <button
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="bg-container">
        <h1 className="form-title">Registration</h1>
        {isSubmitted ? this.renderSuccessView() : this.renderForm()}
      </div>
    )
  }
}

export default RegistrationForm
