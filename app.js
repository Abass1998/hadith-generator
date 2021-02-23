var count = 0;
// document.querySelector(".info").style.display = "none";
// document.querySelector(".cta").addEventListener("click", function(){
// var dice = Math.floor(Math.random()*3 +1);
// document.querySelector(".show").innerHTML = document.querySelector("#name-" + dice).innerHTML;
// });

var a = "Narrated 'Umar bin Al-Khattab:\
I heard Allah 's Apostle saying, \"The reward of deeds depends upon the\
intentions and every person will get the reward according to what he has\
intended. So whoever emigrated for worldly benefits or for a woman to\
marry, his emigration was for what he emigrated for.\"";

var b = "Narrated Anas:\
Whenever the Prophet went to answer the call of nature, he used to say,\
\"Allah-umma inni a'udhu bika minal khubuthi wal khaba'ith i.e. O Allah, I\
seek Refuge with You from all offensive and wicked things (evil deeds and\
evil spirits)."; 

var c = "Narrated Um-'Atiya:\
that the Prophet at the time of washing his deceased daughter had said to\
them, \"Start from the right side beginning with those parts which are\
washed in ablution.";

var d = "Narrated Um-'Atiya:\
that the Prophet at the time of washing his deceased daughter had said to\
them, \"Start from the right side beginning with those parts which are\
washed in ablution.";

var e = "Narrated Abu Huraira:\
Allah's Apostle said, \"If anyone of you performs ablution he should put\
water in his nose and then blow it out and whoever cleans his private parts\
with stones should do so with odd numbers. And whoever wakes up from\
his sleep should wash his hands before putting them in the water for\
ablution, because nobody knows where his hands were during sleep.\"";

var f = "Narrated 'Abdullah:\
The Prophet went out to answer the call of nature and asked me to bring\
three stones. I found two stones and searched for the third but could not\
find it. So took a dried piece of dung and brought it to him. He took the two\
stones and threw away the dung and said, \"This is a filthy thing.";

var g = "Narrated Anas:\
Whenever Allah's Apostle went to answer the call of nature, I along with\
another boy from us used to go behind him with a tumbler full of water.";

var h = "Narrated Abu Qatada:\
The Prophet said, \"Whenever anyone of you makes water he should not\
hold his penis or clean his private parts with his right hand. (And while\
drinking) one should not breathe in the drinking utensil .";

var i = "Narrated 'Abdullah bin 'Umar:\
Once I went up the roof of our house and saw Allah's Apostle answering the\
call of nature while sitting over two bricks facing Bait-ul-Maqdis (Jerusalem)";

var j = "Narrated Anas:\
Whenever the Prophet went to answer the call of nature, he used to say,\
\"Allah-umma inni a'udhu bika minal khubuthi wal khaba'ith i.e. O Allah, I\
seek Refuge with You from all offensive and wicked things (evil deeds and\
evil spirits).";

var k = "Narrated Abu Qatada:\
Allah's Apostle said, \"Whenever anyone of you drinks water, he should not\
breathe in the drinking utensil, and whenever anyone of you goes to a\
lavatory, he should neither touch his penis nor clean his private parts with\
his right hand.";
var l = "Narrated 'Abbas bin Tamim:\
My uncle asked Allah's Apostle about a person who imagined to have\
passed wind during the prayer. Allah' Apostle replied: \"He should not leave\
his prayers unless he hears sound or smells something.";

document.querySelector(".cta").addEventListener("click", function(){
    document.querySelector(".text").style.display = "none";
    document.querySelector("#image").style.display = "block";
    document.querySelector(".quote").src = "images/quote.png";
   var  quotes = [ a, b, c, d, e, f, g, i, j, k, l];
    var randomNumber = Math.floor(Math.random() * quotes.length);
//    document.querySelector(".show").style.border = "1px dashed black";
//    document.querySelector(".show").style.color = "black";
   document.querySelector(".show").innerHTML = quotes[randomNumber];
    });

   
    const checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change", 
    () => {
    document.body.classList.toggle("dark");
    });


/*
Narated By Ibn 'Umar : Allah's Apostle said: Islam is based on (the following) five (principles):

1. To testify that none has the right to be worshiped but Allah and Muhammad is Allah's Apostle.
2. To offer the (compulsory congregational) prayers dutifully and perfectly.
3. To pay Zakat. (i.e. obligatory charity)
4. To perform Hajj. (i.e. Pilgrimage to Mecca)
5. To observe fast during the month of Ramadan.

Narrated 'Umar bin Al-Khattab:
I heard Allah's Apostle saying, "The reward of deeds depends upon the
intentions and every person will get the reward according to what he has
intended. So whoever emigrated for worldly benefits or for a woman to
marry, his emigration was for what he emigrated for."


Narrated Nu'am Al-Mujmir:
Once I went up the roof of the mosque, along with Abu Huraira. He perform
ablution and said, "I heard the Prophet saying, "On the Day of Resurrection,
my followers will be called "Al-Ghurr-ul-Muhajjalun" from the trace of
ablution and whoever can increase the area of his radiance should do so (i.e.
by performing ablution regularly).' "

Narrated 'Abbas bin Tamim:
My uncle asked Allah's Apostle about a person who imagined to have
passed wind during the prayer. Allah' Apostle replied: "He should not leave
his prayers unless he hears sound or smells something.

Narrated Usama bin Zaid:
Allah's Apostle proceeded from 'Arafat till when he reached the mountain
pass, he dismounted, urinated and then performed ablution but not a
perfect one. I said to him, ("Is it the time for) the prayer, O Allah's Apostle?"
He said, "The (place of) prayer is ahead of you." He rode till when he
reached Al-Muzdalifa, he dismounted and performed ablution and a perfect
one, The (call for) Iqama was pronounced and he led the Maghrib prayer.
Then everybody made his camel kneel down at its place. Then the Iqama
was pronounced for the 'Isha' prayer which the Prophet led and no prayer
was offered in between the two . prayers ('Isha' and Maghrib).

Narrated Ibn 'Abbas:
The Prophet said, "If anyone of you on having sexual relations with his wife
said (and he must say it before starting) 'In the name of Allah. O Allah!
Protect us from Satan and also protect what you bestow upon us (i.e. the
coming offspring) from Satan, and if it is destined that they should have a
child then, Satan will never be able to harm that offspring."

Narrated Anas:
Whenever the Prophet went to answer the call of nature, he used to say,
"Allah-umma inni a'udhu bika minal khubuthi wal khaba'ith i.e. O Allah, I
seek Refuge with You from all offensive and wicked things (evil deeds and
evil spirits).

Narrated Abu Aiyub Al-Ansari:
Allah's Apostle said, "If anyone of you goes to an open space for answering
the call of nature he should neither face nor turn his back towards the Qibla;
he should either face the east or the west."

Narrated 'Abdullah bin 'Umar:
People say, "Whenever you sit for answering the call of nature, you should
not face the Qibla or Bait-ulMaqdis (Jerusalem)." I told them. "Once I went
up the roof of our house and I saw Allah's Apostle answering the call of
nature while sitting on two bricks facing Bait-ul-Maqdis (Jerusalem) (but
there was a screen covering him. '

Narrated 'Abdullah bin 'Umar:
I went up to the roof of Hafsa's house for some job and I saw Allah's Apostle
answering the call of nature facing Sham (Syria, Jordan, Palestine and
Lebanon regarded as one country) with his back towards the Qibla.

Narrated 'Abdullah bin 'Umar:
Once I went up the roof of our house and saw Allah's Apostle answering the
call of nature while sitting over two bricks facing Bait-ul-Maqdis (Jerusalem)

Narrated Anas bin Malik:
Whenever Allah's Apostle went to answer the call of nature, I along with
another boy used to accompany him with a tumbler full of water. (Hisham
commented, "So that he might wash his private parts with it.)"

Narrated Anas:
Whenever Allah's Apostle went to answer the call of nature, I along with
another boy from us used to go behind him with a tumbler full of water.

Narrated Anas bin Malik:
Whenever Allah's Apostle went to answer the call of nature, I along with
another boy used to carry a tumbler full of water (for cleaning the private
parts) and an 'Anza (spear-headed stuck).

Narrated Abu Qatada:
Allah's Apostle said, "Whenever anyone of you drinks water, he should not
breathe in the drinking utensil, and whenever anyone of you goes to a
lavatory, he should neither touch his penis nor clean his private parts with
his right hand.

Narrated Abu Qatada:
The Prophet said, "Whenever anyone of you makes water he should not
hold his penis or clean his private parts with his right hand. (And while
drinking) one should not breathe in the drinking utensil .

Narrated 'Abdullah:
The Prophet went out to answer the call of nature and asked me to bring
three stones. I found two stones and searched for the third but could not
find it. So took a dried piece of dung and brought it to him. He took the two
stones and threw away the dung and said, "This is a filthy thing.

Narrated 'Abdullah bin Zaid:
The Prophet performed ablution by washing the body parts twice.

Narrated Abu Huraira:
The Prophet said, "Whoever performs ablution should clean his nose with
water by putting the water in it and then blowing it out, and whoever cleans
his private parts with stones should do it with odd number of stones."


Narrated Abu Huraira:
Allah's Apostle said, "If anyone of you performs ablution he should put
water in his nose and then blow it out and whoever cleans his private parts
with stones should do so with odd numbers. And whoever wakes up from
his sleep should wash his hands before putting them in the water for
ablution, because nobody knows where his hands were during sleep."


Narrated 'Abdullah bin 'Amr:
The Prophet remained behind us on a journey. He joined us while we were
performing ablution for the 'Asr prayer which was over-due and we were
just passing wet hands over our feet (not washing them thoroughly) so he
addressed us in a loud voice saying twice orthriae, "Save your heels from the
fire."


I heard Abu Huraira saying as he passed by us while the people were
performing ablution from a utensil containing water, "Perform ablution
perfectly and thoroughly for Abul-Qasim (the Prophet) said, 'Save your heels
from the Hell-fire.' "


Narrated Um-'Atiya:
that the Prophet at the time of washing his deceased daughter had said to
them, "Start from the right side beginning with those parts which are
washed in ablution.


Narrated Ibn Sirrn:
I said to 'Ablda, "I have some of the hair of the Prophet which I got from
Anas or from his family." 'Abida replied. "No doubt if I had a single hair of
that it would have been dearer to me than the whole world and whatever is
in it."

My uncle said: The Prophet said, "One should not leave his prayer unless he
hears sound or smells something."


*/