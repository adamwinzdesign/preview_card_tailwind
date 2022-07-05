import productDesktop from "./images/image-product-desktop.jpg";

function App() {
	return (
		<div className='App'>
			{/* main */}
			<div className='bg-cream h-screen w-screen flex items-center justify-center'>
				{/* card */}
				<div className='max-w-600 bg-white rounded-xl overflow-hidden flex'>
					<div className='w-6/12'>
						<img src={productDesktop} alt='product' />
					</div>

					<div className='w-6/12'>
						<div className='h-full p-8 flex flex-col items-left justify-center'>
							<p className='font-sans text-xs text-aurometal_saurus font-medium uppercase'>
								Perfume
							</p>
							<h1 className='font-bold text-big leading-8 font-serif text-gunmetal'>
								Gabrielle Essence Eau De Parfum
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
