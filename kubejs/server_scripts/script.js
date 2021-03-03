// priority: 0

console.info('Hello, World! (Loaded tags)') // You can change this message however you want

events.listen('recipes', event => {
    // Since I like you, I'll give you a Orb of Origin recipe 
    event.shaped(item.of('origins:orb_of_origin', 1), [
    'GGG', // Did you know that these letters can be anything?
    'DSD',
    'CCC'
    ], {
    G: 'minecraft:glass', // You define what each letter corresponds to here.
    S: '#minecraft:saplings', // Yeah I'm putting this here cus i thought it was dark magic before
    D: 'minecraft:iron_ingot', // But no it's actually this simple believe it or not.
	C: 'minecraft:cobblestone' // The only dark magic part is keeping the shape of the shaped recipe
  }) // By that I mean if it's 'GGG' and then suddenly 'G' then it will complain. It should be ' G ' in that case, granted if you want to put it in the middle that is
})

events.listen('item.tags', event => {
  /* 
  We are changing item tags so it works for our usage
  If you don't want to use Fishes from GoFish just come to this file and do this multi-line comment bracket (that's how I call it don't lynch me)
  around gofish stuff ex: */
  /* event.get('origins:pescatarian').add('gofish:smoked_salmon')
     event.get('origins:pescatarian').add('taxevasion:taxevasionexample') */
// This is a comment end, that one above is comment begin, alternatively you can do // before event.get which effectively comments it out also

  // Remove fish from meat tag
  event.get('origins:meat').remove('minecraft:tropical_fish')
  event.get('origins:meat').remove('minecraft:cod')
  event.get('origins:meat').remove('minecraft:salmon')
  event.get('origins:meat').remove('minecraft:pufferfish')
  event.get('origins:meat').remove('minecraft:cooked_salmon')
  event.get('origins:meat').remove('minecraft:cooked_cod')
  
  // Add Minecraft Fish to Pescatarian tag
  event.get('origins:pescatarian').add('minecraft:tropical_fish')
  event.get('origins:pescatarian').add('minecraft:cod')
  event.get('origins:pescatarian').add('minecraft:salmon')
  event.get('origins:pescatarian').add('minecraft:pufferfish')
  event.get('origins:pescatarian').add('minecraft:cooked_salmon')
  /* If you're wondering how I created this tag, go to:
  <your minecraft instance>\kubejs\data\powers\pescatarian.json
  It's really simple to do and with KubeJS you can restrict what types count
  towards this so you can add any food with the tag you created via KubeJS to the power */
  event.get('origins:pescatarian').add('gofish:endfish')
  event.get('origins:pescatarian').add('gofish:matrix_fish')
  event.get('origins:pescatarian').add('gofish:ender_eel')
  event.get('origins:pescatarian').add('gofish:smokey_salmon')
  event.get('origins:pescatarian').add('gofish:magma_cod')
  event.get('origins:pescatarian').add('gofish:bonefish')
  event.get('origins:pescatarian').add('gofish:obsidian_halibut')
  event.get('origins:pescatarian').add('gofish:basalt_bass')
  event.get('origins:pescatarian').add('gofish:spikerfish')
  event.get('origins:pescatarian').add('gofish:gilded_blackstone_carp')
  event.get('origins:pescatarian').add('gofish:blackstone_trout')
  event.get('origins:pescatarian').add('gofish:soul_salmon')
  event.get('origins:pescatarian').add('gofish:carrot_carp')
  event.get('origins:pescatarian').add('gofish:oakfish')
  event.get('origins:pescatarian').add('gofish:snowball_fish')
  event.get('origins:pescatarian').add('gofish:icicle_fish')
  event.get('origins:pescatarian').add('gofish:lunarfish')
  event.get('origins:pescatarian').add('gofish:galaxy_starfish')
  event.get('origins:pescatarian').add('gofish:starry_salmon')
  event.get('origins:pescatarian').add('gofish:nebula_swordfish')
  event.get('origins:pescatarian').add('gofish:slimefish')
  event.get('origins:pescatarian').add('gofish:lilyfish')
  event.get('origins:pescatarian').add('gofish:seaweed')
  event.get('origins:pescatarian').add('gofish:baked_endfish')
  event.get('origins:pescatarian').add('gofish:endfish_and_chorus')
  event.get('origins:pescatarian').add('gofish:aquatic_astral_stew')
  event.get('origins:pescatarian').add('gofish:cloudy_crab')
  event.get('origins:pescatarian').add('gofish:blizzard_bass')
  event.get('origins:pescatarian').add('gofish:rainy_bass')
  event.get('origins:pescatarian').add('gofish:charfish')
  event.get('origins:pescatarian').add('gofish:seaweed_eel')
  event.get('origins:pescatarian').add('gofish:baked_seaweed')
  event.get('origins:pescatarian').add('gofish:thundering_bass')
  event.get('origins:pescatarian').add('gofish:grilled_blackstone_deluxe')
})