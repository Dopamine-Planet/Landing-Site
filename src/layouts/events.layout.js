import React, { Component } from "react";
import SubFooter from "../components/sub-footer.component";
import { Helmet } from "react-helmet";
import Breadcrumb from "../components/breadcrumb.component";
import EventList from "../components/eventList.component";

export default class Events extends Component {
  render() {
    return (
      <main>
        <Helmet>
          <title>Our Events | Dopamine - Let Positivity Engulf You</title>
          <meta
            name="description"
            content="We organize various contests and photo booths. Organize One With Us. Contact us to know more."
          />
        </Helmet>
        {/* <!-- Best Pricing Start --> */}
        <section className="best-pricing best-pricing2 pricing-padding2">
          <Breadcrumb />
          <div className="container">
            {/* <!-- Section Tittle --> */}
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="section-tittle text-center">
                  <h2>
                    Our Events
                    <p>
                      If you feel that you’d like to support our cause or we
                      could mutually support our missions, let’s get talking.
                    </p>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Best Pricing End --> */}
        <EventList />
        <SubFooter />
      </main>
    );
  }
}
