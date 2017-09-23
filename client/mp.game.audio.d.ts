/// <reference path="../index.d.ts" />

declare module mp.game {
    class audio {
        startAudioScene(sceneName: string): boolean;
        isAmbientZoneEnabled(ambientZone: string): boolean;
        getVehicleDefaultHorn(vehicle: mp.game.vehicle): string | number;
        prepareSynchronizedAudioEventForScene(p0: object, p1: object): boolean;
        startAlarm(alarmName: string, p2: boolean);
        setMobileRadioEnabledDuringGameplay(toggle: boolean);
        clearAmbientZoneListState(p0: object, p1: boolean);
        overrideTrevorRage(p0: object);
        setUserRadioControlEnabled(p0: boolean);
        setAmbientZoneStatePersistent(ambientZone: string, p1: boolean, p2: boolean);
        prepareMusicEvent(eventName: string): boolean;
        loadStream(streamName: string, soundSet: string): boolean;
        specialFrontendEqual(x: number, y: number, z: number);
        clearAmbientZoneState(p0: object, p1: boolean);
        isAlarmPlayer(alarmName: string): boolean;
        startScriptPhoneConversation(p0: boolean, p1: boolean);
        getNetworkIdFromSoundId(soundId: number): number;
        stopAllAlarms(stop: boolean);
        requestScriptAudioBank(p0: string, p1: boolean): boolean;
        setVariableOnStream(p0: string, p1: number);
        freezeRadioStation(radioStation: string);
        playAmbientSpeechWithVoice(p0: mp.game.ped | object, speechName: string, voiceName: string, speechParam: string, p4: boolean);
        releaseSoundId(soundId: number);
        setAggressiveHorns(toggle: boolean);
        setStaticEmitterEnabled(emitterName: string, toggle: boolean);
        preloadScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean);
        setCutsceneAudioOverride(p0: string);
        setGpsActive(active: boolean);
        loadStreamWithStartOffset(streamName: string, startOffset: number, soundSet: string): boolean;
        cancelMusicEvent(eventName: string): boolean;
        preloadScriptPhoneConversation(p0: boolean, p1: boolean);
        getNumberOfPassengerVoiceVariations(p0: object): number;
        playSoundFrontend(soundId: number, audioName: string, audioRef: string, p3: boolean);
        startScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean);
        triggerMusicEvent(eventName: string): boolean;
        requestMissionAudioBank(p0: string, p1: boolean): boolean;
        getSoundIdFromNetworkId(netId: number): number;
        releasedNamedScriptAudioBank(audioBank: string);
        playSound(soundId: number, audioName: string, audioRef: string, p3: boolean, p4: object, p5: boolean);
        pauseScriptedConversation(p0: boolean);
        setInitialPlayerStation(radioStation: string);
        playSynchronizedAudioEvent8(p0: object): boolean;
        findRadioStationIndex(station: number): number;
        playSoundFromCoord(soundId: number, audioName: string, x: number, y: number, z: number, audioRef: string, p6: boolean, p7: object, p8: boolean);
        hintAmbientAudioBank(p0: object, p1: object);
        isAmbientSpeechPlaying(p0: mp.game.ped | object): boolean;
        stopSynchronizedAudioEvent(p0: object): boolean;
        getSynchronizedAudioEventPositionThisFrame(p0: string, p1: mp.game.entity | object);
        addPedToConversation(p0: object, p1: object, p2: string);
        setAmbientZoneListState(p0: object, p1: boolean, p2: boolean);
        prepareAlarm(alarmName: string): boolean;
        interruptConversation(p0: object, p1: object, p2: object);
        stopAlarm(alarmName: string, toggle: boolean);
        stopSound(soundId: number);
        setRadioToStationIndex(radioStation: number);
        setEmitterRadioStation(emitterName: string, radioStation: string);
        setVariableOnSound(soundId: number, p1: object, p2: number);
        playMissionCompleteAudio(audioName: string);
        unlockMissionNewsStory(newsStory: number);
        getRadioStationName(radioStation: number): string;
        setRadioTrack(radioStation: string, radioTrack: string);
        isAudioSceneActive(scene: string): boolean;
        setMicrophonePosition(p0: boolean, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number);
        stopCurrentPlayerAmbientSpeech(p0: mp.game.ped | object);
        setAudioFlag(flagName: string, toggle: boolean);
        playPain(painId: number, p1: number, p2: number);
        getPlayerHeadsetSoundAlternate(p0: string, p1: number);
        setAmbientZoneState(p0: object, p1: boolean, p2: boolean);
        setMobilePhoneRadioState(state: boolean);
        setRadioAutoUnfreeze(p0: boolean);
        addLineToConversation(p0: object, p1: object, p2: object, p3: object, p4: object, p5: boolean, p6: boolean, p7: boolean, p8: boolean, p9: object, p10: boolean, p11: boolean, p12: boolean);
        setRadioToStationName(stationName: string);
        registerScriptWithAudio(p0: object);
        prepareSynchronizedAudioEvent(p0: string, p1: object);
        setAnimalMood(p0: object, p1: object);
        isScriptedSpeechPlaying(p0: object): boolean;
        playEndCreditsMusic(play: boolean);
        stopScriptedConversation(p0: boolean);
        stopAudioScene(scene: string);
        playPoliceReport(name: string, p1: number);
        playSoundFromEntity(soundId: number, audioName: string, entity: mp.game.entity | object, audioRef: string, p4: boolean, p5: object);
        setPlayerAngry(playerPed: mp.game.ped | object, disabled: boolean);
        playStreamFromObject(object: mp.game.object | object);
        playAmbientSpeechAtCoords(p0: string, p1: string, p2: number, p3: number, p4: number, p5: string);
        setAudioSceneVariable(p0: object, p1: object, p2: number);
        overrideUnderwaterStream(p0: object, p1: boolean);
        setAmbientZoneListStatePersistent(ambientZone: string, p1: boolean, p2: boolean);
        resetPedAudioFlags(p0: object);
        setFrontendRadioActive(active: boolean);
        playPedRingtone(ringtoneName: string, ped: mp.game.ped | object, p2: boolean);
        hintScriptAudioBank(p0: object, p1: object);
        unfreezeRadioStation(radioStation: string);
        hasSoundFinished(soundId: number): boolean;
        requestAmbientAudioBank(p0: string, p1: boolean): boolean;
    }
}