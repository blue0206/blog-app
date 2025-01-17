import { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthLayoutParameters } from "../../types/component-types";
import { State } from "../../types/slice-types";
import { Loading } from ".";

export default function Protected({

    children,
    authentication=true
  
}: AuthLayoutParameters): ReactElement {

    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((state: State) => state.auth.status);

    useEffect((): void => {
        if (authentication && authStatus !== authentication) {
            navigate("/login");
        } else if (!authentication && authStatus !== authentication) {
            navigate("/");
        }
        setLoader(false);
    }, [navigate, authStatus, authentication]);

    return loader ? (
        <Loading />
    ) : (
        <>
            {children}
        </>
    )
};