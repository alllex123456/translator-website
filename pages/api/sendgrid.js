import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  if (req.method === 'POST') {
    try {
      sgMail.setApiKey(process.env.MAIL_KEY);

      const msg = {
        to: 'alex@arx-logicwave.ro',
        from: 'Translator Website <office@arx-logicwave.ro>',
        subject: 'MESAJ NOU DIN SITE',
        html: `email: ${body.email} <br /> nume: ${body.name} <br/ > mesaj: ${body.message}`,
      };

      await sgMail.send(msg);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
