import {
	afterRender,
	AfterRenderPhase,
	Component,
	Inject,
	inject,
	OnInit,
	PLATFORM_ID,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ThemeService } from "./services/theme.service";
import { DOCUMENT, isPlatformBrowser } from "@angular/common";

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
	doc = inject(DOCUMENT);
	activeTheme = "dark";

	constructor(@Inject(PLATFORM_ID) private platformId: any) {
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

	ngOnInit(): void {

	}

	getTheme() {
		return this.activeTheme;
	}

	setTheme() {
		if (this.prefersLightMode()) {
			return "/src/light.scss";
		} else {
			return "/src/dark.scss";
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
