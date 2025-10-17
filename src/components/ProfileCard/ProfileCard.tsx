import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaLaptopCode,
} from "react-icons/fa";
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";

import { GIT_URL, LINKEDIN_URL, NAME, ROLE } from "../../Config";

export default function ProfileCard({ isVisible }: { isVisible: boolean }) {

  const slideInStyle = {
    transform: isVisible ? "translateX(0)" : "translateX(-100%)",
    opacity: isVisible ? 1 : 0,
    transition: "all 1s ease",
  };

  return (
    <Box sx={{ ...slideInStyle, width: "100%", maxWidth: 400 }}>
      <Paper
        elevation={8}
        sx={{
          backgroundColor: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: 6,
          p: 4,
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        {/* Profile Image with ring */}
        <Box display="flex" justifyContent="center" mb={4}>
          <Box
            sx={{
              width: 128,
              height: 128,
              borderRadius: "50%",
              p: "4px",
              background: "linear-gradient(to bottom right, #60a5fa, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#1e293b", // slate-800
              }}
            >
              <FaLaptopCode size={40} color="#60a5fa" />
            </Avatar>
          </Box>
        </Box>

        {/* Name and Title */}
        <Typography
          variant="h6"
          align="center"
          fontWeight="bold"
          color="white"
          gutterBottom
        >
          {NAME}
        </Typography>

        <Box
          sx={{
            height: 4,
            width: 64,
            borderRadius: 2,
            background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
            mx: "auto",
            my: 2,
          }}
        />

        <Typography
          align="center"
          fontSize="12px"
          letterSpacing="4px"
          color="#93c5fd" // blue-300
          fontWeight={600}
          gutterBottom
        >
         {ROLE}
        </Typography>

        <Typography
          align="center"
          fontSize="14px"
          color="gray"
          gutterBottom
        >
          Bangalore, India 🇮🇳
        </Typography>

        {/* Stats */}
       <Grid container spacing={2} justifyContent="center" my={3}>
          <Grid size={{ xs: 4}}>
            <Box textAlign="center" onClick={() => window.open("https://leetcode.com/u/Uday_2606/")}>
              <Typography variant="h6" color="#60a5fa" fontWeight="bold">
                300+
              </Typography>
              <Typography variant="caption" color="gray">
                DSA Problems
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 4}}>
            <Box textAlign="center">
              <Typography variant="h6" color="#f472b6" fontWeight="bold">
                1+ Yr
              </Typography>
              <Typography variant="caption" color="gray">
                Experience
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Social Icons */}
        <Stack direction="row" justifyContent="center" spacing={3} mt={2}>
          <IconButton
            component="a"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "gray",
              transition: "all 0.3s",
              "&:hover": {
                color: "#3b82f6",
                transform: "scale(1.25)",
              },
            }}
          >
            <FaLinkedinIn size={20} />
          </IconButton>
          <IconButton
            component="a"
            href={GIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "gray",
              transition: "all 0.3s",
              "&:hover": {
                color: "#a78bfa",
                transform: "scale(1.25)",
              },
            }}
          >
            <FaGithub size={20} />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:udaykiranbyreddy@gmail.com"
            sx={{
              color: "gray",
              transition: "all 0.3s",
              "&:hover": {
                color: "#f472b6",
                transform: "scale(1.25)",
              },
            }}
          >
            <FaEnvelope size={20} />
          </IconButton>
          <IconButton
            component="a"
            href="tel:+919550790010"
            sx={{
              color: "gray",
              transition: "all 0.3s",
              "&:hover": {
                color: "#4ade80",
                transform: "scale(1.25)",
              },
            }}
          >
            <FaPhone size={20} />
          </IconButton>
        </Stack>
      </Paper>
    </Box>
  );
}
