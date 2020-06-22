import React, { Component } from "react";
import firebase from "../config/database";
import Skeleton from "react-loading-skeleton";

export default class EventList extends Component {
  state = { events: ["", "", ""] };

  componentDidMount() {
    var firestore = firebase.firestore();
    firestore
      .collection("events")
      .limit(this.props.limit || 15)
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ events: data }); // array of cities objects
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div class="pricing-card-area">
        <div class="container">
          <div class="row">
            {this.state.events.map((event, i) => (
              <div class="col-xl-4 col-lg-4 col-md-6" key={i}>
                <div class="single-card text-center mb-30">
                  <div class="card-top">
                    <span>{event.date || <Skeleton />}</span>
                    <h4>
                      {event.title}
                      <span>{event.subtitle || <Skeleton />}</span>
                    </h4>
                  </div>
                  <div class="card-bottom">
                    <ul>
                      <li>{event.organizer || <Skeleton />}</li>
                      <li>{event.address || <Skeleton />}</li>
                    </ul>
                    <a
                      href={event.register}
                      class="btn card-btn1"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {event.register ? "View Details" : <Skeleton />}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
