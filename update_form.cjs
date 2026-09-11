const fs = require('fs')

let content = fs.readFileSync('src/components/ContactForm.tsx', 'utf8')

// Add privacy error state
if (!content.includes('privacyError')) {
  content = content.replace('const [consent, setConsent] = useState(false)', 'const [consent, setConsent] = useState(false)\n  const [privacyError, setPrivacyError] = useState(false)')
}

// Replace handleSubmit
content = content.replace(/const handleSubmit = async \(event: FormEvent<HTMLFormElement>\) => {[\s\S]*?setStatus\('success'\)[\s\S]*?catch[\s\S]*?setStatus\('error'\)[\s\S]*?}/, `const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!consent) {
      setPrivacyError(true)
      return
    }
    setPrivacyError(false)

    if (!form.reportValidity() || fileError) {
      return
    }

    setStatus('sending')
    const data = new FormData(form)
    if (file) {
      data.set('reference', file)
    }

    const payload = Object.fromEntries(data.entries())
    console.log('Form Payload:', payload)

    // Simulate dummy endpoint success state
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }`)

// Add error message next to consent
content = content.replace('Ik ga akkoord met de verwerking van mijn gegevens conform de privacyverklaring.', 'Ik ga akkoord met de verwerking van mijn gegevens conform de privacyverklaring.\n            {privacyError && <span style={{ color: "var(--color-error, #D32F2F)", display: "block", marginTop: "4px" }}>U dient akkoord te gaan met de privacyverklaring.</span>}')

fs.writeFileSync('src/components/ContactForm.tsx', content)
console.log('Done form')
