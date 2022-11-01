react router

- [x] implementasi React Router
- [x] Router Link || useNavigate
- [x] Menggunakan route params
- [x] Nested Route

keywords :

- BrowserRouter
- Route
- Routes
- Route Index
- Link
- Navigate || useNavigate
- Outlet

# Tahap-tahap menggunakan react router

1. Install react router

```
 npm install react-router-dom@6
```

2. Bungkus App dengan Browser Router. jangan lupa di import terlebih dahulu di main.js

```js
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

3. React Router siap digunakan di dalam App mu

4. Import Routes, Route, Link di App.js

```js
import { Routes, Route, Link } from "react-router-dom";
```

5. Buat list Route yang akan kalian punya dan bungkus dengan Routes

```js
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/detail/:id" element={<DetailPage />} />
</Routes>
```
