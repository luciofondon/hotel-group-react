import React, { Component } from 'react';
//import './resources/menu.scss';
import { TieredMenu } from 'primereact/tieredmenu';

class Menu extends Component {

    state = {
        
    }
  
    render(){

        
        const items = [
            {
            label:'File',
            icon:'pi pi-fw pi-file',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-plus',
                    items:[
                        {
                        label:'Bookmark',
                        icon:'pi pi-fw pi-bookmark'
                        },
                        {
                        label:'Video',
                        icon:'pi pi-fw pi-video'
                        },
        
                    ]
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-trash'
                },
                {
                    separator:true
                },
                {
                    label:'Export',
                    icon:'pi pi-fw pi-external-link'
                }
            ]
        }
            
        ];
        return(
            <TieredMenu 
                model={items}
            />
            
        )
    }
}

export default Menu;
