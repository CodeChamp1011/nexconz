import * as React from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import { Images } from "@/assets/images/_Images";
import { Icons } from "@/assets/icons/_Icons";
import { MenuIcons } from "@/components/data-sets/data-sets";
import Link from "next/link";
import internal from "stream";

const drawerWidth = 240;

interface Props {
  onIndex: (index: number) => void;
  sideNavOpened?: boolean;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar({ onIndex, sideNavOpened }: Props) {
  const [isHover, setIsHover] = React.useState(0);
  const [isClick, setIsClicked] = React.useState(0);

  const setClickfucntion = (index: any) => {
    setIsClicked(index);
    setIsHover(index);
    onIndex(index);
  };

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            border: "none",
          },
        }}
        className={`lg:block ${sideNavOpened ? "block" : "hidden"}`}
        variant="persistent"
        anchor="left"
        open={true}
      >
        <DrawerHeader className="flex justify-center mt-[30px]">
          <div>
            <Image src={Images.nexdemy} alt="SVG"></Image>
          </div>
        </DrawerHeader>
        <List className="flex justify-center mt-30">
          {MenuIcons.map((item, index) => (
            <ListItem
              key={index}
              onMouseEnter={() => setIsHover(index)}
              onMouseLeave={() => setIsHover(-1)}
              onClick={() => setClickfucntion(index)}
              disablePadding
              className={` ml-5 mr-5 mt-[10px] ${
                isClick == index ? "trainCard1" : "trainCard"
              }`}
            >
              <ListItemButton>
                <ListItemIcon className="flex justify-center">
                  <Image
                    className="h-[18px] w-[18px] z-[10]"
                    key={index}
                    src={
                      isClick == index
                        ? item.icon1
                        : isHover == index
                        ? item.icon1
                        : item.icon
                    }
                    alt="png"
                  />
                </ListItemIcon>
                <ListItemText>
                  <Link href={item.url}>
                    <p
                      className={`flex font-['Outfit'] text-[16px] font-[680] justify-left ${
                        isClick == index || isHover == index
                          ? "text-white"
                          : "text-black"
                      } `}
                    >
                      {item.title}
                    </p>
                  </Link>
                </ListItemText>
              </ListItemButton>
              <div className="abstract l"></div>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
