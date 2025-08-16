import { Icon, map, Point, tileLayer, type DivIconOptions } from 'leaflet';
import { latlng_serangoon } from './skeleton';

/**
 * @class ElIcon
 * @inherits Icon
 *
 * DivIcon but dynamic tag
 */
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

export function LeafletMap(map_id: string) {
	const leaflet_map = map(map_id, { center: latlng_serangoon, zoom: 12 });
	tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(leaflet_map);

	return leaflet_map;
}
