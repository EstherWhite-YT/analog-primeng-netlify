import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import {
  afterRender,
  AfterRenderPhase,
	Component,
	inject,
	OnInit,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet],
	template: ` <router-outlet></router-outlet> `,
	styles: [
		`
			:host {
				max-width: 1280px;
				margin: 0 auto;
				padding: 2rem;
				text-align: center;
			}
		`,
	],
})
export class AppComponent implements OnInit {
  private platformId: any;
  doc = inject(DOCUMENT);
	activeTheme = "dark";

	ngOnInit(): void {
    afterRender(
			() => {
				let themeLink = this.doc.createElement("link");
				themeLink.id = "app-theme";
				themeLink.rel = "stylesheet";
				themeLink.href = this.setTheme();
				this.doc.head.appendChild(themeLink);
			},
			{ phase: AfterRenderPhase.Write }
		);
	}

  getTheme() {
		return this.activeTheme;
	}

	setTheme() {
		if (this.prefersLightMode()) {
			return "/public/light.css";
		} else {
			return "/public/dark.css";
		}
	}

	prefersLightMode(): boolean {
		if (isPlatformBrowser(this.platformId)) {
			return (
				window.matchMedia &&
				window.matchMedia("(prefers-color-scheme: light)").matches
			);
		}
		return false;
	}
}
