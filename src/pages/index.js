import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/banner';
import DaeguBanner from '../components/offline_groups/daegu_banner';
import OnlineGroups from '../components/online_groups';

class Home extends React.Component {
  render() {
    return (
      <Layout location="/">
        <Helmet
          htmlAttributes={{ lang: 'ko' }}
          title="Open Build-UP"
          meta={[
            { name: 'description', content: 'Landing page of the Open Build-UP' },
            { name: 'keywords', content: 'OpenBuildUP, 협업, 팀빌딩, 아이디어공유, 아이디어평가' },
          ]}
        />
        <Banner next='offline_groups_daegu_banner' />
        <DaeguBanner next='online_groups' />
        <OnlineGroups />
      </Layout>
    )
  }
}

export default Home
