import lizard from '../assets/images/icon-lizard.svg'
import paper from '../assets/images/icon-paper.svg'
import rock from '../assets/images/icon-rock.svg'
import scissors from '../assets/images/icon-scissors.svg'
import spock from '../assets/images/icon-spock.svg'

const weaponMap = new Map();

weaponMap.set("lizard",{
    image:lizard,
    border:"hsl(261, 72%, 63%)",
    shadow:"hsl(261, 73%, 60%)",
})
weaponMap.set("paper",{
    image:paper,
    border:"hsl(230, 89%, 65%)",
    shadow:"hsl(230, 89%, 62%)",
})
weaponMap.set("rock",{
    image:rock,
    border:"hsl(349, 70%, 56%)",
    shadow:"hsl(349, 71%, 52%)",
})
weaponMap.set("scissors",{
    image:scissors,
    border:"hsl(40, 84%, 53%)",
    shadow:"hsl(39, 89%, 49%)",
})
weaponMap.set("spock",{
    image:spock,
    border:"hsl(189, 58%, 57%)",
    shadow:"hsl(189, 59%, 53%)",
})


export default weaponMap;