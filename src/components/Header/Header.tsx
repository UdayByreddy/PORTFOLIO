import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { styled, keyframes } from "@mui/material/styles";

const drawerWidth = 260;
const navItems = ["Home","Projects", "Contact"];

// Animated gradient background
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Slide in animation for nav items
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Underline animation
const underlineExpand = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

// Styled Button with custom hover effect
const NavButton = styled(Button)(({ theme }) => ({
  color: "#1a1a1a",
  textTransform: "none",
  fontWeight: 600,
  fontSize: "0.95rem",
  margin: "0 8px",
  padding: "8px 20px",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  fontFamily: "Inter, sans-serif",
  borderRadius: "8px",
  
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "50%",
    width: 0,
    height: "2px",
    background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: "translateX(-50%)",
  },
  
  "&:hover": {
    backgroundColor: "rgba(102, 126, 234, 0.08)",
    transform: "translateY(-2px)",
    
    "&::before": {
      width: "80%",
    },
  },
  
  "&:active": {
    transform: "translateY(0)",
  },
}));

// Styled Drawer with gradient
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: drawerWidth,
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    backdropFilter: "blur(10px)",
  },
}));

// Animated Logo
const AnimatedLogo = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontFamily: "Inter, sans-serif",
  letterSpacing: "1px",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundSize: "200% 200%",
  animation: `${gradientShift} 4s ease infinite`,
  position: "relative",
  cursor: "pointer",
  transition: "transform 0.3s ease",
  
  "&:hover": {
    transform: "scale(1.02)",
  },
}));

export default function Header(props: any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const navigate = useNavigate();

  // Scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window?.scrollY > 20);
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleToNavigate = (item: string) => {
    const path = item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
    navigate(path);
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ textAlign: "center", height: "100%" }}>
      <Box
        sx={{
          my: 3,
          px: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Inter, sans-serif",
            fontSize: "1.1rem",
          }}
        >
          BYREDDY UDAY KIRAN REDDY
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#666",
            fontFamily: "Inter, sans-serif",
            display: "block",
            mt: 0.5,
          }}
        >
          Full-Stack Developer
        </Typography>
      </Box>
      <Divider sx={{ backgroundColor: "rgba(102, 126, 234, 0.2)" }} />
      <List sx={{ mt: 2 }}>
        {navItems.map((item, index) => (
          <ListItem
            key={item}
            disablePadding
            sx={{
              animation: `${slideIn} 0.5s ease forwards`,
              animationDelay: `${index * 0.1}s`,
              opacity: 0,
            }}
          >
            <ListItemButton
              sx={{
                textAlign: "center",
                mx: 2,
                borderRadius: "8px",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(102, 126, 234, 0.15)",
                  transform: "translateX(8px)",
                },
              }}
              onClick={() => handleToNavigate(item)}
            >
              <ListItemText
                primaryTypographyProps={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  color: "#1a1a1a",
                  fontSize: "1rem",
                }}
                primary={item}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "#fff",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          color: "#1a1a1a",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          borderBottom: scrolled
            ? "1px solid rgba(102, 126, 234, 0.1)"
            : "1px solid #e0e0e0",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            py: 1,
            transition: "padding 0.3s ease",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <AnimatedLogo
              variant="h6"
              onClick={() => handleToNavigate("Home")}
              sx={{
                fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.2rem" },
              }}
            >
              BYREDDY UDAY KIRAN REDDY
            </AnimatedLogo>
            <Typography
              variant="caption"
              sx={{
                color: "#666",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "0.75rem",
                mt: 0.3,
                display: { xs: "none", sm: "block" },
              }}
            >
              Full-Stack Developer
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {navItems.map((item, index) => (
              <NavButton
                key={item}
                onClick={() => handleToNavigate(item)}
                sx={{
                  animation: `${slideIn} 0.6s ease forwards`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {item}
              </NavButton>
            ))}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: "none" },
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(102, 126, 234, 0.1)",
                transform: "rotate(90deg)",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <nav>
        <StyledDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          {drawer}
        </StyledDrawer>
      </nav>

      {/* Spacer for fixed header */}
      <Toolbar />
    </Box>
  );
}