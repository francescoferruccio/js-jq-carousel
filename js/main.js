// ricreo lo slider come fatto questa mattina (o da zero, o partendo dall’html [ref sempre mio repo su github]);
// faccio funzionare il tracciamento dei pallini anche in prev (stamattina lo abbiam fatto solo in next);
// creo anche la possibilità di poter navigare cliccando anche sui pallini (quindi se clicco sul pallino 3, l’img vista è la 3 e il pallino 3 rimane rosso);
// cerco di fare un refactoring del mio codice per renderlo il più chiaro, lineare, mantenibile e secco possibile (dobbiamo iniziare a farlo, e quindi prima del bonus).

$(document).ready(function() {

  // al click sull'icona next eseguo la funzione nextImg
  $(".next i").click(nextImg);
  // al click sull'icona prev eseguo la funzione prevImg
  $(".prev i").click(prevImg);
  // al click sui pallini esegue la funzine changeImg
  $(".nav i").click(changeImg);

  // creo la funzione nextImg che scorre le immagini del carousel
  function nextImg() {
    // seleziono l'immagine con classe active, quindi quella attualmente visibile
    var imgActive = $(".images img.active");
    // tolgo la classe "active" all'elemento selezionato
    imgActive.removeClass("active");

    // applico la stessa logica anche per i pallini di navigazione
    var circleActive = $(".nav i.active");
    circleActive.removeClass("active");

    // controllo se l'immagine selezionata è l'ultima
    if(imgActive.hasClass("last")) {
      // se è l'ultima aggiungo la classe active alla prima img
      $(".images img.first").addClass("active");
      // faccio la stessa cosa con i pallini di navigazione
      $(".nav i.first").addClass("active");
    } else {
      // altrimenti assegno la classe active alla prossima img
      imgActive.next().addClass("active");
      circleActive.next().addClass("active");
    }
  }

  // applico la stessa logica ma invertita per la funzione prevImg
  function prevImg() {
    // seleziono l'immagine con classe active
    var imgActive = $(".images img.active");
    // tolgo la classe "active" all'elemento selezionato
    imgActive.removeClass("active");
    var circleActive = $(".nav i.active");
    circleActive.removeClass("active");

    // controllo se l'immagine selezionata è la prima
    if(imgActive.hasClass("first")) {
      // se è la prima aggiungo la classe active all'ultima img
      $(".images img.last").addClass("active");
      $(".nav i.last").addClass("active");
    } else {
      // altrimenti assegno la classe active alla precedent img
      imgActive.prev().addClass("active");
      circleActive.prev().addClass("active");
    }
  }

  // creo una funzione che al click sui pallini mi cambia l'immagine
  function changeImg() {
    // mi salvo in una variabile l'indice del pallino cliccato
    var index = $(this).index();

    // tolgo la classe "active" all'img e al pallino
    var imgActive = $(".images img.active");
    imgActive.removeClass("active");
    var circleActive = $(".nav i.active");
    circleActive.removeClass("active");

    // salvo il riferimento all'img e del pallino con lo stesso indice dell'elemento su cui ho cliccato e gli aggiungo la classe "active"
    imgActive = $(".images img").get(index);
    $(imgActive).addClass("active");

    circleActive = $(".nav i").get(index);
    $(circleActive).addClass("active");
  }




});
