'use server'
 
export async function authenticate(formData: FormData) {
  try {
    console.log(formData)
  } catch (error) {
    console.log('error500')
  }
}	