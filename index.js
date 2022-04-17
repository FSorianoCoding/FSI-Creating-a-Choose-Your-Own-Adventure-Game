let firstAnswer = window.prompt('Do you head LEFT or RIGHT?')

//Sequence for Left as first answer
if (firstAnswer === 'LEFT') {
    let secondAnswer = window.prompt(`You come across a stray cat. 
    It scampers off down a small hole, just large enough for you to crawl through. 
    Do you FOLLOW it, or CONTINUE on your path?`)

    // Conditional sequence for seecond answer FOLLOW response after Left   
    if (secondAnswer === 'FOLLOW') {
        let thirdAnswer = window.prompt(`You follow the cat to a colony of cats, 
        nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. 
        They are content with you STAYing, but you wonder if you should SPREAD the word to this magical safe haven.`)
        
        //Conditional sequence for third answers after selecting FOLLOW
        if (thirdAnswer === 'STAY') {
            window.alert('You live happily amongst the cats for the rest of your days.')
        } else if (thirdAnswer === 'SPREAD') {
            window.alert(`After leaving the cat colony, you are never able to find it again; 
            without proof, no one believes your story, which passes into legend nonetheless.`)
        }
    //Conditional sequence for second answer CONTINUE response after Left
    } else if (secondAnswer === 'CONTINUE') {
        let thirdAnswer = window.prompt(`You come across a chamber that reaches upward 
        to a shining light above. There is a long, winding STAIRCASE, and a much quicker, 
        but rickety-looking LADDER that leads up toward the light. Which do you take?`)
        
        //Conditional sequences for third answers after selecting CONTINUE
        if (thirdAnswer === 'LADDER') {
            window.alert(`After ascending a few feet up the ladder, one of its rungs snaps, 
            and you comedically fall through each of the rungs below. Sheepish, you return home.`)
        } else if (thirdAnswer === 'STAIRCASE') {
            window.alert(`After ascending the staircase, you discover a shiny blue stone, 
            which you take home and cherish forever.`)
        }
    }

//Seequence for selecting RIGHT as first asnwer
} else if (firstAnswer === 'RIGHT') {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
    On the other side of him, you see a shiny chest of treasure. Another path would 
    lead you away from the dragon altogether. Which path do you take? PAST or AWAY?`)
    
    //Conditional sequence for second answer PAST after response Right
    if (secondAnswer === 'PAST'){
        let thirdAnswer = window.prompt(`The dragon wakes up and sits upright. 
        You only have a moment to respond, STAY or RUN:`)
        
        //Conditional sequence for third answers after selecting PAST
        if (thirdAnswer === 'STAY'){
            window.alert(`You and the dragon have an uplifting conversation about 
            local politics and become lifelong friends.`)
        } else if (thirdAnswer === 'RUN'){
            window.alert(`Quickly, you run back to the cave's entrace. 
            Sheepish, you return home.`)
            }
    //Conditional sequence for second answer AWAY response after Right    
    } else if (secondAnswer === 'AWAY'){
        let thirdAnswer = window.prompt(`After walking a while longer,
        you come across a shiny blue flower. It is so beautiful that you decide you must either
        DRAW it or PICK it. Which do you do?`)

        //Conditional sequence for third answers after selecting AWAY
        if (thirdAnswer === 'DRAW'){
            window.alert(`You draw the flower, capturing only a fraction of its beauty with your quill. 
            You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing 
            it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.`)
        } else if (thirdAnswer === 'PICK'){
            window.alert(`You pick the flower and bring it home, and all marvel at its brilliance. 
            However, over time it fades and eventually crumbles to dust.`)
            }
        }
    }