interface ContactFormEmailProps {
  name: string
  email: string
  message: string
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
    {/* Header */}
    <div style={{ backgroundColor: '#d33', padding: '10px 20px', textAlign: 'center', color: 'white' }}>
      <h1 style={{ margin: 0 }}>Contact Form Submission</h1>
    </div>
    
    {/* Body */}
    <div style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
      {/* Greeting */}
      <p style={{ fontSize: '16px' }}>
        <strong style={{ color: '#333' }}>Hello,</strong>
      </p>

      {/* Message Details */}
      <p style={{ fontSize: '16px' }}>
        You have received a new message from the contact form. Here are the details:
      </p>

      {/* Sender Info */}
      <p style={{ fontSize: '14px', color: '#555' }}>
        <strong>From:</strong> {name} (<a href={`mailto:${email}`} style={{ color: '#d33', textDecoration: 'none' }}>{email}</a>)
      </p>

      {/* Message */}
      <h2 style={{ fontSize: '18px', color: '#333', marginTop: '20px', borderBottom: '2px solid #d33' }}>Message:</h2>
      <p style={{ fontSize: '16px', color: '#555', padding: '10px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px' }}>
        {message}
      </p>
      
      {/* Footer */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: '#999' }}>This email was sent from <a href="https://yourwebsite.com" style={{ color: '#d33', textDecoration: 'none' }}>yourwebsite.com</a></p>
      </div>
    </div>
  </div>
)


export default ContactFormEmail
