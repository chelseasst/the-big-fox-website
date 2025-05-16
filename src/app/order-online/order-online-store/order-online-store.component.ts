import { Component } from '@angular/core';
import { itemDetails } from 'src/app/types/itemDetails';
import { OrderOnlineService } from '../order-online.service';

@Component({
  selector: 'app-order-online-store',
  templateUrl: './order-online-store.component.html',
  styleUrls: ['./order-online-store.component.css'],
})
export class OrderOnlineStoreComponent {
  constructor(private orderOnlineService: OrderOnlineService) { }
  getItems(){
    //TODO fetch data items
  }
  items: itemDetails[] = [
    {
      id: 'cookie-box',
      title: 'Picnic Cookies Box',
      description: 'Set of 6 Chocolate Chips Cookies',
      excessiveDescription:
        'Our signiture cookies ar emade in the early hours of the morning, when our baker is still asleep, but knowing he makes the best cookies in town, he is waking up early every morning to prepare the ingredients and mix this portion of sweet magic. In the cookies is inserted the best Belgium milk chocolate, not toocrispy, also but not melting, I told you - magic.',
      ingredients: 'favour, sugar, Belgium milk chocolate, heat',
      price: 15,
      pieces: 6,
      link: 'details/picnic-cookie-box',
      images: ['../assets/order-online/cookies.JPG'],
    },
    {
      id: 'cinamon-roll-box',
      title: 'Cinamon Rolls Box',
      description: 'Set of 6 Crispy Sandwiches',
      excessiveDescription:
        'Our signiture cookies ar emade in the early hours of the morning, when our baker is still asleep, but knowing he makes the best cookies in town, he is waking up early every morning to prepare the ingredients and mix this portion of sweet magic. In the cookies is inserted the best Belgium milk chocolate, not toocrispy, also but not melting, I told you - magic.',
      ingredients: 'grain bread, mozzarella, , tomato, cucumber, salad',
      price: 17,
      pieces: 4,
      link: 'details/cinamon-rolls-box',
      images: ['../assets/order-online/cinamon-rolls.JPG'],
    },
    {
      id: 'sandwiches-box',
      title: 'Sandwiches Box',
      description: 'Set of 6 Crispy Sandwiches',
      excessiveDescription:
        'Our signiture cookies ar emade in the early hours of the morning, when our baker is still asleep, but knowing he makes the best cookies in town, he is waking up early every morning to prepare the ingredients and mix this portion of sweet magic. In the cookies is inserted the best Belgium milk chocolate, not toocrispy, also but not melting, I told you - magic.',
      ingredients: 'grain bread, mozzarella, , tomato, cucumber, salad',
      price: 18,
      pieces: 6,
      link: 'details/sandwiches-box',
      images: ['../assets/order-online/sandwiches.JPG'],
    },
    {
      id: 'merch',
      title: 'Merch',
      description: 'T-Shirts/Hoodie/Tote bags',
      excessiveDescription:
        'Our signiture cookies ar emade in the early hours of the morning, when our baker is still asleep, but knowing he makes the best cookies in town, he is waking up early every morning to prepare the ingredients and mix this portion of sweet magic. In the cookies is inserted the best Belgium milk chocolate, not toocrispy, also but not melting, I told you - magic.',
      price: 18,
      link: '/order-online/merch',
      images: ['../assets/order-online/merch.JPG'],
    },
  ];
}
