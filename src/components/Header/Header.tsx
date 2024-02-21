import React from 'react';
import {Navigation, Theme} from "@canonical/react-components";
import PortraitIcon from '@mui/icons-material/Portrait';
import {GitHub} from "@mui/icons-material";

const { PUBLIC_URL } = process.env;


const Header = () => {
    return (
        <div>
            <Navigation
                logo={{
                    title: "Todo List Demo",
                    src: `${PUBLIC_URL}/favicon.ico`,
                    url: PUBLIC_URL
                }}
                theme={Theme.LIGHT}
                items={[
                    {
                        label: <div className={"u-equal-height u-align--center"}>
                            <PortraitIcon/>
                            <span>Julie Muzina</span>
                        </div>,
                        url: "https://jmuzina.io"
                    },
                    {
                        label: <div className={"u-equal-height u-align--center"}>
                            <GitHub/>
                            <span>Source Code</span>
                        </div>,
                        url: "https://github.com/jmuzina/vanilla-todo-demo"
                    }
                ]}
            />
        </div>
    );
};

export default Header;