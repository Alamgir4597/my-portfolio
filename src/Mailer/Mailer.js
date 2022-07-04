import React from 'react';
import emailjs from '@emailjs/browser';
const Mailer = () => {
    const sendEmail =(e)=>{
        e.preventDefault();
        // const name=e.target.name.value
        // console.log(name)
         emailjs.sendForm('service_zod6g7j', 'template_avg5zfq', e.target, 'djIUMLoxv0-0w3lq9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    }
    return (
        <div className='container mx-auto bg-current  '>
           
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-3xl text-white font-bold">Contact now!</h1>
                      
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form  onSubmit={sendEmail}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" class="input input-bordered" required />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" class="input input-bordered" required />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Message</span>
                                    </label>
                                    <textarea type="textarea" placeholder="message" rows="4" class="input input-bordered" required />

                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary" type='submit' value="send">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mailer;