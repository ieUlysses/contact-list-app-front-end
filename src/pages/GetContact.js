import "./GetContact.css"

export default () => {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e);

        /*      let data = {};
                data.fullName = e.target[0].value;
                data.email = e.target[1].value;
                data.phone = e.target[2].value;
                data.message = e.target[3].value;
         */
        let data = new FormData();

        data.append('fullName', e.target[0].value);
        data.append('email', e.target[1].value);
        data.append('phone', e.target[2].value);
        data.append('message', e.target[3].value);

        Array.from(e.target[4].files).forEach(file => {
            data.append('attachs', file);
        });

        console.log(1, data);

        for (var value of data.values()) {
            console.log(value);
        }

        console.log(3, Object.fromEntries(data));

        let url = 'http://localhost:8080/get-contact';

        let options = {
            method: 'POST',
            body: data
        }

        fetch(url, options).then(result => {
            console.log(result)
            result.json().then(output => {
                if (output.status == 'success') {
                    alert(output.message)
                } else {
                    alert(output.message)
                }
                console.log(output);
            })
        }
        );
    }

    return (
        <div id="get-contact">
            <form className="contact-form" onSubmit={submitHandler}>
                <input type="text" placeholder="Full Name"></input>
                <input type="email" placeholder="Email"></input>
                <input type="tel" placeholder="Phone"></input>
                <textarea type="text" placeholder="Message"></textarea>
                <input type="file" multiple></input>
                <button>Get Contact</button>
            </form>
        </div>
    )
}


//Hello World This is trial #1