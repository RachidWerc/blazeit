import { Component, OnInit } from '@angular/core';
import { entries } from '../models/entries';
 
@Component({
  selector: 'app-dev-mo',
  templateUrl: './dev-mo.component.html',
  styleUrls: ['./dev-mo.component.css'],

 
})


export class DevMOComponent implements OnInit {

  

  list:entries[]=[

  {
  
    imgUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    DevName: "Charles D. Cherry",
    role: "Full stack developer",
    rating: 5,
    reviews: 10,
    match_Lvl: "high",
    bar:80,
    wage:100,
    address: "Sunride, FL",
  },

  {
    imgUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    DevName: "Jamie D. Mitchell",
    role: "Flutter developer",
    rating: 5,
    reviews: 18,
    match_Lvl: "medium",
    bar: 50,
    wage:85,
    address: "Richmond, VA",
  },

  {
    imgUrl: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    DevName: "Luis L. Richardson",
    role: "React Native developer",
    rating: 3,
    reviews: 27,
    match_Lvl: "medium",
    bar: 50,
    wage:65,
    address: "Santa Clara, CA",
  },

  {
    imgUrl: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    DevName: "Willian S. Lockhart",
    role: "Full stack JS developer",
    rating: 4,
    reviews: 19,
    match_Lvl: "very high",
    bar: 95,
    wage: 80,
    address: "Sylvester, GA",
  },

  {
    imgUrl: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    DevName: "Jason L. Griffin",
    role: "Flutter developer",
    rating: 3,
    reviews: 27,
    match_Lvl: "very high",
    bar: 95,
    wage:60,
    address: "Ontario, CA",
  },

  {
    imgUrl: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    DevName: "Esther C. Hernandez",
    role: "Flutter developer",
    rating: 3,
    reviews: 6,
    match_Lvl: "medium",
    bar: 50,
    wage:40,
    address: "Hockessin, DE",
  },

  {
    imgUrl: "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    DevName: "Joe J. Goodson",
    role: "Backend developer",
    rating: 4,
    reviews: 15,
    match_Lvl: "medium",
    bar: 50,
    wage:50,
    address: "New Berlin, WI",
  },

  {
    imgUrl: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    DevName: "Jennifer J. Davis",
    role: "Backend developer",
    rating: 3,
    reviews: 6,
    match_Lvl: "very high",
    bar: 95,
    wage:50,
    address: "Davenport, IL",
  },

  {
    imgUrl: "https://images.pexels.com/photos/1627936/pexels-photo-1627936.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    DevName: "Eileen L. Carlson",
    role: "Flutter developer",
    rating: 5,
    reviews: 14,
    match_Lvl: "high",
    bar: 80,
    wage:60,
    address: "Newark, NJ",
  },

  {
    imgUrl: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    DevName: "Felicia G. Draper",
    role: "React Native developer",
    rating: 3,
    reviews: 18,
    match_Lvl: "medium",
    bar: 50,
    wage:90,
    address: "White Plains, NY",
  },

  {
    imgUrl: "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    DevName: "Martha M. Leal",
    role: "Flutter developer",
    rating: 3,
    reviews: 20,
    match_Lvl: "very high",
    bar: 95,
    wage:80,
    address: "Oneonta, AL",
  },

  {
    imgUrl: "https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    DevName: "Judith R. Tong",
    role: "Frontend developer",
    rating: 3,
    reviews: 22,
    match_Lvl: "high",
    bar: 80,
    wage:70,
    address: "Luverne, IA",
  },

  {
    imgUrl: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    DevName: "Christopher M. Madden",
    role: "Frontend developer",
    rating: 5,
    reviews: 8,
    match_Lvl: "medium",
    bar: 50,
    wage:75,
    address: "Tinley Park, IL",
  },

  {
    imgUrl: "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    DevName: "Evelyn S. Lewis",
    role: "React Native developer",
    rating: 4,
    reviews: 4,
    match_Lvl: "high",
    bar: 80,
    wage:20,
    address: "Jackson, MS",
  },

  {
    imgUrl: "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    DevName: "Anthony L. Simon",
    role: "Full stack JS developer",
    rating: 4,
    reviews: 13,
    match_Lvl: "high",
    bar: 80,
    wage:95,
    address: "Phoenix, AZ",
  },

  {
    imgUrl: "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    DevName: "Maria D. Bonetti",
    role: "Frontend developer",
    rating: 3,
    reviews: 27,
    match_Lvl: "high",
    bar: 80,
    wage:100,
    address: "La Center",
  },

  {
    imgUrl: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    DevName: "Joseph M. Hayes",
    role: "Backend developer",
    rating: 4,
    reviews: 9,
    match_Lvl: "medium",
    bar: 50,
    wage:40,
    address: "Indianapolis, IN",
  },

  {
    imgUrl: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    DevName: "Gloria D. Randolph",
    role: "Fullstack developer",
    rating: 3,
    reviews: 27,
    match_Lvl: "medium",
    bar: 50,
    wage:60,
    address: "Clifton Hill, MO",
  },];

  constructor(   ) { 

    
  }
  
  
  ngOnInit(): void {

  }
 

  target(event: KeyboardEvent): HTMLInputElement {
    if (!(event.target instanceof HTMLInputElement)) {
      throw new Error("wrong target");
    }
    return event.target;
  }

}
