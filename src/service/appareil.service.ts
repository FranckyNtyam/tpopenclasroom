import { Appareil } from "../models/Appareils";

export class AppareilsService {
   appareilsList: Appareil[] = [

        {
            name: 'Machine à laver',
            description: [
                'volume: 7 litre',
                'Temps de lavage: 2 heures',
                'Consommation: 173KWh/an'
            ],
            isOn: true
        },
        {
            name: 'Télévision',
            description: [
                'Dimension: 40 pouces',
                'Prix: 500 000 FCFA'
            ],
            isOn: true
        },
        {
            name: 'Ordinateur',
            description:[
                'Dimension: 20 pouces',
                'Prix: 300 000 FCFA'
            ],
            isOn: true
        },
        {
            name: 'Téléphone Mobile',
            description:[
                'Dimension: è pouces',
                'Prix: 89 000 FCFA'
            ],
            isOn: false
        }
    ];
}