/// <reference path="../client.d.ts" />

declare interface MpObject extends MpEntity {
    slide(toX: number, toY: number, toZ: number, speedX: number, speedY: number, speedZ: number, collision: boolean): boolean;
    setActivatePhysicsAsSoonAsItIsUnfrozen(toggle: boolean): void;
    placeOnGroundProperly(): boolean;
    setTargettable(targettable: boolean): void;
    hasBeenBroken(): boolean;
    isVisible(): boolean;
    markForDeletion(): void;
    setPhysicsParams(weight: number, p1: number, p2: number, p3: number, p4: number, gravity: number, p6: number, p7: number, p8: number, p9: number, buoyancy: number): void;
}

declare interface MpObjectPool extends MpPool<MpObject> {

}

declare enum MpObjectPlacementColor {
    none = -1,
    red = 0,
    green = 1,
    blue = 2,
    greenLarger = 3,
    nothing = 4,
    greenSmall = 5
}

declare interface MpObjectDoorState {
    locked: boolean;
    heading: boolean;
}