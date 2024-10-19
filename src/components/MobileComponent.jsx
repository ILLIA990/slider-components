import Block from "../mobile/block.jsx";
import '../App.css'
import { FloatButton } from "antd";
import { LogoutOutlined, CaretUpOutlined, VerticalAlignTopOutlined } from "@ant-design/icons";

export default function MobileComponent () {
    return (
        <div className="MobileComponent">
            <div>
                <p>Компонент</p>
            </div>
                <Block id={1}/>
                <Block id={2}/>
                <Block id={3}/>
                <Block id={4}/>
                <Block id={5}/>
                <Block id={6}/>
                <Block id={7}/>
                <Block id={8}/>
                <Block id={9}/>
                <Block id={10}/>
                <Block id={11}/>
                <Block id={12}/>
                <Block id={13}/>
                <Block id={14}/>
                <Block id={15}/>
                <Block id={16}/>
                <Block id={17}/>
                <Block id={18}/>
                <Block id={19}/>
                <Block id={20}/>
            <FloatButton.Group
                trigger="click"
                type="primary"
                icon={<CaretUpOutlined />}
            >
                <FloatButton.BackTop icon={<VerticalAlignTopOutlined />}/>
                <FloatButton tooltip={<div>Повернутися</div>} icon={<LogoutOutlined/>} href={'https://mis.e-life.com.ua/#product'}/>
            </FloatButton.Group>
        </div>
    );
}