"use server";

import { compileWelcomeTemplate, sendMail } from "@/lib/mail";

const send = async ({ email, firstName, lastName, message, source }) => {
  const fullName = `${firstName} ${lastName}`;
  
  await sendMail({
    to: "vlad@sepirak.com",
    from: email,
    name: fullName,
    subject: "New client message",
    body: compileWelcomeTemplate(email, message, source, fullName)
  });
};

export default send;