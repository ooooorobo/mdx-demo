import {ComponentProps} from "react";

export default function BlockQuote({children}: ComponentProps<any>) {
    return <blockquote style={{borderLeft: '5px solid #5f71d6', padding: '4px 10px'}}>{children}</blockquote>
};