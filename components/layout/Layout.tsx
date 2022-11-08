import Meta from "../Meta";
import Navbar from "../ui/Navbar";

type PropTypes = {
    children: React.ReactNode;
};

const Layout = ({ children }: PropTypes): JSX.Element => {
    return (
        <div className="min-h-screen flex flex-col">
            <Meta />
            <header>
                <Navbar />
            </header>
            <main className="flex-1 flex flex-col">{children}</main>
        </div>
    );
};

export default Layout;
