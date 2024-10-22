# 비디오 업로드

이 섹션에서는 비디오 파일을 업로드하는 방법을 배우게 됩니다.

1. 창에 비디오 파일을 끌어다 놓습니다.

    ![drag drop video](image.png)

    비디오 파일을 창에 끌어다 놓으면 비디오 파일이 업로드됩니다.

2. "비디오 업로드" 버튼을 클릭합니다.
    ![import dialog](image-1.png)

    그러면, 비디오 파일을 업로드하기 위한 다이얼로그가 나타납니다. "비디오 업로드"를 선택하여 비디오 파일을 업로드합니다.

3. 비디오 이름과 업로드할 범위를 설정합니다. "업로드"를 클릭하여 비디오를 업로드합니다.
    ![upload dialog](image-2.png)

### 동영상으로 단계 따라하기

import ReactPlayer from "react-player";
import ResultVideo from "./2024-10-22 19-50-20.mp4";

<ReactPlayer
    url={ResultVideo}
    controls={true}
    width="100%"
    height="100%"/>
