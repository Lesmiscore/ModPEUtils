/*
 *BlockLauncher API Declations List
 *Part of BL APIs
 *BL 1.8.1 Compatible
 *Created by nao20010128nao.
 *DO NOT BE USED IN BLOCKLAUNCHER!
 *THIS CANNOT USE AS A MOD!
 */
function addItemInventory(id, count, damageValue) { }
function clientMessage(message) { }
function explode(x, y, z, power) { }
function getCarriedItem() { }
function getLevel() { }
function getPitch(degree) { }
function getPlayerEnt() { }
function getPlayerX() { }
function getPlayerY() { }
function getPlayerZ() { }
function getTile(x, y, z) { }
function getYaw(direction) { }
function preventDefault() { }
function print(message) { }
function rideAnimal(target, destination) { }
function setNightMode(time) { }
function setPosition(entity, x, y, z) { }
function setPositionRelative(entity, x, y, z) { }
function setRot(entity, yAxis, direction) { }
function setTile(x, y, z, id, damage) { }
function setVelX(entity, speed) { }
function setVelY(entity, speed) { }
function setVelZ(entity, speed) { }
function spawnChicken(x, y, z, skinPath) { }
function spawnCow(x, y, z, skinPath) { }
function spawnPigZombie(x, y, z, id, skinPath) { }
var ModPE = {
    getMinecraftVersion: function () { },
    langEdit: function (before, after) { },
    leaveGame: function () { },
    log: function (message) { },
    overrideTexture: function (target, address) { },
    saveData: function (variable, data) { },
    readData: function (variable) { },
    removeData: function (variable) { },
    resetFov: function () { },
    resetImages: function () { },
    selectLevel: function (name, directory, seed, gMode) { },
    setCamera: function (entity) { },
    setFoodItem: function (id, textureName, group, amount, name) { },
    setFov: function (distance) { },
    setGameSpeed: function (tickPerSec) { },
    setItem: function (id, textureName, groupId, groupName, stackLimit) { },
    setGuiBlocks: function (url) { },
    setItems: function (url) { },
    setTerrain: function (url) { },
    showTipMessage: function (message) { },
    takeScreenshot: function (message) { }
}
var Level = {
    addParticle: function (type, startX, startY, startZ, directionX, directionY, directionZ, size) { },
    destroyBlock: function (x, y, z, allowDrop) { },
    dropItem: function (x, y, z, boundHeight, id, amount, damage) { },
    explode: function (x, y, z, power) { },
    getAddress: function () { },
    getBiome: function (x, z) { },
    getBiomeName: function (x, z) { },
    getBrightness: function (x, y, z) { },
    getChestSlot: function (x, y, z, slotNumber) { },
    getChestSlotCount: function (x, y, z, slotNumber) { },
    getChestSlotData: function (x, y, z, slotNumber) { },
    getData: function (x, y, z) { },
    getFurnaceSlot: function (x, y, z, slot) { },
    getFurnaceSlotCount: function (x, y, z, slot) { },
    getFurnaceSlotData: function (x, y, z, slot) { },
    getGameMode: function () { },
    getGrassColor: function (x, z) { },
    getSignText: function (x, y, z, line) { },
    getTile: function (x, y, z) { },
    getTime: function () { },
    getWorldDir: function () { },
    getWorldName: function () { },
    playSound: function (x, y, z, name, volume, pitch) { },
    playSoundEnt: function (entity, name, volume, pitch) { },
    setChestSlot: function (x, y, z, slot, id, amount, damage) { },
    setFurnaceSlot: function (x, y, z, id, amount, damage, slot) { },
    setGameMode: function (gModeId) { },
    setGrassColor: function (x, z, cCode) { },
    setNightMode: function (time) { },
    setSignText: function (x, y, z, line, string) { },
    setSpawn: function (x, y, z) { },
    setTile: function (x, y, z, id, damage) { },
    setTime: function (time) { },
    spawnChicken: function (x, y, z, url) { },
    spawnCow: function (x, y, z, url) { },
    spawnMob: function (x, y, z, type, url) { }
}
var Player = {
    addItemCreativeInv: function (id, amount, damage) { },
    addItemInventory: function (id, amount, damage) { },
    canFly: function () { },
    clearInventorySlot: function (slot) { },
    getArmorSlot: function (slot) { },
    getArmorSlotDamage: function (slot) { },
    getCarriedItem: function () { },
    getCarriedItemCount: function () { },
    getCarriedItemData: function () { },
    getEntity: function () { },
    getInventorySlot: function (slot) { },
    getInventorySlotCount: function (slot) { },
    getInventorySlotData: function (slot) { },
    getName: function (player) { },
    getPointedBlockData: function () { },
    getPointedBlockId: function () { },
    getPointedBlockSide: function () { },
    getPointedBlockX: function () { },
    getPointedBlockY: function () { },
    getPointedBlockZ: function () { },
    getPointedEntity: function () { },
    getSelectedSlotId: function () { },
    getX: function () { },
    getY: function () { },
    getZ: function () { },
    isFlying: function () { },
    isPlayer: function (player) { },
    setArmorSlot: function (slot, id, damage) { },
    setCanFly: function (value) { },
    setFlying: function (value) { },
    setHealth: function (health) { }
}
var Entity = {
    getAll: function () { },
    getAnimalAge: function (entity) { },
    getEntityTypeId: function (entity) { },
    getHealth: function (entity) { },
    getMobSkin: function (entity) { },
    getNameTag: function (entity) { },
    getPitch: function (entity) { },
    getRenderType: function (entity) { },
    getRider: function (entity) { },
    getRiding: function (entity) { },
    getUniqueId: function (entity) { },
    getVelX: function (entity) { },
    getVelY: function (entity) { },
    getVelZ: function (entity) { },
    getX: function (entity) { },
    getY: function (entity) { },
    getZ: function (entity) { },
    getYaw: function (entity) { },
    remove: function (entity) { },
    rideAnimal: function (destination, target) { },
    setAnimalAge: function (entity, age) { },
    setCarriedItem: function (entity, id, amount, damage) { },
    setFireTicks: function (entity, time) { },
    setHealth: function (entity, health) { },
    setMobSkin: function (entity, skinUrl) { },
    setNameTag: function (entity, name) { },
    setPosition: function (entity, x, y, z) { },
    setPositionRelative: function (entity, xDirection, yDirection, zDirection) { },
    setRenderType: function (entity, type) { },
    setRot: function (entity, degree, direction) { },
    setSneaking: function (targetEntity, value) { },
    setVelX: function (entity, speed) { },
    setVelY: function (entity, speed) { },
    setVelZ: function (entity, speed) { },
    spawnMob: function (x, y, z, entityId, skinUrl) { }
}
var Item = {
    addCraftRecipe: function (id, amount, damage) { },
    addFurnaceRecipe: function (material, result, damage) { },
    addShapedRecipe: function (id, amount, damage, style, items) { },
    getName: function (id, damage, allowGet) { },
    setCategory: function (id, category, reserved) { },
    setMaxDamage: function (id, maxDamage) { },
}
var Block = {
    defineBlock: function (id, name, arguments, betterTool, transparency, blockShape) { },
    getRenderType: function (id) { },
    setColor: function (id, hexColorCode) { },
    setDestroyTime: function (id, seconds) { },
    setExplosionResistance: function (id, resistance) { },
    setLightLevel: function (id, level) { },
    setLightOpacity: function (id, opacity) { },
    setRenderLayer: function (id, layerNum) { },
    setRenderType: function (id, type) { },
    setShape: function (id, startX, startY, startZ, endX, endY, endZ) { }
}
var Server = {
    getAddress: function () { },
    getAllPlayerNames: function () { },
    getAllPlayers: function () { },
    getPort: function () { },
    joinServer: function (ip, port) { },
    sendChat: function (message) { },
}