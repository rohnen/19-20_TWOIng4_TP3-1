import React, {Component} from 'react';
import './Function.css';


class Function extends Component
{	
	constructor(props)
	{
		super(props);
	}

	/*changestyle(id){
		if(backgroundColor=="lightblue")
		{
			backgroundColor=="yellow";
			this.setState({profil: id});
		}
		else 
		{
			backgroundColor="lightblue";
			this.setState({profil: id});
		}
	}*/

	render(){
		//const {date, image, content } = this.props.profilData;
		return(

			<div className="CadreProfil">

				<div className="Image">
				<img src={this.props.function.image.src}/>
				</div>

				<div className="Prenom">
				{this.props.function.author.prenom}
				</div>

				<div className="Nom">
				{this.props.function.author.nom} 
				</div>
			
				<div className="Date_de_naissance">
				{this.props.function.date.date_de_naissance}
				</div>

			    <div className="CSButton">
					<button>Change style</button>
				</div>

				<div className="content">
					{this.props.function.content}
				</div>
			</div>
			)
	}

}
export default Function;