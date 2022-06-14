import React from 'react';
import "./ContainerCustom.scss";

interface IProps {
    children: React.ReactChild;
    customClass?: string;
    className?: string;
   }

function ContainerCustom(props: IProps) {

    return <div className={`container ${props.customClass} ${props.className}`}>{props.children}</div>
}

export default ContainerCustom;