import styled from '@emotion/styled';
import React, { FC, useState } from 'react';
import { cocktailsAPI, megaInput } from './Types';


type inputBuscador = {
    setText: (text: string) => void;
}

type inputList = {
    list: megaInput;
}

export const Cabecera: FC = () => {
    return (
        <header>
            <p>COCTAIL API</p>
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
        <DivBuscador>
            <INPUT_ type="text" placeholder="Shearch your planet" value={text}
                onChange={(e) => distribuir(e.target.value as string)} />
        </DivBuscador>
    )
}

export const Cocktails: FC<inputList> = ({ list }) => {
    return (
        <Container>
            {
                (list.drinks).map((cocktail) => {

                    return (
                        <Cocktail>
                            <Info>
                            <img src={cocktail.strDrinkThumb} width="180" height="180" />
                            <p>{cocktail.strDrink}</p>
                            </Info>
                            <Ingredients>
                                {cocktail.strIngredient1!==null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient1}-Medium.png`} width="180" height="180" />
                                        <p>{cocktail.strIngredient1}</p>
                                    </div>
                                }
                                {cocktail.strIngredient2 !==null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient2}-Medium.png`} width="180" height="180" />
                                        <p>{cocktail.strIngredient2}</p>
                                    </div>
                                }
                                {cocktail.strIngredient3 !==null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient3}-Medium.png`} width="180" height="180" />
                                        <p>{cocktail.strIngredient3}</p>
                                    </div>
                                }
                                {cocktail.strIngredient4 !==null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient4}-Medium.png`} width="180" height="180" />
                                        <p>{cocktail.strIngredient4}</p>
                                    </div>
                                }
                                {cocktail.strIngredient5 !==null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient5}-Medium.png`} width="180" height="180" />
                                        <p>{cocktail.strIngredient5}</p>
                                    </div>
                                }
                                {cocktail.strIngredient6 !==null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient6}-Medium.png`} width="180" height="180" />
                                        <p>{cocktail.strIngredient6}</p>
                                    </div>
                                }
                                {cocktail.strIngredient7 !==null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient7}-Medium.png`} width="180" height="180" />
                                        <p>{cocktail.strIngredient7}</p>
                                    </div>
                                }
                                {cocktail.strIngredient8 !==null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient8}-Medium.png`} width="180" height="180" />
                                        <p>{cocktail.strIngredient8}</p>
                                    </div>
                                }
                                {cocktail.strIngredient9 !==null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient9}-Medium.png`} width="180" height="180" />
                                        <p>{cocktail.strIngredient9}</p>
                                    </div>
                                }
                                {cocktail.strIngredient10 !==null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient10}-Medium.png`} width="180" height="180" />
                                        <p>{cocktail.strIngredient10}</p>
                                    </div>
                                }
                                {cocktail.strIngredient11 !==null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient11}-Medium.png`} width="180" height="180" />
                                        <p>{cocktail.strIngredient11}</p>
                                    </div>
                                }
                                {cocktail.strIngredient12 !==null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient12}-Medium.png`} width="180" height="180" />
                                        <p>{cocktail.strIngredient12}</p>
                                    </div>
                                }
                                {cocktail.strIngredient13 !==null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient13}-Medium.png`} width="180" height="180" />
                                        <p>{cocktail.strIngredient13}</p>
                                    </div>
                                }
                                {cocktail.strIngredient14 !==null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient14}-Medium.png`} width="180" height="180" />
                                        <p>{cocktail.strIngredient14}</p>
                                    </div>
                                }
                                {cocktail.strIngredient15 !==null &&
                                    <div>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient15}-Medium.png`} width="180" height="180" />
                                        <p>{cocktail.strIngredient15}</p>
                                    </div>
                                }
                            </Ingredients>
                        </Cocktail>
                    )
                })
            }

        </Container>
    )
}


//STYLED

const DivBuscador = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: -webkit-fill-available;
justify-content: space-evenly;

`

const Container = styled.div`
    display: flex;
    flex-direction: colum;
    flex-wrap: wrap;
    justify-content: space-around;
    background: black;
`

const INPUT_ = styled.input`

`

const Cocktail = styled.div`
    background: linear-gradient(white, black);

    & p{
        text-align: center; 
        color:white;
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