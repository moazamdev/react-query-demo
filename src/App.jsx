import { useState } from "react";
import "./App.css";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { SuperHeroes } from "./components/superheroes.page";
import { RQSuperHeroes } from "./components/rqsuperheroes.page";
import { HomePage } from "./components/home.page";
import { RQSuperHeroPage } from "./components/RQSuperHero.page";
import { ParalledQueriesPage } from "./components/ParalledQueries.page";
import { DynamicParalledQueriesPage } from "./components/DynamicParallel.page";

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<div>
						<nav>
							<ul style={{ listStyleType: "none" }}>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/super-heroes">
										Traditional Super Heroes
									</Link>
								</li>
								<li>
									<Link to="/rq-super-heroes">
										RQ Super Heroes
									</Link>
								</li>
							</ul>
						</nav>
						<Routes>
							<Route
								path="/rq-dynamic-parallel"
								element={
									<DynamicParalledQueriesPage ids={[1, 3]} />
								}
							/>
							<Route
								path="/rq-parallel"
								element={<ParalledQueriesPage />}
							/>
							<Route
								path="/super-heroes"
								element={<SuperHeroes />}
							/>
							<Route
								path="/rq-super-heroes/:heroId"
								element={<RQSuperHeroPage />}
							/>
							<Route
								path="/rq-super-heroes"
								element={<RQSuperHeroes />}
							/>
							<Route path="/" element={<HomePage />} />
						</Routes>
					</div>
				</BrowserRouter>
				<ReactQueryDevtools
					initialIsOpen={false}
					position="bottom-right"
				/>
			</QueryClientProvider>
		</>
	);
}

export default App;
