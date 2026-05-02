const forms=document.querySelectorAll('.needs-validation');
forms.forEach(form=>{
    form.addEventListener('submit',event => {
        if(!form.checkValidity())
        {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    });
});

var tool=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tool.forEach(function(toolEl){
    new bootstrap.Tooltip(toolEl);
});