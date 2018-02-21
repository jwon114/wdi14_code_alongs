import React from 'react'

// export default class LikeButton extends React.Component {
//     constructor(props) {
//         super(props)
//         this.incrementLikes = this.incrementLikes.bind(this)
//         this.state = {
//             likes: 0
//         }
//     }

//     incrementLikes() {
//         this.setState({ likes: this.state.likes + 1 })
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.incrementLikes}>Like</button>
//                 <span>{this.state.likes}</span>
//             </div>
//         )
//     }
// }

export default function LikeButton(props) {
    return (
        <div>
            <button onClick={props.increment}>Like</button>
            <span>{props.likes}</span>
        </div>  
    )
}