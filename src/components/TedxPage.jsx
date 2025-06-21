import React from "react";
import "./tedx.css";

const TedxPage = () => {
  return (
    <>
      <nav className="sticky-top">
        <img src="/tedxcusat.jpg" alt="tedxcusat" style={{ width: 55, height: 60 }} />
      </nav>

      <div className="container-fluid">
        <h1 className="h">Passport to Ideas: Journey Through Stories</h1>
        <p className="p1">
          Passport to Ideas is envisioned as a one-day TEDxCUSAT event at the Seminar Complex, CUSAT, Kochi,
          designed to guide attendees on an intellectual adventure through storytelling. Drawing inspiration from past
          editions like TEDxCUSAT '25 (“Kaleidoscope: Alchemy of Voices”), the event uses a symbolic “passport” to transform
          each talk, performance, exhibit, and workshop into a “visa stamp,” creating a personal narrative journey for every
          participant.
        </p>

        <h1 style={{ textAlign: "center", color: "black" }}>Date & Venue</h1>
        <p className="p2">
          Date: 1 July 2025, echoing TEDxCUSAT’s usual schedule
          <br /><br />
          Venue: Seminar Complex, CUSAT, Kochi
        </p>

        <div className="infinite-scroll-container">
          <div className="infinite-scroll-text">
            {[
              "Welcome to Passport to Ideas!",
              "Explore. Experience. Evolve.",
              "Let your stories take flight!",
              "Grab Your Tickets Now!",
            ].map((text, idx) => (
              <span key={idx}>{text}</span>
            ))}
          </div>
        </div>

        <h1 className="h">Event Highlights</h1>
        <p className="p1">
          A TEDx-style experience that brings together storytellers, adventurers, and thinkers who believe the
          world is the best teacher. Through real journeys across borders, cultures, and mindsets, we explore how travel
          transforms the way we see life, people, and ourselves.
        </p>

        <h2 className="ht">Why Attend?</h2>
        <p className="p1">
          Be inspired by real-life journeys that go beyond Instagram aesthetics
          <br />Learn how travel can boost creativity, empathy, and personal growth
          <br />Explore how different cultures reshape the way we think and act
        </p>

        <h2 className="ht">What’s Inside?</h2>
        <p className="p1">
          3 Inspiring Speaker Talks: Each with a unique perspective on how travel transforms lives
          <br />Campus Travel Diaries: Short slots for CUSAT students to share travel tales
          <br />Travel Wall Installation: Showcase of photos/videos from around the world
          <br />Interactive Activities & Giveaways: From travel quizzes to souvenir goodies
          <br />Wander Wall: Share your travel dreams, destinations, or memorable quotes
        </p>

        <h1 className="h">Speakers Line Up</h1>
        <div className="card-group" style={{ paddingTop: 30 }}>
          {[
            {
              img: "/sgk.webp",
              name: "Santhosh George Kulangara",
              text: "Kerala-born traveller and media entrepreneur, he shot, directed, and hosted Sancharam—India’s first Malayalam travel documentary—after exploring over 130 countries..."
            },
            {
              img: "/bnn3.jpg",
              name: "Baiju N Nair",
              text: "An auto‑journalist, author, and TV presenter from Kottayam, Baiju hosts Smart Drive on Asianet News..."
            },
            {
              img: "/sj2.jpg",
              name: "Sidharth Joshy",
              text: "A Mumbai‑based travel blogger and photographer, he founded SidTheWanderer in 2010..."
            }
          ].map((speaker, i) => (
            <div className="card" key={i}>
              <img src={speaker.img} className="card-img-top" alt={speaker.name} style={{ width: "100%", height: 240 }} />
              <div className="card-body">
                <h5 className="card-title">{speaker.name}</h5>
                <p className="card-text">{speaker.text}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="testimonials">
          <h1 className="ho">"Voices of TEDxCUSAT”</h1>
          {[
            {
              quote: "Joining TEDxCUSAT was a game-changer. Sharing my story felt truly supported by the team.",
              cite: "— Anantharaman Ajay, Speaker, TEDxCUSAT ’24"
            },
            {
              quote: "Listening to TEDx talks made me realize that the most powerful ideas aren't complex—they're the ones that speak to something real in all of us",
              cite: "— Reenu Roy, Attendee, TEDxCUSAT ’24"
            },
            {
              quote: "Volunteering for TEDxCUSAT taught me that behind every great idea is a team that believes in making it happen.",
              cite: "— Akash KR, Volunteer, TEDxCUSAT ’24"
            }
          ].map((item, i) => (
            <div className="testimonial" key={i}>
              <div className="text">
                <blockquote>{item.quote}</blockquote>
                <cite>{item.cite}</cite>
              </div>
            </div>
          ))}
        </section>

        <div className="bookingsec">
          <h1 className="hd">Book Your Ticket's now!</h1>
          <p className="pass">
            Don't miss your chance to be part of an unforgettable TEDx experience.
            Join curious minds, bold ideas and Inspiring Speakers—all in one powerful event.
            <br />
            Reserve your seat and start your journey of discovery.
          </p>
        </div>

        <div className="btn1">
          <button className="btn">BOOK NOW!</button>
        </div>
      </div>

      <div className="end">
        <p>© Copyright ©2025 All rights reserved</p>
      </div>
    </>
  );
};

export default TedxPage;
