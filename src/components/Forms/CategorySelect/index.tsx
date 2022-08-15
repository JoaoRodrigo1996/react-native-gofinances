import React from "react";

import { Category, Container, Icon } from "./styles";

interface CategoryProps {
  title: string;
}

export function CategorySelect({ title }: CategoryProps) {
  return (
    <Container>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
