import cart from "./images/icon-cart.svg";

const Button = ({ text }) => {
	return (
		<div className='w-236px h-48 bg-deep_aquamarine hover:bg-deep_aquamarine_hover rounded-lg flex items-center justify-center'>
			<img src={cart} alt='cart' />
			<p className='font-sans text-sm font-bold text-custom14 text-white ml-[11px]'>{text}</p>
		</div>
	);
};

export default Button;
