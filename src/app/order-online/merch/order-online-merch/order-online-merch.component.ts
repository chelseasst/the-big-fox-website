import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { orderItems } from 'src/app/types/order-online';

@Component({
  selector: 'app-order-online-merch',
  templateUrl: './order-online-merch.component.html',
  styleUrls: ['./order-online-merch.component.css']
})
export class OrderOnlineMerchComponent {
  isDesktop: boolean = false;
  items: orderItems[] = [
    {
      id: '6',
      type: 'Our Fox -  Tee-Shirt',
      description: 'Set of 6 Chocolate Chips Cookies',
      excessivedescription:
        'Our signiture cookies ar emade in the early hours of the morning, when our baker is still asleep, but knowing he makes the best cookies in town, he is waking up early every morning to prepare the ingredients and mix this portion of sweet magic. In the cookies is inserted the best Belgium milk chocolate, not toocrispy, also but not melting, I told you - magic.',
      ingredients: 'favour, sugar, Belgium milk chocolate, heat',
      price: 25,
      link: '',
      images: ['../assets/order-online/merch/t-black-model.JPG'],
    },
    {
      id: '7',
      type: 'Cinamon Rolls Box',
      description: 'Set of 6 Crispy Sandwiches',
      excessivedescription:
        'Our signiture cookies ar emade in the early hours of the morning, when our baker is still asleep, but knowing he makes the best cookies in town, he is waking up early every morning to prepare the ingredients and mix this portion of sweet magic. In the cookies is inserted the best Belgium milk chocolate, not toocrispy, also but not melting, I told you - magic.',
      ingredients: 'grain bread, mozzarella, , tomato, cucumber, salad',
      price: 17,
      peaces: 4,
      link: '',
      images: ['../assets/order-online/cinamon-rolls.JPG'],
    },
    {
      id: '8',
      type: 'Sandwiches Box',
      description: 'Set of 6 Crispy Sandwiches',
      excessivedescription:
        'Our signiture cookies ar emade in the early hours of the morning, when our baker is still asleep, but knowing he makes the best cookies in town, he is waking up early every morning to prepare the ingredients and mix this portion of sweet magic. In the cookies is inserted the best Belgium milk chocolate, not toocrispy, also but not melting, I told you - magic.',
      ingredients: 'grain bread, mozzarella, , tomato, cucumber, salad',
      price: 18,
      peaces: 6,
      link: '',
      images: ['../assets/order-online/sandwiches.JPG'],
    },
    {
      id: '9',
      type: 'Merch',
      description: 'T-Shirts/Hoodie/Tote bags',
      excessivedescription:
        'Our signiture cookies ar emade in the early hours of the morning, when our baker is still asleep, but knowing he makes the best cookies in town, he is waking up early every morning to prepare the ingredients and mix this portion of sweet magic. In the cookies is inserted the best Belgium milk chocolate, not toocrispy, also but not melting, I told you - magic.',
      price: 18,
      link: 'merch',
      images: ['../assets/order-online/merch.JPG'],
    },
  ];
  constructor(private breakpointObserver: BreakpointObserver) { }
  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((result) => {
        this.isDesktop = !result.matches;
      });
  }
}
