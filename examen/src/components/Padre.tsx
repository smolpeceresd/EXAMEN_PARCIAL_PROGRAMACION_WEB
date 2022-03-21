import React, { FC, useEffect, useState } from 'react';
import { cocktailFetcher } from './Logica';
import { Buscador, Cabecera, Cocktails } from './Returns';
import { cocktailsAPI, megaInput } from './Types';

export const Padre: FC = ({ children }) => {
    const [nombreCocktail,setCocktail]=useState<string>("");
    const [listCocktail,setListCocktail]=useState<megaInput>({drinks:[]});

    useEffect(()=>{
        const result = async ()=>{
                const listin: megaInput =await cocktailFetcher(nombreCocktail);
                setListCocktail(listin);
        }
        result();
    },[nombreCocktail])
    return (
        <>
                <Cabecera key={"Nolonecesita"}/>
            <nav>
                <Buscador key={"Nolonecesita2"} setText={setCocktail}/>
            </nav>
            <main>
                <Cocktails key={nombreCocktail} list={listCocktail}/>
            </main>
        </>
    );
}