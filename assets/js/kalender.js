$('.card').click(function(){

    // set date header for card
    let id = $(this).attr("id")
    let content = cardContent[id-1]
    if (id == 1 || id == 21) {
        date = id + "st December"
    } else if (id == 2 || id == 22){
        date = id + "nd December"
    } else if (id == 3 || id == 23){
        date = id + "rd December"
    } else {
        date = id + "th December"
    }

    $("#kalender-date").text(date)

    // set card text content
    if (!content) {
        let i = Math.floor(Math.random() * 2.5)
        let content = cheatContent[i]
        $("#modal-text").addClass("cheat-text").removeClass("secret-code")
        $("#modal-text2").hide()
        $("#modal-img").attr("src", content[1])
        $("#modal-text1").text(content[0])
    } else {
        $("#modal-text").removeClass("cheat-text").addClass("secret-code")
        $("#modal-text2").show().text("Super Secret Code: " + content[1])
        $("#modal-img").attr("src", content[2])
        $("#modal-text1").text(content[0])
    }

    $('#modal').modal('show')
})

cardContent = [
    [
        "For your advent calender this year, every day you get a secret code. Put them all together and on Christmas day you'll get a secret message",
        "Ly48ce",
        "assets/img/d1.jpg"
    ],
    [
        "Who delivers presents to baby sharks at Christmas? Santa Jaws!",
        "Jfcuu",
        "assets/img/d2.jpg"
    ],
    [
        "What do Santa’s little helpers learn at school? The elf-abet!",
        "vxUMQ",
        "assets/img/d3.jpg"
    ],
    [
        "What was Santa's best subject in school? Chemistree",
        "XTY4j",
        "assets/img/d4.jpg"
    ],
    [
        "Who hides in the bakery at Christmas? A mince spy!",
        "kjCoK",
        "assets/img/d5.jpg"
    ],
    [
        "How did Mrs. Claus tell Santa the weather? 'It looks like rain, dear!'",
        "eItUl",
        "assets/img/d6.jpg"
    ],
    [
        "What does Santa use to measure? Santameters!",
        "1X7a8",
        "assets/img/d7.jpg"
    ],
    [
        "What's a ghost's favorite Christmas story? The Fright Before Christmas!",
        "BMO7B",
        "assets/img/d8.jpg"
    ],
    [
        "What do you get if you cross Santa with a duck? A Christmas Quacker!",
        "7NzoJ",
        "assets/img/d9.jpg"
    ],
    [
        "What do snowmen eat for breakfast? Ice Crispies.",
        "i1Ou+",
        "assets/img/d10.jpg"
    ],
    [
        "Why is it always cold at Christmas? Because it is Decemberrrrrrr!",
        "dzmNN",
        "assets/img/d11.jpg"
    ],
    [
        "What did one snowman say to the other snowman? Smells like carrots around here!",
        "ohNzV",
        "assets/img/d12.jpg"
    ],
    [
        "What does Santa use to bake cakes? Elf-raising flour",
        "aAIal",
        "assets/img/d13.jpg"
    ],
    [
        "What do elves do after school? Their gnome work!",
        "71NGj",
        "assets/img/d14.jpg"
    ],
    [
        "What did the snowman say to the robin? I have snow idea!",
        "5cadu",
        "assets/img/d15.jpg"
    ],
    [
        "Why is it getting harder to buy Advent calendars? Because their days are numbered!",
        "0Rtgk",
        "assets/img/d16.jpg"
    ],
    [
        "How does Santa keep track of all the fireplaces he's visited? He keeps a logbook.",
        "/mvxs",
        "assets/img/d17.jpg"
    ],
     [
        "Who delivers presents to cats? Santa Paws!",
        "KcKu5",
        "assets/img/d18.jpg"
    ],
     [
        "Why does everyone love Frosty the Snowman? He's cool",
        "+Sefv",
        "assets/img/d19.jpg"
    ],
     [
        "What is white and minty? A polo bear!",
        "kApsZ",
        "assets/img/d20.jpg"
    ],
    [
        "What’s green, covered in tinsel and goes ribbet ribbet? A mistle-toad!",
        "HTsvd",
        "assets/img/d21.jpg"
    ],
    [
        "How did Scrooge win the football game? The ghost of Christmas passed!",
        "UujuL",
        "assets/img/d22.jpg"
    ],
    [
        "What’s the absolute best Christmas present? A broken drum — you can’t beat it!",
        "NG1lO",
        "assets/img/d23.jpg"
    ],
     [
        "What type of cars do elves drive? Toy-otas!",
        "LsWC3",
        "assets/img/d24.jpg"
    ],
    [   
        "The encryption is 128-bit AES and your secret password is rudoplh 🦌 Go decrypt your secret message!",
        "mD8yR",
        "assets/img/d25.jpg"
    ]
]

cheatContent = [
    [
        "Santa says it isn't this day yet!",
        "assets/img/cheat1.jpg"
    ],
    [
        "Stop trying to sneak a look at days in the future!",
        "assets/img/cheat2.jpg"
    ],
    [
        "It still isn't this day yet!",
        "assets/img/cheat3.jpg"
    ]
]