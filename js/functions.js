function customClass(c) {
    switch (c % 4) {
        case 1:
            return "toRight";
        case 2:
            return "toTopOnRightSide";
        case 3:
            return "toLeft";
        default:
            return "toTopOnLeftSide";
    }
}

function hiddenClass(c) {
    switch (c % 4) {
        case 1:
            return "hiddenWidth";
        case 2:
            return "hiddenHeight";
        case 3:
            return "hiddenWidth";
        default:
            return "hiddenHeight";
    }
}

function start() {
    return setInterval(() => {
        const myNewNode = document.createElement("div");
        myNewNode.classList.add("box");
        myNewNode.classList.add(customClass(i));
        myNewNode.classList.add(hiddenClass(i));

        root.prepend(myNewNode);

        setTimeout(() => {
            document.querySelector(`.${customClass(i)}`).classList.remove(hiddenClass(i));
        }, 0);

        i++;
    }, 1000);
}

function onClickStartStopButton() {
    startStopButtonStartState ? interval = start() : clearInterval(interval);
    startStopButtonStartState = !startStopButtonStartState;
    setStartStopButtonProps();
}

function setStartStopButtonProps() {
    if (startStopButtonStartState) {
        startStop.classList.remove("btn-danger");
        startStop.classList.add("btn-success");
    } else {
        startStop.classList.remove("btn-success");
        startStop.classList.add("btn-danger");
    }
    startStop.innerHTML = startStopButtonStartState ? "Start" : "Stop";
}
