// .dp_form-window {
//   display: grid;
//   padding-left: 1%;
//   padding-right: 1%;
//   gap: 10px;
// }

// .dp_form-4-rows {
//   grid-template-rows: repeat(4, 50px);
// }

// .dp_form-5-rows {
//   grid-template-rows: repeat(5, 50px);
// }
.dp_form-window 
{

}



  const [postalCode, setPostalCode] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [afterSubmit, setAfterSubmit] = useState(false);

<form
  
> 
  {afterSubmit && <>
      <button>Postal code</button>
      <button>Street</button>
      <button>Street number</button>
    </>
  }
  <input
    placeholder="Postal Code*"
    className="dp_adress postal-code"
    name="postalCode"
    value={postalCode}
    onChange={event => setPostalCode(event.target.value)}
  />
  <input
    placeholder="Street*"
    className="dp_adress street"
    name="street"
    value={street}
    onChange={event => setStreet(event.target.value)}
  />
  <input
    placeholder="Street Number*"
    className="dp_adress street-number"
    name="streetNumber"
    value={streetNumber}
    onChange={event => setStreetNumber(event.target.value)}
  />
  <button type="submit" className="dp_submit-address">Add Address</button>
</form>


// In React 19, support for using async functions in transitions to handle pending states, errors, forms, and optimistic updates automatically.
// For example, you can use useTransition to handle the pending state for you:

// Using pending state from Actions
            // function UpdateName({}) {
            //   const [name, setName] = useState("");
            //   const [error, setError] = useState(null);
            //   const [isPending, startTransition] = useTransition();

            //   const handleSubmit = () => {
            //     startTransition(async () => {
            //       const error = await updateName(name);
            //       if (error) {
            //         setError(error);
            //         return;
            //       } 
            //       redirect("/path");
            //     })
            //   };

            //   return (
            //     <div>
            //       <input value={name} onChange={(event) => setName(event.target.value)} />
            //       <button onClick={handleSubmit} disabled={isPending}>
            //         Update
            //       </button>
            //       {error && <p>{error}</p>}
            //     </div>
            //   );
            // }
  //   The async transition will immediately set the isPending state to true, make the async request(s), and switch isPending to false after 
  //  any transitions. This allows you to keep the current UI responsive and interactive while the data is changing.