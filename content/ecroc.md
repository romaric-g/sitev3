---
title: Ecroc
date: Mai 2019
image: ecroc.jpg
---

Ecroc est un projet réalisé par une équipe de 5 personnes ayant pour but d’automatiser la distribution de nourriture pour son chien. La réalisation de ce projet constitue une de nos notes pour notre baccalauréat STI2D option SIN.

<img src="/projects/ecroc.png" />

<a class="button" target="_blank" href="https://github.com/romaric-g/Ecroc">
    Sources
    <span class="svgstroke">
        <svg xmlns="http://www.w3.org/2000/svg" width="26.113" height="17.296" viewBox="0 0 26.113 17.296"><g id="Icon_feather-code" data-name="Icon feather-code" transform="translate(-2 -7.586)"><path id="Tracé_7" data-name="Tracé 7" d="M24,23.468l7.234-7.234L24,9" transform="translate(-4.121)" fill="none" stroke="#110d2d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path id="Tracé_8" data-name="Tracé 8" d="M10.234,9,3,16.234l7.234,7.234" transform="translate(0)" fill="none" stroke="#110d2d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></svg>
    </span>
</a>

Sa réalisation a nécessité une grande attention au cahier des charges pour que le projet réponde bien aux exigences demandé. Après de nombreuse études (Analyse de l’existant, Réalisation de diagramme, définition du besoin, etc.), nous avons pu commencé à faire une sélection des choix technique qui pourrait être utilisé. 
<br>Pour ma part, ma fonction a été de réaliser le site internet permettant d’avoir accès à notre distributeur de croquette à distance. La solution qui a été choisie pour sa réalisation est PHP ainsi que l’utilisation de SQL. Cela à été pour moi l’occasion de réaliser un premier projet avec cette technologie en laquelle j’avais peu d’expérience.
<br><br>
Le site est composé d’un système d’authentification, d’un panel de gestion de ces chiens ainsi que de nombreux paramètre de configuration. Le propriétaire peut en tant réel voir la consommation de nourriture ses différents chien, changé la quantité de nourriture en fonction des jours et des repas et peut etre alerté à tout moment de cas de problème sur l’appareil.
<br>
Pour que notre produit puisse fonctionner, je me suis aussi occupé en partie de la communication entre le site et un arduino. Pour cela, différents script PHP on été créés et un protocole de communication à été établie entre les 2 parties. Les données renvoyé par le serveur sont renvoyé en json et traité par l’arduino avec une librairie prévue à cette effet.