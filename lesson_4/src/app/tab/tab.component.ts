import {Component, Input, Type} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input() tabs: { name: string, component: Type<any> }[] = [];
  isActive: string = '';

  ngOnInit() {
    if (this.tabs.length > 0) {
      this.isActive = this.tabs[0].name;
    }
  }

  showTab(tabName: string) {
    this.isActive = tabName;
  }
}
