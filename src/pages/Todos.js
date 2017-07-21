import Inferno from 'inferno'
import Component from 'inferno-component'
import { connect } from 'inferno-mobx'
import TodoAdd from '../components/todos/TodoAdd'
import TodoItem from '../components/todos/TodoItem'

@connect(['todos'])
class Todos extends Component {

    // When route is loaded (isomorphic)
    static onEnter({ todos, common, params }) {
        common.title = 'Divvy Up Your Stuff!'
        return todos.browse()
    }

    render({ todos }) {
        return <div className="container">

        <div className="col-sm-6 col-md-4">
            <div className="panel panel-default">
                <div className="home">
                    <TodoAdd/>
                </div>
            </div>
        </div>
        <div className="col-sm-6 col-md-4">
            <div className="well">
                <section className="main">
                    <TodoItemWrapper todos={todos}/>
                </section>
            </div>
        </div>

        </div>
    }
}

// Render each item
const TodoItemWrapper = connect(props => (
    <ul className="todo-list">
        {props.todos.map(item => <TodoItem item={item}/>)}
    </ul>
))

export default Todos
