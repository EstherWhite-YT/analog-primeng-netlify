// vite.config.ts
import { defineConfig } from "file:///D:/Estee/Programming/EsteeWhite/analog-primeng-netlify/node_modules/vite/dist/node/index.js";
import analog from "file:///D:/Estee/Programming/EsteeWhite/analog-primeng-netlify/node_modules/@analogjs/platform/src/index.js";
var vite_config_default = defineConfig(({ mode }) => ({
  build: {
    target: ["es2020"],
    // did nothing
    cssCodeSplit: true
  },
  resolve: {
    mainFields: ["module"]
  },
  plugins: [analog()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/test-setup.ts"],
    include: ["**/*.spec.ts"],
    reporters: ["default"]
  },
  define: {
    "import.meta.vitest": mode !== "production"
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ["src"],
        additionalData: `@import "src/dark.scss";
                         @import "src/light.scss";`
      }
    }
  }
  // does nothing they were in the public folder not compiled
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "src/dark.scss";
  //                        @import "src/light.scss";`,
  //     },
  //   }
  // },
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxFc3RlZVxcXFxQcm9ncmFtbWluZ1xcXFxFc3RlZVdoaXRlXFxcXGFuYWxvZy1wcmltZW5nLW5ldGxpZnlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEVzdGVlXFxcXFByb2dyYW1taW5nXFxcXEVzdGVlV2hpdGVcXFxcYW5hbG9nLXByaW1lbmctbmV0bGlmeVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovRXN0ZWUvUHJvZ3JhbW1pbmcvRXN0ZWVXaGl0ZS9hbmFsb2ctcHJpbWVuZy1uZXRsaWZ5L3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxyXG5cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBhbmFsb2cgZnJvbSAnQGFuYWxvZ2pzL3BsYXRmb3JtJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XHJcbiAgYnVpbGQ6IHtcclxuICAgIHRhcmdldDogWydlczIwMjAnXSxcclxuICAgIC8vIGRpZCBub3RoaW5nXHJcbiAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBtYWluRmllbGRzOiBbJ21vZHVsZSddLFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW2FuYWxvZygpXSxcclxuICB0ZXN0OiB7XHJcbiAgICBnbG9iYWxzOiB0cnVlLFxyXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXHJcbiAgICBzZXR1cEZpbGVzOiBbJ3NyYy90ZXN0LXNldHVwLnRzJ10sXHJcbiAgICBpbmNsdWRlOiBbJyoqLyouc3BlYy50cyddLFxyXG4gICAgcmVwb3J0ZXJzOiBbJ2RlZmF1bHQnXSxcclxuICB9LFxyXG4gIGRlZmluZToge1xyXG4gICAgJ2ltcG9ydC5tZXRhLnZpdGVzdCc6IG1vZGUgIT09ICdwcm9kdWN0aW9uJyxcclxuICB9LFxyXG4gICAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIHNjc3M6IHtcclxuICAgICAgICBpbmNsdWRlUGF0aHM6IFsnc3JjJ10sXHJcbiAgICAgICAgYWRkaXRpb25hbERhdGE6IGBAaW1wb3J0IFwic3JjL2Rhcmsuc2Nzc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgQGltcG9ydCBcInNyYy9saWdodC5zY3NzXCI7YCxcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIGRvZXMgbm90aGluZyB0aGV5IHdlcmUgaW4gdGhlIHB1YmxpYyBmb2xkZXIgbm90IGNvbXBpbGVkXHJcbiAgLy8gY3NzOiB7XHJcbiAgLy8gICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgLy8gICAgIHNjc3M6IHtcclxuICAvLyAgICAgICBhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCJzcmMvZGFyay5zY3NzXCI7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICBAaW1wb3J0IFwic3JjL2xpZ2h0LnNjc3NcIjtgLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgfVxyXG4gIC8vIH0sXHJcbn0pKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sWUFBWTtBQUduQixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLE9BQU87QUFBQSxJQUNMLFFBQVEsQ0FBQyxRQUFRO0FBQUE7QUFBQSxJQUVqQixjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLFlBQVksQ0FBQyxRQUFRO0FBQUEsRUFDdkI7QUFBQSxFQUNBLFNBQVMsQ0FBQyxPQUFPLENBQUM7QUFBQSxFQUNsQixNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixZQUFZLENBQUMsbUJBQW1CO0FBQUEsSUFDaEMsU0FBUyxDQUFDLGNBQWM7QUFBQSxJQUN4QixXQUFXLENBQUMsU0FBUztBQUFBLEVBQ3ZCO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixzQkFBc0IsU0FBUztBQUFBLEVBQ2pDO0FBQUEsRUFDRSxLQUFLO0FBQUEsSUFDTCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixjQUFjLENBQUMsS0FBSztBQUFBLFFBQ3BCLGdCQUFnQjtBQUFBO0FBQUEsTUFFbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
