# PS2 Art & Icons Management (macOS)

#### 🏷️ Naming Convention

OPL links art to games using the Game ID. If the ID is incorrect, the art will not show up.
**Format** GameID_ART.ext
Examples:
- Front Cover: SLES_503.58_COV.jpg
- Disc Art: SLES_503.58_ICO.png (or .png for icons)

---

# 📐 Image Specifications

To ensure OPL doesn't crash or slow down, images must follow these rules:
| Type | Target Folder | Suggested Resolution | Format |
| :--- | :--- | :--- | :--- |
| Front Cover	| ART | 140x200 px (280x400 max.) | .jpg (preferred) or .png |
| Disc Icon	ART	| 64x64 px | .png (transparency supported) |


📂 Transfer Method (USB) - Easiest

Even if your games are on the Internal HDD, OPL can read the Art from a USB stick.

    Format a USB stick to FAT32 (MBR partition map).

    Create a folder named ART at the root of the USB stick.

    Copy your renamed images (e.g., SLES_xxx.xx_COV.jpg) into that folder.

    Plug the USB into the PS2, launch OPL, and go to Settings:

        Set Enable Art to On.

        Set USB Device Start Mode to Auto.

💾 Transfer Method (HDD Internal)

To store Art directly on the HDD, you must copy them to the +OPL partition.

    Copy your ART folder to a USB stick.

    On the PS2, launch wLaunchELF.

    Go to FileBrowser > mass:/ (your USB).

    Mark your files/folder and press R1 > Copy.

    Navigate to pfs0:/ (This is the Internal HDD partition mount).

        Note: You may need to enter the HDD0 menu and mount the +OPL partition first.

    Go into the ART folder on the HDD and press R1 > Paste.

🏆 Pro Tips for macOS Users
1. Delete .DS_Store files

macOS creates hidden files that can confuse OPL. Before unplugging your USB stick, run this in Terminal:
Bash

# Clean hidden macOS files from your USB
dot_clean -m /Volumes/YOUR_USB_NAME

2. Batch Renaming

If you have many covers, use the macOS Finder's built-in rename tool:

    Select all files.

    Right-click > Rename.

    Use "Add Text" to append _COV to all filenames.

3. Automated Downloader

Consider using "OPL Manager" (via Wine/Crossover) or a dedicated scraper tool to download all covers automatically based on your ps2_games_list.csv.
