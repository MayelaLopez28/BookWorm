import React, {useState} from 'react';
import{searchGoogleBooks} from "../services/google_books_service";
import{Book} from "../models/book.model";
import{IonContent,IonHeader,IonPage,IonTitle,IonLabel,IonToolbar,IonSearchbar,IonList,IonItem,IonButton,IonIcon} from "@ionic/react";
import{search} from 'ionicons/icons';
import './Home.css';

const Home: React.FC=()=>{
    const [searchResults, setSearchResults]= useState<Book[]>([]);
    const [searchTerm, setSearchTerm]=useState('');

    const handleSearch=async ()=>{
        if(searchTerm.trim() === ''){
            setSearchResults([]);
            return;
        }

        const googleResults=await searchGoogleBooks(searchTerm);

        setSearchResults(googleResults);
    };

    return(
        <IonPage>
            <IonHeader className="header-bg">
                <IonToolbar color="transparent">
                    <IonTitle style={{color: '#FFDCE8'}}>BookWorm Search</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className="content-bg">
                <div id="search-container">
                    <IonSearchbar
                        value={searchTerm}
                        onIonChange={(e) => setSearchTerm(e.detail.value!)}
                        placeholder="Search for books..."
                        className="custom-search-bar"
                    />

                    <IonButton expand="block" onClick={handleSearch} className="search-button">
                        <IonIcon slot="icon-only" icon={search}/>
                    </IonButton>
                </div>

                <IonList className="result-list">
                    {searchResults.length === 0 && searchTerm !== ''?(
                        <IonItem lines="none" className="item-bg">
                            <IonLabel color="light">No results found for "{searchTerm}" </IonLabel>
                        </IonItem>
                    ):(
                        searchResults.map((book)=>(
                            <IonItem key={book.id} className="item-bg" detail button>
                                <img src={book.coverImageUrl|| 'placeholder.png'} alt={book.title} style={{width:'40px',marginRight:'10px'}}/>
                                <IonLabel color="light">
                                    <h2>{book.title}</h2>
                                    <p>{book.authors.join(', ')}</p>
                                </IonLabel>
                            </IonItem>
                        ))
                    )}
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Home;