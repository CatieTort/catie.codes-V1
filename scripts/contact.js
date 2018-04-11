const api_key = 'process.env.MAIL_API_KEY';
const DOMAIN = 'https://api.mailgun.net/v3/catie.codes';
let mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

function handleFormSubmit (e){
	e.preventDefault()

	let message = {
		name: document.getElementByID("name").value,
		company: document.getElementByID("company").value,
		email: document.getElementByID("email").value,
		phone: document.getElementByID("phone").value,
		message: document.getElementByID("message").value,
	}

	return message;
}



let data = {
  from: message.name + " " + '<' + message.email'>',
  to: 'catie@catie.codes',
  subject: 'A Message from Catie.codes',
  html:
	<html>
		<header style="text-align:center;margin:20px;text-shadow:2px1px1px#2E2E2E;
		color:#33CC99;">
				<h1>Catie.codes</h1>
		</header>
		<body>
			<div style="text-align:center;margin:20px;">
				<ul style="list-style:none;">
					<li><strong>Name:</strong> message.name</li>
					<li><strong>Company:</strong> message.company</li>
					<li><strong>Email:</strong> message.email</li>
					<li><strong>Phone:</strong> message.phone</li>
				</ul>
				<p>message.message</p>
			</div>
		</body>
	</html>,
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
	  if(!error){
		return document.getElementByID("message-success").innerHTML = "Message Sent !";
	} else {
		return error;
	}
});
