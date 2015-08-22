/*
 *BlockLauncher API Declations List
 *Part of BL APIs
 *BL 1.8.1 Compatible
 *Created by nao20010128nao.
 *DO NOT BE USED IN BLOCKLAUNCHER!
 *THIS CANNOT USE AS A MOD!
 */
function addItemInventory(id: number, count: number, damageValue: number): void { }
function clientMessage(message: string): void { }
function explode(x: number, y: number, z: number, power): void { }
function getCarriedItem(): number { return 0; }
function getLevel(): string { return ""; }
function getPitch(degree: number): number { return 0; }
function getPlayerEnt(): any { }
function getPlayerX(): number { return 0; }
function getPlayerY(): number { return 0; }
function getPlayerZ(): number { return 0; }
function getTile(x: number, y: number, z: number): number { return 0; }
function getYaw(direction: number): number { return 0; }
function preventDefault(): void { }
function print(message: string): void { }
function rideAnimal(target: any, destination: any): void { }
function setNightMode(time: number): void { }
function setPosition(entity: any, x: number, y: number, z: number): void { }
function setPositionRelative(entity: any, x: number, y: number, z: number): void { }
function setRot(entity: any, yAxis: number, direction: number): void { }
function setTile(x: number, y: number, z: number, id: number, damage: number = 0): void { }
function setVelX(entity: any, speed: number): void { }
function setVelY(entity: any, speed: number): void { }
function setVelZ(entity: any, speed: number): void { }
function spawnChicken(x: number, y: number, z: number, skinPath: string): void { }
function spawnCow(x: number, y: number, z: number, skinPath: string): void { }
function spawnPigZombie(x: number, y: number, z: number, id: number, skinPath: string): void { }
var ModPE = {
    getMinecraftVersion: function (): string { return ""; },
    langEdit: function (before: string, after: string) { },
    leaveGame: function (): void { },
    log: function (message: string): void { },
    overrideTexture: function (target: string, address: string): void { },
    saveData: function (variable: string, data: any) { },
    readData: function (variable: string): void { },
    removeData: function (variable: string): void { },
    resetFov: function (): void { },
    resetImages: function (): void { },
    selectLevel: function (name: string, directoryname: string, seedname: string, gMode): void { },
    setCamera: function (entity: any): void { },
    setFoodItem: function (id: number, textureNamename: string, groupname: string, amount: number, namename: string): void { },
    setFov: function (distance: number): void { },
    setGameSpeed: function (tickPerSec: number): void { },
    setItem: function (id: number, textureName: string, groupId: string, groupName: string, stackLimit: number): void { },
    setGuiBlocks: function (url: string): void { },
    setItems: function (url: string): void { },
    setTerrain: function (url: string): void { },
    showTipMessage: function (message: string): void { },
    takeScreenshot: function (message: string): void { }
}
var Level = {
    addParticle: function (type, startX, startY, startZ, directionX, directionY, directionZ, size) { },
    destroyBlock: function (x: number, y: number, z: number, allowDrop) { },
    dropItem: function (x: number, y: number, z: number, boundHeight, id, amount, damage) { },
    explode: function (x: number, y: number, z: number, power) { },
    getAddress: function (): string { return ""; },
    getBiome: function (x: number, z: number): number { return 0; },
    getBiomeName: function (x: number, z: number): string { return ""; },
    getBrightness: function (x: number, y: number, z: number): number { return 0; },
    getChestSlot: function (x: number, y: number, z: number, slotNumber): number { return 0; },
    getChestSlotCount: function (x: number, y: number, z: number, slotNumber): number { return 0; },
    getChestSlotData: function (x: number, y: number, z: number, slotNumber): number { return 0; },
    getData: function (x: number, y: number, z: number): number { return 0; },
    getFurnaceSlot: function (x: number, y: number, z: number, slot): number { return 0; },
    getFurnaceSlotCount: function (x: number, y: number, z: number, slot): number { return 0; },
    getFurnaceSlotData: function (x: number, y: number, z: number, slot): number { return 0; },
    getGameMode: function (): number { return 0; },
    getGrassColor: function (x: number, z: number) { },
    getSignText: function (x: number, y: number, z: number, line: number): string { return ""; },
    getTile: function (x: number, y: number, z: number): number { return 0; },
    getTime: function (): number { return 0; },
    getWorldDir: function () { },
    getWorldName: function () { },
    playSound: function (x: number, y: number, z: number, name, volume, pitch) { },
    playSoundEnt: function (entity, name, volume, pitch) { },
    setChestSlot: function (x: number, y: number, z: number, slot, id, amount, damage) { },
    setFurnaceSlot: function (x: number, y: number, z: number, id, amount, damage, slot) { },
    setGameMode: function (gModeId) { },
    setGrassColor: function (x: number, z: number, cCode) { },
    setNightMode: function (time) { },
    setSignText: function (x: number, y: number, z: number, line, string) { },
    setSpawn: function (x: number, y: number, z: number) { },
    setTile: function (x: number, y: number, z: number, id: number, damage: number) { },
    setTime: function (time) { },
    spawnChicken: function (x: number, y: number, z: number, url: string) { },
    spawnCow: function (x: number, y: number, z: number, url: string) { },
    spawnMob: function (x: number, y: number, z: number, type: number, url: string = ""): any { }
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
    getX: function (): number { return 0; },
    getY: function (): number { return 0; },
    getZ: function (): number { return 0; },
    isFlying: function () { },
    isPlayer: function (player) { },
    setArmorSlot: function (slot, id: number, damage: number) { },
    setCanFly: function (value) { },
    setFlying: function (value) { },
    setHealth: function (health) { }
}
var Entity = {
    addEffect: function (entity: any, id: number, time: number, amp: number, particle: boolean, unknown: boolean) { },
    getAll: function () { },
    getAnimalAge: function (entity:any) { },
    getEntityTypeId: function (entity:any): number { return 0; },
    getHealth: function (entity:any): number { return 0; },
    getMobSkin: function (entity:any): string { return null; },
    getNameTag: function (entity:any) { },
    getPitch: function (entity:any): number { return 0;},
    getRenderType: function (entity:any) { },
    getRider: function (entity:any) { },
    getRiding: function (entity:any) { },
    getUniqueId: function (entity:any) { },
    getVelX: function (entity:any): number { return 0; },
    getVelY: function (entity:any): number { return 0; },
    getVelZ: function (entity:any): number { return 0; },
    getX: function (entity:any): number { return 0; },
    getY: function (entity:any): number { return 0; },
    getZ: function (entity:any): number { return 0; },
    getYaw: function (entity:any): number { return 0; },
    remove: function (entity:any) { },
    rideAnimal: function (destination, target) { },
    setAnimalAge: function (entity, age) { },
    setCarriedItem: function (entity, id, amount, damage) { },
    setCollisionSize: function (entity: any, x: number, z: number) { },
    setFireTicks: function (entity, time) { },
    setHealth: function (entity, health) { },
    setMobSkin: function (entity, skinUrl): string { return null; },
    setNameTag: function (entity, name) { },
    setPosition: function (entity, x: number, y: number, z: number) { },
    setPositionRelative: function (entity, xDirection, yDirection, zDirection) { },
    setRenderType: function (entity, type) { },
    setRot: function (entity, degree, direction) { },
    setSneaking: function (targetEntity, value) { },
    setVelX: function (entity, speed) { },
    setVelY: function (entity, speed) { },
    setVelZ: function (entity, speed) { },
    spawnMob: function (x: number, y: number, z: number, entityId, skinUrl) { }
}
var Item = {
    addCraftRecipe: function (id, amount, damage) { },
    addFurnaceRecipe: function (material, result, damage) { },
    addShapedRecipe: function (id, amount, damage, style, items) { },
    getName: function (id: number, damage: number, allowGet): string { return null; },
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