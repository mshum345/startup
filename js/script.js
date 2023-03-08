let genInfo = [];

genInfo["a-aisimeer"] = "Lorem Ipsum";
genInfo["a-arendel-castle"] = "Lorem Ipsum";
genInfo["a-arwind"] = "Lorem Ipsum";
genInfo["a-bal-mordal"] = "Lorem Ipsum";
genInfo["a-barfire"] = "Once a welcoming desert city full of wonder, travelers from afar, and magical enlightenment, Barfire now suffocates under the oppressive rule of the dragon cult. Humans and other peaceful races have been forced to either join the cult or serve as slaves to the dragons offering up their gold as tribute. Despite the difficult circumstances, Barfire is still a magnificent city of sandstone surrounded by thousands of magical prahs trees. At night the beautiful colors of a magical power called the current ride the desert winds through the city. Many citizens of Barfire have developed magical abilities from the consumption of prahs fruit and practice their arcane arts in secret, away from the prying eyes of the dragon cult. The occasional revolution attempt from the people of Barfire proves that although they may be under dragon cult rule, their spirit is far from broken.";
genInfo["a-black-city"] = "Lorem Ipsum";
genInfo["a-bokk"] = "Lorem Ipsum";
genInfo["a-centelcius"] = "Lorem Ipsum";
genInfo["a-charr-lake"] = "Lorem Ipsum";
genInfo["a-clearwater-port"] = "Lorem Ipsum";
genInfo["a-corrupted-forest"] = "Lorem Ipsum";
genInfo["a-crater"] = "Lorem Ipsum";
genInfo["a-crookshaw"] = "Lorem Ipsum";
genInfo["a-fapaa"] = "Lorem Ipsum";
genInfo["a-fort-kayne"] = "Lorem Ipsum";
genInfo["a-frozen-mountains"] = "Lorem Ipsum";
genInfo["a-gardul"] = "Lorem Ipsum";
genInfo["a-glass-desert"] = "Lorem Ipsum";
genInfo["a-greyrach"] = "Lorem Ipsum";
genInfo["a-ice-fields"] = "Lorem Ipsum";
genInfo["a-kah-viir-ruins"] = "Lorem Ipsum";
genInfo["a-kama-ruins"] = "Lorem Ipsum";
genInfo["a-koro-island"] = "Lorem Ipsum";
genInfo["a-lake-gorn"] = "Lorem Ipsum";
genInfo["a-living-swamp"] = "Lorem Ipsum";
genInfo["a-magma-fields"] = "Lorem Ipsum";
genInfo["a-marred-wastelands"] = "Lorem Ipsum";
genInfo["a-mata"] = "Lorem Ipsum";
genInfo["a-mount-charr"] = "Lorem Ipsum";
genInfo["a-mountains-rest"] = "Lorem Ipsum";
genInfo["a-pauk"] = "Lorem Ipsum";
genInfo["a-port-raynor"] = "Lorem Ipsum";
genInfo["a-refton"] = "Lorem Ipsum";
genInfo["a-reimeer"] = "Lorem Ipsum";
genInfo["a-rift-island"] = "Lorem Ipsum";
genInfo["a-river-city"] = "Towering, impenetrable walls surround the great capital of River City broken only by the grand watchtowers of the Sher-dkahn, the guardians of the city. There are six of these towers and at the top of each tower stands one of the legendary guardians. These guardians fell to the earth in strange metal capsules shortly after Rycard was killed and have diligently guarded River City ever since. The Great River runs straight through River City and large ships travel its waters with items and materials to trade. Within the walls of River city, streets are teeming with citizens rushing from task to task, shops bustle with life, and street performers call for attention from the crowds. Despite the prosperous community there is also a darker side to the City. The thieves guild operates out of River City, many guards are corrupt and are easily bought off, and the rich often prosper off of the hard work of the poor. Over the years, many in River City viewed the growing evils in the land as a sign that the gods had abandoned them, resulting in all religion being outlawed within the city walls. Despite its flaws, River City is the last stronghold for mankind and still stands as a beacon of hope for Keshar.";
genInfo["a-shimmer-island"] = "Lorem Ipsum";
genInfo["a-shimmer-port"] = "Lorem Ipsum";
genInfo["a-sinking-marsh"] = "Lorem Ipsum";
genInfo["a-snow-plains"] = "Lorem Ipsum";
genInfo["a-tal-bask"] = "Lorem Ipsum";
genInfo["a-the-trench"] = "Lorem Ipsum";
genInfo["a-untammed-plains"] = "Lorem Ipsum";
genInfo["a-wendengald"] = "Lorem Ipsum";
genInfo["a-wyrm-peak"] = "Lorem Ipsum";

function readInfo(inValue) {
    let infoStr = "";

    switch(inValue) {
        case "select":
          infoStr = "";
          break;
          
        case "aisimeer":
          infoStr = genInfo["a-aisimeer"];
          break;

        case "arendel-castle":
          infoStr = genInfo["a-arendel-castle"];
          break;

        case "arwind":
          infoStr = genInfo["a-arwind"];
          break;

        case "bal-mordal":
          infoStr = genInfo["a-bal-mordal"];
          break;
        
        case "barfire":
          infoStr = genInfo["a-barfire"] + "<img src=\"./images/Barfire.png\" alt=\"Barfire Daytime\">";
          break;

        case "black-city":
          infoStr = genInfo["a-black-city"];
          break;

        case "bokk":
          infoStr = genInfo["a-bokk"];
          break;

        case "centelcius":
          infoStr = genInfo["a-centelcius"];
          break;

        case "charr-lake":
          infoStr = genInfo["a-charr-lake"];
          break;

        case "clearwater-port":
          infoStr = genInfo["a-clearwater-port"];
          break;

        case "corrupted-forest":
          infoStr = genInfo["a-corrupted-forest"];
          break;

        case "crater":
          infoStr = genInfo["a-crater"];
          break;

        case "crookshaw":
          infoStr = genInfo["a-crookshaw"];
          break;

        case "fapaa":
          infoStr = genInfo["a-fapaa"];
          break;

        case "fort-kayne":
          infoStr = genInfo["a-fort-kayne"];
          break;

        case "frozen-mountains":
          infoStr = genInfo["a-frozen-mountains"];
          break;

        case "gardul":
          infoStr = genInfo["a-gardul"];
          break;

        case "glass-desert":
          infoStr = genInfo["a-glass-desert"];
          break;

        case "greyreach":
          infoStr = genInfo["a-greyreach"];
          break;

        case "ice-fields":
          infoStr = genInfo["a-ice-fields"];
          break;

        case "kah-viir-ruins":
          infoStr = genInfo["a-kah-viir-ruins"];
          break;

        case "kama ruins":
          infoStr = genInfo["a-kama-ruins"];
          break;

        case "koro-island":
          infoStr = genInfo["a-koro-island"];
          break;

        case "lake-gorn":
          infoStr = genInfo["a-lake-gorn"];
          break;

        case "living-swamp":
          infoStr = genInfo["a-living-swamp"];
          break;

        case "magma-fields":
          infoStr = genInfo["a-magma-fields"];
          break;

        case "marred-wastelands":
          infoStr = genInfo["a-marred-wastelands"];
          break;

        case "mata":
          infoStr = genInfo["a-mata"];
          break;

        case "mount-charr":
          infoStr = genInfo["a-mount-charr"];
          break;

        case "mountains-rest":
          infoStr = genInfo["a-mountains-rest"];
          break;

        case "pauk":
          infoStr = genInfo["a-pauk"];
          break;

        case "port-raynor":
          infoStr = genInfo["a-port-raynor"];
          break;

        case "refton":
          infoStr = genInfo["a-refton"];
          break;

        case "reimeer":
          infoStr = genInfo["a-reimeer"];
          break;

        case "rift-island":
          infoStr = genInfo["a-rift-island"];
          break;

        case "river-city":
          infoStr = genInfo["a-river-city"] + "<img src=\"./images/RiverCity.png\" alt=\"River City\">";
          break;

        case "shimmer-island":
          infoStr = genInfo["a-shimmer-island"];
          break;

        case "shimmer-port":
          infoStr = genInfo["a-shimmer-port"];
          break;

        case "sinking-marsh":
          infoStr = genInfo["a-sinking-marsh"];
          break;

        case "snow-plains":
          infoStr = genInfo["a-snow-plains"];
          break;

        case "tal-bask":
          infoStr = genInfo["a-tal-bask"];
          break;

        case "the-trench":
          infoStr = genInfo["a-the-trench"];
          break;

        case "untammed-plains":
          infoStr = genInfo["a-untammed-plains"];
          break;

        case "wendengald":
          infoStr = genInfo["a-wendengald"];
          break;

        case "wyrm-peak":
          infoStr = genInfo["a-wyrm-peak"];
          break;

        default:
          console.log("Invalid Input")
          break;
      }

    
}