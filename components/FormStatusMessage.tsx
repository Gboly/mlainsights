"use client";

import { motion, AnimatePresence } from "framer-motion";
import "./formStatusMessage.css";

type FormStatusMessageProps = {
  status: "idle" | "loading" | "success" | "error";
  successTitle?: string;
  successMessage?: string;
  errorMessage?: string;
};

export default function FormStatusMessage({
  status,
  successTitle = "Message sent!",
  successMessage = "Thanks for reaching out — we'll be in touch soon.",
  errorMessage = "Something went wrong. Please try again.",
}: FormStatusMessageProps) {
  return (
    <AnimatePresence mode="wait">
      {status === "success" && (
        <motion.div
          key="success"
          className="status-card status-card--success"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <motion.div
            className="status-icon-ring status-icon-ring--success"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 400, damping: 15 }}
          >
            <svg viewBox="0 0 52 52" className="status-icon">
              <motion.circle
                cx="26" cy="26" r="24"
                className="status-icon-circle"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
              />
              <motion.path
                d="M15 27 L23 35 L38 18"
                className="status-icon-check"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.45, duration: 0.35, ease: "easeOut" }}
              />
            </svg>
          </motion.div>
          <div className="status-copy">
            <p className="status-title">{successTitle}</p>
            <p className="status-subtext">{successMessage}</p>
          </div>
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
          key="error"
          className="status-card status-card--error"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1, x: [0, -6, 6, -4, 4, 0] }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          transition={{
            y: { type: "spring", stiffness: 300, damping: 22 },
            scale: { type: "spring", stiffness: 300, damping: 22 },
            x: { delay: 0.15, duration: 0.4, ease: "easeInOut" },
          }}
        >
          <motion.div
            className="status-icon-ring status-icon-ring--error"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 400, damping: 15 }}
          >
            <svg viewBox="0 0 52 52" className="status-icon">
              <motion.circle
                cx="26" cy="26" r="24"
                className="status-icon-circle status-icon-circle--error"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
              />
              <motion.line
                x1="17" y1="17" x2="35" y2="35"
                className="status-icon-x"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.45, duration: 0.25, ease: "easeOut" }}
              />
              <motion.line
                x1="35" y1="17" x2="17" y2="35"
                className="status-icon-x"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.65, duration: 0.25, ease: "easeOut" }}
              />
            </svg>
          </motion.div>
          <div className="status-copy">
            <p className="status-title">Delivery failed</p>
            <p className="status-subtext">{errorMessage}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}