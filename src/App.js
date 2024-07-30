import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import firebase from "./config/database";
import MessengerCustomerChat from "react-messenger-customer-chat";

import Header from "./components/header.component";
import Footer from "./components/footer.component";
import Home from "./layouts/home.layout";
import Premium from "./layouts/premium.layout";
import Events from "./layouts/events.layout";
import About from "./layouts/about.layout";
import Collaborate from "./layouts/collaborate.layout";
import Blog from "./layouts/blog.layout";
import Legal from "./layouts/legal.layout";
import BlogDetails from "./layouts/article.layout";
import Issue from "./layouts/issue.layout";
import AdminBlog from "./layouts/admin-blog.layout";
import NotFound from "./layouts/not-found.layout";

export default class App extends Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      if (firebase.messaging.isSupported()) {
        const messaging = firebase.messaging();
        messaging
          .requestPermission()
          .then(() => console.log("Request Granted"))
          .catch((err) => console.log(err));
      }
    }, 20000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Blog} />
          <Route path="/home" exact component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/premium" component={Premium} />
          <Route path="/about" component={About} />
          <Route path="/collaborate" component={Collaborate} />
          <Route path="/blog/:slug" component={BlogDetails} />
          <Route path="/blog" component={Blog} />
          <Route path="/magazines/:slug" component={Issue} />
          <Route path="/legal/:slug" component={Legal} />
          <Route path="/admin/blog/:slug" component={AdminBlog} />
          <Route path="/admin/blog" component={AdminBlog} />
          <Route path="/not-found" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
        <MessengerCustomerChat
          pageId={process.env.REACT_APP_FACEBOOK_pageId}
          appId={process.env.REACT_APP_FACEBOOK_pageId}
        />
        <Footer />
      </Router>
    );
  }
}
