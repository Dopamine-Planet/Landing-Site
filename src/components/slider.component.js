import React from 'react';
import firebase from '../config/database';

import Slider from 'react-slick';

class SliderParent extends React.Component {
  state = { magazines: undefined };
  componentDidMount() {
    var firestore = firebase.firestore();
    firestore
      .collection('magazines')
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ magazines: data }); // array of cities objects
      })
      .catch((err) => console.log(err));
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centreMode: true,
      arrows: false,
      dragable: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          {this.state.magazines &&
            this.state.magazines.map((issue, i) => (
              <div class='' key={i}>
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
            ))}
        </Slider>
      </div>
    );
  }
}
export default SliderParent;
