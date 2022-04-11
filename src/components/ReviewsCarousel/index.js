// Write your code here
import {Component} from 'react'
import './index.css'

const leftArrowUrl = `https://assets.ccbp.in/frontend/react-js/left-arrow-img.png`
const rightArrowUrl = `https://assets.ccbp.in/frontend/react-js/right-arrow-img.png`

class ReviewsCarousel extends Component {
  state = {
    currentReviewIndex: 0,
  }

  onClickLeftArrow = () => {
    const {currentReviewIndex} = this.state
    if (currentReviewIndex > 0) {
      this.setState(prevStat => ({
        currentReviewIndex: prevStat.currentReviewIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {currentReviewIndex} = this.state
    const {reviewsList} = this.props
    if (currentReviewIndex < reviewsList.length - 1) {
      this.setState(prevStat => ({
        currentReviewIndex: prevStat.currentReviewIndex + 1,
      }))
    }
  }

  onRenderReview = currentReviewIndex => {
    const {reviewsList} = this.props

    const {imgUrl, username, companyName, description} = reviewsList[
      currentReviewIndex
    ]

    return (
      <div className="review-container">
        <img alt={username} src={imgUrl} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {currentReviewIndex} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            className="arrow-button"
            type="button"
            testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img alt="left arrow" src={leftArrowUrl} />
          </button>
          {this.onRenderReview(currentReviewIndex)}
          <button
            className="arrow-button"
            type="button"
            testid="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img alt="right arrow" src={rightArrowUrl} />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
