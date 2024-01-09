import swal from 'sweetalert2'

export default function({ $axios, store, app, redirect }) {
  $axios.onRequest((request) => {
    return request.data
  })

  /**
   * middleware for response
   */
  $axios.onResponse((response) => {
    if (!response) {
      swal.fire('No data', 'No response data.', 'warning')
    }
    return response
  })

  $axios.onError((error) => {
    
    const { status } = error.response
    // Error 402
    if (status === 422) {
      let obj = error.response.data
      let message = null
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const element = obj[key]
          message = element[0]
          break
        }
      }
     
    }  
  })
}
