"use strict";
/**
 *  EXO : 
 *  faire un console log du tableau de tab.json trié par notre 
 *  fonction de tri.
 */
fetch("tab.json").then(res=>{
    if(res.ok){
        res.json().then(data=>{
            tri(data).then(message=>{
                console.log(message, data);
            })
            .catch(err=>console.error(err))
        })
        .catch(err=>console.error(err))
    }
})
/**
 * Quand on utilise les promesses, on peut vite se retrouver dans ce qu'on appelle
 * les callback hell.
 * Ces enfers des callbacks, représente ces fois où l'on a des callbacks, 
 * dans des callbacks, dans callbacks et ainsi de suite.
 * Si cela ne change pas le fonctionnement du code, cela peut rendre sa visibilité
 * difficile.
 * 
 * C'est pour cela que JS implémente les mots clefs "async" et "await".
 * Le mot clef "async" se place devant la déclaration d'une fonction qui aura 
 * pour rôle de gérer des promesses.
 * Le mot clef "await" se place devant l'appel d'une fonction retournant une promesse.
 * Il indique que le code doit attendre le résultat de la promesse.
 * !"await" ne peut être utilisé que dans une fonction "async".
 */
async function exemple(){
    let data;
    let resp = await fetch("tab.json");
    if(resp.ok){
        /**
         * await ne gérant pas le .catch(), on peut utiliser un simple 
         * try catch finally pour remplacer cela.
         */
        try{
            data = await resp.json();
            let message = await tri(data);
            console.log(message);
        }
        catch(err){
            console.error(err);
        }
        finally{
            console.log(data);
        }
    }
    // console.log(resp);
}
exemple();

// Avec notre burger, on s'était retrouvé avec un bon gros callback hell, corrigeons cela :
async function burger()
{
    console.log(await pain2());
    console.log(await sauce2());
    console.log(await viande2());
    console.log(await salade2());
    console.log("Mon burger est terminé");
}

// Fonctions du cours et exercice précédent :

function tri(tab){
    return new Promise((resolve, reject)=>{
        tab.sort((a,b)=>{
            if(typeof(a) !== typeof(b)){
                reject("Tous les éléments du tableau ne sont pas de même type.");
            }
            return a-b;
        })
        resolve("Le tableau a été correctement trié");
    });
}
function pain2()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Le pain est grillé et placé");
        }, 1000)}
    );
}
function sauce2()
{
    return new Promise((resolve)=>{
        resolve("La sauce est versé");
    });
}
function viande2()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("La viande est cuite et placé");
        }, 3000)}
    );
}
function salade2()
{
    return new Promise((resolve)=>{
        resolve("la salade est placé");
    });
}