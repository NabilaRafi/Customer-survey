import React, { Component } from 'react'
import { fetchData } from '../actions/index.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import EnterInput from '../components/enter-input'


class WelcomeHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: '0'
        }
        this.nextQuestion = this.nextQuestion.bind(this)
    }
    
    componentDidMount() {
        this.props.fetchData()
    }
    
    nextQuestion() {
        const { nextId } = this.props
        const nextQuestionToDisplay = nextId.length >= 1 && nextId[this.state.index].next
        let elementPos = nextQuestionToDisplay !== null ? nextId.map(function (x) {return x.id}).indexOf(nextQuestionToDisplay) :  this.state.index
        nextQuestionToDisplay === null && alert('form submitted')
        this.setState({
            index: elementPos
        })
    }
    
    render () {
        const { nextId } = this.props
        const dataLength = nextId.length >=1 && nextId.length
        const questionToDisplay = dataLength && nextId[this.state.index].text       
        let inputType = dataLength && nextId[this.state.index].type
        return (
            <div>
                <section>
                    <h3>{questionToDisplay && questionToDisplay} </h3>
                    <EnterInput type={inputType} />
                    <button onClick={this.nextQuestion}>
                        Continue
                    </button>
                </section>
            </div>
        )
    }
}

WelcomeHome.propTypes = {
    fetchData: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        nextId: state.questions
    }
}

export default connect(mapStateToProps, { fetchData })(WelcomeHome)