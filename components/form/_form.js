

export default function Form() {
  return (
	<form class="contact-form">
		<h3>Send oss en melding</h3>
	<div class="form-group">
	  <label for="exampleFormControlInput1">Navn</label>
	  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ditt navn"/>
	</div>
	<div class="form-group">
	  <label for="exampleFormControlInput1">Email adresse</label>
	  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
	</div>
	
	<div class="form-group">
	  <label for="exampleFormControlTextarea1">Din melding</label>
	  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
	</div>
	<button>Send</button>
  </form>

  );
  }






 

