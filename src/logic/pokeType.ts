
export default function pokeType(): pokeTypeInterface[] {
    return [
        {id:1,  name:'ノーマル', color:'#dddddd'},
        {id:2,  name:'ほのお',   color:'#ff4500'},
        {id:3,  name:'みず',    color:'#aaddff'},
        {id:4,  name:'でんき',  color:'#f8f800'},
        {id:5,  name:'くさ',    color:'#bcd458'},
        {id:6,  name:'こおり',  color:'#00ffff'},
        {id:7,  name:'かくとう', color:'#fa8592'},
        {id:8,  name:'どく',    color:'#9370db'},
        {id:9,  name:'じめん',  color:'#c48c44'},
        {id:10, name:'ひこう',  color:'#8cc4dc'},
        {id:11, name:'エスパー', color:'#ffc0cb'},
        {id:12, name:'むし',    color:'#00ff7f'},
        {id:13, name:'いわ',    color:'#f5deb3'},
        {id:14, name:'ゴースト', color:'#9080aa'},
        {id:15, name:'ドラゴン', color:'#7788ee'},
        {id:16, name:'あく',     color:'#6699bf'},
        {id:17, name:'はがね',   color:'#999999'},
        {id:18, name:'フェアリー', color:'#ee82ee'}]
}

export interface pokeTypeInterface {
    id: number;
    name: string;
    color: string;
}
