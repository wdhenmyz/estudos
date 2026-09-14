let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, 
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    }, 
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

contacts.push(
    {name: "Maisie Haley",
     phone: "0913 531 3030",
     email: "risus.Quisque@urna.ca"
    })

console.log(contacts.length)
console.log(contacts[0].name, contacts[0].phone, contacts[0].email)
console.log(contacts[3].name, contacts[3].phone, contacts[3].email)

let last = contacts.length - 1;

const numb = prompt('escolha sua ação (1, 2, 3)')

switch (numb) {
    case '1':
        alert(`${contacts[0].name}, ${contacts[0].phone}, ${contacts[0].email}`)
    break;

    case '2':
        alert(`${contacts[last].name}, ${contacts[last].phone}, ${contacts[last].email}`)
    break;

    case '3':
        const n = prompt();
        const phone = prompt();
        const email = prompt();

        if (n === '' || phone === '' || email ==='') {
            alert('há dados faltando, não foi possível cadastrar')
        } else {
            contacts.push({name: n, phone, email});
            alert(`${n}, ${phone}, ${email}`)
        }
    
    break;

    default: alert("escolha desconhecida")
}
