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
		'supplementaries:speaker_block',
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
		A: 'create:copper_nugget',
		B: '#minecraft:planks'
		}
	);
	
	event.shaped('phonos:radio_transceiver', [// arg 1: output
    ' C ', 
    'ABA'
	], 	{
		A: 'create:copper_nugget',
		B: '#minecraft:planks',
		C: 'minecraft:iron_bars'
		}
	);
	
	event.shaped('phonos:satellite_receiver', [// arg 1: output
    ' C ', 
    'ABA'
	], 	{
		A: 'create:copper_nugget',
		B: '#minecraft:planks',
		C: 'create:electron_tube'
		}
	);
	
	event.shapeless('phonos:radio_loudspeaker', [ // arg 1: output
		'supplementaries:speaker_block',
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
		A: 'create:copper_nugget',
		B: '#minecraft:planks',
		C: 'minecraft:comparator'
		}
	);
	
	event.shaped('phonos:ender_music_box', [// arg 1: output
    'C', 
    'B',
	'A'
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
		A: 'minecraft:echo_shard',
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
	
	event.shaped('phonos:headset', [// arg 1: output
    'ACA', 
    'B B'
	], 	{
		A: 'minecraft:iron_ingot',
		B: 'minecraft:note_block',
		C: 'minecraft:leather'
		}
	);
	
	event.shapeless('phonos:portable_radio', [ // arg 1: output
		'phonos:radio_loudspeaker',
	]);
	
	event.shapeless('phonos:radio_loudspeaker', [ // arg 1: output
		'phonos:portable_radio',
	]);
	
	event.shapeless('phonos:portable_satellite_radio', [ // arg 1: output
		'phonos:portable_radio',
		'create:electron_tube'
	]);
	
	event.shapeless('phonos:portable_record_player', [ // arg 1: output
		'minecraft:jukebox',
	]);
	
	event.shapeless('minecraft:jukebox', [ // arg 1: output
		'phonos:portable_record_player',
	]);
	
	event.smelting('minecraft:leather', 'minecraft:rotten_flesh');
	
	event.remove({ output: 'origins:orb_of_origin' });
	
	event.remove({ output: 'design_decor:brass_lamp' })
	event.shaped('2x design_decor:brass_lamp', [// arg 1: output
    ' C ', 
    'ABA', // arg 2: the shape (array of strings)
    ' C '  
	], 	{
		A: 'create:brass_ingot',
		B: 'minecraft:glowstone_dust',
		C: 'create:brass_nugget'
		}
	);
	
	event.remove({ output: 'design_decor:copper_lamp' })
	event.shaped('2x design_decor:copper_lamp', [// arg 1: output
    ' C ' , 
    'ABA', // arg 2: the shape (array of strings)
    ' C '  
	], 	{
		A: 'minecraft:copper_ingot',
		B: 'minecraft:glowstone_dust',
		C: 'create:copper_nugget'
		}
	);
	
	event.remove({ output: 'design_decor:zinc_lamp' })
	event.shaped('2x design_decor:zinc_lamp', [// arg 1: output
    ' C ', 
    'ABA', // arg 2: the shape (array of strings)
    ' C '  
	], 	{
		A: 'create:zinc_ingot',
		B: 'minecraft:glowstone_dust',
		C: 'create:zinc_nugget'
		}
	);
	
	event.shaped('minecraft:furnace', [// arg 1: output
    'AAA', 
    'A A', // arg 2: the shape (array of strings)
    'AAA'  
	], 	{
		A: '#c:cobblestone'   
		}
	);
	
	event.stonecutting('design_decor:blank_sign', 'create:andesite_alloy')
	
	event.stonecutting('design_decor:letter_sign', 'create:brass_ingot')
	
	event.remove({ output: 'design_decor:brass_floodlight' })
	event.shaped('2x design_decor:brass_floodlight', [// arg 1: output
    ' B ', 
    'ACA', // arg 2: the shape (array of strings)
    ' A '  
	], 	{
		A: 'create:brass_ingot',
		B: 'minecraft:glowstone_dust',
		C: 'create:andesite_alloy'
		}
	);
	
	event.remove({ output: 'design_decor:copper_floodlight' })
	event.shaped('2x design_decor:copper_floodlight', [// arg 1: output
    ' B ', 
    'ACA', // arg 2: the shape (array of strings)
    ' A '  
	], 	{
		A: 'minecraft:copper_ingot',
		B: 'minecraft:prismarine_crystals',
		C: 'create:andesite_alloy'
		}
	);

	event.shaped('minecraft:chainmail_chestplate', [// arg 1: output
		'A A', 
		'ABA', // arg 2: the shape (array of strings)
		'ABA'  
		], 	{
			A: 'minecraft:iron_nugget',
			B: 'minecraft:iron_ingot'
			}
		);

	event.shaped('minecraft:chainmail_helmet', [// arg 1: output
		'ABA', 
		'A A'
		], 	{
			A: 'minecraft:iron_nugget',
			B: 'minecraft:iron_ingot'
			}
		);

	event.shaped('minecraft:chainmail_boots', [// arg 1: output
		'A A', 
		'B B'
		], 	{
			A: 'minecraft:iron_nugget',
			B: 'minecraft:iron_ingot'
			}
		);
	
	event.shaped('minecraft:chainmail_leggings', [// arg 1: output
		'ABA', 
		'A A',
		'A A'
		], 	{
			A: 'minecraft:iron_nugget',
			B: 'minecraft:iron_ingot'
			}
		);
		
	event.remove({ output: 'backpacked:backpack' })
	event.shaped('backpacked:backpack', [// arg 1: output
		'AAA', 
		'BCB',
		'AAA'
		], 	{
			A: 'minecraft:leather',
			B: 'minecraft:string',
			C: 'minecraft:iron_ingot'
			}
		);
	
	console.log('Custom recipes added');
})
