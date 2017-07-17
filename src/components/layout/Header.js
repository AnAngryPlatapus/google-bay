import Inferno from 'inferno'
import Component from 'inferno-component'
import { connect } from 'inferno-mobx'
import { Link } from 'inferno-router'

@connect(['account'])
export default class Header extends Component {
    render({ account }) {
        return account.isLoggedIn() ? <LoggedInMenu/> : <LoggedOutMenu/>
    }
}

const LoggedInMenu = (props) => {
    return  <div>
            <div className="navbar navbar-fixed-top header">
                <div className="col-md-12">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">Divvy</Link>
                        <button className="navbar-toggle" /*TODO: onClick drop search bar for moblile*/>
                            <i className="glyphicon glyphicon-search"></i>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-collapse1">
                        <form className="navbar-form pull-left">
                            <div className="input-group" style="max-width:470px;">
                                <input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" />
                                <div className="input-group-btn">
                                    <button className="btn btn-default btn-primary" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                                </div>
                            </div>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="">
                                <a href="#" className="dropdown-toggle" ><i className="glyphicon glyphicon-bell"></i></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#"><span className="badge pull-right">25</span>LinkDescpri</a/*TODO: notifcation drip down will go here*/></li>
                                    <li><a href="#"><span className="label label-info pull-right">1</span>Link</a></li>
                                    <li><a href="#"><span className="badge pull-right">13</span>Link</a></li>
                                </ul>
                            </li>
                            <li><a className="" href="#" /*hotlink to your posts/comments page*/ id="btnToggle"><i className="glyphicon glyphicon-th-large"></i></a></li>
                            <li><a href="#"><i className="glyphicon glyphicon-user"></i></a/*profile page hotlink */></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="navbar navbar-default" id="subnav">
                <div className="col-md-12">
                    <div className="navbar-header">

                        <a href="#" style="margin-left:15px;" className="navbar-btn btn btn-default btn-plus dropdown-toggle"><i className="glyphicon glyphicon-cog" style="color:#dd1111;"></i> Filter <small><i className="glyphicon glyphicon-chevron-down"></i></small></a>
                        <ul className="nav dropdown-menu">
                            <li><a href="#"><i className="glyphicon glyphicon-user" style="color:#1111dd;"></i> Profile</a></li>
                            <li className="nav-divider"></li>
                            <li><a href="#"><i className="glyphicon glyphicon-plus"></i> More..</a></li>
                        </ul>

                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse2">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-collapse2"/*TODO:instead of having these pop up as models, have posts slide away, and forms/info pop up*/>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active"><Link to="/">Posts</Link></li>
                            <li><Link to="/page/logout" role="button">Logout</Link></li>
                            <li><Link to="/page/about" role="button">About</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
}



const LoggedOutMenu = (props) => {
    return <div>
            <div className="navbar navbar-fixed-top header">
                <div className="col-md-12">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">Divvy</Link>
                        <button className="navbar-toggle" /*TODO: onClick drop search bar for moblile*/>
                            <i className="glyphicon glyphicon-search"></i>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-collapse1">
                        <form className="navbar-form pull-left">
                            <div className="input-group" style="max-width:470px;">
                                <input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" />
                                <div className="input-group-btn">
                                    <button className="btn btn-default btn-primary" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                                </div>
                            </div>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a className="" href="#" /*hotlink to your posts/comments page*/ id="btnToggle"><i className="glyphicon glyphicon-th-large"></i></a></li>
                            <li><a href="#"><i className="glyphicon glyphicon-user"></i></a/*profile page hotlink */></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="navbar navbar-default" id="subnav">
                <div className="col-md-12">
                    <div className="navbar-header">

                        <a href="#" style="margin-left:15px;" className="navbar-btn btn btn-default btn-plus dropdown-toggle"><i className="glyphicon glyphicon-cog" style="color:#dd1111;"></i> Filter <small><i className="glyphicon glyphicon-chevron-down"></i></small></a>
                        <ul className="nav dropdown-menu">
                            <li><a href="#"><i className="glyphicon glyphicon-user" style="color:#1111dd;"></i> Profile</a></li>
                            <li className="nav-divider"></li>
                            <li><a href="#"><i className="glyphicon glyphicon-plus"></i> More..</a></li>
                        </ul>

                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse2">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-collapse2"/*TODO:instead of having these pop up as models, have posts slide away, and forms/info pop up*/>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active"
                            ><Link to="/">Posts</Link></li>
                            <li><Link to="/page/register">Register</Link></li>
                            <li><Link to="/page/login">Login</Link></li>
                            <li><Link to="/page/about">About</Link></li>

                        </ul>
                    </div>
                </div>
            </div>
            </div>
}
