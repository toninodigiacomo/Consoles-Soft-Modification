# PS2 Game Management Guide: Copying & Launching (2026)
This guide explains how to use the provided scripts to scan the ISO collection and inject them into the PS2 HDD, at maximum speed.

## 📋 Prerequisites
* **Internal HDD** Must be initialized by the PS2.
* **Target Files** ISO files (DVD) or BIN/CUE files (CD).
* **Tools** hdl_dump (AKuHAK version) compiled for macOS.
> [! NOTE]
> Scripts: scan_ps2_turbo.sh and mass_inject_pro.sh (included in this repo).

---

## 🔍 Step 1: The Turbo Scan

Before injecting, you need to identify the Game ID (e.g., SLES_503.58). Instead of checking manually, use the turbo scanner.

    Open Terminal.

    Run the script:
    Bash

    bash scan_ps2_turbo.sh

    Drag & Drop your folder containing ISOs.

    The script will generate a file named ps2_games_list.csv in seconds.

📝 Step 2: Preparing the CSV

The generated CSV file is your "Work Order."

    Open ps2_games_list.csv with a text editor or Excel/Numbers.

    Check if all IDs were found.

    You can manually rename the "Game Name" column; this is the name that will appear in the OPL menu.

    Save and keep the file path ready.

🚀 Step 3: Mass Injection

This is the main automated process.

    Connect your PS2 HDD to your Mac via USB adapter.

    Run the injector script:
    Bash

    bash mass_inject_pro.sh

    Follow the prompts:

        Provide the path to your hdl_dump binary.

        Provide the path to your ps2_games_list.csv.

        Identify your disk (e.g., /dev/disk11).

    Wait: The script will automatically unmount the disk, inject every game one by one, and send a macOS notification when finished.

🛠 Maintenance & Troubleshooting
Resource Busy / Permission Denied

macOS often tries to "claim" the disk. If the script fails:
Bash

# Force release the disk
diskutil unmountDisk /dev/diskX

Checking your Disk Content

To see what is currently on your PS2 HDD:
Bash

sudo ./hdl_dump hdl_toc /dev/diskX

Deleting a Game

Since the AKuHAK version of hdl_dump focuses on safety, the delete command might be hidden. To remove games, it is recommended to:

    Wipe the disk: sudo ./hdl_dump zero /dev/diskX

    Re-run the injection script with your updated CSV. This prevents "gaps" and fragmentation in the PS2 APA partition table.

🏆 Golden Rules for Games

    No Special Characters: Keep game names simple. Avoid !, :, ? or accents. Use underscores _ instead of spaces if you encounter issues.

    DVD vs CD: The script uses inject_dvd. For CD-based games (Blue discs), ensure they are in .iso format or converted.

    Safe Eject: Always wait for the script to say Safe to Eject before unplugging the USB adapter.
