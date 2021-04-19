import { Component, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  ngOnInit(): void {
    const target = document.querySelector('.tw')
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
    })
    
    writer
      
      .type(' developer')
      .rest(1500)
      .changeOps({ deleteSpeed: 100 })
      .remove(9)
      .type(' angler')
      .rest(1500)
      .clear()
      .start()
          
  }

}