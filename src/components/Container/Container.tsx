import React, { ReactElement } from "react";

export default function Container({children}: React.PropsWithChildren): ReactElement {
    return (
        <div className="">{children}</div>
    );
}