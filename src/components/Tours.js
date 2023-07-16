import React from "react";
import Title from "./Title";
import { tours } from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subTitle="Tours" />

      <div className="section-center featured-center">
        {tours.map((travel) => {
          return (
            <article className="tour-card" key={travel.id}>
              <div className="tour-img-container">
                <img src={travel.image} className="tour-img" alt="" />
                <p className="tour-date">{travel.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{travel.title}</h4>
                </div>
                <p>{travel.text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {travel.location}
                  </p>
                  <p>{travel.duration}</p>
                  <p>{travel.cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
