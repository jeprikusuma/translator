const 	input  = document.querySelector('#input'),
		output = document.querySelector('#output'),
		btn	   = document.querySelector('#submit');

btn.addEventListener('click', ()=>{
	let ins = input.value,
		res = ins.replace('ganteng', 'anjing');
		res = res.replace('cantik', 'babi');
		res = res.replace('banget', 'bangsad');
		res = res.replace('sayang', 'anjeng');
		res = res.replace('bentar', 'ganggu');
		res = res.replace('iya', 'asu');
		res = res.replace('mantap', 'kontol');
		res = res.replace('pacar', 'hanya teman');
	
	output.value = res.toUpperCase()+'!!!';

})

