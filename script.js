function sendEmail () {
    e.preventDefault();
    console.log("Clicked")
    let ebody = `
    <h1>Name: </h1>${name.value}
    <br>
    <h1>Email: </h1>${email.value}
     <br>
    <h1>Phone: </h1>${phone.value}
     <br>
    <h1>Message: </h1>${message.value}
   
    `;

    Email.send({
        SecureToken: "f8b8d38d-835b-442d-8e38-cead7859551c", //add your token here
        To: 'yaroslav7v@gmail.com',
        From: "yaroslav7v@gmail.com",
        Subject: "This is the subject",
        Body: ebody
    }).then(
        message => alert(message)
    );
}