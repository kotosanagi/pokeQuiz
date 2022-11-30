
export default function pokeType(): pokeTypeInterface[] {
    return [
        {id:1, name:'ノーマル'},
        {id:2, name:'ほのお'},
        {id:3, name:'みず'},
        {id:4, name:'でんき'},
        {id:5, name:'くさ'},
        {id:6, name:'こおり'},
        {id:7, name:'かくとう'},
        {id:8, name:'どく'},
        {id:9, name:'じめん'},
        {id:10, name:'ひこう'},
        {id:11, name:'エスパー'},
        {id:12, name:'むし'},
        {id:13, name:'いわ'},
        {id:14, name:'ゴースト'},
        {id:15, name:'ドラゴン'},
        {id:16, name:'あく'},
        {id:17, name:'はがね'},
        {id:18, name:'フェアリー'}]
}

export interface pokeTypeInterface {
    id: number;
    name: string;
}
