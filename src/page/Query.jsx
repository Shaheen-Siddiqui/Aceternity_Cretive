import React, { useRef } from "react";
import { Button, Input, Label, Textarea, BackgroundLines } from "../component/query-form";
import emailjs from "emailjs-com";

//--------------------------

export function CustomForm() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zcb0lqp", // Replace with your EmailJS service ID
        "template_v7yucpp", // Replace with your EmailJS template ID
        formRef.current,
        "Su1bLVXLLxro8fSle" // Replace with your EmailJS public key (User ID)
      )
      .then(
        (result) => {
          alert("Form submitted successfully!");
          console.log(result.text);

          // Clear form inputs
          formRef.current.reset();
        },
        (error) => {
          alert("An error occurred. Please try again.");
          console.log(error.text);
        }
      );
  };


  return (
    <BackgroundLines className=' flex justify-center '>
      <form ref={formRef} onSubmit={handleSubmit} className="flex justify-center">

        <div className="flex flex-col p-10 gap-2.5  w-[35rem]">

          <Label className="text-1xl" htmlFor="fullname">Full Name</Label>
          <Input required className="text-1xl" name="fullname" type="text" id="fullname" placeholder="Enter your Full Name" />

          <Label className="text-1xl" htmlFor="email">Business Email</Label>
          <Input required className="text-1xl" name="email" type="email" id="email" placeholder="Enter your Business Email" />

          <Label className="text-1xl" htmlFor="phone"> Phone Number</Label>
          <Input required className="text-1xl" name="phone" type="phone" id="phone" placeholder="Enter your Phone Number" />

          <Label className="text-1xl" htmlFor="company_name">Company Name</Label>
          <Input required className="text-1xl" name="company" type="company_name" id="company_name" placeholder="Enter your Company Name" />

          <Label className="text-1xl" htmlFor="social">Social Media Link</Label>
          <Input className="text-1xl" name="socialMedia" type="social" id="social" placeholder="Enter Your Any Social Media Link" />

          <Label className="text-1xl" htmlFor="details">Addition Details</Label>
          <Textarea type="details" id="details" name="details" placeholder="Enter Detail" />

          <div className="mt-4"><Button type="submit" className="w-full">  Submit</Button>

          </div>
        </div>
      </form>
    </BackgroundLines>
  );
}


{/* <div className="flex flex-col p-10 gap-2.5 w-[35rem]">
        <Label htmlFor="fullname">Full Name</Label>
        <Input type="text" id="fullname" name="fullname" placeholder="Enter your Full Name" />

        <Label htmlFor="email">Business Email</Label>
        <Input type="email" id="email" name="email" placeholder="Enter your Business Email" />

        <Label htmlFor="phone">Phone Number</Label>
        <Input type="text" id="phone" name="phone" placeholder="Enter your Phone Number" />

        <Label htmlFor="company">Company Name</Label>
        <Input type="text" id="company" name="company" placeholder="Enter your Company Name" />

        <Label htmlFor="socialMedia">Social Media Link</Label>
        <Input type="text" id="socialMedia" name="socialMedia" placeholder="Enter Your Any Social Media Link" />

        <Label htmlFor="details">Additional Details</Label>
        <Textarea id="details" name="details" placeholder="Enter Details" rows="4" />

        <div className="mt-4">
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </div> */}