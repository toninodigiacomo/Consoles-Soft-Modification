# PS2 Art & Icons Management (macOS)

#### 🏷️ Naming Convention

OPL links art to games using the Game ID. If the ID is incorrect, the art will not show up.
**Format** GameID_ART.ext
Examples:
- Front Cover: SLES_503.58_COV.jpg
- Disc Art: SLES_503.58_ICO.png (or .png for icons)

---

## 📐 1. Image Specifications

To ensure OPL doesn't crash or slow down, images must follow these rules:
| Type | Target Folder | Suggested Resolution | Format |
| :--- | :--- | :--- | :--- |
| Front Cover	| ART | 140x200 px (280x400 max.) | .jpg (preferred) or .png |
| Disc Icon	ART	| 64x64 px | .png (transparency supported) |

---

## 📂 2. 💾 Transfer Method (HDD Internal)

To store Art directly on the HDD, they must be copied to the +OPL partition.

1. Copy ART folder to a USB stick.
2. On the PS2, launch wLaunchELF.
3. Go to FileBrowser > mass:/ (your USB).
4. Mark files/folder and press R1 > Copy.
5. Navigate to pfs0:/ (This is the Internal HDD partition mount).
6. Go into the ART folder on the HDD and press R1 > Paste.

---

## 🏆 Pro Tips for macOS Users
**Delete .DS_Store files**
- macOS creates hidden files that can confuse OPL. Before unplugging your USB stick, run this in Terminal:
```
dot_clean -m /Volumes/YOUR_USB_NAME
```
- Batch Renaming
  - For many covers, use the macOS Finder's built-in rename tool:
    - Select all files.
    - Right-click > Rename.
    - Use "Add Text" to append _COV to all filenames.
