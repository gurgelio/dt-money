import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// biome-ignore lint/style/noDefaultExport: vite expects it to be default
export default defineConfig({
	plugins: [react()],
});
