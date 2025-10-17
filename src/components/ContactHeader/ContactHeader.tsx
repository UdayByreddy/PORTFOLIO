import { Box, Typography, Stack } from "@mui/material";

export default function ContactHeader() {
  return (
    <Box textAlign="center" mb={8}>
      {/* Gradient Animated Header */}
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          fontSize: {
            xs: "2.5rem",
            sm: "3.5rem",
            md: "4.5rem",
          },
          background: "linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "gradientMove 4s ease infinite",
        }}
        mb={2}
      >
        Let's Connect
      </Typography>

      {/* Subtitle with Decorative Bars */}
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" mb={2}>
        <Box
          sx={{
            width: 48,
            height: 4,
            borderRadius: 2,
            background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
          }}
        />
        <Typography variant="h6" color="gray">
          I'd love to hear from you!
        </Typography>
        <Box
          sx={{
            width: 48,
            height: 4,
            borderRadius: 2,
            background: "linear-gradient(to right, #8b5cf6, #ec4899)",
          }}
        />
      </Stack>

      {/* Paragraph */}
      <Typography
        variant="body1"
        color="gray"
        sx={{
          maxWidth: 600,
          mx: "auto",
          lineHeight: 1.8,
        }}
      >
        Whether you have a question, want to discuss a project, or just want to
        say hi, feel free to reach out. I&apos;ll get back to you as soon as
        possible!
      </Typography>

      {/* Optional: Add keyframes for animated gradient if needed */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </Box>
  );
}
