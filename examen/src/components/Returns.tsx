import styled from '@emotion/styled';
import { info } from 'console';
import React, { FC, useEffect, useState } from 'react';
import "../layout/style.css";
import fondo from "./img/logo.png"
import boton from "./img/Boton.png"
import { cocktailsAPI, megaInput } from './Types';

enum VISTAS {
    DETALLE = "detalle",
    ARRAY = "array"
}

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
                <INPUT_ type="text" placeholder="Shearch your cocktail" value={text}
                    onChange={(e) => distribuir(e.target.value as string)} />
            </DivBuscador>
        </nav>
    )
}

export const Cocktails: FC<inputList> = ({ list }) => {
    const [vista, setVista] = useState<VISTAS>(VISTAS.ARRAY);
    const [info, setInfo] = useState<cocktailsAPI | undefined>(undefined);
    useEffect(() => {
        setInfo(undefined);
    }, [list])
    return (
        <main>
            <ContainerList>
                {info === undefined &&
                    <List>
                        {list.drinks.map((cocktail) => {
                            return (
                                <a className="boxes" href="javascript:;" onClick={() => setInfo(cocktail)}>
                                    <Cocktail>
                                        <img className="imgCocktail" src={cocktail.strDrinkThumb} height="120px" width="-webkit-fill-available" />
                                        <div>
                                            <p>{cocktail.strDrink}</p>
                                        </div>
                                    </Cocktail>
                                </a>
                            )
                        })}
                    </List>
                }
                {info !== undefined &&
                    <>
                        <Info>
                            {list.drinks.indexOf(info as cocktailsAPI) !== 0 &&
                            <a className="boton1" href="javascript:;" onClick={() => setInfo(list.drinks[list.drinks.indexOf(info as cocktailsAPI) - 1])}>
                                <img src={boton} height="120px" width="-webkit-fill-available" />
                            </a>
                            }
                            <Foto>
                                <img className="imgCocktail2" src={(info as cocktailsAPI).strDrinkThumb} height="100%" width="100%" />
                                <p>{info.strDrink}</p>
                            </Foto>
                            <Ingredients>
                                {(info as cocktailsAPI).strIngredient1 !== null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailsAPI).strIngredient1}-Medium.png`} width="180px" height="180px" />
                                        <p>{(info as cocktailsAPI).strIngredient1}</p>
                                    </div>}
                                {(info as cocktailsAPI).strIngredient2 !== null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailsAPI).strIngredient2}-Medium.png`} width="180px" height="180px" />
                                        <p>{(info as cocktailsAPI).strIngredient2}</p>
                                    </div>}
                                {(info as cocktailsAPI).strIngredient3 !== null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailsAPI).strIngredient3}-Medium.png`} width="180px" height="180px" />
                                        <p>{(info as cocktailsAPI).strIngredient3}</p>
                                    </div>}
                                {(info as cocktailsAPI).strIngredient4 !== null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailsAPI).strIngredient4}-Medium.png`} width="180px" height="180px" />
                                        <p>{(info as cocktailsAPI).strIngredient4}</p>
                                    </div>}
                                {(info as cocktailsAPI).strIngredient5 !== null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailsAPI).strIngredient5}-Medium.png`} width="180px" height="180px" />
                                        <p>{(info as cocktailsAPI).strIngredient5}</p>
                                    </div>}
                                {(info as cocktailsAPI).strIngredient6 !== null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailsAPI).strIngredient6}-Medium.png`} width="180px" height="180px" />
                                        <p>{(info as cocktailsAPI).strIngredient6}</p>
                                    </div>}
                                {(info as cocktailsAPI).strIngredient7 !== null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailsAPI).strIngredient7}-Medium.png`} width="180px" height="180px" />
                                        <p>{(info as cocktailsAPI).strIngredient7}</p>
                                    </div>}
                                {(info as cocktailsAPI).strIngredient8 !== null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailsAPI).strIngredient8}-Medium.png`} width="180px" height="180px" />
                                        <p>{(info as cocktailsAPI).strIngredient8}</p>
                                    </div>}
                                {(info as cocktailsAPI).strIngredient9 !== null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailsAPI).strIngredient9}-Medium.png`} width="180px" height="180px" />
                                        <p>{(info as cocktailsAPI).strIngredient9}</p>
                                    </div>}
                                {(info as cocktailsAPI).strIngredient10 !== null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailsAPI).strIngredient10}-Medium.png`} width="180px" height="180px" />
                                        <p>{(info as cocktailsAPI).strIngredient10}</p>
                                    </div>}
                                {(info as cocktailsAPI).strIngredient11 !== null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailsAPI).strIngredient11}-Medium.png`} width="180px" height="180px" />
                                        <p>{(info as cocktailsAPI).strIngredient11}</p>
                                    </div>}
                                {(info as cocktailsAPI).strIngredient12 !== null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailsAPI).strIngredient12}-Medium.png`} width="180px" height="180px" />
                                        <p>{(info as cocktailsAPI).strIngredient12}</p>
                                    </div>}
                                {(info as cocktailsAPI).strIngredient13 !== null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailsAPI).strIngredient13}-Medium.png`} width="180px" height="180px" />
                                        <p>{(info as cocktailsAPI).strIngredient13}</p>
                                    </div>}
                                {(info as cocktailsAPI).strIngredient14 !== null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailsAPI).strIngredient14}-Medium.png`} width="180px" height="180px" />
                                        <p>{(info as cocktailsAPI).strIngredient14}</p>
                                    </div>}
                                {(info as cocktailsAPI).strIngredient15 !== null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailsAPI).strIngredient15}-Medium.png`} width="180px" height="180px" />
                                        <p>{(info as cocktailsAPI).strIngredient15}</p>
                                    </div>}
                            </Ingredients>

                            {list.drinks.indexOf(info as cocktailsAPI) !== list.drinks.length-1 &&
                                <a className="boton2" href="javascript:;"
                                    onClick={() => setInfo(list.drinks[list.drinks.indexOf(info as cocktailsAPI) + 1])}>
                                    <img src={boton} height="120px" width="-webkit-fill-available" />
                                </a>
                            }
                        </Info>
                    </>
                }
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
    width: -webkit-fill-available;
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
background: linear-gradient(180deg, #615f5f 20%, #BD9F61 100%);
width: 136px;
margin: 5px;
border: 1px solid;
border-radius: 20px;
-webkit-border-radius: 20px;
& div{
    display: flex;
    justify-content:center;
    & p{
    text-align: center; 
    color: white;
    font-style: italic;
    }
}

`
const ContinerInfo = styled.div`
display: flex;
background: #7ab5a8;
height: -webkit-fill-available;
align-items: center;
flex-direction: column;
width: 50%;
padding: 10px;
`

const Info = styled.div`
display: flex;
height: -webkit-fill-available;
justify-content: center;
`
const Foto = styled.div`
padding: 30px;
width: 25%;
height: -webkit-fill-available;
& p{
    color: white;
    text-align: center;
}
`


const Ingredients = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: -webkit-fill-available;
    width: 50%;
    overflow-y: auto;
    padding: 9px;
    & div p{
        text-align: center;
        color:white;
    }
`