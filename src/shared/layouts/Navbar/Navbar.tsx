import { useState } from "react";
import { Link } from "react-router-dom";
import { PagePath } from "@/shared/core/enum";
import { AppBar, Toolbar, InputBase, IconButton, Badge, Avatar, Box, Tabs } from "@mui/material";
import { Notifications, Message, Search } from "@mui/icons-material";
import logo from "/assets/img/logo.png";
import LinkTab from "@/shared/components/LinkTab/LinkTab";
import { MenuList } from "@/shared/core/config/columns/menu-list";
import { useAppSelector } from "@/shared/hooks/useAppHooks";

const Navbar = () => {
  const auth = useAppSelector((state) => state.user.user);
  const [value, setValue] = useState("home");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <AppBar position="sticky" className="!bg-white !shadow-md !h-14 !px-4">
      <Toolbar className="!justify-between !h-14 !min-h-14 !p-0">
        <Box className="flex items-center flex-1 gap-2">
          <Link to={PagePath.HOME}>
            <img src={logo} alt="Logo" className="w-10 h-10" />
          </Link>
          <Box className="relative">
            <InputBase
              placeholder="Search..."
              className="bg-gray-100 rounded-2xl px-4 py-1 w-60"
              startAdornment={<Search className="mr-1 text-gray-500" />}
            />
          </Box>
        </Box>

        <Box className="flex flex-1 justify-center items-center">
          <Tabs
            value={value}
            onChange={handleChange}
            className="[&_.Mui-selected]:!text-black [&_.MuiTabs-indicator]:!bg-black [&_.MuiTabs-flexContainer]:gap-1"
          >
            {MenuList.map((item) => (
              <LinkTab
                key={item.value}
                labelTooltip={item.label}
                icon={<item.icon />}
                value={item.value}
                className="h-14 hover:rounded hover:bg-black/[0.08]"
                {...{ component: item.component, to: item.to }}
              />
            ))}
          </Tabs>
        </Box>

        <Box className="flex items-center gap-1 flex-1 justify-end">
          <IconButton className="!p-1 [&:hover]:!bg-black/[0.1]">
            <Badge badgeContent={1} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton className="!p-1 [&:hover]:!bg-black/[0.1]">
            <Badge badgeContent={2} color="error">
              <Message fontSize="medium" />
            </Badge>
          </IconButton>
          <IconButton className="!p-1 [&:hover]:!bg-black/[0.1]">
            <Avatar className="!w-8 !h-8" src={auth ? auth.profile?.avatar?.link : "/assets/img/profile-avatar.png"} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
