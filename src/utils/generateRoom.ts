const numberRoom = [];

function generateNumberRoom() {
    const numberRamdon = Math.round(Math.random() * 9);

    return numberRamdon;
}

for(let i =0; i < 6; i ++) {

    const roomRandom = generateNumberRoom();
    numberRoom.push(roomRandom)
}

export default numberRoom.toString().replace(/,/g, "")