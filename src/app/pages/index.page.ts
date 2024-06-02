import { Component, OnInit, signal } from "@angular/core";

import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from "primeng/button";
import { TooltipModule } from "primeng/tooltip";
import { FormsModule } from "@angular/forms";

interface City {
  name: string;
  code: string;
}

@Component({
	selector: "app-home",
	standalone: true,
	imports: [FormsModule, DropdownModule, ButtonModule, TooltipModule],
	template: `
		<div>
			<a href="https://analogjs.org/" target="_blank">
				<img alt="Analog Logo" class="logo analog" src="/analog.svg" />
			</a>
		</div>

    <p-dropdown
    [options]="cities"
    [(ngModel)]="selectedCity"
    optionLabel="name"
    placeholder="Select a City" />

		<h2>Analog</h2>

		<h3>The fullstack meta-framework for Angular!</h3>

		<div class="card">
			<!-- <p-button type="button" (click)="increment()"
				>Count {{ count() }}</p-button
			> -->
			<a href="https://github.com/monacodelisa-yt/analog-primeng-netlify" target="_blank">
				<p-button
					label="GitHub"
					icon="pi pi-github"
					pTooltip="Github repo"
					tooltipPosition="bottom"
				/>
			</a>
		</div>

		<p class="read-the-docs">
			For guides on how to customize this project, visit the
			<a href="https://analogjs.org" target="_blank">Analog documentation</a>
		</p>
	`,
	styles: [
		`
			.logo {
        width: 3rem;
				will-change: filter;
			}
			.logo:hover {
				filter: drop-shadow(0 0 2em #646cffaa);
			}
			.read-the-docs {
				color: #888;
			}
		`,
	],
})
export default class HomeComponent  implements OnInit {
  cities: City[] | undefined;
  selectedCity: City | undefined;

  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];
  }
}
