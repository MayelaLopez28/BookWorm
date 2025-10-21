import React from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";

const Login: React.FC=()=>{
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding">
                <h1>Pagina de inicio de sesion</h1>
            </IonContent>
        </IonPage>
    );
};

export default Login;