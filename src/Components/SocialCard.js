import React, { Component } from "react";
import { Card, Image, Icon, Feed } from "semantic-ui-react";

class SocialCard extends Component {
  state = {
    users: [
      {
        name: "Umair",
        profession: "Developer",
        details: "A frontend Developer",
        imageUrl: "/images/proff.png",
        skills: ["Programming", "Debugging"]
      },

      {
        name: "Asad",
        profession: "Backend Developer",
        details: "A frontend Developer",
        imageUrl: "/images/proff.png",
        skills: ["Programming", "Debugging"]
      },

      {
        name: "Shahbaz",
        profession: "React-Native Developer",
        details: "A frontend Developer",
        imageUrl: "/images/proff.png",
        skills: ["Programming", "Debugging"]
      },

      {
        name: "Sajid",
        profession: "React-Native / Java Developer",
        details: "A frontend Developer",
        imageUrl: "/images/proff.png",
        skills: ["Programming", "Debugging"]
      }
    ]
  };
  render() {
    const { users } = this.state;

    return (
      <React.Fragment>
        {/* {users.map(item => (
          <Card
            image={item.imageUrl}
            header={item.name}
            meta={item.profession}
            description={item.details}
          />
        ))} */}

<Card>
    <Card.Content>
      <Card.Header>Recent Activity</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image='/images/proff.png' />
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
              You added <a>Jenny Hess</a> to your <a>coworker</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='/images/proff.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='/images/proff.png' />
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
              You added <a>Elliot Baker</a> to your <a>musicians</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
      </React.Fragment>
    );
  }
}

export default SocialCard;
