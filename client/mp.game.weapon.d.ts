/// <reference path="../client.d.ts" />

declare interface MpGameWeapon {
    getWeaponComponentTypeModel(componentHash: string | number): string | number;
    giveWeaponComponentToWeaponObject(weaponObject: MpObject, addonHash: string | number): void;
    hasWeaponAssetLoaded(weaponHash: string | number): boolean;
    getWeaponDamageType(weaponHash: string | number): MpGameWeaponDamageType;
    getWeapontypeSlot(weaponHash: string | number): string | number;
    requestWeaponHighDetailModel(weaponObject: MpObject | object): void;
    requestWeaponAsset(weaponHash: string | number, p1: number, p2: number): void;
    getWeaponClipSize(weaponHash: string | number): number;
    doesWeaponTakeWeaponComponent(weaponHash: string | number, componentHash: string | number): boolean;
    getWeaponTintCount(weaponHash: string | number): number;
    hasVehicleGotProjectileAttached(driver: MpPed, vehicle: MpVehicle, weapon: number | string, p3: any): boolean;
    hasWeaponGotWeaponComponent(weapon: MpObject, addonHash: string | number): boolean;
    isWeaponValid(weaponHash: string | number): boolean;
    createWeaponObject(weaponHash: string | number, ammoCount: number, x: number, y: number, z: number, showWorldModel: boolean, heading: number, p7: any): MpObject;
    setPedAmmoToDrop(p0: any, p1: any): void;
    removeWeaponAsset(weaponHash: string | number): void;
    giveWeaponObjectToPed(weaponObject: MpObject, ped: MpPed): void;
    getWeaponComponentHudStats(p0: any, p1: any): boolean;
    canUseWeaponOnParachute(weaponHash: string | number): boolean;
    getWeapontypeGroup(weaponHash: string | number): string | number;
    enableLaserSightRendering(toggle: boolean): void;
    getWeaponObjectTintIndex(weapon: MpEntity): number;
    setFlashLightFadeDistance(distance: number): void;
    getWeaponHudStats(weaponHash: string | number, data: MpGameWeaponWeaponHudStatsData | object): boolean;
    getWeapontypeModel(weaponHash: string | number): string | number;
    removeWeaponComponentFromWeaponObject(p0: any, p1: any): void;
    setWeaponObjectTintIndex(weapon: MpEntity, tint: number): void;
    removeAllProjectilesOfType(weaponhash: string | number, p1: boolean): void;
}

interface MpGameWeaponWeaponHudStatsData {
    hudDamage: number;
    hudSpeed: number;
    hudCapacity: number;
    hudAccuracy: number;
    hudRange: number;
}

declare enum MpGameWeaponDamageType {
    unknown = 0,
    noDamage = 1,
    melee = 2,
    bullet = 3,
    forceRagdollFall = 4,
    explosive = 5,
    fire = 6,
    fall = 8,
    electric = 10,
    barbedWire = 11,
    extinguisher = 12,
    gas = 13,
    waterCannon = 14
}
