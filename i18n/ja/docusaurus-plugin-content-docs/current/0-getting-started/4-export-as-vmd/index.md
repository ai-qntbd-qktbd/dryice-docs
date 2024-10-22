# アニメーションエクスポート


このセクションでは、アニメーションをVMDファイルとしてエクスポートする方法について説明します。

1. エクスポートしたいアニメーションがあるモデルを選択します。

    ![select model](image.png)

2. 「File」 -> 「Export」 -> 「MikuMikuDance Motion (.vmd)」をクリックします。

    ![export button](image-1.png)

3. アニメーションがVMDファイルとしてエクスポートされます。

    ![exported](image-2.png)

4. エクスポートしたVMD ファイルをMMD ソフトウェアからロードできます。

    ![loaded on mmd](image-3.png)

### 動画でステップを確認する

import ReactPlayer from "react-player";
import ResultVideo from "./2024-10-22 21-02-13.mp4";

<ReactPlayer
    url={ResultVideo}
    controls={true}
    width="100%"
    height="100%"/>
