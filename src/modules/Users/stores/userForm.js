import { reactive } from 'vue';

let userForm = reactive({
    fields: {
        email: '',
        name: '',
        phone_number: '',
        password: '',
        gender: '',
    },
    errors: {},
    onProgress: false,
    clearErrors()
    {
        this.errors = {};
    },
    clearFields()
    {

        let field;
        for (field in this.fields)
        {
            this.fields[field] = '';
        }
    },
    setErrors(response) 
    {
        if (response.status == 422)
        {
            this.errors = response.data.errors;

        }
    }
})


export default userForm;