import React, { Component } from 'react'
import Tour from '../Tour';
import "./tourlist.scss";
import {tourData} from "../../tourData";
export default class TourList extends Component{
    state = {
        tours: tourData
    };
    removeTour = id => {
       //console.log(id);
       //alert(id);
       const {tours} = this.state;
       const sortedTours = tours.filter(tour => id!==tour.id);
       this.setState({
           tours: sortedTours
       })
    };
    render() {
        const { tours }=this.state;
        console.log(this.state.tours);
        return (
            <section className="tourlist">
               {tours.map(tour =>(
                   <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
               ))}
            </section>
        )
    }
}