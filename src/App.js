// import productDesktop from "./images/image-product-desktop.jpg";
// import Button from "./Button";

function App() {
	return (
		<div className='App'>
			{/* main */}
			{/* <div className='bg-cream h-full w-screen flex items-center justify-center'> */}
			{/* card */}
			{/* <div className='h-611 md:max-w-600 bg-white rounded-xl overflow-hidden flex flex-col md:flex-row'> */}
			{/* <div className='w-6/12 bg-mobileImg xl:bg-desktopImg bg-center bg-cover'></div> */}

			{/* <div className='w-6/12'>
						<div className='h-full p-8 flex flex-col items-left justify-center'>
							<p className='font-sans text-xs text-aurometal_saurus font-medium uppercase'>
								Perfume
							</p>
							<h1 className='font-bold text-big leading-custom32 font-serif text-gunmetal'>
								Gabrielle Essence Eau De Parfum
							</h1>
							<p className='font-sans text-custom14 text-aurometal_saurus font-medium leading-custom23'>
								A floral, solar and voluptuous interpretation composed by Olivier Polge,
								Perfumer-Creator for the House of CHANEL.
							</p>
							<div className='flex items-center'>
								<h2 className='font-serif text-big text-deep_aquamarine font-bold'>$149.99</h2>
								<p className='font-sans text-custom13 text-aurometal_saurus font-medium line-through ml-6'>
									$169.99
								</p>
							</div>

							<Button text={"Add to Cart"} />
						</div>
					</div> */}
			{/* </div> */}
			{/* </div> */}

			{/* main */}
			<div className='bg-cream h-screen w-full flex items-center justify-center'>
				{/* card */}
				<div className='w-343 md:w-600 h-611 md:h-450 bg-white rounded-xl overflow-hidden flex flex-col md:flex-row'>
					<div className='w-full md:w-300 h-240 md:h-full bg-mobileImg md:bg-desktopImg bg-center bg-cover' />

					<div className='w-full md:w-300 p-8'>
						<p className='font-sans text-custom12 text-aurometal_saurus font-medium uppercase tracking-customLetter5'>
							Perfume
						</p>
						<h1 className='font-bold text-big leading-custom32 font-serif text-gunmetal'>
							Gabrielle Essence Eau De Parfum
						</h1>
						<p className='font-sans text-custom14 text-aurometal_saurus font-medium leading-custom23'>
							A floral, solar and voluptuous interpretation composed by Olivier Polge,
							Perfumer-Creator for the House of CHANEL.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
