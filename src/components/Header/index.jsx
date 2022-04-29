import {
  Bars,
  HeaderBox,
  Logo,
  BtnMenu,
  Nav,
  List,
  Item,
  LinkItem,
  ContainerHeader,
} from "./style";
import imgLogo from "../../image/icons/logo.svg";
import iconBars from "../../image/icons/icon-bars.svg";
import iconClose from "../../image/icons/icon-close.svg";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Line } from "../../Styles/styles";

const Header = () => {
  const [mobile, setMobile] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    if (width >= 800) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [width]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {mobile ? (
        <HeaderBox>
          <Logo src={imgLogo} />
          <BtnMenu onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <Bars src={iconClose} /> : <Bars src={iconBars} />}
          </BtnMenu>

          <Nav open={isOpen}>
            <List>
              <Item>
                <LinkItem to={"/"}>00 Home</LinkItem>
              </Item>
              <Item>
                <LinkItem to={"/destination"}>01 Destination</LinkItem>
              </Item>
              <Item>
                <LinkItem to={"/Crew"}>02 Crew</LinkItem>
              </Item>
              <Item>
                <LinkItem to={"/technology"}>03 Technology</LinkItem>
              </Item>
            </List>
          </Nav>
        </HeaderBox>
      ) : (
        <HeaderBox>
          <ContainerHeader>
            <Logo src={imgLogo} />

            <Line />
            <Nav>
              <List>
                <Item>
                  <LinkItem to={"/"}>
                    <span>00</span> Home
                  </LinkItem>
                </Item>
                <Item>
                  <LinkItem to={"/destination"}>
                    <span>01</span> Destination
                  </LinkItem>
                </Item>
                <Item>
                  <LinkItem to={"/crew"}>
                    <span>02</span> Crew
                  </LinkItem>
                </Item>
                <Item>
                  <LinkItem to={"/technology"}>
                    <span>03</span> Technology
                  </LinkItem>
                </Item>
              </List>
            </Nav>
          </ContainerHeader>
        </HeaderBox>
      )}
    </>
  );
};

export default Header;
