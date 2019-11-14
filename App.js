import React, { Component } from 'react';
//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './Button.css';
import Function from './Function';

  class App extends React.Component {
    constructor(props)
    {
      super(props);
      
        this.state = { 
          personne :
          [ 
                {
                    author: {
                              nom : "Dubois",
                              prenom : "Jeanne",
                            },

                    date :{
                              date_de_naissance : "05/12/1986",
                          },

                    content:"j'ai achete une cravate qui avait des taches de nutella ",
  
                    image: {
                              src: "https://www.les-soins-infirmiers.fr/wp-content/uploads/2018/04/default-avatar-woman.png",
                              alt: "jeanne75"
                           }

                },
                {
                    
                    author : {
                              nom : "Leblanc",
                              prenom : "Martine",
                             },

                    date : {
                          date_de_naissance : "12/06/1990",
                            },

                          content: "Je voudrais une cravate avec des dingos psk jsui un déglingo",
    
                    image: {
                          src: "data:image/png;base64,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",
                          alt: "Martinexx"
                            }
                  },

                  {
                    
                    author : {
                          nom : "Lemarchand",
                          prenom : "Claude",
                            },

                    date : {
                          date_de_naissance : "21/01/1991",
                            },

                          content: "Franchement, honnetement, en toute franchise, à mon humble avis... je sais pas du tout",
  
                    image: {
                          src: "https://cdn-own3dtv.pressidium.com/wp-content/uploads/2018/01/Avatar-6-1.jpg",
                          alt: "cloclo78"
                          }
                    }
          ],
          profil : 0
                  };
      }

      Changepers(id)
      {
        this.setState({ profil : id });
      }

    
    render() {
      return (
      <div>  
        <div>
          <button type="button" className = "button" onClick={( ) => this.Changepers.bind(this)(0)}>JEANNE</button>

          <button type="button" className = "button" onClick={( ) => this.Changepers.bind(this)(1)}>MARTINE</button>

          <button type="button" className = "button" onClick={( ) => this.Changepers.bind(this)(2)}>CLAUDE</button>
        </div>

        <Function function = {this.state.personne[this.state.profil]}/>
        </div>
      );
    }
  }




export default App;
