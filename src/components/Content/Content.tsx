import { FaCode, FaRocket } from "react-icons/fa";
import {
  Box,
  Button,
  Stack,
  Typography
} from "@mui/material";
import { keyframes } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { RESUME_LINK } from "../../Config";

export default function Content({
  isVisible,
}: {
  isVisible: boolean;
  skills: string[];
}) {
  const navigate = useNavigate();

  // Custom animation for fade/slide in
  const slideIn = {
    transform: isVisible ? "translateX(0)" : "translateX(100%)",
    opacity: isVisible ? 1 : 0,
    transition: "all 1s ease 0.3s",
  };

  // Gradient animation keyframes (optional)
  const gradientAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  `;

    function handleNavigateProjectSection(): void {
        navigate("/projects");
    }

    function handleDownloadResume(): void {
        const link = document.createElement("a");
        link.href = RESUME_LINK;    
        link.setAttribute('download','uday_byreddy_resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function handleNavigateLeetCode(): void {
       window.open("https://leetcode.com/u/Uday_2606/","_blank");
    }

  return (
    <Box sx={{ ...slideIn, maxWidth: "800px", mx: "auto", py: 4 }}>
      <Stack spacing={6}>
        {/* Header */}
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "3rem",
                sm: "4rem",
                md: "5rem",
              },
              fontWeight: "bold",
              background: "linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "300% 300%",
              animation: `${gradientAnimation} 8s ease infinite`,
            }}
          >
            Hello
          </Typography>

          <Stack direction="row" alignItems="center" spacing={2} mt={2}>
            <Box
              sx={{
                height: 4,
                width: 48,
                borderRadius: 2,
                background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
              }}
            />
            <Typography color="gray" fontSize={18}>
              Here's who I am & what I do
            </Typography>
          </Stack>
        </Box>

        {/* Buttons */}
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button
            startIcon={<FaRocket />}
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
              color: "#fff",
              borderRadius: "999px",
              px: 4,
              py: 1.5,
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 4px 20px rgba(59,130,246,0.4)",
              },
              transition: "all 0.3s ease",
            }}
            onClick={handleDownloadResume}
          >
            RESUME
          </Button>
          <Button
            startIcon={<FaCode />}
            variant="outlined"
            sx={{
              borderColor: "#3b82f6",
              color: "#3b82f6",
              borderRadius: "999px",
              px: 4,
              py: 1.5,
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#3b82f6",
                color: "#fff",
                transform: "scale(1.05)",
                boxShadow: "0 4px 20px rgba(59,130,246,0.4)",
              },
              transition: "all 0.3s ease",
            }}
            onClick={handleNavigateProjectSection}
          >
            PROJECTS
          </Button>
        </Stack>

        {/* About Text */}
        <Stack spacing={3}>
          <Box
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "gray",
              fontSize: "1.1rem",
              lineHeight: 1.7,
            }}
          >
            I'm a passionate Full-Stack Developer at{" "}
            <Box component="span" sx={{ color: "#60a5fa", fontWeight: 600 }}>
              SigTuple
            </Box>
            , specializing in scalable microservices and modern web
            applications using
            <Box component="span" sx={{ color: "#a78bfa", fontWeight: 600 }}>
              {" "}
              Java Spring Boot
            </Box>
            ,
            <Box component="span" sx={{ color: "#60a5fa", fontWeight: 600 }}>
              {" "}
              React
            </Box>
            , and
            <Box component="span" sx={{ color: "#f472b6", fontWeight: 600 }}>
              {" "}
              cloud technologies
            </Box>
            .
          </Box>

          <Box
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "gray",
              fontSize: "1.1rem",
              lineHeight: 1.7,
            }}
          >
            Currently leading SigVet's frontend with React + Tauri, using NATS
            JetStream for real-time comms, and building backend with Spring Boot +
            SQLite. Solved{" "}
            <Box component="span" sx={{ color: "#4ade80", fontWeight: 600, cursor: "pointer" }} onClick={handleNavigateLeetCode}>
              300+ DSA problems
            </Box>{" "}
            and contributing to open-source.
          </Box>
        </Stack>

        {/* Skills
        <Stack direction="row" flexWrap="wrap" gap={1}>
          {skills.map((skill, index) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
                color: "#ccc",
                backgroundColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(255,255,255,0.2)",
                fontSize: "0.85rem",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.2)",
                  transform: "scale(1.1)",
                  cursor: "default",
                },
                animation: `fadeInUp 0.5s ease ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            />
          ))}
        </Stack> */}
      </Stack>
    </Box>
  );
}
