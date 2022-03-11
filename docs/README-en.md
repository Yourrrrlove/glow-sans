# Wêlai Glow Sans (未来荧黑·未來熒黑·ヒカリ角ゴ)

![Wêlai Glow Sans](../tests/glow.png)

Glow Sans is an open source CJK typeface project based on [Source Han Sans](https://github.com/adobe-fonts/source-han-sans), [Fira Sans](https://github.com/mozilla/Fira) and [Raleway](https://github.com/impallari/Raleway), with support for Simplified Chinese (SC), Traditional Chinese (TC) and Japanese (J). The font family has 9 weights and 5 widths, making up 44 fonts.

Compared to Source Han Sans, Glow Sans features a more concise and modern look, and more relaxed in typesetting. Counters and character faces are decreased; gravities of Han ideographs are rearranged across the family. Stroke details are adjusted to be more flatten. For a better preview of the design, please take a look at [the font specimen](../tests/family-specimen.pdf).

Implementation of Glow Sans is somewhat between parametrization and contour filters, utilizing image processing techniques for glyph modeling. Digital font editors are not necessary for building the Glow Sans fonts, instead, [an interactive visualization Web demo](https://welai.github.io/glow-sans) is developed for parameter adjustments.

## Downloading the fonts

Font downloading information will be published on the [GitHub Release Page](https://github.com/welai/glow-sans/releases). If you use the `macOS` operating system,
you could install Glow Sans with [Homebrew](https://brew.sh/) package manager. For example, installing simplified Chinese:

```shell
brew tap homebrew/cask-fonts
brew install --cask font-glow-sans-sc-compressed font-glow-sans-sc-condensed font-glow-sans-sc-extended font-glow-sans-sc-normal font-glow-sans-sc-wide
```

## Online demo

An [online demo](https://welai.github.io/glow-sans) is developed to pick parameters interactively for Glow Sans. The exported parameter files can be used for build fonts.

## Why is it different?

Glow Sans extends the Source Han Sans family (7 fonts) into 44 fonts, with varied weights and widths. Han ideographs' structures and strokes are both modified. We also matched new Latin font for Glow Sans.

![Differences to Source Han Sans](../tests/diff.png)

## FAQ

* **Q:** Is Glow Sans free for commercial uses?
* **A:** Yes. Glow Sans is released under SIL Open Font License 1.1.
* **Q:** Is this a variable font?
* **A:** No. Glow Sans makes modifications to the Source Han Sans static family to achieve goals like deforming glyphs and extending the font family. For better understanding how Glow Sans works, please check out our online [demo](https://welai.github.io/glow-sans).
* **Q:** Is Hangul supported?
* **A:** No. Maybe later.
* **Q:** Seemingly the glyph contours are not in good quality.
* **A:** Algorithms are not perfect. Glow Sans is only trying to offer a free substitution for modern style CJK sans-serif typeface with width variations. Anyway, improving quality of the output contours remains an important technical goal.
* **Q:** Would you mind fixing some specific glyph?
* **A:** Sorry, I wouldn't. I would solve the problems if and only if I could solve it with codes. Pull requests are welcomed.
* **Q:** Is a TTF version available?
* **A:** Currently no. Perhaps the next version
* **Q:** Why are some characters not supported while they are avaible in Source Han Sans?
* **A:** The corresponding glyphs are too difficult to be compressed or extended, so they are temporarily removed. Besides, `ccmp` feature is not yet supported either, and we do not have any plan to include `locl` features for CJK ideographs.

For other questions, you can raise a [issue](https://github.com/welai/glow-sans/issues).

## Building

For instructions to build the fonts and the demo, see: [build-instructions.md](build-instructions.md)

## Licenses

© 2020 Project Wêlai

Developer: [Celestial Phineas](https://github.com/celestialphineas)

Glow Sans fonts are released under [SIL Open Font License 1.1](../OFL.txt). Source codes are under [MIT License](../LICENSE).

## Thank you!

We hereby appreciate contributors of Glow Sans (names in alphabetic order).

[@cathree3](https://github.com/cathree3), [@floating-cat](https://github.com/floating-cat), [@khsacc](https://github.com/khsacc), [@merrickluo](https://github.com/merrickluo), [@sgalal](https://github.com/sgalal), [@singularitti](https://github.com/singularitti)

## External links

* [NextLab, Zhejiang University](http://www.next.zju.edu.cn)—our group is applying computational techniques on Chinese type design and writing-related visual arts, by which we explore the future of the hanzi design.
