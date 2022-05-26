import '@/public/styles/bootstrap.min.css'
import '@/public/styles/animate.min.css'
import '@/public/styles/remixicon.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import 'react-tabs/style/react-tabs.css'
import '@/public/styles/styles.css'
import '@/public/styles/responsive.css'
import '@/public/styles/rtl.css'

import Layout from '@/components/_App/Layout';

const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;