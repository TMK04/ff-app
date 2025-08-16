import { derived } from "svelte/store";
import { challenge_store } from "../atom/challenge";
import { me_store } from "../atom/me";

export const me_has_entry = derived([challenge_store, me_store], function ([challenge, me]) {
		for (const id in challenge) {
			const entry = challenge[id];
			if (entry.username === me.username) return true;
		}
		return false;
	});