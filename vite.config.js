// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				home: resolve(__dirname, "src/pages/home.html"),
				cart: resolve(__dirname, "src/pages/cart.html"),
				checkout: resolve(__dirname, "src/pages/checkout.html"),
				category: resolve(__dirname, "src/pages/category.html"),
				products: resolve(__dirname, "src/pages/products.html"),
				order: resolve(__dirname, "src/pages/order.html"),
			},
		},
	},
});
