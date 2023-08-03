import { Fragment, type ReactElement } from "react";
import TopBar from "../components/top-bar";
import SideBar from "../components/side-bar";

export const Root = ():ReactElement => {
    return (
        <Fragment>
            <TopBar />
            <>
                <SideBar />
            </>
        </Fragment>
    )
}