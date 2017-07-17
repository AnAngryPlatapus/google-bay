import Inferno from 'inferno'
import Component from 'inferno-component'
import { observable, action } from 'mobx'
import { connect } from 'inferno-mobx'
import Error from '../common/Error'

@connect(['account'])
class Register extends Component {

    // When route is loaded (isomorphic)
    static onEnter({ common }) {
        common.title = 'Register'
    }

    @observable form = {
        username: '',
        password: '',
        errorMsg: null,
        loading: false
    }

    handleChange = (key) => (e) => {
        this.form[key] = e.target.value
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.handleRegister()
    }

    @action handleRegister() {
        const { account } = this.props
        const form = this.form
        const { username, password } = form
        const { router } = this.context

        form.errorMsg = null
        form.loading = true

        account.register({username, password})
            .then(() => account.login({username, password}))
            .then(() => router.push('/'))
            .catch(action(error => {
                form.errorMsg = error
                form.loading = false
            }))
    }

    render() {
        const form = this.form;
        return  <main>

        <div className="well" id="loginModal">
            <div className="model-header">
                <h2 className="text-center"><img src="/../assets/img/photo_002.png" className="img-circle"/>Register</h2>
            </div>
                    <form className="account" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text"
                            required
                            onInput={this.handleChange("username")}
                            value={form.username}
                            placeholder="Enter your email address"
                            className="form-control input-lg"
                            />
                        </div>

                        <div className="form-group">
                        <input type="password"
                            required
                            onInput={this.handleChange("password")}
                            autocomplete="new-password"
                            value={form.password}
                            className="form-control input-lg"
                            placeholder="Enter your password"
                        />
                        </div>
                        <div className="form-group">
                        <input type="password"
                            required
                            onInput={this.handleChange("password")}
                            autocomplete="new-password"
                            value={form.password}
                            className="form-control input-lg"
                            placeholder="Confirm your password"
                        />
                        </div>

                        {form.loading
                            ? <button disabled>Loading</button>
                            : <button className="btn btn-primary btn-lg btn-block" type="submit">Register</button>
                        }

                        {form.errorMsg && <Error text={form.errorMsg}/>}
                    </form>
        </div>
                </main>
    }
}

export default Register
