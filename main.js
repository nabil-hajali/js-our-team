// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.
// create an array with the components of the team

const team = [
    {
        name: 'Marco Bianchi',
        role: 'Designer',
        mail: 'marcobianchi@team.com',
        image: 'male1.png'

    },

    {
        name: 'Laura Rossi',
        role: 'Front-end Developer',
        mail: 'laurarossi@team.com',
        image:'female1.png'
    },

    {
        name: 'Marco Bianchi',
        role: 'Designer',
        mail: 'giorgioverdi@team.com',
        image:'male2.png'
    },

    {
        name: 'Marta Ipsum',
        role: 'SEO Specialis',
        mail: 'martarossi@team.com',
        image:'female2.png'
    },

    {
        name: 'Roberto Lorem',
        role: 'SEO Specialist',
        mail: 'robertolorem@team.com',
        image:'male3.png'
    },

    {
        name: 'Daniela Amet',
        role: 'Analyst',
        mail: 'danielaamet@team.com',
        image:'female3.png'
    },
    

]

//loop over the array for each item render the card markup

const cards = ''
for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    console.log(teamMember);

    //generate the member card
    const {name, role, mail, image} = teamMember
    const markup = `
    <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
                    <img src="./assets 2/img/${image}" alt="" srcset="">
                    <div class="card-body">
                        <h2 class="card-title">${name}</h2>
                        <div class="role">${role}</div>
                        <div class="mail">${mail}</div>
                    </div>
                </div>
            </div>`
    console.log(markup);
    
}