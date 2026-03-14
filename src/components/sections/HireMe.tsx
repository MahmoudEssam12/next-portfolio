import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "../scss/HireMe.module.scss";
import SnackBar from "../SnackBar";
import Loader from "../Loader";

const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface SnackbarState {
  open: boolean;
  message: string;
  variant: "success" | "error";
}

function HireMe() {
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    variant: "success",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const showSnackbar = (message: string, variant: "success" | "error" = "success") => {
    setSnackbar({ open: true, message, variant });
    setTimeout(
      () => setSnackbar((prev) => ({ ...prev, open: false })),
      3000
    );
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Send failed");

      reset();
      showSnackbar("Sent successfully!");
    } catch (err) {
      console.error(err);
      showSnackbar("Failed to send message. Please try again.", "error");
    }
  };

  return (
    <section className={`section ${styles.hire_me}`} id="contact">
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <motion.div
              className={styles.about_info}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2>Hire me.</h2>
              <p>
                I am available for freelance work or full time job. Connect with
                me via phone: <a href="tel:+2001149835766">01149835766</a> or
                email:{" "}
                <a href="mailto:dev.mahmoud.essam@gmail.com">
                  dev.mahmoud.essam@gmail.com
                </a>
              </p>
            </motion.div>
            <motion.form
              style={{ padding: "2rem 0 0" }}
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              <div className={styles.field}>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Your Name"
                  className={errors.name ? styles.error_input : ""}
                />
                {errors.name && (
                  <p className={styles.error_msg}>{errors.name.message}</p>
                )}
              </div>

              <div className={styles.field}>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Your Email"
                  className={errors.email ? styles.error_input : ""}
                />
                {errors.email && (
                  <p className={styles.error_msg}>{errors.email.message}</p>
                )}
              </div>

              <div className={styles.field_textarea}>
                <textarea
                  {...register("message")}
                  cols={30}
                  rows={5}
                  placeholder="Your Message"
                  className={errors.message ? styles.error_input : ""}
                />
                {errors.message && (
                  <p className={styles.error_msg}>{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader /> Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </motion.button>
            </motion.form>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <motion.div
              className={styles.img_wrapper}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <picture>
                <img
                  src="/images/avatar2.webp"
                  alt="Mahmoud Essam"
                  loading="lazy"
                />
              </picture>
            </motion.div>
          </Col>
        </Row>
        <SnackBar
          isOpen={snackbar.open}
          message={snackbar.message}
          variant={snackbar.variant}
        />
      </Container>
    </section>
  );
}

export default HireMe;
