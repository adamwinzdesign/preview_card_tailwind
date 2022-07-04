import productDesktop from "./images/image-product-desktop.jpg";

function App() {
	return (
		<div className='App'>
			{/* main */}
			<div className='bg-cream h-screen w-screen flex items-center justify-center'>
				{/* card */}
				<div className='w-600 h-450 bg-white rounded-xl overflow-hidden flex'>
					<div className='w-6/12'>
						<img src={productDesktop} alt='product' />
					</div>

					<div className='w-6/12'>Parfum</div>
				</div>
			</div>
		</div>
	);
}

export default App;
