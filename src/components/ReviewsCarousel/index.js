import {Component} from 'react'
import './index.css'

// Write your code here
class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  onClickRightButton = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  renderActiveReviews = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-con">
        <img src={imgUrl} alt={username} className="review-image" />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftButton = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentReviewDetails = reviewsList[activeReviewIndex]

    return (
      <div className="main-con">
        <h1 className="heading">Reviews</h1>
        <div className="inner-con">
          <button
            className="left-button"
            type="button"
            testid="leftArrow"
            onClick={this.onClickLeftButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="left-img"
            />
          </button>
          {this.renderActiveReviews(currentReviewDetails)}
          <button
            className="right-button"
            type="button"
            testid="rightArrow"
            onClick={this.onClickRightButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="right-img"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
