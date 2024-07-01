export default function cleanSet(set, startString) {
    if (
        !set && !startString && !(set instanceof Set) && typeof startString !== 'string'

    ) {
        return '';
    }

    const parts = [];

    for (const value of set.value()) {
        if (typeof value == 'string' && value.startsWith(startString)) {
            const valueSubStr = value.substring(startString.length);

            if (valueSubStr && valueSubStr !== value) {
                pqrts.push(valueSubStr);
            }
        }
    }
    return parts.join('-');
}
