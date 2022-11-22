---
title: Markdown渲染测试
---

## 多语种文字

本篇文章用来测试项目网站对Markdown的渲染测试。

རང་གི་རྩོམ་ཡིག་བཀོལ་རྒྱུགས་ལེན་རྣམ་གྲངས་དྲ་ཚིགས་ཀྱིས་ Markdown འི་ཚོན་འབྱུག་པ་ཚད་ལེན། 

ئۇرۇش پاراشوكى تەرتىپى ： ئالدى بىلەن PVC سىمولا ، ئېغىر كالتسىي ، 

This is the test case for text rendering.

テキスト レンダリングをテストするための使用例を次に示します。

다음은 텍스트 렌더링 테스트를 위한 사용 사례입니다.

## 文字形态

*斜体文本*

**粗体文本**

***粗斜体文本***

<u>下划线文本</u>

<del>删除线文本</del>

## 引用区块

> 最外层
> > 第一层嵌套

> > > 第二层嵌套

## 数学支持


行间公式：$\prod_{n=1}^N{3x^n}$，它允许你在句子内插入公式。

块级公式：比如麦克斯韦方程组的积分形式
$$
\left
\{\begin{matrix}
\begin{align}
&\oint_{l} H \cdot dl=\int_{s}J\cdot ds+ \int_{s} \frac {\partial D} {\partial t} \\
&\oint_{l} E \cdot dl=-\frac {d}{dt}\int_{s}B\cdot ds \\
&\oint_{s}B\cdot ds=0 \\
&\oint_{s}D\cdot ds=\int_{s}\rho dv
\end{align}
\end{matrix}
\right.
$$

还有微分形式：

$$
\left
\{\begin{matrix}
\begin{align}
&\bigtriangledown \times H =J+\frac {\partial D} {\partial t} \\
&\bigtriangledown \times E =-\frac {dB}{dt} \\
&\bigtriangledown \cdot B=0 \\
&\bigtriangledown \cdot D=\rho
\end{align}
\end{matrix}
\right.
$$

## 编程语言代码

使用 C++ 实现冒泡排序
```cpp
#include <iostream>
using namespace std;
template<typename T>
void bubble_sort(T arr[], int len) {
        int i, j;
        for (i = 0; i < len - 1; i++)
                for (j = 0; j < len - 1 - i; j++)
                        if (arr[j] > arr[j + 1])
                                swap(arr[j], arr[j + 1]);
}
int main() {
        int arr[] = { 61, 17, 29, 22, 34, 60, 72, 21, 50, 1, 62 };
        int len = (int) sizeof(arr) / sizeof(*arr);
        bubble_sort(arr, len);
        for (int i = 0; i < len; i++)
                cout << arr[i] << ' ';
        cout << endl;
        float arrf[] = { 17.5, 19.1, 0.6, 1.9, 10.5, 12.4, 3.8, 19.7, 1.5, 25.4, 28.6, 4.4, 23.8, 5.4 };
        len = (float) sizeof(arrf) / sizeof(*arrf);
        bubble_sort(arrf, len);
        for (int i = 0; i < len; i++)
                cout << arrf[i] << ' '<<endl;
        return 0;
}
```

使用Python语言实现冒泡排序：

```python
def bubbleSort(arr):
    for i in range(1, len(arr)):
        for j in range(0, len(arr)-i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr
```

同时也支持插入行间代码，比如：执行` shell `命令` cd /var/www `

## TODOS 列表

- [x] 今日份单词打卡
- [ ] 了解tree shaking和dce

## 列表

无序列表

+ 项目1
+ 项目2
+ 项目3

有序列表

1. 项目1
2. 项目2
3. 项目3

混合列表

1. 项目1
   + 项目1-1
   + 项目1-2
2. 项目2

## 包裹块

使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑

## 表格

|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |

## 标题

# 顶级标题
## 一级标题
### 二级标题
#### 三级标题
##### 四级标题
###### 五级标题

## 连接与图片

[点击这里进入谷歌搜索](https://google.com)

![这是Base64嵌入式图片](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAACwCAMAAADudvHOAAAAYFBMVEUAAAD////c3NxhYWGlpaWRkZHY2Ng6Ojro6OjOzs6ZmZlvb28/Pz8dHR0EBARra2vKysrExMT29vZYWFh0dHSsrKwXFxexsbGLi4tQUFC9vb3j4+NZWVmfn58lJSXy8vLH72/GAAAFeklEQVR4nO2d6XraMBREZbdJYzAYkjbN1vb937KAWIyt7V5LsizN+VtQ9Z3AjBcsieqeZrVuN1tRINtNu141Ax3izk039xznp2s0epp27qmlQduo9OCTc6Ub6amLzBsd2/pez27uCaXGrq8HdkbsbnrqueeSIvVVD3JHwfaiB52lpJN6mrnnkSrNSQ+OBjW0Rz348GhpDnqQPFq6g56555AylcB3y0AjVnNPIWVWYj33FFJmLVDrBlqxmXsKKbMRON8yADkAAAAAAAAAAAAAAAAAIvJRa3nkjfj2qR3x84U2lGGkB97kqFx+rKmC5efFMGD1jTaWYaTvnLnRMempftHHezWNl5me6id5vKeS9FQ/iMPtzcPlpueZNtqDebTs9NDi+csyWH56KPG8sY2VoR5CPJtjOVM9zvFsieVc9TjGsy2Wc9XjFs/Go+Ws9bjEsz2W89XjEM/2WM5YjzWeHWI5Zz2WeHaJ5Zz1mOPZKZaz1mOKZ/NFjDL0GOLZLZYz16ONZ8dYzl2PJp5dYzl3Pep4tl7EKEaPKp7djpbL0KOIZ/dYLkDPKJ4JsVyCnkE8U2K5BD338ex8tFyMnn4802K5DD29eKbFciF6rvFMjOVS9JzjmRrLpeiR8UyO5WL0HOOZHsvl6DnEMz2WC9JT7XhvK0UPE+gxAj1GoMcI9BjJSU/NK++PQvQ8/mXZeS9ETy1+0u08iW/F6BG/yHpeS9IjHol2XkRResQzyc7xQZCi9Pyg2Nkf3xFHzx//KlTY9FDi+en0BqKe1n18Rz5i6iHE84ajR5gOBDh4XfDTrsc5ns/PspG/XIzDBwNPPu246HGM58vzefTs+UMTYOTZ76p7Lnqc4nl/eTUjmhn3PHRQn7DyoMfl43/7THOay9uJMbEa/ehxiOfbKqSsYv9HN6HizbMdRz3WeP66vZSlh3X2O+K3bzuueizx3H9smndY6KPeA6zh7arHGM/7/iuZR83T691vpdP0mKZ/Py/uScXUevdc6UQ9hnh+vXsd+5xrYr17rnSJux5tPA9WfuCfkk6qd9+Vbp3SaIcmdTwPV7OYcMY+od69V7qEokcZz/vhqybo4de7/0qXUPSo4nlcF1Ou93DrPdi2HCQ9inh+Hb1m0uUwXr2HqHQJTc8onhUL8ky7Wsip9yCVLiHqGcSzapGhiRdTGfUepNIlVD138TyK5SNTrzWT6z1MpVsno956sZcO6q/85EvxxHoPVOkSsp5ePKu3Upmsh1bvoSpdQtdzjWfNOmnTb+RQ6j3wTlsMPed41q395uE+l3u9h6t0CUfPKZ6VsXzEx21A13oPWOkSjp7jX1f/Z/Nyl9Sx3gNWuoSl5xDP+h2u/NxEdqr3kJVunYZpT+V3/T95usfuUO9BK13C1GPAkx57vYetdEmyeqz1HmXzzHT1WOo9dKVLEtZjrPfglS5JWY+p3oNXuiRpPfrZha90ywSS0KOr9wiVLklcj7reY1S6JHE9ynqPuB926noU9R6n0iXJ6xnXO29aPNLXM6z3SJUuWYCe+znGqnTFf52onn69R6t0ySL03Oo9XqVLFqHnWu8RK12yDD3neo9Z6ZKF6DnVe6Sz9D6GLYSYT7a8+NtCqM8+cqUvjc9u7hkAAAAAAAAAAAAAAABAYcS/pr8gtkL/o3VwkNPOPYWUacV67imkzFqs5p5CyqxE9Hv1S6IRUX9htjQqUeGOq5buoAffLi3NQU+FatfQVkc9+PhoaE56kD5qukrqqXDepWBbXfQwf/yWN/VVT7Wbey7pIXeGOi8jDj8DzvtmXVZZr5E/PbaXn+HeFqFHf13prlJ6a/Q3OD480TaVSs9BED5Bomv6RoY7PDSrdbspMoe2m3a9agY6/gOAqELEXyTfwQAAAABJRU5ErkJggg==)

![这是外链引用图片](https://pic1.zhimg.com/d51b71c6d.jpg?source=57bbeac9)