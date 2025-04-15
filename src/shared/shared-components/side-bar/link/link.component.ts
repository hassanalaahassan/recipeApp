import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {

  @Input({required:true}) link:{title:string,icon:string,route?:string} = {} as {title:string,icon:string}
  @Input({required:true}) isActive:boolean=false
  @Input({required:true}) isShowed:boolean=true
  @Input({required:true}) toggleClass:boolean=false






}
