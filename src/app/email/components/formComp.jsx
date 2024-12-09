"use client"

import React from 'react'

export default function formComp() {
  return (
    <div>formComp
      <section>
      <form action={async (formData) => {
  // Handle form data submission on the server
  const response = await fetch('/api/endpoint', {
    method: 'POST',
    body: formData,
  });
  const data = await response.json();
  // Handle the response data
}}>
  <input type="text" name="name" placeholder="Enter your name" />
  <input type="email" name="email" placeholder="Enter your email" />
  <SubmitButton />
</form>
      </section>
    </div>
  )
}
