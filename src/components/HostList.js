import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";

function HostList({ hosts, onHostClick }) {
  const hostList = hosts.map((host) => (
    <Host key={host.id} host={host} onHostClick={onHostClick} />
  ));

  return <Card.Group itemsPerRow={6}>{hostList}</Card.Group>;
}


export default HostList;
