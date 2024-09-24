ServerEvents.recipes(event => { 
	event.shaped('minecraft:saddle', [// arg 1: output
    'AAA', 
    'BCB', // arg 2: the shape (array of strings)
    '   '  
	], 	{
		A: 'minecraft:leather', 
		B: 'minecraft:string',  //arg 3: the mapping object
		C: 'minecraft:iron_ingot'   
		}
	);
	event.shaped('minecraft:iron_horse_armor', [// arg 1: output
    'A A', 
    'AAA', // arg 2: the shape (array of strings)
    'A A'  
	], 	{
		A: 'minecraft:iron_ingot'   
		}
	);
	event.shaped('minecraft:golden_horse_armor', [// arg 1: output
    'A A', 
    'AAA', // arg 2: the shape (array of strings)
    'A A'  
	], 	{
		A: 'minecraft:gold_ingot'   
		}
	);
	event.shaped('minecraft:name_tag', [// arg 1: output
    ' BC', 
    ' AB', // arg 2: the shape (array of strings)
    'A  '  
	], 	{
		A: 'minecraft:paper',
		B: 'minecraft:iron_ingot',
		C: 'minecraft:string',
		}
	);
	event.remove({ output: 'minecraft:powered_rail' })
	event.shaped('6x minecraft:powered_rail', [// arg 1: output
    'A A', 
    'ABA', // arg 2: the shape (array of strings)
    'A A'  
	], 	{
		A: 'minecraft:copper_ingot',
		B: 'minecraft:stick'
		}
	);
	
	event.shapeless('9x minecraft:nether_wart', [ // arg 1: output
		'minecraft:nether_wart_block'
	]);
	
	event.smelting('minecraft:leather', 'minecraft:rotten_flesh')
	
	console.log('Custom recipes added');
})