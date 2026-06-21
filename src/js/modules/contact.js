export function initContact() {
  // ─── File Upload ─────────────────────────────────────
  const dropZone  = document.getElementById('drop-zone')
  const fileInput = document.getElementById('file-input')
  const fileName  = document.getElementById('file-name')

  if (dropZone && fileInput) {
    dropZone.addEventListener('click', () => fileInput.click())

    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0]
      if (file) {
        fileName.textContent = `✓ ${file.name}`
        fileName.classList.remove('hidden')
        dropZone.classList.add('border-[#286570]')
      }
    })

    dropZone.addEventListener('dragover', e => {
      e.preventDefault()
      dropZone.classList.add('border-[#286570]', 'bg-[#E8F4F5]')
    })

    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('bg-[#E8F4F5]')
    })

    dropZone.addEventListener('drop', e => {
      e.preventDefault()
      dropZone.classList.remove('bg-[#E8F4F5]')
      const file = e.dataTransfer.files[0]
      if (file) {
        fileInput.files = e.dataTransfer.files
        fileName.textContent = `✓ ${file.name}`
        fileName.classList.remove('hidden')
        dropZone.classList.add('border-[#286570]')
      }
    })
  }

  // ─── Form Validation ─────────────────────────────────
  const form = document.getElementById('contact-form')
  if (!form) return

  form.addEventListener('submit', e => {
    e.preventDefault()
    const name  = document.getElementById('name')?.value.trim()
    const email = document.getElementById('email')?.value.trim()
    if (!name || !email) {
      alert('يرجى تعبئة الاسم والبريد الإلكتروني')
      return
    }
    // BLADE: form.submit()
    alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.')
  })
}