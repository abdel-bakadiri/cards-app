import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      imageUrl: 'assets/tree.jpeg',
      title: 'Neat tree',
      userName: 'Abdel',
      content:
        'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    },
    {
      imageUrl: 'assets/mountain.jpeg',
      title: 'Montaines of Morocco',
      userName: 'Abdou',
      content: 'Blabla blabala Blabla blabala Blabla blabala',
    },
    {
      imageUrl: 'assets/biking.jpeg',
      title: 'Biking in ntaure ',
      userName: 'Abdelouahab',
      content: 'Hrissa Lissa Hrissa Lissa Hrissa Lissa Hrissa Lissa ',
    },
  ];
}
