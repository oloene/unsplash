import Link from "next/link";

const navItems = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "License",
        path: "/",
    },
    {
        name: "Pricing",
        path: "/",
    },
];

const Navbar = (): JSX.Element => {
    return (
        <nav className="px-10 py-5 bg-black flex">
            <ul className="flex gap-10 text-gray-200 text-sm font-semibold mx-auto">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link href={item.path}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
