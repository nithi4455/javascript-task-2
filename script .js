// script.js

document.addEventListener("DOMContentLoaded", () => {
    let car = {
        make: "Toyota",
        model: "Corolla",
        year: 2021,
        start: function() {
            console.log("The car has started.");
        }
    };

    function displayPrototypeChain(obj, elementId) {
        let outputDiv = document.getElementById(elementId);
        let proto = Object.getPrototypeOf(obj);
        let level = 0;

        while (proto) {
            let protoDiv = document.createElement('div');
            protoDiv.className = 'prototype';
            
            let title = document.createElement('h3');
            title.innerText = `Prototype Level ${level}`;
            protoDiv.appendChild(title);
            
            for (let key in proto) {
                if (proto.hasOwnProperty(key)) {
                    let propDiv = document.createElement('div');
                    propDiv.className = 'property';
                    propDiv.innerText = `${key}: ${proto[key]}`;
                    protoDiv.appendChild(propDiv);
                }
            }

            outputDiv.appendChild(protoDiv);
            proto = Object.getPrototypeOf(proto);
            level++;
        }
    }

    displayPrototypeChain(car, 'prototype-chain');
});
