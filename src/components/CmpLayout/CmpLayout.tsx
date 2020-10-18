import * as React from "react";

import { Card, Divider } from "semantic-ui-react";

interface CmpLayoutProps {
  title: string;
  children: React.ReactNode;
}

const CmpLayout: React.FC<CmpLayoutProps> = ({ title, children }) => (
  <Card color="grey" fluid>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Divider />
      <Card.Description>{children}</Card.Description>
    </Card.Content>
  </Card>
);

export default CmpLayout;
