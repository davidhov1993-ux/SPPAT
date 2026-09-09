import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import business from './content/business-input.json'

const uploadLabel = 'Upload (Optioneel, max 10MB)'
const projectTypes = ['Badkamer renovatie', 'Toilet renovatie', 'Tegelwerk', 'Anders']

export default function ContactForm() {
  const upload = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [invalidFile, setInvalidFile] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  function selectFile(value?: File) {
    const invalid = Boolean(value && value.size > 10 * 1024 * 1024)
    setInvalidFile(invalid)
    setFile(invalid ? null : value || null)
    upload.current?.setCustomValidity(invalid ? uploadLabel : '')
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity() || invalidFile || !business.formEndpoint) return
    setStatus('sending')
    const data = new FormData(form)
    if (file) data.set('reference', file)
    try {
      const response = await fetch(String(business.formEndpoint), { method: 'POST', body: data })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('success')
      form.reset()
      setFile(null)
    } catch { setStatus('error') }
  }

  return (
    <form onSubmit={submit} className="contact-form" aria-busy={status === 'sending'}>
      <div className="form-grid">
        {[
          { label: 'Naam', name: 'name', type: 'text', autoComplete: 'name', required: true },
          { label: 'E-mailadres', name: 'email', type: 'email', autoComplete: 'email', required: true },
          { label: 'Telefoonnummer', name: 'phone', type: 'tel', autoComplete: 'tel', required: false },
          { label: 'Postcode', name: 'postcode', type: 'text', autoComplete: 'postal-code', required: false },
        ].map(({ label, ...input }) => <label key={input.name} htmlFor={input.name}>{label}<input id={input.name} {...input}/></label>)}
      </div>
      <label htmlFor="project-type">Type project</label>
      <select id="project-type" name="type" required defaultValue="">
        <option value="" disabled>—</option>
        {projectTypes.map(type => <option key={type}>{type}</option>)}
      </select>
      <label htmlFor="description">Korte omschrijving van uw project</label>
      <textarea id="description" name="description" rows={5} required/>
      <label className={`upload ${invalidFile ? 'invalid' : ''}`} htmlFor="reference" onDragOver={event => event.preventDefault()} onDrop={event => { event.preventDefault(); selectFile(event.dataTransfer.files[0]) }}>
        <span>{uploadLabel}</span>
        <span className="upload-inner" aria-hidden="true">↑</span>
        <input ref={upload} type="file" id="reference" name="reference" onChange={event => selectFile(event.target.files?.[0])} aria-invalid={invalidFile}/>
        {file && <span className="filename">{file.name}</span>}
      </label>
      {invalidFile && <p role="alert" className="form-error">{uploadLabel}</p>}
      {status === 'success' && business.successMessage && <p role="status">{business.successMessage}</p>}
      {status === 'error' && business.errorMessage && <p role="alert" className="form-error">{business.errorMessage}</p>}
      <button className="button" type="submit" disabled={!business.formEndpoint || status === 'sending'}>Project bespreken<span className="arrow" aria-hidden="true">↗</span></button>
    </form>
  )
}
