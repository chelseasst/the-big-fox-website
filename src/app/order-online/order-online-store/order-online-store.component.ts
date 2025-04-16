import { Component } from '@angular/core';
import { orderItems } from 'src/app/types/order-online';

@Component({
  selector: 'app-order-online-store',
  templateUrl: './order-online-store.component.html',
  styleUrls: ['./order-online-store.component.css'],
})
export class OrderOnlineStoreComponent {
  items: orderItems[] = [
    {
      id: '1',
      type: 'Picnic Cookies Box',
      description: 'Set of 6 Chocolate Chips Cookies',
      excessivedescription:
        'Our signiture cookies ar emade in the early hours of the morning, when our baker is still asleep, but knowing he makes the best cookies in town, he is waking up early every morning to prepare the ingredients and mix this portion of sweet magic. In the cookies is inserted the best Belgium milk chocolate, not toocrispy, also but not melting, I told you - magic.',
      ingredients: 'favour, sugar, Belgium milk chocolate, heat',
      price: 15,
      peaces: 6,
      link: 'picnic-cookie-box',
      images: ['../assets/order-online/cookies.JPG'],
    },
    {
      id: '2',
      type: 'Cinamon Rolls Box',
      description: 'Set of 6 Crispy Sandwiches',
      excessivedescription:
        'Our signiture cookies ar emade in the early hours of the morning, when our baker is still asleep, but knowing he makes the best cookies in town, he is waking up early every morning to prepare the ingredients and mix this portion of sweet magic. In the cookies is inserted the best Belgium milk chocolate, not toocrispy, also but not melting, I told you - magic.',
      ingredients: 'grain bread, mozzarella, , tomato, cucumber, salad',
      price: 17,
      peaces: 4,
      link: 'cinamon-rolls-box',
      images: ['../assets/order-online/cinamon-rolls.JPG'],
    },
    {
      id: '3',
      type: 'Sandwiches Box',
      description: 'Set of 6 Crispy Sandwiches',
      excessivedescription:
        'Our signiture cookies ar emade in the early hours of the morning, when our baker is still asleep, but knowing he makes the best cookies in town, he is waking up early every morning to prepare the ingredients and mix this portion of sweet magic. In the cookies is inserted the best Belgium milk chocolate, not toocrispy, also but not melting, I told you - magic.',
      ingredients: 'grain bread, mozzarella, , tomato, cucumber, salad',
      price: 18,
      peaces: 6,
      link: 'sandwiches-box',
      images: ['../assets/order-online/sandwiches.JPG'],
    },
    {
      id: '4',
      type: 'Merch',
      description: 'T-Shirts/Hoodie/Tote bags',
      excessivedescription:
        'Our signiture cookies ar emade in the early hours of the morning, when our baker is still asleep, but knowing he makes the best cookies in town, he is waking up early every morning to prepare the ingredients and mix this portion of sweet magic. In the cookies is inserted the best Belgium milk chocolate, not toocrispy, also but not melting, I told you - magic.',
      price: 18,
      link: 'merch',
      images: ['../assets/order-online/merch.JPG'],
    },
  ];
}
