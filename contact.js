const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');
const loadingMessage = document.getElementById('loadingMessage');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    loadingMessage.style.display = 'block';
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxCiDXQ-Ioo5UvaiSLTi2OW_bwevklVR_sod5Te3egLVTgTnhBPf55wiJE0e3IZulCC/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        loadingMessage.style.display = 'none';
        form.reset();
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    } catch (error) {
        loadingMessage.style.display = 'none';
        errorMessage.style.display = 'block';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000);
    }
});