import Content from './content';
import Header from './header-cinema';

const Layout = () => {
    return (
        <div className="layout">
            <Header />

            <div className="content-container">
                <Content />
            </div>
        </div>
    );
};
export default Layout;
