import Card from "./components/card";

function show_cards(data_array) {
    data_array.forEach(element => {
        <Card body={element}/>
    });
}

export default show_cards;