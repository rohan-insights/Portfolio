import emailjs from "emailjs-com";

const SERVICE_ID = "service_portfolio"; // Update with your EmailJS service ID
const TEMPLATE_ID = "template_portfolio"; // Update with your EmailJS template ID
const PUBLIC_KEY = "your_public_key"; // Update with your EmailJS public key

export const initEmailJS = () => {
  emailjs.init(PUBLIC_KEY);
};

export const sendEmail = async (
  name: string,
  email: string,
  message: string
) => {
  try {
    const templateParams = {
      to_email: "rohanghodke9890@gmail.com",
      from_name: name,
      from_email: email,
      message: message,
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );

    return {
      success: true,
      message: "Email sent successfully!",
      response,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to send email. Please try again.",
      error,
    };
  }
};
