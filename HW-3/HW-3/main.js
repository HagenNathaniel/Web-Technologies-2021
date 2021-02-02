function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {

        document.getElementById("story").innerHTML = "Silvia is walking from Adventurer's Rest, to Silvertree. Halfway to the city, she enounters a young forest troll. What will she do?";
        document.getElementById("choice1").innerHTML = "Fight.";
        document.getElementById("choice2").innerHTML = "attempt to avoid.";
    
    } else if (choice == 2 && answer2 =="No"){
    
        document.getElementById("story").innerHTML = "Silvia attempts to sneak by, as the young Troll appears to be sleeping. Suddenly however, the Troll notices her. It gets up, roaring as it approaches her.";
        document.getElementById("choice1").innerHTML = "Attempt to evade.";
        document.getElementById("choice2").innerHTML = "Prepare to fight!";

    } else if (choice == 1 && answer1 == "Fight."){

        document.getElementById("story").innerHTML = "Silvia prepares to fight, as the troll begins to charge. How will she react?";

        document.getElementById("choice1").innerHTML = "Dodge at the last minute, and hope the Troll slams into the tree behind you.";
        document.getElementById("choice2").innerHTML = "Evade the troll, and slash at its legs to wound it.";

    } else if (choice == 2 && answer2 == "attempt to avoid."){

        document.getElementById("story").innerHTML = "Silvia slips into the bushes, and quietly sneaks around the Troll, giving it a WIDE berth. She's able to successfully circumnavigate the Monster. But then, a pack of wolves intercept her! What will she do now?";
        document.getElementById("choice1").innerHTML ="Fight them off!!";
        document.getElementById("choice2").innerHTML ="Run away!";

    } else if (choice == 1 && answer1 == "Attempt to evade."){

        document.getElementById("story").innerHTML = "Silvia sighs exasperatedly, mutters 'that figures' under her breath, and pulls her daggers out, getting into her fighting stance.";
        document.getElementById("choice1").innerHTML = "Attack them one by one, until they are all dead.";
        document.getElementById("choice2").innerHTML = "Wait for them to make their move."
    
    } else if (choice == 2 && answer2 =="Prepare to fight!"){

        document.getElementById("story").innerHTML ="Silvia gets into her combat stance, and analyses the troll, looking for a weakness. She notices its favoring its right leg, indicating a previous injury. She decides to capitalize on it.";
        document.getElementById("choice1").innerHTML = "Fight dirty!";
        document.getElementById("choice2").innerHTML = "GO FOR THE HEAD!";

    } else if (choice == 1 && answer1 =="Dodge at the last minute, and hope the Troll slams into the tree behind you."){

        document.getElementById("story").innerHTML = "The troll charges Silvia, roaring in anger. At the last possible second, Silvia rolls to the left, having seen the tree less than a few paces behind her. The Troll Slams into it with a grunt, and is knocked out."
        document.getElementById("choice1").innerHTML = "Put the Troll down!"
        document.getElementById("choice2").innerHTML = "Sneak away, leaving the troll to its own devices, as the threat has passed."

    } else if (choice == 2 && answer2 == "Evade the troll, and slash at its legs to wound it."){

        document.getElementById("choice1").innerHTML = "Slash the troll's leg, and watch to see what it does in response.";
        document.getElementById("choice2").innerHTML = "Slash the troll's leg, and run like hell. Not looking back.";
    
    } else if (choice == 1 && answer1 == "Fight them off!!") {

        document.getElementById("story").innerHTML = "Silvia yells 'COME ON! BRING IT' and charges at the wolves.";
        document.getElementById("choice1").innerHTML = "Attack the wolves, stabbing them in all in the throat, one by one, as they lunge at her.";
        document.getElementById("choice2").innerHTML = "Wait for them to come to you, and do killing blows to each one.";

    }   else if (choice == 2 && answer2 == "Run away!") {

        document.getElementById("story").innerHTML = "Silvia takes off, tossing cantrops behind her, to slow the wolves down, as they chase her.";
        document.getElementById("story").innerHTML = "Hours later, after evading the wolves and killing the Troll, she makes it to an inn, She sits down at a booth, and leans her head back, and passes out, exhausted.";


    } else if (choice == 1 && answer == "Attack them one by one, until they are all dead.") {


        document.getElementById("story").innerHTML = "Silvia dodges and weaves through the pack, inflicting damage to each one, until they all either collapse, or run away to lick their wounds.";
        document.getElementById("choice1").innerHTML = "Walk to the inn.";

    } else if  (choice == 2) {

        document.getElementById("story").innerHTML = "Hey, thanks for coming! Perhaps another time? Until then, See ya around the Dungeon master's Table!";
    }
}