const CONSTANT_FOR_GHZ_AND_KILOMETERS = 92.45;

export function calculateDistanceInMetersForRange(rangeDbm, { gainTrasmitter, gainReceiver, frequency}) {
    const indexValue = (rangeDbm - 20 * Math.log10(frequency) - CONSTANT_FOR_GHZ_AND_KILOMETERS + gainTrasmitter + gainReceiver) / 20;
    const resultInKilometers = Math.pow(10, indexValue);
    const resultInMeters = resultInKilometers * 1000;
    return resultInMeters;
}