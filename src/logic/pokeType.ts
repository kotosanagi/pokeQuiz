
export default function pokeType(): pokeTypeInterface[] {
    return [
        {id:1,  name:'ノーマル', color:'#cccccc'},
        {id:2,  name:'ほのお',   color:'#ffbb66'},
        {id:3,  name:'みず',    color:'#aaddff'},
        {id:4,  name:'でんき',  color:'#eeee00'},
        {id:5,  name:'くさ',    color:'#bcd458'},
        {id:6,  name:'こおり',  color:'#00ffff'},
        {id:7,  name:'かくとう', color:'#fa8592'},
        {id:8,  name:'どく',    color:'#9370db'},
        {id:9,  name:'じめん',  color:'#c48c44'},
        {id:10, name:'ひこう',  color:'#8cc4dc'},
        {id:11, name:'エスパー', color:'#ffc0cb'},
        {id:12, name:'むし',    color:'#00ff7f'},
        {id:13, name:'いわ',    color:'#f5deb3'},
        {id:14, name:'ゴースト', color:'#8050aa'},
        {id:15, name:'ドラゴン', color:'#ff9966'},
        {id:16, name:'あく',     color:'#5588bb'},
        {id:17, name:'はがね',   color:'#bbbbbb'},
        {id:18, name:'フェアリー', color:'#ee82ee'}]
}

export interface pokeTypeInterface {
    id: number;
    name: string;
    color: string;
}
