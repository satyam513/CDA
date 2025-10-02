import React from "react";
import { Tabs, Tab, Card, Button, Row, Col } from "react-bootstrap";
import "./EventPage.css";

const events = {
  upcoming: [
    {
      title: "Annual Dance Fest 2025",
      date: "September 25, 2025",
      desc: "A grand stage event with performances from all dance styles.",
      img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    },
    {
      title: "Yoga & Wellness Retreat",
      date: "October 10, 2025",
      desc: "Relax, rejuvenate, and heal your body with certified trainers.",
      img: "https://images.unsplash.com/photo-1599447421416-0c8b4d4a5d9e",
    },
  ],
  ongoing: [
    {
      title: "Summer Dance Workshop",
      date: "August 1 - August 30, 2025",
      desc: "Daily workshops covering Zumba, Kathak, Salsa, and Hip-Hop.",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
  ],
  past: [
    {
      title: "Spring Zumba Challenge",
      date: "March 2025",
      desc: "An energetic month filled with dance challenges and fitness fun!",
      img: "https://images.unsplash.com/photo-1554288246-0f2b5647f9d4",
    },
    {
      title: "Diwali Cultural Night",
      date: "November 2024",
      desc: "Traditional dance performances and a festive celebration.",
      img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2",
    },
  ],
};

const EventPage = () => {
  return (
    <div className="event-page">
      <header className="event-header text-center">
        <h1>✨ Our Events ✨</h1>
        <p>
          Explore upcoming, ongoing, and past events. Be a part of our
          unforgettable dance & wellness journey.
        </p>
      </header>

      {/* Tabs for events */}
      <Tabs defaultActiveKey="upcoming" id="event-tabs" className="mb-4 justify-content-center">
        <Tab eventKey="upcoming" title="📅 Upcoming">
          <Row>
            {events.upcoming.map((event, idx) => (
              <Col md={6} lg={4} key={idx} className="mb-4">
                <Card className="event-card shadow-lg">
                  <Card.Img variant="top" src={event.img} className="event-img" />
                  <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Text>{event.desc}</Card.Text>
                    <p className="event-date">📍 {event.date}</p>
                    <Button variant="danger">Register Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>

        <Tab eventKey="ongoing" title="🔥 Ongoing">
          <Row>
            {events.ongoing.map((event, idx) => (
              <Col md={6} lg={4} key={idx} className="mb-4">
                <Card className="event-card ongoing-card shadow-lg">
                  <Card.Img variant="top" src={event.img} className="event-img" />
                  <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Text>{event.desc}</Card.Text>
                    <p className="event-date">📍 {event.date}</p>
                    <Button variant="warning">Join Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>

        <Tab eventKey="past" title="⏳ Past">
          <Row>
            {events.past.map((event, idx) => (
              <Col md={6} lg={4} key={idx} className="mb-4">
                <Card className="event-card past-card shadow">
                  <Card.Img variant="top" src={event.img} className="event-img" />
                  <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Text>{event.desc}</Card.Text>
                    <p className="event-date">📍 {event.date}</p>
                    <Button variant="secondary" disabled>
                      Event Over
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
};

export default EventPage;
