import React from "react";

export const Home = () => {
  return (
    <section id="rooms" class="container mt-5">
      <h2 class="mb-3 ml-2 stays-heading">Stays in New York</h2>
      <a href="#" class="ml-2 back-to-search">
        {" "}
        <i class="fa fa-arrow-left"></i> Back to Search
      </a>
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-3 my-3">
          <div class="card p-2">
            <img
              class="card-img-top mx-auto"
              src="https://a0.muscache.com/im/pictures/a8f6a489-d236-4d2d-a57b-a95d928970af.jpg?im_w=960"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">
                <a href="">Charming Studio 10 Miles to Wells' Beaches!</a>
              </h5>
              <div class="ratings mt-auto mb-3">
                <p class="card-text">
                  <b>$12</b> / night
                </p>
                <div class="rating-outer">
                  <div class="rating-inner"></div>
                </div>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <button class="btn btn-block view-btn">
                <a href="#">View Details</a>
              </button>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 my-3">
          <div class="card p-2">
            <img
              class="card-img-top mx-auto"
              src="https://a0.muscache.com/im/pictures/2121b1e3-1d2b-4824-9268-eba1e593bc28.jpg?im_w=720"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">
                <a href="">Picturesque 2-Story Farmhouse w/Private Hot Tub</a>
              </h5>
              <div class="ratings mt-auto mb-3">
                <p class="card-text">
                  <b>$12</b> / night
                </p>
                <div class="rating-outer">
                  <div class="rating-inner"></div>
                </div>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <button class="btn btn-block view-btn">
                <a href="#">View Details</a>
              </button>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 my-3">
          <div class="card p-2">
            <img
              class="card-img-top mx-auto"
              src="https://a0.muscache.com/im/pictures/4599de32-549f-4125-8c93-ef99ce5b4cb0.jpg?im_w=720"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">
                <a href="">Downtown Portsmouth Private Getaway! Hot Tub</a>
              </h5>
              <div class="ratings mt-auto mb-3">
                <p class="card-text">
                  <b>$12</b> / night
                </p>
                <div class="rating-outer">
                  <div class="rating-inner"></div>
                </div>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <button class="btn btn-block view-btn">
                <a href="#">View Details</a>
              </button>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 my-3">
          <div class="card p-2">
            <img
              class="card-img-top mx-auto"
              src="https://a0.muscache.com/im/pictures/70d71940-9610-46b8-b028-cc190bbfe6e9.jpg?im_w=960"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">
                <a href="">Spacious Suite in a quiet Boston neighborhood.</a>
              </h5>
              <div class="ratings mt-auto mb-3">
                <p class="card-text">
                  <b>$12</b> / night
                </p>
                <div class="rating-outer">
                  <div class="rating-inner"></div>
                </div>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <button class="btn btn-block view-btn">
                <a href="#">View Details</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
