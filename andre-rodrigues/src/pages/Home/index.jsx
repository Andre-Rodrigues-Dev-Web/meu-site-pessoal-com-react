import * as React from "react";
//React Head
import { HeadProvider, Title, Link as LinkHead, Meta } from "react-head";
//Styled Components
import { PageContainer } from "../../components/Theme/style";
export const Home = () => {
  return (
    <HeadProvider>
      <PageContainer>
        <Title>André Laurentino </Title>
        <LinkHead rel="canonical" href="http://jeremygayed.com/" />
        <Meta name="example" content="whatever" />
        <h1>Teste</h1>
      </PageContainer>
    </HeadProvider>
  );
};
