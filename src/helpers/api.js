"use server";

import Cors from 'cors';
import initMiddleware from '@/lib/init-middleware';
import { compileWelcomeTemplate, sendMail } from '@/lib/mail';

const cors = initMiddleware(
  Cors({
    methods: ['POST'],
    allowedHeaders: ['Content-Type', 'Authorization', 'next-router-state-tree']
  })
);

const send = async (req, res) => {
  await cors(req, res);

  const { email, firstName, lastName, message, source } = req.body;
  const fullName = `${firstName} ${lastName}`;

  try {
    await sendMail({
      to: "vlad@sepirak.com",
      from: email,
      name: fullName,
      subject: "New client message",
      body: compileWelcomeTemplate(email, message, source, fullName)
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
};

export default send;