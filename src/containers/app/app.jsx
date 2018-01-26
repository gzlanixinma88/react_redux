import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {addComment, deleteComment, getComments}  from '../../redux/actions'
import CommentAdd from '../../components/comment-add/comment-add'
import CommentList from '../../components/comment-list/comment-list'

class App extends Component {

  /*constructor (props) {
    super(props)
    this.state = {
      comments: [
        {username: 'Tom', content: 'React挺好的!'},
        {username: 'Jack', content: 'React太难了!'},
      ]
    }
  }*/
  // 给组件对象指定state属性
    /*
  state = {
    comments: [/!*
      {username: 'Tom', content: 'React挺好的!'},
      {username: 'Jack', content: 'React太难了!'},*!/
    ]
  }
*/

    static propTypes ={
        comments:PropTypes.array.isRequired,
        addComment:PropTypes.func.isRequired,
        deleteComment:PropTypes.func.isRequired,
        getComments:PropTypes.func.isRequired

    }

  componentDidMount (){
        this.props.getComments()
  }


  render () {

    const {comments, addComment, deleteComment} = this.props

    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd addComment={addComment}/>
          <CommentList comments={comments} deleteComment={deleteComment}/>
        </div>
      </div>
    )
  }
}

export default connect(
    state =>({comments:state}),
    {addComment, deleteComment, getComments}
)(App)