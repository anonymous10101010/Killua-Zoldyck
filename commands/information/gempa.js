const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "gempa",
    alias: ["gempabmkg"],
    desc: "Get Gempa Information From BMKG",
    type: "information",
    example: `Example : %prefix%command`,
    exec: async(killua, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/bmkg/gempa", {}, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Covid-19 Information :\n\n`
        let i = fetch.result
        caption += `⭔ Tanggal : ${i.tanggal}\n`
        caption += `⭔ Jam : ${i.jam}\n`
        caption += `⭔ Datetime : ${i.datetime}\n`
        caption += `⭔ Coordinates : ${i.coordinates}\n`
        caption += `⭔ Lintang : ${i.lintang}\n`
        caption += `⭔ Bujur : ${i.bujur}\n`
        caption += `⭔ Magnitude : ${i.magnitude}\n`
        caption += `⭔ Kedalaman : ${i.kedalaman}\n`
        caption += `⭔ Wilayah : ${i.wilayah}\n`
        caption += `⭔ Potensi : ${i.potensi}\n`
        caption += `⭔ Dirasakan : ${i.dirasakan}\n`
        caption += `⭔ Shakemap : ${i.shakemap}\n`
        killua.sendFile(m.from, i.shakemap, "", m, { caption })
    }
}