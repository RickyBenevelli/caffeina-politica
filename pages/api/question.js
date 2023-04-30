import { transporter, mailOptions } from "../../lib/nodemailer";

const handler = async(req, res) => {

  if (req.method === 'POST') {

    const data = req.body;
    // Check if the data is valid
    if (!data.message) {
      console.log('DATA NOT VALID')
      return res.status(400).json({ message: 'Bad request - data not valid' })
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        text: "This is text string",
        html: `<div style="display: flex; flex-direction: column; align-items: center; width: 100%;"><div style="display: flex; flex-direction: column; align-items: flex-start; width: 100%; max-width: 36rem; "><div style="font-size: 1.125rem;line-height: 1.75rem; font-weight: 700; ">${data.event}</div><div><span>Data e ora: </span><span>${data.date}</span></div><br/><div>${data.message}</div></div></div>`
      })

      return res.status(200).json({ message: 'Success' })
    }
    catch (error) {
      console.log(error)
      console.log('ERROR SENDING EMAIL')
      return res.status(400).json({ message: error.message })
    }

  }

  console.log('NOT POST')
  return res.status(400).json({ message: 'Bad request - not post' })
}

export default handler