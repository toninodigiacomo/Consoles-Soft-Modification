# PS2 Game Management Guide: Copying & Launching (2026)
This guide explains how to use the provided scripts to scan the ISO collection and inject them into the PS2 HDD, at maximum speed.

## 📋 Prerequisites
* **Internal HDD** Must be initialized by the PS2.
* **Target Files** ISO files (DVD) or BIN/CUE files (CD).
* **Tools** hdl_dump (AKuHAK version) compiled for macOS.
> [!NOTE]
> Scripts **ps2_scan_iso.sh** and **ps2_mass_inject.sh** (included in this repo).

---

## 🔍 Step 1: The Turbo Scan

Before injecting, the Game ID (e.g., SLES_503.58) must be identified. Instead of checking manually, the turbo scanner script must be used (ps2_scan_iso.sh).
1. Open Terminal.
2. Run the script:
```
Usage: /Volumes/ISO/PS2/SCRIPTS/ps2_scan_iso.sh -d <iso_folder> -o <fichier_sortie_csv>
```
The script will generate a file named **<fichier_sortie_csv>** in seconds.

## 📝 Step 2: Preparing the CSV

The generated CSV file is the **Work Order**.
1. Open **<fichier_sortie_csv>** with a text editor or Excel/Numbers.
2. Check if all IDs were found. They must formated like ***SLES_123.45***.
3. Manually rename the **Game Name** column; this is the name that will appear in the OPL menu.
4. Save and keep the file path ready.

## 🚀 Step 3: Mass Injection

This is the main automated process. It must be run as **sudo**.
1. Connect the PS2 HDD to the Mac via USB adapter.
2. Open the terminal and launche the command ```sudo su```.
3. Run the injector script:
```
bash mass_inject_pro.sh
```
4. Follow the prompts:
    - Provide the path to the **hdl_dump** binary.
    - Provide the path to the **<fichier_sortie_csv>**.
    - Identify your disk (e.g., /dev/disk11).
   Wait: The script will automatically unmount the disk, inject every game one by one, and send a macOS notification when finished.

---

## 🏆 Golden Rules for Games
* **No Special Characters** Keep game names simple. Avoid !, :, ? or accents. Use underscores _ instead of spaces if you encounter issues.
* **DVD vs CD** The script uses inject_dvd. For CD-based games, ensure they are in .iso format or converted with **bchunk** (brew install bchunk)
* **Safe Eject** Always wait for the script to say Safe to Eject before unplugging the USB adapter.
