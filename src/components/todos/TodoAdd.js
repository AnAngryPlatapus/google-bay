import Inferno from 'inferno'
import Component from 'inferno-component'
import { observable } from 'mobx'
import { connect } from 'inferno-mobx'
import Error from '../common/Error'


@connect(['todos'])
class TodoAdd extends Component {

    state = {
        text: '',
        title: '',
        loading: false,
        error: null
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { todos } = this.props
        const { title, text } = this.state

        this.setState({
            error: null,
            loading: true
        })

        todos.add({ title, text })
            .then(() => router.push('/'))
            .catch(error => {
                this.setState({
                    error,
                    loading: false,
                })
            })
            // Clear input text on sucess
    }

    render() {

        const { loading, error } = this.state
        return <form className="header" onSubmit={this.handleSubmit}>
        <h1>List A New Divy Here:</h1>
        <div>
            <label>
                <input  type="text"
                        name="title"
                        className="new-todo"
                        placeholder="Todo Title"
                        onKeyUp={this.handleChange}
                />
            </label>
            <label>
                <input  type="text"
                        name="text"
                        className="new-todo"
                        placeholder="What needs to be done?"
                        onKeyUp={this.handleChange}
                />
            </label>

            {loading
                ? <button disabled>Loading</button>
                : <button className="btn btn-primary btn-lg btn-block" type="submit">Submit</button>
            }

            {error && <Error text={error}/>}
            </div>
        </form>
    }
}

export default TodoAdd
