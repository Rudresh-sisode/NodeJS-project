const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'nanduchopade1998@gmail.com',
    from: 'rudranrajput@gmail.com',
    subject: 'boss this mail is send using nodejs application',
    text: 'Pleaase completed your all stuff on time, becoz we have lot-s of projeton on awaiting'
})