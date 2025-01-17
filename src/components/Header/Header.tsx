import { ReactElement } from "react";
import {Container, Logo, LogoutBtn} from "..";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../../../types/slice-types.ts";
import { NavItems } from "../../../types/component-types.ts";

export default function Header(): ReactElement {
    const authStatus = useSelector((state: State) => state.auth.status);
    const navigate = useNavigate();

    const navItems: NavItems = [
        {
            name: "Home",
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus
        }
    ];

    return (
        <header>
            <Container>
                <nav className="w-screen flex justify-between items-center py-4 px-2">
                    <div>
                        <Link to="/">
                            <Logo />
                        </Link>
                    </div>
                    <ul className="flex items-center justify-evenly gap-2">
                        {navItems.map((item) => item.active && (
                            <li key={item.name}>
                                <button
                                    onClick={() => navigate(item.slug)}
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
};