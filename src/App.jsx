import './App.css'
import { Layout, Menu } from 'antd';

function App() {

  return (
    <div className="App">
      <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        items={}
      />
    </Header>

    {/* <Content
      style={{
        padding: '0 50px',
      }}
    >
      <div className="site-layout-content">
        Reserve for content

      </div>
    </Content> */}
    
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
© 2022 Gordon Xie. All Rights Reserved.
    </Footer>
  </Layout>
    </div>
  )
}

export default App
