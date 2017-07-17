import Inferno from 'inferno'
import Component from 'inferno-component'
import { connect } from 'inferno-mobx'
import Error from '../common/Error'

@connect(['account'])
class Login extends Component {

    // When route is loaded (isomorphic)
    static onEnter({ common }) {
        common.title = 'Login'
    }

    state = {
        username: '',
        password: '',
        loading: false,
        error: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = (e) => {
        e.preventDefault()
        const { account } = this.props
        const { router } = this.context
        const { username, password } = this.state

        this.setState({
            error: null,
            loading: true
        })

        account.login({ username, password })
            .then(() => router.push('/'))
            .catch(error => {
                this.setState({
                    error,
                    loading: false,
                })
            })
    }

    render() {
        const { loading, error } = this.state

        return <main>

        <div className="well" id="loginModal">
            <div className="model-header">
                <h2 className="text-center"><img src="/assets/img/photo_002.png" className="img-circle"/>Login</h2>
            </div>

           <form className="form" onSubmit={this.handleLogin}>
                <div className="form-group">
                   <input type="text"
                          name="username"
                          required
                          onInput={this.handleChange}
                          placeholder="Enter your email address"
                          className="form-control input-lg"
                   />
               </div>
               <div className="form-group">
                   <input type="password"
                          name="password"
                          required
                          onInput={this.handleChange}
                          className="form-control input-lg"
                          placeholder="Enter your password"

                   />
               </div>

               {loading
                   ? <button disabled>Loading</button>
                   : <button className="btn btn-primary btn-lg btn-block" type="submit">Sign In</button>
               }

               {error && <Error text={error}/>}
           </form>
         </div>
</main>
    }
}

export default Login
