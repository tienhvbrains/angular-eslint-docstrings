import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    /**
     * Constructor
     */
    constructor() { }

    ngOnInit(): void {
        console.log("ngOnInit");
    }

    /**
     * Hello
     * @param lastValue - last value to be print
     */
    getMenu(lastValue: string): string[] {
        return ["abc", "def", lastValue];
    }

}
