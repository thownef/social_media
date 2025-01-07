import { Link } from "react-router-dom";
import { PagePath } from "@/shared/core/enum";
import { AppBar, Toolbar, InputBase, IconButton, Badge, Avatar, Box, Tabs } from "@mui/material";
import { Notifications, Message, ShoppingBag, Search } from "@mui/icons-material";
import logo from "/assets/img/logo.png";
import { useState } from "react";
import LinkTab from "@/shared/components/LinkTab/LinkTab";
import { MenuList } from "@/shared/core/config/columns/memu-list";

const Navbar = () => {
  const [value, setValue] = useState("profile");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
        height: 56,
        padding: "0 16px",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          height: "56px",
          minHeight: "56px !important",
          padding: "0 !important",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, flex: 1 }}>
          <Link to={PagePath.HOME}>
            <img src={logo} alt="Logo" style={{ width: 40, height: 40 }} />
          </Link>
          <Box sx={{ position: "relative" }}>
            <InputBase
              placeholder="Search..."
              sx={{
                bgcolor: "grey.100",
                borderRadius: 20,
                padding: "4px 16px",
                width: 240,
              }}
              startAdornment={<Search sx={{ mr: 1, color: "grey.500" }} />}
            />
          </Box>
        </Box>

        <Box sx={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              "& .Mui-selected": {
                color: "black !important",
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "black",
              },
              "& .MuiTabs-flexContainer": {
                gap: 1,
              },
              "& .MuiTab-root": {
                height: 56,
                "&:hover": {
                  borderRadius: 2,
                  backgroundColor: "rgba(0, 0, 0, 0.08)",
                },
              },
            }}
          >
            {MenuList.map((item) => (
              <LinkTab labelTooltip={item.label} icon={<item.icon />} value={item.value} {...{ component: item.component, to: item.to }} />
            ))}
          </Tabs>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flex: 1, justifyContent: "flex-end" }}>
          <IconButton>
            <Badge badgeContent={1} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={2} color="error">
              <Message />
            </Badge>
          </IconButton>

          <IconButton>
            <Avatar src="https://via.placeholder.com/32" sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
