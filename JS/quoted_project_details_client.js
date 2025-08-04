if(document.getElementById("qp_development_approve_btn")){
    const qp_development_approve_btn = document.getElementById("qp_development_approve_btn");
    qp_development_approve_btn.addEventListener("click",()=>{
        Swal.fire({
            title: 'Are you sure ?',
            text: 'You want to Approve',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: ' Cancel ',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Approved Successfully',
                    icon: 'success'
                });
                document.getElementById("qp_hosted_project_card").classList.remove("d-none");
                qp_development_approve_btn.parentElement.parentElement.parentElement.parentElement.classList.add("d-none");
            }
        });
    });
}