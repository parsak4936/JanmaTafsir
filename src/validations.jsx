import * as yup from "yup";


const validations=  yup.object().shape({
    email: yup
      .string("ادرس ایمیل نباید تنها عدد باشد")
      .email("ایمیل درست نمیباشد")
      .required("ایمیل مورد نیاز است"),
    phone: yup
      .number("تلفن همراه نباید حروف داشته باشد")
      
      .typeError("فرمت شماره همراه اشتباه است")
      
      .positive("شماره همراه نمیتواند منفی داشته باشد")
      
      .integer("شماره همراه صحیح نمیباشد")
     
      .min(12,"شماره باید دوازده رقم باشد")
       
      .required('شماره همراه مورد نیاز است')
      ,
    password: yup
      .string()
      .min(8, "اندازه رمز عبور حداقل باید 8 کاراکتر باشد")
      .required("رمز عبور نباید خالی باشد"),
  })


export default validations;