/*
 * @class ElIcon
 * @inherits Icon
 *
 * DivIcon but dynamic tag
 */

import { Icon, Point, type DivIconOptions } from 'leaflet';

// @constructor ElIcon(options: ElIcon options)
// Creates a `ElIcon` instance with the given options.
export class ElIcon extends Icon<DivIconOptions & { tagName: keyof HTMLElementTagNameMap }> {
	createIcon(oldIcon: HTMLElement) {
		const options = this.options;
		const el =
			oldIcon && oldIcon.tagName === options.tagName
				? oldIcon
				: document.createElement(options.tagName);

		if (options.html instanceof Element) {
			el.replaceChildren();
			el.appendChild(options.html);
		} else if (options.html) {
			el.innerHTML = options.html;
		}

		if (options.bgPos) {
			const bgPos = new (Point as any)(options.bgPos);
			el.style.backgroundPosition = `${-bgPos.x}px ${-bgPos.y}px`;
		}
		(this as any)._setIconStyles(el, 'icon');

		return el;
	}

	createShadow() {
		return null as any;
	}
}
