import { ReactElement } from "react";

// Styles
import { avatarStyles } from "./avatar.styles";

// Components
import Container from "@/components/core/Container/Container";

const Avatar = (): ReactElement => {
  const classes = avatarStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.avatarContainer}>
        <img
          className={classes.avatarImg}
          src="/static/images/avatars/avocado.png"
          alt="avatar"
        />

        <h4 className={classes.name}>Victor Chavarro</h4>
        <p className={classes.avatarDescription}>Task planner</p>
      </div>
    </Container>
  );
};

export default Avatar;
