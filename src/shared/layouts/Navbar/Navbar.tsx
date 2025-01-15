import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PagePath } from "@/shared/core/enum";
import { AppBar, Toolbar, InputBase, IconButton, Badge, Avatar, Box, Tabs, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { Notifications, Message, Search, Settings, Logout } from "@mui/icons-material";
import logo from "/assets/img/logo.png";
import LinkTab from "@/shared/components/LinkTab/LinkTab";
import { MenuList } from "@/shared/core/config/columns/menu-list";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useAppHooks";
import { logout } from "@/shared/store/authSlice";

const Navbar = () => {
  const auth = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState("home");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = useCallback(() => {
    dispatch(logout());
    navigate(PagePath.AUTH);
  }, []);

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

        <Box className="flex items-center gap-2 flex-1 justify-end">
          <IconButton className="!p-2 [&:hover]:!bg-black/[0.1]">
            <Badge badgeContent={1} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton className="!p-2 [&:hover]:!bg-black/[0.1]">
            <Badge badgeContent={2} color="error">
              <Message fontSize="medium" />
            </Badge>
          </IconButton>
          <IconButton onClick={handleClick} className="!p-1 [&:hover]:!bg-black/[0.1]">
            <Avatar className="!w-8 !h-8" src={auth ? auth.profile?.avatar?.link : "/assets/img/profile-avatar.png"} />
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                width: 200,
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar className="!w-8 !h-8" src={auth ? auth.profile?.avatar?.link : "/assets/img/profile-avatar.png"} /> Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
