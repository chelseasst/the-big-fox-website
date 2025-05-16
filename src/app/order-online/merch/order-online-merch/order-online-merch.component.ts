import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { itemDetails } from 'src/app/types/itemDetails';
import { OrderOnlineService } from '../../order-online.service';

@Component({
  selector: 'app-order-online-merch',
  templateUrl: './order-online-merch.component.html',
  styleUrls: ['./order-online-merch.component.css']
})
export class OrderOnlineMerchComponent implements OnInit {
  isDesktop: boolean = false;
  items: itemDetails[] = [
    {
      id: 'black-tshirt',
      title: 'Our Fox -  Tee-Shirt',
      description: 'Set of 6 Chocolate Chips Cookies',
      excessiveDescription:
        'Our signiture cookies ar emade in the early hours of the morning, when our baker is still asleep, but knowing he makes the best cookies in town, he is waking up early every morning to prepare the ingredients and mix this portion of sweet magic. In the cookies is inserted the best Belgium milk chocolate, not toocrispy, also but not melting, I told you - magic.',
      ingredients: 'favour, sugar, Belgium milk chocolate, heat',
      price: 25,
      link: 'details/tshirt-black',
      images: ['../assets/order-online/merch/t-black-simple.JPG', '../assets/order-online/merch/t-black-model.JPG'],
    },
    {
      id: '7',
      title: 'Cinamon Rolls Box',
      description: 'Set of 6 Crispy Sandwiches',
      excessiveDescription:
        'Our signiture cookies ar emade in the early hours of the morning, when our baker is still asleep, but knowing he makes the best cookies in town, he is waking up early every morning to prepare the ingredients and mix this portion of sweet magic. In the cookies is inserted the best Belgium milk chocolate, not toocrispy, also but not melting, I told you - magic.',
      ingredients: 'grain bread, mozzarella, , tomato, cucumber, salad',
      price: 17,
      pieces: 4,
      link: 'details/tshirt-white',
      images: ['../assets/order-online/merch/t-white-simple.JPG', '../assets/order-online/merch/t-white-model.JPG'],
    },
    {
      id: '8',
      title: 'Cup',
      description: 'Set of 6 Crispy Sandwiches',
      excessiveDescription:
        'Our signiture cookies ar emade in the early hours of the morning, when our baker is still asleep, but knowing he makes the best cookies in town, he is waking up early every morning to prepare the ingredients and mix this portion of sweet magic. In the cookies is inserted the best Belgium milk chocolate, not toocrispy, also but not melting, I told you - magic.',
      ingredients: 'grain bread, mozzarella, , tomato, cucumber, salad',
      price: 18,
      pieces: 6,
      link: 'details/cup-black',
      images: ['../assets/order-online/merch/cup-black.JPG', '../assets/order-online/merch/cup-white.JPG', '../assets/order-online/merch/cup-black.JPG'],
    },
    {
      id: '8',
      title: 'Our Tote Bag',
      description: 'Set of 6 Crispy Sandwiches',
      excessiveDescription:
        'Our signiture cookies ar emade in the early hours of the morning, when our baker is still asleep, but knowing he makes the best cookies in town, he is waking up early every morning to prepare the ingredients and mix this portion of sweet magic. In the cookies is inserted the best Belgium milk chocolate, not toocrispy, also but not melting, I told you - magic.',
      ingredients: 'grain bread, mozzarella, , tomato, cucumber, salad',
      price: 18,
      pieces: 6,
      link: 'details/tote-bag',
      images: ['../assets/order-online/merch/tote-blue.JPG'],
    },
    {
      id: '9',
      title: 'Our Design Pattern',
      description: 'T-Shirts/Hoodie/Tote bags',
      excessiveDescription:
        'Our signiture cookies ar emade in the early hours of the morning, when our baker is still asleep, but knowing he makes the best cookies in town, he is waking up early every morning to prepare the ingredients and mix this portion of sweet magic. In the cookies is inserted the best Belgium milk chocolate, not toocrispy, also but not melting, I told you - magic.',
      price: 18,
      link: 'details/merch',
      images: ['../assets/order-online/merch/tote-red.JPG'],
    },
    {
      id: '9',
      title: 'Our Design Pattern',
      description: 'T-Shirts/Hoodie/Tote bags',
      excessiveDescription:
        'Our signiture cookies ar emade in the early hours of the morning, when our baker is still asleep, but knowing he makes the best cookies in town, he is waking up early every morning to prepare the ingredients and mix this portion of sweet magic. In the cookies is inserted the best Belgium milk chocolate, not toocrispy, also but not melting, I told you - magic.',
      price: 18,
      link: 'details/merch',
      images: ['../assets/order-online/merch/tote-sand.JPG'],
    },
  ];
  constructor(private breakpointObserver: BreakpointObserver, private orderOnlineService:OrderOnlineService) { }
  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((result) => {
        this.isDesktop = !result.matches;
      });

    //fetch data TODO
  }
}
