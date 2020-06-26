import React, { Component } from "react";
import firebase from "../config/database";
import Skeleton from "react-loading-skeleton";

export default class Magazine extends Component {
  state = { magazines: ["", "", "", "", ""] };

  componentDidMount() {
    var firestore = firebase.firestore();
    firestore
      .collection("magazines")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ magazines: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="our-customer section-padd-top30">
        <div className="container-fluid">
          <div className="our-customer-wrapper">
            {/* <!-- Section Tittle --> */}
            <div className="row d-flex justify-content-center">
              <div className="col-xl-8">
                <div className="section-tittle text-center">
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
            <div className="row">
              <div className="col-12">
                <div className="customar-active dot-style d-flex dot-style">
                  {this.state.magazines.map((issue, i) => (
                    <div className="single-customer mb-100" key={i}>
                      <a href={`/magazines/${issue.slug}`}>
                        <div className="what-img">
                          {/* {require(`../static/img/${issue.thumbnail}`) ? (
                            <img
                              src={require(`../static/img/${issue.thumbnail}`)}
                              alt=""
                            />
                          ) : (
                            <Skeleton circle={true} height={70} width={70} />
                          )} */}
                        </div>
                        <div className="what-cap">
                          <h4>{issue.title || <Skeleton />}</h4>
                          <p>{issue.excerpt || <Skeleton />}</p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
