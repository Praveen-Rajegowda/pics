import React from 'react';
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";


class App extends React.Component {

    state = {images:[]};


     onSearchSubmit = async (term) => {
         console.log("App",this);
       const response= await unsplash.get('search/photos',{
            params: {query :  term}
        });



       this.setState({images : response.data.results})
    }
    render() {
        return (<div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onTest={this.onSearchSubmit} />
             <ImageList imagesList={ this.state.images }/>
        </div>);
    }
}
export default App;