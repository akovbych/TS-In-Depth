import './Tasks/02';
import './Tasks/03';
import './Tasks/04';
import './Tasks/05';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}
