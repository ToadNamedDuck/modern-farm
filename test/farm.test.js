import { createPlan } from "../src/scripts/plan.js"
import { plantSeeds } from "../src/scripts/tractor.js";
import { usePlants } from "../src/scripts/field.js";
import { createCorn } from "../src/scripts/seeds/corn.js";
import { createPotato } from "../src/scripts/seeds/potato.js";
import { createWheat } from "../src/scripts/seeds/wheat.js";
import { createSunflower } from "../src/scripts/seeds/sunflower.js";
import { createSoybean } from "../src/scripts/seeds/soybean.js";
import { createAsparagus } from "../src/scripts/seeds/asparagus.js";
import { harvestPlants } from "../src/scripts/harvester.js";

const plan = [
    ["Corn", "Potato"],
    ["Asparagus", "Soybean"],
    ["Sunflower", "Wheat"],
]

let plantedSeeds

beforeAll(() => {
    plantSeeds(plan)
    plantedSeeds = usePlants()
})

describe("Seed objects have correct properties", () => {

    test("Corn has correct properties", () => {
        expect(createCorn())
            .toMatchObject([
                { type: "Corn", height: 180, output: 6 },
                { type: "Corn", height: 180, output: 6 }
            ])
    })

    test("Potato has correct properties", () => {
        expect(createPotato())
            .toMatchObject({ type: "Potato", height: 32, output: 2 })
    })

    test("Asparagus has correct properties", () => {
        expect(createAsparagus())
            .toMatchObject({ type: "Asparagus", height: 24, output: 4 })
    })

    test("Soybean has correct properties", () => {
        expect(createSoybean())
            .toMatchObject({ type: "Soybean", height: 20, output: 4 })
    })

    test("Sunflower has correct properties", () => {
        expect(createSunflower())
            .toMatchObject({ type: "Sunflower", height: 380, output: 3 })
    })

    test("Wheat has correct properties", () => {
        expect(createWheat())
            .toMatchObject({ type: "Wheat", height: 230, output: 6 })
    })

})

describe("Sowing the fields with seeds", () => {
    test("Correct type and number of seeds sown", () => {
        expect(plantedSeeds)
            .toMatchObject(
                [
                    { type: "Corn", height: 180, output: 6 },
                    { type: "Corn", height: 180, output: 6 },
                    { type: "Potato", height: 32, output: 2 },
                    { type: "Asparagus", height: 24, output: 4 },
                    { type: "Soybean", height: 20, output: 4 },
                    { type: "Sunflower", height: 380, output: 3 },
                    { type: "Wheat", height: 230, output: 6 }
                ]
            )
    })
})

describe("Harvesting the grown plants", () => {
    let harvestedPlants

    beforeAll(() => {
        harvestedPlants = harvestPlants(plantedSeeds)
    })

    test("Harvested correct total number of plants", () => {
        expect(harvestedPlants.length).toEqual(25)
    })

    test("Harvested correct number of asparagus plants", () => {
        expect(
            harvestedPlants.filter(p => p.type === "Asparagus").length
        )
            .toEqual(4)
    })

    test("Harvested correct number of corn plants", () => {
        expect(
            harvestedPlants.filter(p => p.type === "Corn").length
        )
            .toEqual(6)
    })

    test("Harvested correct number of potato plants", () => {
        expect(
            harvestedPlants.filter(p => p.type === "Potato").length
        )
            .toEqual(2)
    })

    test("Harvested correct number of soybean plants", () => {
        expect(
            harvestedPlants.filter(p => p.type === "Soybean").length
        )
            .toEqual(4)
    })

    test("Harvested correct number of sunflower plants", () => {
        expect(
            harvestedPlants.filter(p => p.type === "Sunflower").length
        )
            .toEqual(3)
    })

    test("Harvested correct number of wheat plants", () => {
        expect(
            harvestedPlants.filter(p => p.type === "Wheat").length
        )
            .toEqual(6)
    })
})

