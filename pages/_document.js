import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <form style={{display:"none"}} netlify="true" name="contactForm" method="POST" data-netlify="true">
          <input  type="text" name="name" label="Name"  title="Name should not contains any numeric letters" pattern="[A-Za-z ]{1,32}"  placeholder="Name"  required/>
          <input   label="Email" type="mail" name="email" title="Please enter a valid email address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email"  required/>
          <input  label="Mobile Number" type="tel" name="phone"  className="phone" placeholder="Phone" required />
          <select name='project-type' required/>
          <textarea  placeholder="Message" label="Message" type="text" name="msg" required/>
        <button type="submit"  className="contactFormbtn"><span> Submit</span></button>
        </form>
        <NextScript />
      </body>
    </Html>
  )
}
