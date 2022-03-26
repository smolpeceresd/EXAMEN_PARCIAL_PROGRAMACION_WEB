import React, { FC, useEffect, useState } from 'react';
import { cocktailFetcher } from './Logica';
import { Buscador, Cabecera, Cocktails, FootPage } from './Returns';
import { cocktailsAPI, megaInput } from './Types';

export const Padre: FC = ({ children }) => {
    const [nombreCocktail,setCocktail]=useState<string>("");
    const [listCocktail,setListCocktail]=useState<megaInput>({drinks:[]});

    useEffect(()=>{
        const result = async ()=>{
                const listin: megaInput =await cocktailFetcher(nombreCocktail);
                if(listin.drinks.length !== 0)
                setListCocktail(listin);
        }
        result();
    },[nombreCocktail])
    return (
        <>
                <Cabecera key={"Nolonecesita"}/>
                <Buscador key={"Nolonecesita2"} setText={setCocktail}/>
                <Cocktails key={nombreCocktail} list={listCocktail}/>
                <FootPage key={"Nolonecesita3"}/>
        </>
    );
}