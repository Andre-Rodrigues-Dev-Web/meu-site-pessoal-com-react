
import * as React from 'react';
//React Head
import { HeadProvider, Title, Link as LinkHead, Meta } from 'react-head';
//React Router-Dom
import { Routes, Route, Outlet} from "react-router-dom";
import { Menu } from './components/Menu';
import { Content, Theme } from './components/Theme/style';
// Styled Components

//Pages
import { Home } from './pages/Home'

const App = () => (
    <HeadProvider>
        <Theme>
            <Title>André Laurentino </Title>
            <LinkHead rel="canonical" href="http://jeremygayed.com/" />
            <Meta name="example" content="whatever" />
            <Meta charset="utf-8" />
            <Content>
                <Menu/>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </Content>
        </Theme>
    </HeadProvider>
);

export default App;
