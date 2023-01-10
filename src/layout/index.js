import { Layout } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout"
import Sider from "antd/es/layout/Sider"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { Container, ContainerFluid } from "../assets/css"
import logo from "../assets/images/logo.jpg"



const LayoutMain = ({ children, title }) => {
    return (
        <ContainerFluid className="container-fluid">
            <HelmetProvider>
                <Helmet>
                    <title>{title}</title>
                    <link rel="icon" href={logo} />
                </Helmet>
            </HelmetProvider>
            <Container className="container">
                <Layout>
                    <Sider>
                        <div style={{ height: "32px", margin: "8px", width: "90%", display: "flex", justifyContent: "space-evenly", alignItems: "center", background: '#8000ff', fontSize: "20px" }}>
                        </div>
                    </Sider>
                    <Layout>
                        <Header />
                        <Content>
                            {children}
                        </Content>
                        <Footer />
                    </Layout>
                </Layout>
            </Container>
        </ContainerFluid>
    )
}

export default LayoutMain;