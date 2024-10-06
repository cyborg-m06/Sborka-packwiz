ServerEvents.recipes(event => { 
	event.shaped('minecraft:saddle', [// arg 1: output
    'AAA', 
    'BCB' // arg 2: the shape (array of strings)  
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
	
	event.shapeless('phonos:loudspeaker', [ // arg 1: output
		'minecraft:note_block',
		'createaddition:connector'
	]);
	
	event.shaped('phonos:electronic_note_block', [// arg 1: output
    'A', 
    'B', // arg 2: the shape (array of strings)
    'C'  
	], 	{
		A: 'create:electron_tube',
		B: 'minecraft:note_block',
		C: 'createaddition:connector'
		}
	);
	
	event.shaped('phonos:electronic_jukebox', [// arg 1: output
    'A', 
    'B', // arg 2: the shape (array of strings)
    'C'  
	], 	{
		A: 'create:electron_tube',
		B: 'minecraft:jukebox',
		C: 'createaddition:connector'
		}
	);
	
	event.shaped('phonos:connection_hub', [// arg 1: output
    ' A ', 
    'ABA', // arg 2: the shape (array of strings)
    ' A '  
	], 	{
		A: 'createaddition:connector',
		B: '#minecraft:planks'
		}
	);
	
	event.shaped('phonos:radio_transceiver', [// arg 1: output
    ' C ', 
    'ABA'
	], 	{
		A: 'createaddition:connector',
		B: '#minecraft:planks',
		C: 'minecraft:iron_bars'
		}
	);
	
	event.shaped('phonos:satellite_receiver', [// arg 1: output
    ' C ', 
    'ABA'
	], 	{
		A: 'createaddition:connector',
		B: '#minecraft:planks',
		C: 'create:electron_tube'
		}
	);
	
	event.shapeless('phonos:radio_loudspeaker', [ // arg 1: output
		'minecraft:note_block',
		'minecraft:iron_bars'
	]);
	
	event.shaped('phonos:satellite_station', [// arg 1: output
    'C  ', 
    'BBA'
	], 	{
		A: 'createaddition:connector',
		B: '#minecraft:planks',
		C: 'create:electron_tube'
		}
	);
	
	event.shaped('phonos:audio_switch', [// arg 1: output
    ' C ', 
    'ABA'
	], 	{
		A: 'createaddition:connector',
		B: '#minecraft:planks',
		C: 'minecraft:comparator'
		}
	);
	
	event.shaped('phonos:ender_music_box', [// arg 1: output
    ' C ', 
    'ABA'
	], 	{
		A: 'createaddition:connector',
		B: 'minecraft:jukebox',
		C: 'exposure:interplanar_projector'
		}
	);
	
	event.shaped('phonos:microphone_base', [// arg 1: output
    'A', 
    'B',
	'C'
	], 	{
		A: 'minecraft:calibrated_sculk_sensor',
		B: 'minecraft:iron_ingot',
		C: 'createaddition:connector'
		}
	);
	
	event.shaped('phonos:satellite', [// arg 1: output
    ' A ', 
    'DBD',
	' C '
	], 	{
		A: 'create:electron_tube',
		B: 'minecraft:firework_rocket',
		C: 'minecraft:copper_ingot',
		D: 'minecraft:diamond'
		}
	);
	
	event.shaped("phonos:audio_cable", [
	'A',
	'B',
	'A',
	], {
		A: "create:copper_nugget",
        B: "#createaddition:spools"
    });
	
	for (let index in Color.DYE) {
        /** @type {Internal.DyeColor} */
        let color = Color.DYE[index];
        event.shapeless(`phonos:${color.serializedName}_audio_cable`, [
            `minecraft:${color.serializedName}_dye`,
			'phonos:audio_cable'
        ]);
    }
	
	event.smelting('minecraft:leather', 'minecraft:rotten_flesh');
	
	console.log('Custom recipes added');
})
