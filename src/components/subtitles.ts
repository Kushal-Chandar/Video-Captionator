export function createWebVTT(
  captions: {
    start: string;
    caption: string;
    end: string;
  }[]
) {
  let webvttContent = "WEBVTT\n\n";

  captions.forEach((captionObj, index) => {
    const startTime = captionObj.start;
    const endTime = captionObj.end;
    const captionText = captionObj.caption;

    webvttContent += `${
      index + 1
    }\n${startTime} --> ${endTime}\n${captionText}\n\n`;
  });

  return webvttContent;
}

export function convertWebVTTToSRT(webvtt: string) {
  let vttContent = webvtt.replace(/\r\n|\r|\n/g, "\n");
  const subtitleBlocks = vttContent.split("\n\n");
  const srtLines: string[] = [];
  subtitleBlocks.forEach((block, index) => {
    const lines = block.split("\n");

    if (lines.length < 3) return;

    srtLines.push("" + index);

    const timecodes = lines[1].split(" --> ");
    srtLines.push(timecodes.map((tc) => tc.replace(".", ",")).join(" --> "));

    for (let i = 2; i < lines.length; i++) {
      srtLines.push(lines[i]);
    }

    srtLines.push("");
  });

  return srtLines.join("\n");
}
