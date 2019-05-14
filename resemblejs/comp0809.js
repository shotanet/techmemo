const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");

async function getDiff(filename1,filename2,outputname) {
    const options = {
        output: {
            errorColor: {
                red: 255,
                green: 0,
                blue: 255
            },
            errorType: "movement",
            transparency: 0.3,
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true
        },
        scaleToSameSize: true,
        ignore: "antialiasing"
    };

    // The parameters can be Node Buffers
    // data is the same as usual with an additional getBuffer() function
    const data = await compareImages(
        await fs.readFile(filename1),
        await fs.readFile(filename2),
        options
    );

    await fs.writeFile(outputname, data.getBuffer());
}

getDiff('resemblejs/stg.png','resemblejs/honban.png','resemblejs/comp-result.png');