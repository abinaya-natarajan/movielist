import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader'
import PromoTileWrapper from '../PromoTileWrapper/PromoTileWrapper';
import FilterableList from '../FilterableList/FilterableList';
import './style.css';

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList: [],
            moviesList: [],
            filterOptions: []
        }
    }
    


    componentDidMount() {
        fetch('https://api.tvmaze.com/shows',)
            .then(response => response.json())
            .then(result => {
                var options = [];
                result.forEach(element => {
                    element.genres.forEach(genre => {
                        if(options.indexOf(genre) === -1) {
                            options.push(genre);
                        }
                    });
                });
                this.setState({dataList: result, moviesList: result, filterOptions: options});
            })
    }

     findCommonElement = (array1, array2) => { 
        for(let i = 0; i < array1.length; i++) { 

            for(let j = 0; j < array2.length; j++) { 

                if(array1[i] === array2[j]) {                   
                    return true; 
                } 
            } 
        } 
          
        return false;  
    } 

    handleCallBack = (category) => {
        const { dataList } = this.state;
        if(category.length !== 0) {
            var filteredData = [];

            dataList.forEach(element => {
                if(this.findCommonElement(category, element.genres)) {
                    filteredData.push(element);
                }
            });

            this.setState({ moviesList: filteredData});
        } else {
            this.setState({ moviesList: dataList});
        }
    }


    
    render() {
        const { filterOptions, moviesList } = this.state;
        return (
            <div className="landingPageContainer">
                <SectionHeader title="Movie List"/>
                <div className="landingPageContentWrapper">
                    <FilterableList filterOptions={filterOptions} handleCallBack={this.handleCallBack}/>
                    <PromoTileWrapper  moviesList={moviesList} />
                </div>
            </div>
        );
    }
}


export default LandingPage;