import React, { Component } from "react";
import firebase from "../config/database";

import HorizontalGallery from "react-dynamic-carousel";

import SliderParent from "./slider.component";

export default class Magazine extends Component {
  // state = { magazines: undefined };

  // componentDidMount() {
  //   var firestore = firebase.firestore();
  //   firestore
  //     .collection('magazines')
  //     .get()
  //     .then((querySnapshot) => {
  //       const data = querySnapshot.docs.map((doc) => doc.data());
  //       this.setState({ magazines: data }); // array of cities objects
  //     })
  //     .catch((err) => console.log(err));
  // }

  render() {
    return (
      <div class="our-customer section-padd-top30" id="magazines">
        <div class="container-fluid">
          <div class="our-customer-wrapper">
            {/* <!-- Section Tittle --> */}
            <div class="row d-flex justify-content-center">
              <div class="col-xl-8">
                <div class="section-tittle text-center">
                  <h2>
                    Our Magazines
                    <p>
                      We are trying to spread positivity through creativity
                      magazines. Checkout our recent issues below!
                    </p>
                  </h2>
                </div>
              </div>
            </div>
            <SliderParent></SliderParent>
            {/* <div
              class='container'
              style={{
                width: '100vw',
              }}>
              <div class='row'>
                <div class='col-12'>
                  <HorizontalGallery
                    tiles={
                      this.state.magazines &&
                      this.state.magazines.map((issue, i) => (
                        <div class=' column single-customer mb-100' key={i}>
                          <a href={`/magazines/${issue.slug}`}>
                            <div class='what-img'>
                              <img
                                src={require(`../static/img/${issue.thumbnail}`)}
                                alt=''
                              />
                            </div>
                            <div class='what-cap'>
                              <h4>{issue.title}</h4>
                              <p>{issue.excerpt}</p>
                            </div>
                          </a>
                        </div>
                      ))
                    }
                    elementWidth={250}
                    fadeDistance={100}
                    minPadding={20}
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
