const nodemailer = require('nodemailer');

const enviarConviteEmail = async (req, res) => {
    const { email, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'seu-email@gmail.com',
            pass: 'sua-senha'
        }
    });

    let mailOptions = {
        from: 'seu-email@gmail.com',
        to: email,
        subject: 'Você foi convidado para um Amigo Secreto!',
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({ message: 'E-mail de convite enviado com sucesso' });
    } catch (error) {
        res.status(500).send({ message: 'Erro ao enviar e-mail', error });
    }
};

module.exports = { enviarConviteEmail };
