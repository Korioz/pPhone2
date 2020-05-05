import React, { useState } from "react";

import "./SettingsItem.scss";
//import { ReactSVG } from "react-svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import BackIcon from "../../../assets/icons/back_right.svg";

export interface ISetting {
    id: number;
    title?: string;
    rightLabel?: string;
    checkbox?: boolean;
    backround?: string;
    img?: any;
    imgType?: string;
    imgColor?: string;
    alt?: boolean;
    onClick?:
        | ((
              event: React.MouseEvent<HTMLDivElement, MouseEvent>,
              props: ISetting
          ) => void)
        | undefined;
}

const ISettings: React.FC<ISetting> = (props: ISetting) => {
    const [value, setValue] = useState(false);

    return (
        <div>
            {props.alt ? <div className="settings-banner2"> </div> : false}

            {props.img ? (
                <div className="settings-core">
                    <div className="item-settings">
                        <div
                            className="settings-img-container"
                            style={{ background: props.backround }}
                        >
                            <FontAwesomeIcon
                                className={props.imgType}
                                icon={props.img}
                                style={{ color: props.imgColor }}
                            />
                        </div>
                        {props.title ? (
                            <div className="text-settings">{props.title}</div>
                        ) : (
                            false
                        )}
                    </div>
                </div>
            ) : (
                false
            )}
        </div>
    );
};

export default ISettings;
