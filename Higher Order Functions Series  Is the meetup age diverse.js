function isAgeDiverse(list) {
    const ageRanges = [
        { group: '13-29', min: 13, max: 19 },
        { group: '20-29', min: 20, max: 29 },
        { group: '30-39', min: 30, max: 39 },
        { group: '40-49', min: 40, max: 49 },
        { group: '50-59', min: 50, max: 59 },
        { group: '60-69', min: 60, max: 69 },
        { group: '70-79', min: 70, max: 79 },
        { group: '80-89', min: 80, max: 89 },
        { group: '90-99', min: 90, max: 99 },
        { group: '100-199', min: 100, max: 199 }
    ];

    const ageGroupsFound = new Set();

    for (const developer of list) {
        const age = developer.age;
        const ageGroup = ageRanges.find(range => age >= range.min && age <= range.max);

        if (ageGroup) {
            ageGroupsFound.add(ageGroup.group);
        }
    }

    return ageRanges.every(range => ageGroupsFound.has(range.group));
}