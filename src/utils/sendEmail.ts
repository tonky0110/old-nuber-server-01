import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: process.env.MAILGUN_DOMAIN || ""
});

export const sendEmail = (to: string, subject: string, html: string) => {
  console.log(to);
  const emailData = {
    from: "tonky0110@gmail.com",
    to: "tonky0110@gmail.com",
    subject,
    html
  };
  return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (
  to: string,
  fullName: string,
  key: string
) => {
  const emailSubject = `Hello! ${fullName}, please verify your email`;
  const emailBody = `Verify you email by clicking <a href="http://localhost/verification/${key}/">here</a>`;
  return sendEmail(to, emailSubject, emailBody);
};
