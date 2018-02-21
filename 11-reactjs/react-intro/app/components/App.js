import React from 'react'
import Like from './Like'
import Slider from './Slider'
import LikeButton from './LikeButton'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.incrementLikes = this.incrementLikes.bind(this)
    this.state = {
      likes: 0
    }
  }

  incrementLikes() {
    let beforeLike = this.state.likes
    this.setState({ likes: beforeLike + 1 })
  }

  render() {
    return <div>
      <Like count="0" hates="1"/>   
      <h1>react intro</h1>
      <Slider startValue="5"/>
      <LikeButton likes={this.state.likes} increment={this.incrementLikes}/>
    </div>
  }

}
