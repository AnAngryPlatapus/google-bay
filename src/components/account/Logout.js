import Inferno from 'inferno'
import Component from 'inferno-component'
import { connect } from 'inferno-mobx'

@connect(['account'])
class Logout extends Component {

    // When route is loaded (isomorphic)
    static onEnter({ common }) {
        common.title = 'Logout'
    }

    state = {
        loading: false
    }

    handleLogout = () => {
        const { account } = this.props
        const { router } = this.context

        this.setState({
            loading: true
        })
        new Promise(resolve => setTimeout(resolve, 500))
            .then(() => account.logout())
            .then(() => router.push('/'))
    }

    render() {
        const { loading } = this.state

        return <main>
        <div className="well" id="loginModal">
            <div className="model-header">
                <h2 className="text-center">Are you sure you want to log out?</h2>
            </div>

                {loading
                    ? <button className="btn btn-primary btn-lg btn-block" disabled>Loading</button>
                    : <button className="btn btn-primary btn-lg btn-block" onClick={this.handleLogout}>Logout</button>
                }
        </div>
    </main>
    }
}

export default Logout
