const nodemailer = require('nodemailer');

function enviarCorreoElectronico(destinatario) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vetsalud_TCW@gmail.com',
      pass: 'swgc jfcy qfxb qifc',
    },
  });

  const mailOptions = {
    from: 'vetsalud_TCW@gmail.com',
    to: destinatario,
    subject: 'Bienvenido a VetSalud',
    text: 'Gracias por registrarte en VetSalud. Para completar tu registro, haz clic en el siguiente enlace: http://localhost:4000/login o https://vetsalud.onrender.com/login',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo electrónico:', error);
    } else {
      console.log('Correo electrónico enviado:', info.response);
    }
  });
}

module.exports = { enviarCorreoElectronico };