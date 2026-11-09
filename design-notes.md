# Website Design Notes

## Fonts
Everything uses **Avenir Next** (fallback: "Avenir"), defined in style.css:21-22:

```css
--serif: "Avenir Next", "Avenir";
--sans: "Avenir Next", "Avenir";
```

Note: both the `--serif` and `--sans` variables point to the same font, so even
elements styled with `var(--serif)` render as Avenir Next, not an actual serif font.

## Colors (style.css:5-23)
Dark theme with red accents:

### Backgrounds (near-black)
| Variable | Value | Use |
|---|---|---|
| `--bg` | `#0b0b0b` | page background |
| `--bg-soft` | `#101010` | softer background |
| `--card` | `#171717` | card surfaces |

### Text (grays/white)
| Variable | Value | Use |
|---|---|---|
| `--text` | `#f0f0f0` | main text |
| `--soft` | `#c9c9c9` | softer text |
| `--muted` | `#8f8f8f` | muted text |

### Accents (reds, ironically named "mint")
| Variable | Value |
|---|---|
| `--mint` | `#c1121f` — primary red |
| `--mint-glow` | `#f28b90` — light pink-red |
| `--mint-soft` | `#e56b73` — soft red |
| `--mint-faint` | `#f4b0b6` — pale pink |
| `--mint-mid` | `#a4161a` — mid red |
| `--mint-deep` | `#7f1d1d` — deep red |
| `--mint-dark` | `#6b0f1a` — darkest red |
| `--mint-dim` | `#7d4a4a` — dim red |

### Borders
- `--line: rgba(255, 255, 255, 0.13)` — subtle white lines
