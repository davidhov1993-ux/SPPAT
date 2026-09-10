import { useRef, useState } from 'react'
import type { ChangeEvent, DragEvent, FormEvent } from 'react'
import business from '../content/business-input.json'

const projectTypes = [
  'Badkamer renovatie',
  'Toilet renovatie',
  'Tegelwerk',
  'Anders'
]

export default function ContactForm() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleFile = (selectedFile?: File) => {
    if (!selectedFile) return
    if (selectedFile.size > 10 * 1024 * 1024) {
      setFileError('Bestand is te groot. Het maximum is 10MB.')
      setFile(null)
      if (fileInputRef.current) fileInputRef.current.value = ''
    } else {
      setFileError(null)
      setFile(selectedFile)
    }
  }

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files?.[0]
    handleFile(selected)
  }

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(false)
    const droppedFile = event.dataTransfer.files?.[0]
    handleFile(droppedFile)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.reportValidity() || fileError || !business.formEndpoint) {
      return
    }

    setStatus('sending')
    const data = new FormData(form)
    if (file) {
      data.set('reference', file)
    }

    try {
      const response = await fetch(String(business.formEndpoint), {
        method: 'POST',
        body: data
      })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('success')
      form.reset()
      setFile(null)
      setConsent(false)
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form"
      aria-busy={status === 'sending'}
      noValidate={false}
    >
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="form-name" className="form-label">
            Naam <span className="req-marker" aria-hidden="true">*</span>
          </label>
          <input
            id="form-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="form-input"
            placeholder="Uw volledige naam"
          />
        </div>

        <div className="form-group">
          <label htmlFor="form-email" className="form-label">
            E-mailadres <span className="req-marker" aria-hidden="true">*</span>
          </label>
          <input
            id="form-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="form-input"
            placeholder="naam@voorbeeld.nl"
          />
        </div>

        <div className="form-group">
          <label htmlFor="form-phone" className="form-label">
            Telefoonnummer
          </label>
          <input
            id="form-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="form-input"
            placeholder="06 12345678"
          />
        </div>

        <div className="form-group">
          <label htmlFor="form-postcode" className="form-label">
            Postcode
          </label>
          <input
            id="form-postcode"
            name="postcode"
            type="text"
            autoComplete="postal-code"
            className="form-input"
            placeholder="1300 AA"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="form-project-type" className="form-label">
          Type project <span className="req-marker" aria-hidden="true">*</span>
        </label>
        <select
          id="form-project-type"
          name="type"
          required
          defaultValue=""
          className="form-select"
        >
          <option value="" disabled>
            Selecteer uw type project…
          </option>
          {projectTypes.map(type => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="form-description" className="form-label">
          Korte omschrijving van uw project <span className="req-marker" aria-hidden="true">*</span>
        </label>
        <textarea
          id="form-description"
          name="description"
          rows={5}
          required
          className="form-textarea"
          placeholder="Omschrijf uw wensen, gewenste ruimtes, afmetingen of materiaalkeuze…"
        />
      </div>

      <div className="form-group">
        <span className="form-label" id="upload-label">
          Upload referentie of plattegrond (Optioneel)
        </span>
        <div
          className={`form-upload-zone ${isDragging ? 'is-dragging' : ''} ${fileError ? 'has-error' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              fileInputRef.current?.click()
            }
          }}
          tabIndex={0}
          role="button"
          aria-labelledby="upload-label"
        >
          <span className="upload-icon" aria-hidden="true">↑</span>
          <div className="upload-text">
            <span className="upload-prompt">Bladeren of sleep bestand hierheen</span>
            <span className="upload-note">(Max 10MB)</span>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            id="form-file"
            name="reference"
            className="sr-only"
            onChange={handleFileInputChange}
            accept=".pdf,.jpg,.jpeg,.png,.webp,.dwg"
            tabIndex={-1}
          />
        </div>
        {file && (
          <p className="form-file-chosen">
            Geselecteerd bestand: <strong>{file.name}</strong> ({(file.size / 1024 / 1024).toFixed(2)} MB)
          </p>
        )}
        {fileError && <p className="form-field-error" role="alert">{fileError}</p>}
      </div>

      <div className="form-group form-consent-group">
        <label htmlFor="form-consent" className="form-consent-label">
          <input
            type="checkbox"
            id="form-consent"
            name="consent"
            required
            checked={consent}
            onChange={e => setConsent(e.target.checked)}
            className="form-checkbox"
          />
          <span className="consent-text">
            Ik ga akkoord met de verwerking van mijn gegevens conform de privacyverklaring.
          </span>
        </label>
      </div>

      {status === 'success' && (
        <div className="form-alert form-alert-success" role="status">
          {business.successMessage || 'Bedankt voor uw aanvraag. Wij nemen spoedig contact met u op.'}
        </div>
      )}

      {status === 'error' && (
        <div className="form-alert form-alert-error" role="alert">
          {business.errorMessage || 'Er is iets misgegaan. Controleer de velden en probeer het opnieuw.'}
        </div>
      )}

      <div className="form-actions">
        <button
          className="btn btn-submit"
          type="submit"
          disabled={!business.formEndpoint || status === 'sending'}
        >
          {status === 'sending' ? 'Verzenden…' : 'Project bespreken'}
          <span className="btn-arrow" aria-hidden="true">↗</span>
        </button>
      </div>
    </form>
  )
}
