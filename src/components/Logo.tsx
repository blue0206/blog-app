import { ReactElement } from "react";

type LogoProps = {
    width?: string;
}

export default function Logo({width="100px"}: LogoProps): ReactElement {
    return (
        <div className={`${width}`}>Logo</div>
    );
}