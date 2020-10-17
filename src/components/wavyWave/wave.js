// Hilfsfunktion die beim ausführen eine Zahl zwischen min und max ausgibt und mit deb Objekt {floor = false} auch Kommazahlen ausgibt. Math.floor() rundet auf eine ganze Zahl ab
function getRandomNumberRange(min, max, { floor = true } = {}) {
  // Erstmal wird geprüft ob floor "wahr" ist
  if (floor) {
    // falls ja, wird eine zufällige Zahl (Math.random()) zwischen 0 und >1 generiert, welche dann mit der Differenz aus max und min multipliziert wird. Am Ende wird dann der Minimalwert nochmals addiert und das ganze mit Math.floor() gerundet um zum finalen Ergebnis zu kommen.
    return Math.floor(Math.random() * (max - min) + min);
  } else {
    // ansonsten passiert das selbe, nur ohne Math.floor(). das return gibt diese Zahl nach dem Ausführen der Funktion zurück
    return Math.random() * (max - min) + min;
  }
}
// 15.1 Hilfsfunktion für den erhalt eines zufälligen RGB-Farbwerts (z.b: rgb(120,0,137))
function getRandomRGB() {
  // 15.2 Erstmal wird jede Farbe (r/g/b) in eine Variable gespeichert und eine Zahl zugewiesen. In diesem Fall wollte ich einen Lila-Farbton, dieser befindet sich ungefähr zwischen rgb(100-150,0,100-150) Artikel dazu => [https://www.pluralsight.com/blog/tutorials/understanding-hexadecimal-colors-simple#:~:text=Hex%20color%20codes%20start%20with,0%20to%20255%20in%20RGB).]
  const r = getRandomNumberRange(100, 150); // RED
  const g = 0; // GREEN
  const b = getRandomNumberRange(100, 150); //BLUE
  // 15.3 zurückgegeben wird nun ein String in Backticks (Template Literals) in welchem nun die oben gespeicherten Variablen r, g und b eingesetzt werden. Mit ${} kann man innerhalb von Strings Variablen und Funktionen nutzen.
  return `rgb(${r},${g},${b})`;
}
// Hilfsfunktion mit der in Zeile 81 die Farbe der Striche verändert wird
function changeColorOf(className) {
  // 17.3.1 erstmal alle Elemente auswählen und in die Variable eleToChange stecken
  const eleToChange = document.getElementsByClassName(className);
  // 17.3.2 Da eleToChange ein Array mit den 40 Strichen ist, wenden wir nun Array.forEach() auf eleToChange an.
  eleToChange.forEach((element) => {
    //17.3.3 ... und ändern bei jedem Element die Hintergrundfarbe mit der Funktion getRandomRGB()
    element.style.backgroundColor = getRandomRGB();
  });
}

// 14.1 diese Funktion wird zur initialen Erstellung des Visualizers genutzt (ein einzelnes Element in dem for-Loop wie in ZEILE 57) und später für den Button.onclick(), wobei dort die Eingabe "elem" ein Array ist (wie in ZEILE 71)
function changeHeightOf(elem) {
  //14.2 Erstmal checken ob die property namens "elem" ein String ist. Damit kann ich davon ausgehen, dass ein Klassennamen angegeben wird (ZEILE 71)
  if (typeof elem === "string") {
    // 14.2.1 Falls es ein String ist, wählen wir damit alle Linien mit der Funktion "documents.getElementsByClassName("eq-line")" aus (Eingabe aus Zeile 71) und speichern das ganze in der Variable elemList
    const elemList = document.getElementsByClassName(elem);
    // 14.2.2 Auf dieses Array wird nun ein .forEach angewendet, was ähnlich der for-Schleife funktioniert und jedem Element im Array (elem im scope von .forEach) eine eigene zufällige Höhe zuweist.
    elemList.forEach((elem) => {
      // 14.2.3 Ziel ist es sowas wie (elem.style.height = "77vh") zu erhalten. Damit die zufällige Nummer in diesen String eingesetzt werden kann, müssen hier Template Literals mit Backticks angewendet werden [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals] Die Funktion "getRandomNumberRange()" wird in Zeile 1 beschrieben
      elem.style.height = `${getRandomNumberRange(5, 30, { floor: false })}vh`;
    });
    //14.3 Falls es kein String ist, werden diese Zeilen genutzt
  } else {
    // 14.3.1 Hier wird die zufällige Höhe einem einzelnen Element zugeordnet (Wie in ZEILE 62)
    elem.style.height = `${getRandomNumberRange(5, 30, { floor: false })}vh`;
  }
}

// !6. Ich erstelle eine Funktion mit dem Namen createWaves, diese wird exportiert, dass sie in der wave.stories.js in ZEILE 4. importiert werden kann
export function createWaves() {
  //7. Hier nun die Vorgehensweise ohne die Hilfsfunktion createElement()
  // Als erstes erstelle ich einen Container den ich befüllen kann
  const container = document.createElement("div");

  // 8. Dieser bekommmt ne Klasse namens "waveContainer"
  container.className = "waveContainer";
  // 9. Dann noch ein Container, in den die Linien kommen
  const waveBox = document.createElement("div");
  // 10. Mit der Klasse "waveBox"
  waveBox.className = "waveBox";
  // 11. Nun erstelle ich 40 Linien mit einem for-Loop
  // Die Variable i ist der Index, dieser fängt bei 0 an und geht bis 39 = 40 Elemente
  for (let i = 0; i < 40; i++) {
    //12. Erstmal erstelle ich eine Variable mit dem Namen "line" und sage, dass es ein Div-Element ist
    const line = document.createElement("div");
    // 13. Diese erstellte "div" bekommt nun die Klasse "eq-line"
    line.className = "eq-line";
    // 14. Hier wende ich nun die Funktion "changeHeithOf()" auf die Linie an, damit diese Linie eine zufällige Höhe bekommt. Die Funktion ist in Zeile 24 beschrieben (cmd+click auf den Funktionsnamen unten bringt euch direkt dorthin)
    changeHeightOf(line);
    // 15. Im nächsten Schritt werden die Linien noch mit einer Funktion eingefärbt die einen zufälligen RGB Farbwert zurückgibt (ZEILE 9)
    line.style.backgroundColor = getRandomRGB();
    //16. Am Ende fügen wir diese eine Linie nun der waveBox-Div hinzu und der LOOP fängt von vorne an
    waveBox.append(line);
  }

  // 17. Um die Farben auf Knopfdruck ändern zu können speichern wir eine Button-Element in der Variable colorChanger
  const colorChanger = document.createElement("button");
  //  17.1 Diese bekommt die Klasse "colorChanger"
  colorChanger.className = "colorChanger";
  // 17.2 Und einen Text mit "Change Color"
  colorChanger.innerText = "Change Color";
  // 17.3 Dann weißen wir noch die .onclick Funktion hinzu, diese ist extern in der Funktion changeColorOf() abgespeichert (ZEILE 22)
  colorChanger.onclick = () => changeColorOf("eq-line");

  // 18. Und noch einen Knopf um die einzelnen Zeilen in der Höhe verändern zu können
  const heightChanger = document.createElement("button");
  //18.1 mit der Klasse "heightChanger"
  heightChanger.className = "heightChanger";
  // 18.2 Und dem Text "Change Height"
  heightChanger.innerText = "Change Height";
  // 18.3 Und der .onclick-Funktion um die Höhe der Linien mit der Klasse "eq-line" zu ändern.
  heightChanger.onclick = () => changeHeightOf("eq-line");

  // 19. Nun werden die Linien und die zwei Buttons noch in den äußersten Container geworfen
  container.append(waveBox, colorChanger, heightChanger);
  // 20. Und das ganze über ein return zurückgegeben, wenn die Funktion createWaves() ausgeführt wird.
  return container;
}
