/*
 *BlockLauncher API Declations List
 *Part of BL APIs
 *BL 1.8.1 Compatible
 *Created by nao20010128nao.
 *DO NOT BE USED IN BLOCKLAUNCHER!
 *THIS CANNOT USE AS A MOD!
 */
function addItemInventory(id: number, count: number, damageValue: number): void { }
function clientMessage(message: String): void { }
function explode(x: number, y: number, z: number, power): void { }
function getCarriedItem(): number { return 0; }
function getLevel(): String { return ""; }
function getPitch(degree: number): number { return 0; }
function getPlayerEnt(): any { }
function getPlayerX(): number { return 0; }
function getPlayerY(): number { return 0; }
function getPlayerZ(): number { return 0; }
function getTile(x: number, y: number, z: number): number { return 0; }
function getYaw(direction: number): number { return 0; }
function preventDefault(): void { }
function print(message: String): void { }
function rideAnimal(target: any, destination: any): void { }
function setNightMode(time: number): void { }
function setPosition(entity: any, x: number, y: number, z: number): void { }
function setPositionRelative(entity: any, x: number, y: number, z: number): void { }
function setRot(entity: any, yAxis: number, direction: number): void { }
function setTile(x: number, y: number, z: number, id: number, damage: number): void { }
function setVelX(entity: any, speed: number): void { }
function setVelY(entity: any, speed: number): void { }
function setVelZ(entity: any, speed: number): void { }
function spawnChicken(x: number, y: number, z: number, skinPath: String): void { }
function spawnCow(x: number, y: number, z: number, skinPath: String): void { }
function spawnPigZombie(x: number, y: number, z: number, id: number, skinPath: String): void { }
var ModPE = {
    getMinecraftVersion: function (): String { return ""; },
    langEdit: function (before: String, after: String) { },
    leaveGame: function (): void { },
    log: function (message: String): void { },
    overrideTexture: function (target: String, address: String): void { },
    saveData: function (variable: String, data: any) { },
    readData: function (variable: String): void { },
    removeData: function (variable: String): void { },
    resetFov: function (): void { },
    resetImages: function (): void { },
    selectLevel: function (name: String, directoryname: String, seedname: String, gMode): void { },
    setCamera: function (entity: any): void { },
    setFoodItem: function (id: number, textureNamename: String, groupname: String, amount: number, namename: String): void { },
    setFov: function (distance: number): void { },
    setGameSpeed: function (tickPerSec: number): void { },
    setItem: function (id: number, textureName: String, groupId: String, groupName: String, stackLimit: number): void { },
    setGuiBlocks: function (url: String): void { },
    setItems: function (url: String): void { },
    setTerrain: function (url: String): void { },
    showTipMessage: function (message: String): void { },
    takeScreenshot: function (message: String): void { }
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