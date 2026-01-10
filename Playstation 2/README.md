# PS2 Ultimate HDD Manager
Repository dedicated to preparing and managing an internal hard drive for PlayStation 2 “Fat” directly from a Mac. This project includes compiled tools, installation guides, and optimized scripts for fast game injection.

> [!CAUTION]
> **WARNING:** Jailbreaking the console carries risks. Follow every step precisely.

---

## 🛠 1. Prerequisites
* **PS2 "Fat" Console** Models SCPH-3xxxx or SCPH-5xxxx.
* **Network Adapter** Official Sony adapter (SATA modded) or 3rd party BitFunx/Gamestar SATA adapters.
* **Storage** SATA HDD or SSD (Up to 2TB recommended).
* **USB to SATA Adapter** To connect the drive to your Mac.

---

## 💾 2. Preparation (macOS Instructions)
macOS often locks external drives to prevent data loss. To allow command-line tools to interact with the **PS2's APA partition table**, the disk must be released.

1. Identify your disk number withe the command ```diskutil list```.
2. **The Bypass Command** Before every operation with PS2 tools, run:
```
diskutil unmountDisk /dev/diskX
```
_(Replace X with your actual disk number, e.g., /dev/disk11)._

---

## 🔍 3. Compatibility Check
> [!CAUTION]
> **WARNING:** Never initialize or partition the drive using macOS Disk Utility.
* **Physical Fit** Ensure the drive slides smoothly into the Network Adapter. Some 2.5" SSDs may require a 3D-printed bracket.
* **System Dialog** If macOS shows "The disk you inserted was not readable," **click Ignore**.
* **Power Supply** If using a 3.5" mechanical HDD, ensure USB-SATA adapter has an external power brick. USB ports alone often lack the amperage to spin up these drives.


