function word()
{
    let sente = document.getElementById("sente").value;

    let words = sente.split(" ");

    let longest = "";

    for(let i=0; i<words.length;i++)
    {
        if(words[i].length>longest.length)
        {
            longest = words[i];
        }
    }
    document.getElementById("result").innerHTML = "Longest word: " + longest;
    return false;

}