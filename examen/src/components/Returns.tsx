import styled from '@emotion/styled';
import React, { FC, useEffect, useState } from 'react';
import "../layout/style.css";
import fondo from "./img/logo.png"
import { cocktailsAPI, megaInput } from './Types';


type inputBuscador = {
    setText: (text: string) => void;
}

type inputList = {
    list: megaInput;
}

export const Cabecera: FC = () => {
    return (
        <header className="Cabecera" >
            <img src={fondo} />
        </header>
    )
}

export const Buscador: FC<inputBuscador> = ({ setText }) => {
    const [text, setTextin] = useState<string>("");
    const distribuir = (texto: string) => {
        setTextin(texto);
        setText(texto)
    }
    return (
        <nav>
            <DivBuscador>
                <INPUT_ type="text" placeholder="Shearch your planet" value={text}
                    onChange={(e) => distribuir(e.target.value as string)} />
            </DivBuscador>
        </nav>
    )
}

export const Cocktails: FC<inputList> = ({ list }) => {
    const [index, setIndex] = useState<number>(0);
    useEffect(() => {
        setIndex(-1);
    }, [list])
    return (
        <main>
            <ContainerList>
                <List>
                    {list.drinks.map((cocktail) => {
                        return (
                            <Cocktail>
                                <img src={cocktail.strDrinkThumb} height="120px" width="-webkit-fill-available" />
                                <div>
                                    <p>{cocktail.strDrink}</p>
                                </div>
                            </Cocktail>
                        )
                    })}
                </List>
            </ContainerList>
        </main>
    )
}

export const FootPage: FC = () => {
    return (
        <footer>
            <p>🍸🥃<b>Created by Santiago Molpeceres Díaz</b>🥃🍸</p>
        </footer>
    )
}


//STYLED

const Cabecita = styled.div`



`

const DivBuscador = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height:98px;;
justify-content: space-evenly;
background: linear-gradient(360deg, rgba(52,50,51,1) 20%, rgba(90,80,64,1) 40%, rgba(223,186,109,1) 100%);

`
const INPUT_ = styled.input`
height: 46%;
    width: 524px;
    text-align: center;
    border-radius: 50px;
    -webkit-border-radius: 50px;
    
`

const ContainerList = styled.div`
    display: block;
    background-color: #343233;
    height: -webkit-fill-available;
    width: 50%;
    padding: 10px;
`
const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: -webkit-fill-available;
    overflow-y: auto;
    padding: 9px;
`


const Cocktail = styled.div`
display: flex;
flex-direction: column;
background: linear-gradient(180deg, rgba(169,169,169,1) 20%, rgba(255,255,255,1) 100%);
width: 136px;
margin: 5px;
& p{
    text-align: center; 
    color:white;
}
& div{
    display: flex;
    justify-content:center;
}

`
const Info = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Ingredients = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-end;
`