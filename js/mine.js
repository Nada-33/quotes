const quotes =
    [

        {
            pquote: "“Be yourself; everyone else is already taken.”",
            author: " Oscar Wilde"
        },
        {
            pquote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
            author: " Dr. Seuss "
        },
        {
            pquote: `“Don’t walk in front of me… I may not follow
        Don’t walk behind me… I may not lead
        Walk beside me… just be my friend”`,
            author: " Albert Camus        "
        },
        {
            pquote: "“To live is the rarest thing in the world. Most people exist, that is all.”",
            author: " Oscar Wilde"
        },
        {
            pquote: "“It is better to be hated for what you are than to be loved for what you are not.”        ",
            author: "  Andre Gide, Autumn Leaves"
        },

    ]


    function pick() {

        var randomNumber = Math.floor(Math.random() * (quotes.length));
        document.getElementById("pq").innerHTML = quotes[randomNumber].pquote;
        document.getElementById("a").innerHTML = quotes[randomNumber].author;
    
     }   