# Run AI Motion Capture

In this section, you will learn how to run AI motion capture.

1. Select the video to process. then click the "Run AI Motion Capture" button.

    ![select video](image.png)

2. Set Animation Name and range to process. then click the "Run AI Motion Capture" button.

    ![ai motion capture panel](image-1.png)

    You can adjust the "AI Options" to improve the result.

3. Wait for the processing to complete.

    ![alt text](image-2.png)

4. When the processing is complete, you can see the result in the "AI Animation Results" panel.

    ![alt text](image-3.png)

### Follow the steps with the video

import ReactPlayer from "react-player";
import ResultVideo from "./2024-10-22 20-20-44.mp4";

<ReactPlayer
    url={ResultVideo}
    controls={true}
    width="100%"
    height="100%"/>
